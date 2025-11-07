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

    // when everything was rendered, execute the code once
    map.once('idle', () => {

        const styleName = map.getStyle().name;

        layers.forEach(layer => {

            const type = layer.id.startsWith('lineShape') ? 'line' : layer.id.startsWith('fillShape') ? 'fill' : null;

            if (!type) return;

            switch (styleName) {
                case 'Streets':
                case 'Labeled Aerial Photos':
                    map.moveLayer(layer.id, 'place_other');
                    map.moveLayer(layer.id, 'highway-shield');
                    break;
                case 'Dark Matter':
                    map.moveLayer(layer.id, 'place_other');
                    map.setPaintProperty(layer.id, type === 'line' ? 'line-color' : 'fill-color', 'white');
                    break;
                case 'CycloBright':
                case 'Railway':
                    map.moveLayer(layer.id, 'place-other');
                    break;
                case 'bm_web_top':
                    map.moveLayer(layer.id, 'Name_Bahnstrecke_Sonderbahnen');
                    break;
            }

        });
        // console.log(map.getStyle().layers);
    });

};