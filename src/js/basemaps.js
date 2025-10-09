import { basePath } from '../utils/paths.js';
export let basemapConfig;


// ==============================
// CONFIGURE BASEMAPS
// ============================== 
const maplibre = "<a href='https://maplibre.org/' target='_blank'>MapLibre</a>";
const openStreetMap = "<a href='https://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap Mitwirkende</a>";
const mapTiler = "<a href='https://www.maptiler.com/copyright/' target='_blank'>© MapTiler</a>";
const lgl = "<a href='https://www.lgl-bw.de/' target='_blank'>© LGL-BW</a>";

basemapConfig = {
    'streets': {
        img: `${basePath}img/basemaps/streets.png`,
        style: 'https://tiles.mobidata-bw.de/styles/streets/style.json',
        title: 'Straße',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} | ${openStreetMap} ${mapTiler} </div>`
    },
    'bicycle': {
        img: `${basePath}img/basemaps/bicycle.png`,
        style: 'https://tiles.mobidata-bw.de/styles/bicycle/style.json',
        title: 'Fahrrad',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} | ${openStreetMap} ${mapTiler} </div>`
    },
    'railway': {
        img: `${basePath}img/basemaps/railway.png`,
        style: 'https://tiles.mobidata-bw.de/styles/railway/style.json',
        title: 'Schiene',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} | ${openStreetMap} ${mapTiler} </div>`
    },
    'aerialphotos': {
        img: `${basePath}img/basemaps/aerialphotos.png`,
        style: 'https://tiles.mobidata-bw.de/styles/aerialphotos/style.json',
        title: 'Luftbild',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} | ${openStreetMap} ${mapTiler} ${lgl} </div>`
    },
    'terrain': {
        img: `${basePath}img/basemaps/terrain.png`,
        style: 'https://sgx.geodatenzentrum.de/gdz_basemapde_vektor/styles/bm_web_top.json',
        title: 'Gelände',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} </div>`
    },
    'darkmatter': {
        img: `${basePath}img/basemaps/darkmatter.png`,
        style: 'https://tiles.mobidata-bw.de/styles/darkmatter/style.json',
        title: 'Nacht',
        attribution: `<div class='maplibregl-ctrl-attrib-inner'> ${maplibre} | ${openStreetMap} ${mapTiler} </div>`
    }
};


// ==============================
// STYLE BASEMAPS
// ============================== 
export function styleBasemaps(map, layers) {

    const styleName = map.getStyle().name;

    switch (styleName) {
        case 'Streets':
        case 'Labeled Aerial Photos':
        case 'Dark Matter':
            map.moveLayer('lineShape', 'place_other');
            map.moveLayer('fillShape', 'place_other');
            if (styleName == 'Dark Matter') {
                layers.forEach(layer => {
                    if (layer.id.endsWith('Shape')) {
                        if (layer.type == 'line') map.setPaintProperty(layer.id, 'line-color', 'white');
                        else if (layer.type == 'fill') map.setPaintProperty(layer.id, 'fill-color', 'white');
                    }
                })
            };
            break;
        case 'CycloBright':
        case 'Railway':
            map.moveLayer('lineShape', 'place-other');
            map.moveLayer('fillShape', 'place-other');
            break;
        case 'bm_web_top':
            map.moveLayer('lineShape', 'Name_Bahnstrecke_Sonderbahnen');
            map.moveLayer('fillShape', 'Name_Bahnstrecke_Sonderbahnen');
            break;
    };

};