import { iplPath } from '../../../../src/utils/paths.js';


export function popupSources() {

    return fetch(`https://${iplPath}.mobidata-bw.de/park-api/api/public/v3/sources`)
        .then(response => response.json())
        .then(data => {
            const items = data.items;
            return items;
        });
};

export const sourceUids = {
    'APCOA PARKING': 'apcoa',
    'B+B Parkhaus GmbH & Co. KG': 'bb_parkhaus',
    'DB BahnPark': 'bahn_v2',
    'Freiburger Verkehrs AG': 'freiburg_vag_bike',
    'Goldbeck': 'goldbeck',
    'Kienzler': 'kienzler',
    'Ministerium für Verkehr Baden-Württemberg': '^p.{1}m_',
    'Nahverkehrsgesellschaft Baden-Württemberg': 'bfrk',
    'Open-Data-Plattform Schweiz': 'opendata_swiss',
    'PARK SERVICE HÜFNER GmbH + Co. KG': 'huefner',
    'Parkraumgesellschaft Baden-Württemberg mbH': 'pbw',
    'RadVIS': 'radvis_bw',
    'Stadt Aalen': 'aalen',
    'Stadt Bietigheim-Bissingen': 'bietigheim_bissingen',
    'Stadt Buchen': 'buchen',
    'Stadt Ellwangen': 'ellwangen',
    'Stadt Esslingen': 'esslingen',
    'Stadt Freiburg im Breisgau': '^freiburg(?!_vag)',
    'Stadt Friedrichshafen': 'friedrichshafen',
    'Stadt Heidelberg': 'heidelberg',
    'Stadt Herrenberg': 'herrenberg',
    'Stadt Karlsruhe': 'karlsruhe',
    'Stadt Keltern': 'keltern',
    'Stadt Konstanz': 'konstanz',
    'Stadt Ladenburg': 'ladenburg',
    'Stadt Mannheim': 'mannheim',
    'Stadt Neckarsulm': 'neckarsulm',
    'Stadt Pforzheim': 'pforzheim',
    'Stadt Radolfzell': 'radolfzell',
    'Stadt Reutlingen': 'reutlingen',
    'Stadt Stuttgart': 'stuttgart',
    'Stadt Ulm': '^ulm',
    'Velobrix': 'velobrix',
    'Verband Region Stuttgart': 'vrs',
    'Verkehrsverbund Rhein-Neckar': 'vrn'
};