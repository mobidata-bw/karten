export const config = {
    apiKey: 'lNPer2Oz-Hc6Nc8PlY8Rdyd8mWc05m4I76eBtf5d',
    form: document.getElementById('form'),
    divSelectRecords: document.getElementById('divSelectRecords'),
    formParkingObject: document.getElementById('parkingObject')
};


config.formParkingObject.addEventListener('click', function () {

    if (config.formParkingObject.value != '') {
        config.formParkingAudienceCheckboxes = document.querySelectorAll('input.parkingAudienceCheckbox');

        config.formName = document.getElementById('name');
        config.formId = document.getElementById('id');
        config.formCapacity = document.getElementById('capacity');
        config.formStaticDataUpdatedAt = document.getElementById('staticDataUpdatedAt');
        config.formWeekdayBegin = document.getElementById('weekdayBegin');
        config.formWeekdayEnd = document.getElementById('weekdayEnd');
        config.formHoursBegin = document.getElementById('hoursBegin');
        config.formHoursEnd = document.getElementById('hoursEnd');
        config.formMaxStay = document.getElementById('maxStay');
        config.formDuplicateId = document.getElementById('duplicateId');
        config.formDuplicateAdditionalInformation = document.getElementById('duplicateAdditionalInformation');
    }
    if (config.formParkingObject.value == 'Parkstreifen') {
        config.formGeoJson = document.getElementById('geoJson');
        config.formAddressStreetNumber = document.getElementById('addressStreetNumber');
        config.formAddressZipCity = document.getElementById('addressZipCity');
        config.formOrientation = document.getElementById('orientation');
        config.formLineType = document.getElementById('lineType');
        config.formParkingType = document.getElementById('parkingType');
        config.formDescription = document.getElementById('description');
    }
    if (config.formParkingObject.value == 'Einzelparkplatz') {
        config.formLongitude = document.getElementById('longitude');
        config.formLatitude = document.getElementById('latitude');
    }

});