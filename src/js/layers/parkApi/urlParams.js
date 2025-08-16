export function urlParams() {

    const params = new URLSearchParams(window.location.search);
    const purpose = params.get('purpose');
    const map = params.get('map');

    let layers, id, id1, id2, layerFilter = true, controlLayersTitle, controlLayersTitle1, controlLayersTitle2;


    switch (purpose) {
        case 'car':
            layers = {
                source: 'sourceParkApiCar',
                sourceLayer: 'park-api_car'
            };
            id = 'Car';
            switch (map) {
                case 'disabled':
                    layers.group = 'Behindertenparkplätze';
                    layerFilter =
                        [
                            'any',
                            ['>', ['get', 'capacity_disabled'], 0],
                            ['==', ['get', 'restriction_type'], 'DISABLED']
                        ];
                    controlLayersTitle = 'Gebündelte Behindertenparkplätze';
                    break;
                case 'buildings':
                    layers.group = 'Parkplätze und Parkbauten';
                    layerFilter =
                        [
                            'any',
                            ['!=', ['get', 'type'], 'ON_STREET'],
                            ['!', ['has', 'type']]
                        ];
                    controlLayersTitle = 'Gebündelte Parkplätze und Parkbauten';
                    break;
                case 'on_street':
                    layers.group = 'Straßen-Parkplätze';
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
            console.log(['==', ['get', 'purpose']])
            layers = {
                source: 'sourceParkApiBicycle',
                sourceLayer: 'park-api_bicycle',
                group: 'Fahrradabstellanlagen'
            };
            id1 = 'Bicycle';
            id2 = 'Item';
            controlLayersTitle1 = 'Gebündelte Fahrradabstellanlagen';
            controlLayersTitle2 = 'Schließfächer an Fahrradabstellanlagen';
            break;
    };


    return {
        purpose,
        layers,
        id, id1, id2,
        layerFilter,
        controlLayersTitle, controlLayersTitle1, controlLayersTitle2
    };


};