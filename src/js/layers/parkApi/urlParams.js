export function urlParams() {

    const params = new URLSearchParams(window.location.search);
    const parking = params.get('parking');

    let layerFilter = true; // if not parameter is set, breaking of the map is prevented by assignment of true
    let controlLayersTitle;

    switch (parking) {
        case 'disabled':
            layerFilter =
                [
                    'any',
                    ['>', ['get', 'capacity_disabled'], 0],
                    ['==', ['get', 'restriction_type'], 'DISABLED']
                ];
            controlLayersTitle = 'Gebündelte Behindertenparkplätze';
            break;
        case 'buildings':
            layerFilter =
                [
                    'any',
                    ['!=', ['get', 'type'], 'ON_STREET'],
                    ['!', ['has', 'type']]
                ];
            controlLayersTitle = 'Gebündelte Parkplätze und Parkbauten';
            break;
        case 'on_street':
            layerFilter =
                [
                    'any',
                    ['==', ['get', 'type'], 'ON_STREET'],
                    ['!', ['has', 'type']]
                ];
            controlLayersTitle = 'Gebündelte Straßen-Parkplätze';
            break;
        default:
            break;
    };

    return {
        layerFilter,
        controlLayersTitle
    };

};