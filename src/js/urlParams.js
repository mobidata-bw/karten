export function urlParams(options = {}) {

    const params = new URLSearchParams(window.location.search);
    const purpose = options.purpose ?? params.get('purpose');
    const parking = options.parking ?? params.get('parking');
    const formFactor = options.formFactor ?? params.get('form_factor');

    let layerGroup = {}, id, layerFilter = true, controlLayersTitle;


    // ==============================
    // LAYERS: PARKAPI
    // ==============================
    switch (purpose) {
        case 'car':
            layerGroup = {
                source: 'sourceParkApiCar',
                sourceLayer: 'park-api_car',
                group: 'Parkplätze'
            };
            controlLayersTitle = 'Gebündelte Parkplätze';
            id = 'Car';
            switch (parking) {
                case 'disabled':
                    layerGroup.group = 'Behindertenparkplätze';
                    layerFilter =
                        [
                            'any',
                            ['>', ['get', 'capacity_disabled'], 0],
                            ['==', ['get', 'restriction_type'], 'DISABLED']
                        ];
                    controlLayersTitle = 'Gebündelte Behindertenparkplätze';
                    break;
                case 'buildings':
                    layerGroup.group = 'Parkplätze und Parkbauten';
                    layerFilter =
                        [
                            'any',
                            ['!=', ['get', 'type'], 'ON_STREET'],
                            ['!', ['has', 'type']]
                        ];
                    controlLayersTitle = 'Gebündelte Parkplätze und Parkbauten';
                    break;
                case 'on_street':
                    layerGroup.group = 'Straßen-Parkplätze';
                    layerFilter =
                        [
                            'any',
                            ['==', ['get', 'type'], 'ON_STREET'],
                            ['!', ['has', 'type']]
                        ];
                    controlLayersTitle = 'Gebündelte Straßen-Parkplätze';
                    break;
            }
            break;
        case 'bicycle':
            layerGroup = {
                source: 'sourceParkApiBicycle',
                sourceLayer: 'park-api_bicycle',
                group: 'Fahrradabstellanlagen'
            };
            layerFilter =
                [
                    '==', ['get', 'purpose'], 'BIKE'
                ];
            id = 'Bicycle';
            controlLayersTitle = 'Gebündelte Fahrradabstellanlagen';
            break;
        case 'item':
            layerGroup = {
                source: 'sourceParkApiBicycle',
                sourceLayer: 'park-api_bicycle',
                group: 'Schließfächer an Fahrradabstellanlagen'
            };
            layerFilter =
                [
                    '==', ['get', 'purpose'], 'ITEM'
                ];
            id = 'Item';
            controlLayersTitle = 'Schließfächer an Fahrradabstellanlagen';
            break;
    };


    // ==============================
    // LAYERS: SHARING
    // ==============================
    switch (formFactor) {
        case 'car':
            layerGroup.group = 'Carsharing';
            layerFilter = 'car';
            controlLayersTitle = 'Legende';
            id = 'Car';
            break;
        case 'bicycle':
            layerGroup.group = 'Bikesharing';
            layerFilter = 'bicycle';
            id = 'Bicycle';
            controlLayersTitle = 'Legende';
            break;
        case 'cargo_bicycle':
            layerGroup.group = 'Lastenrad-Sharing';
            layerFilter = 'cargo_bicycle';
            id = 'CargoBicycle';
            controlLayersTitle = 'Legende';
            break;
        case 'scooter':
            layerGroup.group = 'E-Scooter-Sharing';
            layerFilter = 'scooter';
            id = 'Scooter';
            controlLayersTitle = 'Legende';
            break;
        case 'moped':
            layerGroup.group = 'E-Kleinkraftrad-Sharing';
            layerFilter = 'moped';
            id = 'Moped';
            controlLayersTitle = 'Legende';
            break;
    };


    return {
        purpose,
        formFactor,
        layerGroup,
        id,
        layerFilter,
        controlLayersTitle
    };


};