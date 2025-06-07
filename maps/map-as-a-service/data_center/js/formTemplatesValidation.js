import { config } from "./formGlobalVariables.js";

document.addEventListener('DOMContentLoaded', function () {

    const parkingObject = document.getElementById("parkingObject");

    const divDatenmodell = document.getElementById("divDatenmodell");
    const divName = document.getElementById("divName");
    const divId = document.getElementById("divId");
    const divCapacity = document.getElementById("divCapacity");
    const divStaticDataUpdatedAt = document.getElementById("divStaticDataUpdatedAt");
    const divParkingAudience = document.getElementById("divParkingAudience");
    const divWeekday = document.getElementById("divWeekday");
    const divHours = document.getElementById("divHours");
    const divMaxStay = document.getElementById("divMaxStay");
    const divDubletten = document.getElementById("divDubletten");
    const divDuplicateId = document.getElementById("divDuplicateId");
    const divDuplicateAdditionalInformation = document.getElementById("divDuplicateAdditionalInformation");


    /* PARKING SITES */
    const divGeoJson = document.getElementById("divGeoJson");
    const divAddress = document.getElementById("divAddress");
    const divOrientation = document.getElementById("divOrientation");
    const divLineType = document.getElementById("divLineType");
    const divParkingType = document.getElementById("divParkingType");
    const divDescription = document.getElementById("divDescription");

    /* PARKING SPOTS */
    const divLongitudeLatitude = document.getElementById("divLongitudeLatitude");

    /* SAVE BUTTON */
    const divSave = document.getElementById("divSave");

    /* VALIDATION RULES */
    function positiveIntegers(form, formValidation) {

        let expression = /^([1-9]\d*)$/;

        if (!form.match(expression)) {
            formValidation.innerText = 'Bitte nur Ganzzahlen größer 0 angeben'
        }
        else {
            formValidation.innerText = '';
        }

    };

    function requiredInputFields(form, formValidation) {

        let expression = /\S+/;

        if (!form.match(expression)) {
            formValidation.innerText = 'Pflichtfeld'
        }
        else if (formValidation.id != 'capacityValidation') {
            formValidation.innerText = '';
        }

    };

    function requiredSelectFields(form, formValidation) {

        let expression = /^(?!\s*$).+/;

        if (!form.match(expression)) {
            formValidation.innerText = 'Pflichtfeld'
        }
        else {
            formValidation.innerText = '';
        }

    };




    parkingObject.addEventListener("change", function () {
        formSelection();
        console.log('Parkobjekt gewechselt');
    });

    function formSelection() {

        if (config.formParkingObject.value != '') {
            divSave.innerHTML = `
            <input type="submit" class="buttons" value="Speichern" id="submitButton">`;
        } else {
            divSave.innerHTML = '';
        };

        divSelectRecords.addEventListener('change', function () {

            if (config.divSelectRecords.value != '') {
                divSave.innerHTML = `
                <input type="button" class="buttons" value="Speichern" id="updateButton">`;
            } else {
                divSave.innerHTML = `
                <input type="submit" class="buttons" value="Speichern" id="submitButton">`;
            }

        });


        divDatenmodell.innerHTML = '';
        divName.innerHTML = '';
        divId.innerHTML = '';
        divGeoJson.innerHTML = '';
        divLongitudeLatitude.innerHTML = '';
        divAddress.innerHTML = '';
        divCapacity.innerHTML = '';
        divStaticDataUpdatedAt.innerHTML = '';
        divParkingAudience.innerHTML = '';
        divWeekday.innerHTML = '';
        divHours.innerHTML = '';
        divMaxStay.innerHTML = '';
        divOrientation.innerHTML = '';
        divLineType.innerHTML = '';
        divParkingType.innerHTML = '';
        divDescription.innerHTML = '';
        divDubletten.innerHTML = '';
        divDuplicateId.innerHTML = '';
        divDuplicateAdditionalInformation.innerHTML = '';

        if (parkingObject.value != '') {

            divDatenmodell.innerHTML = `
            <h3>Datenmodell</h3>`;
            divId.innerHTML = `
                    <label for=" id" class="mandatoryField">ID*</label><br>
                        <p>Eindeutige ID des Parkobjekt. Die ID wird automatisiert aus dem Namen erzeugt. Bei Bedarf kann ein eigener Name vergeben werden.</p>
                        <input type="text" id="id" name="ID" value="" required>
                            <div id="idValidation" class="formValidation"></div`;
            divCapacity.innerHTML = `
                            <label for="capacity" class="mandatoryField">Anzahl Stellplätze*</label><br>
                                <p>Gesamt-Anzahl generell zugänglicher Stellplätze</p>
                                <input type="number" id="capacity" name="Anzahl Stellplätze" required>
                                    <div id="capacityValidation" class="formValidation"></div>`;
            divStaticDataUpdatedAt.innerHTML = `
                                    <label for="staticDataUpdatedAt">Letzter Aktualisierungszeitpunkt</label><br>
                                        <p>Letzter Aktualisierungszeitpunkt, zu dem die statischen Daten aktualisiert wurden. <strong>Dieser Eintrag wird mit dem Aufrufen dieser Webseite automatisch gesetzt.</strong></p>
                                        <input type="datetime-local" id="staticDataUpdatedAt" name="Letzter Aktualisierungszeitpunkt">`;
            divParkingAudience.innerHTML = `
            <label for="parkingAudience">Einschränkung der Parkberechtigten</label><br>
            <p>Parkberechtigte, die diesen Parkplatz unter Umständen nutzen dürfen. Eine Mehrauswahl ist möglich. Wenn keine Auswahl getroffen wird, gibt es keine Einschränkungen.</p>
            <input type="checkbox" id="parkingAudienceDisabled" class="parkingAudienceCheckbox" name="Behinderte" value="Behinderte">
                                                    <label for="parkingAudienceDisabled" class="parkingAudienceCheckbox"> Behinderte</label><br>
                                                        <input type="checkbox" id="parkingAudienceWoman" class="parkingAudienceCheckbox" name="Frauen" value="Frauen">
                                                            <label for="parkingAudienceWoman" class="parkingAudienceCheckbox"> Frauen</label><br>
                                                                <input type="checkbox" id="parkingAudienceFamily" class="parkingAudienceCheckbox" name="Familien" value="Familien">
                                                                    <label for="parkingAudienceFamily" class="parkingAudienceCheckbox"> Familien</label><br>
                                                                        <input type="checkbox" id="parkingAudienceCharging" class="parkingAudienceCheckbox" name="zum Laden" value="zum Laden">
                                                                            <label for="parkingAudienceCharging" class="parkingAudienceCheckbox"> zum Laden</label><br>
                                                                                <input type="checkbox" id="parkingAudienceCarsharing" class="parkingAudienceCheckbox" name="Carsharing" value="Carsharing">
                                                                                    <label for="parkingAudienceCarsharing" class="parkingAudienceCheckbox"> Carsharing</label><br>
                                                                                        <input type="checkbox" id="parkingAudienceTaxi" class="parkingAudienceCheckbox" name="Taxi" value="Taxi">
                                                                                            <label for="parkingAudienceTaxi" class="parkingAudienceCheckbox"> Taxi</label><br>
                                                                                                <input type="checkbox" id="parkingAudienceDelivery" class="parkingAudienceCheckbox" name="Lieferverkehr" value="Lieferverkehr">
                                                                                                    <label for="parkingAudienceDelivery" class="parkingAudienceCheckbox"> Lieferverkehr</label><br>
                                                                                                        <input type="checkbox" id="parkingAudienceTruck" class="parkingAudienceCheckbox" name="Lastwagen" value="Lastwagen">
                                                                                                            <label for="parkingAudienceTruck" class="parkingAudienceCheckbox"> Lastwagen</label><br>
                                                                                                                <input type="checkbox" id="parkingAudienceBus" class="parkingAudienceCheckbox" name="Bus" value="Bus">
                                                                                                                    <label for="parkingAudienceBus" class="parkingAudienceCheckbox"> Bus</label><br>
                                                                                                                        <input type="checkbox" id="parkingAudienceClients" class="parkingAudienceCheckbox" name="Kunden" value="Kunden">
                                                                                                                            <label for="parkingAudienceClients" class="parkingAudienceCheckbox"> Kunden</label><br>
                                                                                                                                <input type="checkbox" id="parkingAudienceResidents" class="parkingAudienceCheckbox" name="Anwohner" value="Anwohner">
                                                                                                                                    <label for="parkingAudienceResidents" class="parkingAudienceCheckbox"> Anwohner</label><br>`;
            divWeekday.innerHTML = `
                                                                                                                                        <label for="weekdayBegin">Zeitraum</label><br>
                                                                                                                                            <p>z.B. Montag-Samstag 08:00-22:00, Sonntag 10:00-20:00</p>
                                                                                                                                            <div style="display:flex">
                                                                                                                                                <select style="margin-right:5px" id="weekdayBegin" name="Wochentag Beginn">
                                                                                                                                                    <option value="" selected></option>
                                                                                                                                                    <option value="Montag">Montag</option>
                                                                                                                                                    <option value="Dienstag">Dienstag</option>
                                                                                                                                                    <option value="Mittwoch">Mittwoch</option>
                                                                                                                                                    <option value="Donnerstag">Donnerstag</option>
                                                                                                                                                    <option value="Freitag">Freitag</option>
                                                                                                                                                    <option value="Samstag">Samstag</option>
                                                                                                                                                    <option value="Sonntag">Sonntag</option>
                                                                                                                                                </select>
                                                                                                                                                <select style="margin-left:5px" id="weekdayEnd" name="Wochentag Ende">
                                                                                                                                                    <option value="" selected></option>
                                                                                                                                                    <option value="Montag">Montag</option>
                                                                                                                                                    <option value="Dienstag">Dienstag</option>
                                                                                                                                                    <option value="Mittwoch">Mittwoch</option>
                                                                                                                                                    <option value="Donnerstag">Donnerstag</option>
                                                                                                                                                    <option value="Freitag">Freitag</option>
                                                                                                                                                    <option value="Samstag">Samstag</option>
                                                                                                                                                    <option value="Sonntag">Sonntag</option>
                                                                                                                                                </select>
                                                                                                                                            </div>`;
            divHours.innerHTML = `
                                                                                                                                            <div style="display:flex">
                                                                                                                                                <input style="margin-right:5px" type="time" id="hoursBegin" name="Zeitraum Beginn" value="">
                                                                                                                                                    <input style="margin-left:5px" type="time" id="hoursEnd" name="Zeitraum Ende" value="">
                                                                                                                                                    </div>`;
            divMaxStay.innerHTML = `
                                                                                                                                                    <label for="maxStay">Maximale Parkdauer</label><br>
                                                                                                                                                        <p>Zeit, die das Fahrzeug hier maximal geparkt werden darf.</p>
                                                                                                                                                        <input type="time" id="maxStay" name="Maximale Parkdauer" value="">`;
            divDubletten.innerHTML = `
                                                                                                                                                            <h3 id="duplicates">Dubletten</h3>
                                                                                                                                                            <p>Wenn bereits in der Integrationsplattform angebundene Daten neu erfasst wurden, kann MobiData BW® darüber in Kenntnis gesetzt werden. Dadurch können mögliche Dubletten direkt\
                                                                                                                                                                erkannt werden.</p>`;
            divDuplicateId.innerHTML = `
                                                                                                                                                            <label for="duplicateId">ID</label><br>
                                                                                                                                                                <p>ID des <strong>ParkAPI-Objekts</strong> aus der Integrationsplattform für eine eindeutige Zuordnung. Die ID kann per Klick auf den Parkstreifen oder Einzelparkplatz\
                                                                                                                                                                    unter <strong>Integrationsplattform</strong> im Popup angezeigt werden.</p>
                                                                                                                                                                <input type="text" id="duplicateId" name="Dubletten-ID" value="">`;
            divDuplicateAdditionalInformation.innerHTML = `
                                                                                                                                                                    <label for="duplicateAdditionalInformation">Weitere Informationen</label ><br>
                                                                                                                                                                        <p>Freitext-Feld für weitere Informationen, die MobiData BW® mitgeteilt werden sollen. Denkbar ist eine Begründung, warum es sich um eine Dublette handelt oder der Hinweis, dass\
                                                                                                                                                                            die bereits von MobiData BW® angebundenen Daten Fehler aufweisen.</p>
                                                                                                                                                                        <textarea id="duplicateAdditionalInformation" name="Dublette - Weitere Informationen"></textarea>`;


            // ==============================
            // FILL STATIC_DATA_UPDATED_AT
            // ==============================
            const now = new Date();
            const pad = n => String(n).padStart(2, '0');

            const yyyy = now.getFullYear();
            const mm = pad(now.getMonth() + 1);
            const dd = pad(now.getDate());
            const hh = pad(now.getHours());
            const min = pad(now.getMinutes());

            document.getElementById('staticDataUpdatedAt').value = `${yyyy}-${mm}-${dd}T${hh}:${min}`;


            // ==============================
            // VALIDATION
            // ==============================

            // ID
            const formId = document.getElementById("id");
            const formIdValidation = document.getElementById("idValidation");
            formId.addEventListener("blur", function () {
                requiredInputFields(formId.value, formIdValidation);
            });
            // // CAPACITY
            const formCapacity = document.getElementById("capacity");
            const formCapacityValidation = document.getElementById("capacityValidation");
            formCapacity.addEventListener("input", function () {
                positiveIntegers(formCapacity.value, formCapacityValidation);
            });
            formCapacity.addEventListener("blur", function () {
                requiredInputFields(formCapacity.value, formCapacityValidation);
            });

        }
        if (parkingObject.value == "Parkstreifen") {

            divName.innerHTML = `
            <label for="name" class="mandatoryField">Name*</label><br>
            <p>Name des Parkangebots</p>
            <input type="text" id="name" name="Name" value="" required>
            <div id="nameValidation" class="formValidation"></div>`;
            divGeoJson.innerHTML = `
                                                                                                                                                                        <label for="geoJson" class="mandatoryField">GeoJSON*</label><br>
                                                                                                                                                                            <p>Bei Klick auf <strong>Linie erfassen</strong> wird in dieses Textfeld automatisch die Linien-Geometrie als GeoJSON übertragen.</p>
                                                                                                                                                                            <textarea id="geoJson" name="GeoJSON" required></textarea>
                                                                                                                                                                            <div id="geoJsonValidation" class="formValidation"></div>
                                                                                                                                                                            <input type="button" class="buttons" value="Linie erfassen" id="geoJsonButton">`;
            divLongitudeLatitude.innerHTML = '';
            divAddress.innerHTML = `
                                                                                                                                                                                <label for="addressStreetNumber">Adresse</label><br>
                                                                                                                                                                                    <p>z.B. Bahnhofstraße 1, 77777 Bahnhofsstadt</p>
                                                                                                                                                                                    <div style="display:flex">
                                                                                                                                                                                        <input style="margin-right:5px" type="text" id="addressStreetNumber" name="Adresse - Straße und Nummer" value=""></input>
                                                                                                                                                                                        <input style="margin-left:5px" type="text" id="addressZipCity" name="Adresse - PLZ und Stadt" value=""></input>
                                                                                                                                                                                    </div>`;
            divOrientation.innerHTML = `
                                                                                                                                                                                    <label for="orientation">Ausrichtung des Parkstreifens</label><br>
                                                                                                                                                                                        <p>Beschreibt, wie das Fahrzeug in Bezug auf die Fahrtrichtung geparkt wird.</p>
                                                                                                                                                                                        <select id="orientation" name="Ausrichtung">
                                                                                                                                                                                            <option value="" selected></option>
                                                                                                                                                                                            <option value="längs">längs</option>
                                                                                                                                                                                            <option value="quer">quer</option>
                                                                                                                                                                                            <option value="diagonal">diagonal</option>
                                                                                                                                                                                        </select>`;
            divLineType.innerHTML = `
                                                                                                                                                                                        <label for="lineType">Linientyp</label><br>
                                                                                                                                                                                            <p>Linientyp, der bei der Erfassung genutzt wird. Entweder handelt es sich um eine\
                                                                                                                                                                                                <span class="tooltip" data-tooltip="Linie, die durch die Mitte der Straße geht und die Parkstreifen auf beiden Straßenseiten erfasst.">Straßenmittellinie</span>
                                                                                                                                                                                                oder eine
                                                                                                                                                                                                <span class="tooltip" data-tooltip="Linie, die am Rand des Parkstreifens erfasst wird, sodass der Parkstreifen sich immer rechts davon befindet. Dieser Rand ist der Übergang\
            von Parkplatz zur Straße.">Parkrandlinie</span>
                                                                                                                                                                                                .</p>
                                                                                                                                                                                            <select id="lineType" name="Linientyp">
                                                                                                                                                                                                <option value="" selected></option>
                                                                                                                                                                                                <option value="Straßenmittellinie">Straßenmittellinie</option>
                                                                                                                                                                                                <option value="Parkrandlinie">Parkrandlinie</option>
                                                                                                                                                                                            </select>`;
            divParkingType.innerHTML = `
                                                                                                                                                                                            <label for="parkingType">Verortung</label><br>
                                                                                                                                                                                                <p>Beschreibt den Ort des Parkplatzes in Bezug auf die Fahrbahn.</p>
                                                                                                                                                                                                <select id="parkingType" name="Verortung">
                                                                                                                                                                                                    <option value="" selected></option>
                                                                                                                                                                                                    <option value="Fahrbahn">Fahrbahn</option>
                                                                                                                                                                                                    <option value="halb auf Bordstein">halb auf Bordstein</option>
                                                                                                                                                                                                    <option value="Bordstein">Bordstein</option>
                                                                                                                                                                                                    <option value="Seitenstreifen">Seitenstreifen</option>
                                                                                                                                                                                                </select>`;
            divDescription.innerHTML = `
                                                                                                                                                                                                <label for="description" > Beschreibung</label > <br>
                                                                                                                                                                                                    <p>Freitext-Feld zur Beschreibung von weiteren Informationen für Nutzende</p>
                                                                                                                                                                                                    <textarea id="description" name="Beschreibung"></textarea>`;


            // ==============================
            // FORM VALIDATION
            // ==============================

            // Name
            const formNameValidation = document.getElementById("nameValidation");
            const formName = document.getElementById("name");
            formName.addEventListener("blur", function () {
                requiredInputFields(formName.value, formNameValidation);
            });
            // GeoJSON
            const formGeoJson = document.getElementById("geoJson");
            const formGeoJsonValidation = document.getElementById("geoJsonValidation");
            formGeoJson.addEventListener("blur", function () {
                requiredInputFields(formGeoJson.value, formGeoJsonValidation);
            });

        }
        if (parkingObject.value == "Einzelparkplatz") {

            divName.innerHTML = `
            <label for="name">Name</label><br>
            <p>Name des Parkangebots</p>
            <input type="text" id="name" name="Name" value="">`;
            divLongitudeLatitude.innerHTML = `
                                                                                                                                                                                                    <div style="display:flex">
                                                                                                                                                                                                        <div style="width:100%">
                                                                                                                                                                                                            <label for="longitude" style="justify-self:anchor-center" class="mandatoryField">Längengrad*</label><br>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <div style="width:100%">
                                                                                                                                                                                                            <label for="latitude" style="justify-self:anchor-center" class="mandatoryField">Breitengrad*</label><br>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <p>Bei Klick auf <strong>Punkt erfassen</strong> wird in die entsprechenden Felder automatisch die Koordinaten übertragen.</p>
                                                                                                                                                                                                    <div style="display:flex">
                                                                                                                                                                                                        <div style="width:100%">
                                                                                                                                                                                                            <input type="text" style="margin-right:5px" id="longitude" name="Längengrad" value="" required>
                                                                                                                                                                                                                <div id="longitudeValidation" style="justify-self:anchor-center" class="formValidation"></div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                        <div style="width:100%">
                                                                                                                                                                                                            <input type="text" style="margin-left:5px" id="latitude" name="Breitengrad" value="" required>
                                                                                                                                                                                                                <div id="latitudeValidation" style="justify-self:anchor-center" class="formValidation"></div>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                    <input type="button" class="buttons" value="Punkt erfassen" id="latLonButton">`;
            divGeoJson.innerHTML = '';


            // ==============================
            // FORM VALIDATION
            // ==============================

            // Longitude
            const formLongitude = document.getElementById("longitude");
            const formLongitudeValidation = document.getElementById("longitudeValidation");
            formLongitude.addEventListener("blur", function () {
                requiredInputFields(formLongitude.value, formLongitudeValidation);
            });
            // Latitude
            const formLatitude = document.getElementById("latitude");
            const formLatitudeValidation = document.getElementById("latitudeValidation");
            formLatitude.addEventListener("blur", function () {
                requiredInputFields(formLatitude.value, formLatitudeValidation);
            });

        };


        /* CREATE ID AUTOMATICALLY */
        if (document.getElementById('name')) {
            const formName = document.getElementById('name');
            const formId = document.getElementById('id');
            formName.addEventListener("blur", function () {
                formId.value = formName.value.toLowerCase().replace(' ', '-');
                config.formParkingObject.addEventListener("change", function () {
                    formId.value = '';
                    document.getElementById('idValidation').innerText = '';
                });
            });
        }



    };



});