export function urlParams(options = {}) {

    const params = new URLSearchParams(window.location.search);
    const purpose = options.purpose ?? params.get('purpose');
    const parking = options.parking ?? params.get('parking');

    let layerGroup, id, layerFilter = true, controlLayersTitle;


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
            id = 'Bicycle';           
            controlLayersTitle = 'Gebündelte Fahrradabstellanlagen';
            break;
        case 'item':
            layerGroup = {
                source: 'sourceParkApiItem',
                sourceLayer: 'park-api_item',
                group: 'Schließfächer an Fahrradabstellanlagen'
            };
            id = 'Item';
            controlLayersTitle = 'Schließfächer an Fahrradabstellanlagen';
            break;
    };


    return {
        purpose,
        layerGroup,
        id,
        layerFilter,
        controlLayersTitle
    };


};