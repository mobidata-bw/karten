// ==============================
// SOURCES
// ==============================
export const sourceTransparenzportale = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/auswertungen/transparenzportale/transparenzportale.geojson',
};


// ==============================
// LAYERS
// ==============================
const transparenzportale = {
    source: 'sourceTransparenzportale',
    group: 'Transparenzportale',
    type: 'fill'
};

export const layersTransparenzportale = [
    {
        id: 'transparenzportale_Land',
        label: 'Nationale Portale',
        filter: [
            '==', ['get', 'region'], 'Land'
        ],
        color: '#7dc4204d',
        ...transparenzportale
    },
    {
        id: 'transparenzportale_Bundesland',
        label: 'MobiData BW®',
        filter: [
            '==', ['get', 'region'], 'Bundesland'
        ],
        color: '#0c79bc',
        ...transparenzportale
    },
    {
        id: 'transparenzportale_Verkehrsverbund',
        label: 'Verbundsportale',
        filter: [
            '==', ['get', 'region'], 'Verkehrsverbund'
        ],
        color: '#d7a4a4',
        ...transparenzportale
    },
    {
        id: 'transparenzportale_Kommune',
        label: 'Kommunale Portale',
        filter: [
            '==', ['get', 'region'], 'Kommune'
        ],
        color: '#ffc300',
        ...transparenzportale
    }
];