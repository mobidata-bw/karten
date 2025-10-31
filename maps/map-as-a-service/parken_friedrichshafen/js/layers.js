import { setFilePath } from '../../../../src/js/setFilePath.js';


// ==============================
// SOURCES
// ==============================
export const sourceParking = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/parken_friedrichshafen', file: 'friedrichshafen_inventory', generateId: true });
export const sourceTaxi = setFilePath({ format: 'geojson', directory: 'maps/map-as-a-service/parken_friedrichshafen', file: 'taxistaende' });


// ==============================
// LAYERS
// ==============================
const parking = {
    type: 'line',
    source: 'sourceParking',
    lineWidth:
        [
            "interpolate", ["linear"], ["zoom"],
            14, 4,
            20, 6
        ]
};


export const layersParkingOnStreet = [
    {
        id: 'parkingOnStreet1',
        label: 'Parken mit Parkscheibe/Bewohnerparken',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Parken mit Parkscheibe/Bewohnerparken'
            ],
        ...parking,
        color: '#00f080'

    },
    {
        id: 'parkingOnStreet2',
        label: 'Parken mit Parkscheibe',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Parken mit Parkscheibe'
            ],
        ...parking,
        color: '#9016af'
    },
    {
        id: 'parkingOnStreet3',
        label: 'Behindertenparkplätze',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Behindertenparkplätze'
            ],
        ...parking,
        color: 'yellow'
    },
    {
        id: 'parkingOnStreet4',
        label: 'Gebührenpflichtiges Parken/Bewohnerparken',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Gebührenpflichtiges Parken/Bewohnerparken'
            ],
        ...parking,
        color: 'orange'
    },
    {
        id: 'parkingOnStreet5',
        label: 'Bewohnerparken',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Bewohnerparken'
            ],
        ...parking,
        color: 'blue'
    },
    {
        id: 'parkingOnStreet6',
        label: 'Gebührenpflichtiges Parken',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Gebührenpflichtiges Parken'
            ],
        ...parking,
        color: 'red'
    },
    {
        id: 'parkingOnStreet7',
        label: 'Gebührenfreies Parken',
        subGroup: 'Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer1'], 'Gebührenfreies Parken '
            ],
        ...parking,
        color: 'green'
    }
];


export const layersParkingOther = [
    {
        id: 'parkingOther1',
        label: 'Ladezone',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'Ladezone'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    },
    {
        id: 'parkingOther2',
        label: 'Feuerwehrzufahrt',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'Feuerwehrzufahrt'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    },
    {
        id: 'parkingOther3',
        label: 'Fahrradparkplatz/E-Scooter',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'Fahrradparkplatz/E-Scooter'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    },
    {
        id: 'parkingOther4',
        label: 'Fahrradparkplatz',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'Fahrradparkplatz'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    },
    {
        id: 'parkingOther5',
        label: 'E-Parkplatz',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'E-Parkplatz'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    },
    {
        id: 'parkingOther6',
        label: 'Carsharing',
        subGroup: 'Sonstige Straßenparkplätze',
        filter:
            [
                '==', ['get', 'Layer2'], 'Carsharing'
            ],
        ...parking,
        color: 'grey',
        visibility: 'none'
    }
];


export const layersTaxi = [
    {
        id: 'taxi1',
        label: 'Taxistände',
        subGroup: 'Taxistände',
        source: 'sourceTaxi',
        color: 'yellow',
        visibility: 'none'
    }
];