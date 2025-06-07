import { config } from "./formGlobalVariables.js";
import { updateDataCenter, notificationControl } from "./main.js";

// ==============================
// READ TABLE RECORDS
// ==============================
let getRecords;

getRecords = async function () {

    let records;

    /* READ EXISTING TABLE RECORDS */
    config.formParkingObject.addEventListener("change", async function () {

        try {
            let endpoint = config.formParkingObject.value == 'Parkstreifen' ? 'https://app.nocodb.com/api/v2/tables/m8djfhqn3wv21gi/records' : 'https://app.nocodb.com/api/v2/tables/m4xmt3pj6vfggvp/records';
            const response = await fetch(endpoint, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "xc-token": config.apiKey,
                },
            });
            var dataReadTableRecord = await response.json();
            records = dataReadTableRecord.list;
            // console.log(records);

            /* HANDOVER 'RECORDS' TO 'EXTRACT RECORDS */
            extractRecords(records, getRecords);

        } catch (error) {
            console.error("Fehler: ", error);
        }
    });

};

document.addEventListener('DOMContentLoaded', async function () {
    getRecords();
});


config.form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await getRecords();
    console.log("Aktueller Stand der Datenbank wird nach Erfassung abgerufen");
});


// ==============================
// EXTRACT TABLE RECORDS
// ==============================
let extractRecords;

extractRecords = function (records) {
    /* EXTRACT 'Id' AND 'Name' */
    const recordsNameId = new Map();
    for (var i in records) {
        recordsNameId.set(records[i].Name, records[i].Id);
        // recordsNameId.set(records[i].Name, records[i].Id);
    }

    var recordsName = Array.from(recordsNameId.keys());

    // console.log(recordsName);

    /* FILL SELECT OPTIONS */
    config.divSelectRecords.innerHTML = ""; // after a new element is added to the database, the innerHTML of the div is emptied and updated

    var defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.selected = true;
    config.divSelectRecords.appendChild(defaultOption);

    for (var j in records) {
        var option = document.createElement("option");
        option.value = recordsName[j];
        option.textContent = recordsName[j];
        config.divSelectRecords.appendChild(option);
    }
    // console.log("Drop-Down-Menü befüllt");


    fillForm(records, recordsNameId);


};


// ==============================
// FILL FORM
// ==============================
let updateClickHandler;
let fillForm;

fillForm = function (records, recordsNameId) {

    const updateButton = document.getElementById("updateButton");

    // updateButton.style.cssText = "background-color: var(--secondaryColor); color: black; cursor: pointer";

    const recordsId = recordsNameId.get(config.divSelectRecords.value);

    if (config.divSelectRecords.value !== "") {

        for (let m in records) {

            // console.log(records);

            if (records[m].Id == recordsId) {

                config.formName.value = records[m][config.formName.name];
                config.formId.value = records[m].Identifier;
                config.formCapacity.value = records[m][config.formCapacity.name];
                config.formStaticDataUpdatedAt.value = records[m][config.formStaticDataUpdatedAt.name];

                if (records[m]['Parkberechtigte'] != null) {
                    for (const checkbox of config.formParkingAudienceCheckboxes) {
                        if (records[m]['Parkberechtigte'].includes(checkbox.name)) {
                            document.getElementById(checkbox.id).checked = true;
                        }
                    }
                };

                config.formWeekdayBegin.value = records[m][config.formWeekdayBegin.name];
                config.formWeekdayEnd.value = records[m][config.formWeekdayEnd.name];
                config.formHoursBegin.value = records[m][config.formHoursBegin.name];
                config.formHoursEnd.value = records[m][config.formHoursEnd.name];
                config.formMaxStay.value = records[m][config.formMaxStay.name];
                config.formDuplicateId.value = records[m][config.formDuplicateId.name];
                config.formDuplicateAdditionalInformation.value = records[m][config.formDuplicateAdditionalInformation.name];

                if (config.formParkingObject.value == 'Parkstreifen') {
                    config.formGeoJson.value = JSON.stringify(records[m][config.formGeoJson.name]);
                    config.formAddressStreetNumber.value = records[m][config.formAddressStreetNumber.name];
                    config.formAddressZipCity.value = records[m][config.formAddressZipCity.name];
                    config.formOrientation.value = records[m][config.formOrientation.name];
                    config.formLineType.value = records[m][config.formLineType.name];
                    config.formParkingType.value = records[m][config.formParkingType.name];
                    config.formDescription.value = records[m][config.formDescription.name];
                }
                if (config.formParkingObject.value == 'Einzelparkplatz') {
                    config.formLongitude.value = records[m][config.formLongitude.name];
                    config.formLatitude.value = records[m][config.formLatitude.name];
                }


                /* HANDOVER 'RECORDS' & 'RECORDSID' TO 'UPDATE TABLE RECORDS */
                // Remove Existing Handler
                if (updateClickHandler) {
                    updateButton.removeEventListener("click", updateClickHandler);
                }

                // Define New Handler
                updateClickHandler = async function (event) {
                    event.preventDefault();
                    const selectedRecordId = recordsNameId.get(divSelectRecords.value);
                    await updateTableRecords(records, selectedRecordId);
                    console.log("Aktualisierung erfolgt");

                };

                // Add New Handler
                updateButton.addEventListener("click", updateClickHandler);




                break;
            }

        }

    };

    config.divSelectRecords.addEventListener("change", () => {
        fillForm(records, recordsNameId);
    });

};


