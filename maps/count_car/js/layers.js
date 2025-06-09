// ==============================
// SOURCES
// ==============================
export const sourceCountCar = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/count_car/SVZ-Zaehlstellen_231011_augmented_SVZ2023.geojson'
};


// ==============================
// LAYERS
// ==============================
const countCar = {
    source: 'sourceCountCar',
    group: 'Straßenverkehrszählung'
};


export const layersCountCar = [
    {
        id: 'countCarTemporary',
        label: 'Temporäre Zählstellen',
        filter:
            [
                "case",
                ["<", ["zoom"], 10],
                [
                    "all",
                    ["==", ["get", "zstart"], "TM"],
                    ['==', ['get', 'klasse'], 'A'],
                ],
                ["==", ["get", "zstart"], "TM"],
            ],
        color: '#7D97DD',
        ...countCar
    },
    {
        id: 'countCarPermanent',
        label: 'Dauerzählstellen',
        filter:
            [
                "case",
                ["<", ["zoom"], 10],
                [
                    "all",
                    ["==", ["get", "zstart"], "DZ"],
                    ['==', ['get', 'klasse'], 'A'],
                ],
                ["==", ["get", "zstart"], "DZ"],
            ],
        color: '#FF5050',
        ...countCar
    },
    {
        id: 'countCarManual',
        label: 'Manuelle Zählstellen',
        filter:
            [
                "case",
                ["<", ["zoom"], 10],
                [
                    "all",
                    ["==", ["get", "zstart"], "MZ"],
                    ['==', ['get', 'klasse'], 'A'],
                ],
                ["==", ["get", "zstart"], "MZ"],
            ],
        color: '#fffb05',
        ...countCar
    },
];