// ==============================
// SOURCES
// ==============================
export const sourceKonstanzPls = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/map-as-a-service/gebuendelte_daten_konstanz/konstanz_pls.geojson'
};

export const sourceKonstanzBehindertenparken = {
    type: 'geojson',
    data: 'https://www.mobidata-bw.de/karten_geojsons/maps/map-as-a-service/gebuendelte_daten_konstanz/konstanz_behindertenparken.geojson'
};

// ==============================
// LAYERS
// ==============================
export const layersKonstanzPls= [
    {
        id: 'konstanzPls',
        label: 'Parkleitsystem',
        subGroup: 'Parken',
        source: 'sourceKonstanzPls',      
        color: '#d85959'
    }   
];

export const layersKonstanzBehindertenparken= [
    {
        id: 'konstanzBehindertenparken',
        label: 'Behindertenparken',
        subGroup: 'Parken',
        source: 'sourceKonstanzBehindertenparken',      
        color: '#325ff2'
    }   
];