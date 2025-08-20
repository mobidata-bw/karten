export function urlParams(options = {}) {

    const params = new URLSearchParams(window.location.search);
    const purpose = options.purpose ?? params.get('purpose');
    const type = options.type ?? params.get('type');
    const parking = options.parking ?? params.get('parking');
    const object = options.object ?? params.get('object');
    const geometry = options.geometry ?? params.get('geometry');
    const formFactor = options.formFactor ?? params.get('form_factor');

    let layerGroup = {}, id, layerFilter = true, controlLayersTitle;


    // ==============================
    // LAYERS: PARKAPI
    // ==============================
    switch (purpose) {
        // ==============================
        case 'car':
            layerGroup = {
                source: 'sourceParkApiCar',
                sourceLayer: 'park-api_car',
                group: 'Parkplätze'
            };
            controlLayersTitle = 'Gebündelte Parkplätze';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            id = 'Car';
            switch (type) {
                case 'buildings':
                    layerGroup.group = 'Parkplätze und Parkbauten';
                    layerFilter =
                        [
                            'any',
                            ['!=', ['get', 'type'], 'ON_STREET'],
                            ['!', ['has', 'type']]
                        ];
                    controlLayersTitle = 'Gebündelte Parkplätze und Parkbauten';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
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
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
            }
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
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
            }
            switch (object) {
                case 'site':
                    layerGroup.group = 'Parkbau oder Parkstreifen';
                    layerFilter =
                        [
                            '==', ['get', 'parking_object'], 'site'
                        ];
                    controlLayersTitle = 'Parkbauten und Parkstreifen';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
                case 'spot':
                    layerGroup.group = 'Einzelparkplatz';
                    layerFilter =
                        [
                            '==', ['get', 'parking_object'], 'spot'
                        ];
                    controlLayersTitle = 'Einzelparkplätze';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
            }
            switch (geometry) {
                case 'line':
                    layerGroup.group = 'Parkplätze (Linien)';
                    layerGroup.source = 'sourceParkApiCarLines';
                    layerGroup.sourceLayer = 'park-api_car_lines';
                    layerGroup.type = 'line';
                    layerGroup.lineWidth = 3;
                    controlLayersTitle = 'Parkplätze (Linien)';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
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
            document.title = `MobiData BW® - ${controlLayersTitle}`;
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
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
    };


    // ==============================
    // LAYERS: SHARING
    // ==============================
    switch (formFactor) {
        case 'car':
            layerGroup.group = 'Carsharing';
            layerFilter = 'car';
            id = 'Car';
            controlLayersTitle = 'Gebündelte Daten Carsharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'bicycle':
            layerGroup.group = 'Bikesharing';
            layerFilter = 'bicycle';
            id = 'Bicycle';
            controlLayersTitle = 'Gebündelte Daten Bikesharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'cargo_bicycle':
            layerGroup.group = 'Lastenrad-Sharing';
            layerFilter = 'cargo_bicycle';
            id = 'CargoBicycle';
            controlLayersTitle = 'Gebündelte Daten Lastenrad-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'scooter':
            layerGroup.group = 'E-Scooter-Sharing';
            layerFilter = 'scooter';
            id = 'Scooter';
            controlLayersTitle = 'Gebündelte Daten E-Scooter-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'moped':
            layerGroup.group = 'E-Kleinkraftrad-Sharing';
            layerFilter = 'moped';
            id = 'Moped';
            controlLayersTitle = 'Gebündelte Daten E-Kleinkraftrad-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
    };


    return {
        purpose,
        type,
        parking,
        geometry,
        formFactor,
        layerGroup,
        id,
        layerFilter,
        controlLayersTitle
    };


};