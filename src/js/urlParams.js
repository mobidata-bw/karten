export function urlParams(options = {}) {

    // ==============================
    // URL PARAMS
    // ==============================
    const params = new URLSearchParams(window.location.search);
    const purpose = options.purpose ?? params.get('purpose');
    const type = options.type ?? params.get('type');
    const object = options.object ?? params.get('object');
    const geometry = options.geometry ?? params.get('geometry');
    const formFactor = options.formFactor ?? params.get('form_factor');

    let layerGroup = {}, setId, setLayerFilter = true, controlLayersTitle;
  

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
            controlLayersTitle = 'Gebündelte Parkdaten';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            setId = 'Car';
            switch (type) {
                case 'buildings':
                    layerGroup.group = 'Parkplätze und Parkbauten';
                    setLayerFilter =
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
                    setLayerFilter =
                        [
                            'any',
                            ['==', ['get', 'type'], 'ON_STREET'],
                            ['!', ['has', 'type']]
                        ];
                    controlLayersTitle = 'Gebündelte Straßen-Parkplätze';
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
                    layerGroup.visibility = 'visible';
                    controlLayersTitle = 'Parkplätze (Linien)';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
                case 'polygon':
                    layerGroup.group = 'Parkplätze (Polygone)';
                    layerGroup.source = 'sourceParkApiCarPolygons';
                    layerGroup.sourceLayer = 'park-api_car_polygons';
                    layerGroup.type = 'fill';
                    layerGroup.visibility = 'visible';
                    setLayerFilter =
                        [
                            '>=', ['zoom'], 13
                        ];
                    controlLayersTitle = 'Parkplätze (Polygone)';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
            }
            switch (object) {
                case 'site':
                    layerGroup.group = 'Parkbau oder Parkstreifen';
                    setLayerFilter =
                        [
                            '==', ['get', 'parking_object'], 'site'
                        ];
                    controlLayersTitle = 'Parkbauten und Parkstreifen';
                    document.title = `MobiData BW® - ${controlLayersTitle}`;
                    break;
                case 'spot':
                    layerGroup.group = 'Einzelparkplatz';
                    setLayerFilter =
                        [
                            '==', ['get', 'parking_object'], 'spot'
                        ];
                    controlLayersTitle = 'Einzelparkplätze';
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
            setLayerFilter =
                [
                    '==', ['get', 'purpose'], 'BIKE'
                ];
            setId = 'Bicycle';
            controlLayersTitle = 'Gebündelte Fahrradabstellanlagen';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;       
        default:
            document.title = '';
    };


    // ==============================
    // LAYERS: SHARING
    // ==============================
    switch (formFactor) {
        case 'car':
            layerGroup.group = 'Carsharing';
            setLayerFilter = 'car';
            setId = 'Car';
            controlLayersTitle = 'Gebündelte Daten Carsharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'bicycle':
            layerGroup.group = 'Bikesharing';
            setLayerFilter = 'bicycle';
            setId = 'Bicycle';
            controlLayersTitle = 'Gebündelte Daten Bikesharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'cargo_bicycle':
            layerGroup.group = 'Lastenrad-Sharing';
            setLayerFilter = 'cargo_bicycle';
            setId = 'CargoBicycle';
            controlLayersTitle = 'Gebündelte Daten Lastenrad-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'scooter':
            layerGroup.group = 'E-Scooter-Sharing';
            setLayerFilter = 'scooter';
            setId = 'Scooter';
            controlLayersTitle = 'Gebündelte Daten E-Scooter-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
        case 'moped':
            layerGroup.group = 'E-Kleinkraftrad-Sharing';
            setLayerFilter = 'moped';
            setId = 'Moped';
            controlLayersTitle = 'Gebündelte Daten E-Kleinkraftrad-Sharing';
            document.title = `MobiData BW® - ${controlLayersTitle}`;
            break;
    };


    // ==============================
    // PRESETS
    // ==============================
    const id = options.id ?? setId;
    const layerFilter = options.layerFilter ?? setLayerFilter;


    // ==============================
    // RETURN PARAMS
    // ==============================
    return {
        purpose,
        type,
        geometry,
        object,
        formFactor,
        layerGroup,
        id,
        layerFilter,
        controlLayersTitle
    };


};