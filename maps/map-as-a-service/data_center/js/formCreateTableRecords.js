import { config } from './formGlobalVariables.js';
export { formCreateTableRecords };

function formCreateTableRecords(map, callback) {
    let geometry;
    let latitude, longitude, geoJson;

    /* GET GEOMETRIES */
    map.on('pm:create', function (e) {

        // point
        var layer = e.layer;
        var feature = layer.toGeoJSON();
        var coordinates = feature.geometry.coordinates;

        // geoJson          
        function geoJsonType(type, coordinates) {
            geoJson = {
                type: type,
                coordinates: coordinates
            }
        };


        if (config.formParkingObject.value == 'Parkstreifen') {
            geometry = 'LineString';
            geoJsonType(geometry, coordinates);
        }
        else if (config.formParkingObject.value == 'Einzelparkplatz') {
            latitude = coordinates[1].toString();
            longitude = coordinates[0].toString();
            geometry = 'Point';
        };


        if (callback) {
            callback(geometry, latitude, longitude, geoJson);
        };

        ((geometry == 'Point') ? (document.getElementById('longitude').value = longitude) : '');
        ((geometry == 'Point') ? (document.getElementById('latitude').value = latitude) : '');
        ((geometry == 'LineString') ? (document.getElementById('geoJson').value = JSON.stringify(geoJson)) : '');


    });


    /* PARKING AUDIENCE */
    const parkingAudienceSelection = [];

    config.formParkingObject.addEventListener('change', function () {
        if (config.formParkingObject.value != '') {
            setTimeout(() => {
                for (const checkbox of document.querySelectorAll('input.parkingAudienceCheckbox')) {
                    checkbox.addEventListener('change', function () {
                        const index = parkingAudienceSelection.indexOf(this.name);

                        if (this.checked) {
                            if (index === -1) parkingAudienceSelection.push(this.name); // -1 if element does not exist in array
                        } else {
                            if (index > -1) parkingAudienceSelection.splice(index, 1); // greater than -1 if element exists in array, since anything greater than -1 can be an index position
                        }
                        // console.log(parkingAudienceSelection)
                    })
                }
            }, 100)
        }
    });



    /* FORM SUBMIT */
    config.form.addEventListener('submit', async function (event) {

        event.preventDefault();

        /* INITIALIZE VARIABLES */
        const formLongitude = longitude;
        const formLatitude = latitude;
        const formGeoJson = geoJson;

        var numberOrNull = (value) => ((value === '') ? null : (Number(value)));
        var emptyStringOrNull = (value) => ((value === '') ? null : value);

        var data = {
            [config.formName.name]: config.formName.value,
            Identifier: config.formId.value,
            Längengrad: formLongitude,
            Breitengrad: formLatitude,
            GeoJSON: formGeoJson,
            [config.formOrientation.name]: config.formOrientation.value,
            [config.formLineType.name]: config.formLineType.value,
            [config.formParkingType.name]: config.formParkingType.value,
            [config.formAddressStreetNumber.name]: config.formAddressStreetNumber.value,
            [config.formAddressZipCity.name]: config.formAddressZipCity.value,
            [config.formCapacity.name]: numberOrNull(config.formCapacity.value),
            [config.formStaticDataUpdatedAt.name]: config.formStaticDataUpdatedAt.value,
            'Parkberechtigte': parkingAudienceSelection,
            [config.formWeekdayBegin.name]: emptyStringOrNull(config.formWeekdayBegin.value),
            [config.formWeekdayEnd.name]: emptyStringOrNull(config.formWeekdayEnd.value),
            [config.formHoursBegin.name]: emptyStringOrNull(config.formHoursEnd.value),
            [config.formHoursEnd.name]: emptyStringOrNull(config.formHoursEnd.value),
            [config.formMaxStay.name]: emptyStringOrNull(config.formMaxStay.value),
            [config.formDescription.name]: config.formDescription.value,
            [config.formDuplicateId.name]: config.formDuplicateId.value,
            [config.formDuplicateAdditionalInformation.name]: config.formDuplicateAdditionalInformation.value,
        };

        console.log(JSON.stringify(data));

        try {
            let endpoint = config.formParkingObject.value == 'Parkstreifen' ? 'https://app.nocodb.com/api/v2/tables/m8djfhqn3wv21gi/records' : 'https://app.nocodb.com/api/v2/tables/m4xmt3pj6vfggvp/records';
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'xc-token': config.apiKey
                },
                body: JSON.stringify(data)
            });

            const notification = L.control
                .notifications({
                    timeout: 2000,
                    position: 'bottomright',
                    closable: true,
                    dismissable: true,
                }).addTo(map);

            if (response.ok) {
                var sendingSuccess = 'Erfassen erfolgreich';
                console.info('forms.js: Erfassen erfolgreich');
                notification.success(sendingSuccess);
                config.form.reset();

            } else {
                var sendingFailure = 'Erfassen fehlgeschlagen';
                console.error('forms.js: Erfassen fehlgeschlagen');
                notification.alert(sendingFailure);
            }
        } catch (error) {
            console.error('Fehler beim Versuch, einen neuen Eintrag zu senden: ', error);
        };
    });
};