const parkingAudienceSelection = [];


config.formParkingObject.addEventListener('click', function () {

    if (config.formParkingObject.value != '') {

        config.divSelectRecords.addEventListener('change', function () {

            parkingAudienceSelection.length = 0;
            document
                .querySelectorAll('input.parkingAudienceCheckbox')
                .forEach(cb => cb.checked = false);

            if (config.divSelectRecords.value != '') {

                setTimeout(() => {
                    for (const checkbox of document.querySelectorAll('input.parkingAudienceCheckbox')) {
                        if (checkbox.checked) {
                            parkingAudienceSelection.push(checkbox.name);
                        }
                        checkbox.addEventListener('change', function () {
                            const index = parkingAudienceSelection.indexOf(this.name);
                            if (this.checked) {
                                if (index === -1) parkingAudienceSelection.push(this.name); // -1 if element does not exist in array
                            } else {
                                if (index > -1) parkingAudienceSelection.splice(index, 1); // greater than -1 if element exists in array, since anything greater than -1 can be an index position
                            }
                            console.log(parkingAudienceSelection)
                        })
                    }
                }, 100);

            }
        })

    }

});




// ==============================
// SEND FORM
// ==============================

// Initialize Variable: Has any table record already been selected? 
var updateTableRecords;

// Execute Variable: Has any table record already been selected?
// If updateClickListener alreay has been added, remove it. This is necessary, 
// so that only the last selected entry will be sent to the database
if (updateTableRecords) {
    updateButton.removeEventListener("click", async function () {
        updateTableRecords(records, recordsId)
    });
    console.log("Entfernen des letzten Hinzufügens des Event-Listeners");
}



// When "Aktualisieren" button is clicked, updateClickListener is initiated
updateTableRecords = async function (records, recordsId) {

    // console.log(parkingAudienceSelection)

    let geometry;

    if (config.formParkingObject.value == 'Parkstreifen') {
        geometry = {
            [config.formGeoJson.name]: JSON.parse(config.formGeoJson.value)
        }
    }
    else if (config.formParkingObject.value == 'Einzelparkplatz') {
        geometry = {
            [config.formLongitude.name]: String(config.formLongitude.value),
            [config.formLatitude.name]: String(config.formLatitude.value)
        }
    };

    if (config.formId.value != '' && config.formCapacity.value != '' &&
        ((config.formLongitude != '' && config.formLongitude != '') || config.formGeoJson != '')) {
        if (config.formId.value != 'Parkstreifen' || formName.value != '') {

            // event.preventDefault();

            var dataUpdateTableRecords;

            for (var n in records) {
                if (records[n].Id == recordsId) {

                    const numberOrNull = (value) => ((value === "") ? null : (Number(value)));
                    const stringOrNull = (value) => ((value === "") ? null : value);

                    dataUpdateTableRecords = {
                        Id: records[n].Id, //NocoDB internal ID

                        [config.formName.name]: config.formName.value,
                        Identifier: config.formId.value,
                        ...geometry,
                        [config.formAddressStreetNumber.name]: config.formAddressStreetNumber.value,
                        [config.formAddressZipCity.name]: config.formAddressZipCity.value,
                        [config.formCapacity.name]: numberOrNull(config.formCapacity.value),
                        [config.formOrientation.name]: config.formOrientation.value,
                        [config.formLineType.name]: config.formLineType.value,
                        [config.formParkingType.name]: config.formParkingType.value,
                        'Parkberechtigte': parkingAudienceSelection,
                        [config.formWeekdayBegin.name]: config.formWeekdayBegin.value,
                        [config.formWeekdayEnd.name]: config.formWeekdayEnd.value,
                        [config.formHoursBegin.name]: stringOrNull(config.formHoursBegin.value),
                        [config.formHoursEnd.name]: stringOrNull(config.formHoursEnd.value),
                        [config.formMaxStay.name]: stringOrNull(config.formMaxStay.value),
                        [config.formDescription.name]: config.formDescription.value,
                        [config.formDuplicateId.name]: config.formDuplicateId.value,
                        [config.formDuplicateAdditionalInformation.name]: config.formDuplicateAdditionalInformation.value,

                    };
                    break;
                }
            }
        }


        try {
            let endpoint = config.formParkingObject.value == 'Parkstreifen' ? 'https://app.nocodb.com/api/v2/tables/m8djfhqn3wv21gi/records' : 'https://app.nocodb.com/api/v2/tables/m4xmt3pj6vfggvp/records';
            var response = await fetch(endpoint, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "xc-token": config.apiKey,
                },
                body: JSON.stringify(dataUpdateTableRecords),
            });

            console.log(JSON.stringify(dataUpdateTableRecords));

            if (response.ok) {
                notificationControl.success("Aktualisieren erfolgreich");
                updateDataCenter();
                config.form.reset();
                getRecords();
            } else {
                notificationControl.error("Aktualisieren fehlgeschlagen");
            }
        } catch (error) {
            console.error("Fehler beim Versuch, einen bestehenden Eintrag zu aktualisieren: ", error);
        }

    }
    else {
        notificationControl.alert("Nicht alle Pflichtangaben gemacht");
    }


};