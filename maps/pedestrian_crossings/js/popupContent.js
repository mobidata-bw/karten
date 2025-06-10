import { popupImages } from '../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */ 
    const id = feature.id;
    const id2 = feature.id_2;
    const checkDate = feature.check_date;
    const checkDa1 = feature.check_da_1;
    const checkDa2 = feature.check_da_2;
    const checkDa3 = feature.check_da_3;
    const checkDa4 = feature.check_da_4;
    const checkDa5 = feature.check_da_5;
    const surveyDat = feature.survey_dat;
    const highway = feature.highway;
    const turningCircle = feature.turning_circle;
    const kerb = feature.kerb;
    const surface = feature.surface;
    const wheelchair = feature.wheelchair;
    const image = feature.image;

    /* POPUP CONTENT */ 
    return '<table>\
                <tr>' + 
                    popupImages('OpenStreetMap') +
                    ((!id) ? '' : ('<th class="title">' + id + '</th>')) + 
                    ((!id2) ? '' : ('<th class="title">' + id2 + '</th>')) + 
                '</tr>\
            </table><br><table>\
                <tr>' + 
                    ((!checkDate  && !checkDa1 && !checkDa2 && !checkDa3 && !checkDa4 && !checkDa5 && !surveyDat) ? '' : ('<td class="att">Letze Überprüfung</td>')) + 
                    ((!checkDate) ? '' : ('<td class="attContent">' + checkDate + '</td>')) +
                    ((!checkDa1) ? '' : ('<td class="attContent">' + checkDa1 + '</td>')) +
                    ((!checkDa2) ? '' : ('<td class="attContent">' + checkDa2 + '</td>')) +
                    ((!checkDa3) ? '' : ('<td class="attContent">' + checkDa3 + '</td>')) +
                    ((!checkDa4) ? '' : ('<td class="attContent">' + checkDa4 + '</td>')) +
                    ((!checkDa5) ? '' : ('<td class="attContent">' + checkDa5 + '</td>')) +
                    ((!surveyDat) ? '' : ('<td class="attContent">' + surveyDat + '</td>')) +
                '</tr><tr>' + 
                    ((!highway) ? '' : ('<td class="att">Straßentyp</td>')) +
                    ((highway == 'crossing') ? ('<td class="attContent">Fußgängerüberweg</td>') : '') +
                    ((highway == 'footway') ? ('<td class="attContent">Gehweg</td>') : '') +
                    ((highway == 'cycleway') ? ('<td class="attContent">Radweg</td>') : '') +
                    ((highway == 'path') ? ('<td class="attContent">Wanderweg/Trampelpfad</td>') : '') +
                    ((highway == 'proposed') ? ('<td class="attContent">Geplante, noch nicht gebaute Straße</td>') : '') +
                    ((highway == 'service') ? ('<td class="attContent">Erschließungsweg</td>') : '') +
                    ((highway == 'track') ? ('<td class="attContent">Wirtschafts-, Feld- oder Waldweg</td>') : '') +
                    ((highway == 'pedestrian') ? ('<td class="attContent">Weg, Platz oder Straße ausschließlich für Fußgänger (z.B. Fußgängerzone)</td>') : '') +
                    ((turningCircle == 'turning_circle') ? ('<td class="attContent">Wendestelle</td>') : '') +
                    ((turningCircle == 'traffic_signals') ? ('<td class="attContent">Ampel</td>') : '') +
                '</tr><tr>' + 
                    ((!kerb) ? '' : ('<td class="att">Bordstein</td>')) +
                    ((kerb == 'no') ? ('<td class="attContent">nein</td>') : '') +
                    ((kerb == 'lowered') ? ('<td class="attContent">abgesenkt</td>') : '') +
                    ((kerb == 'raised') ? ('<td class="attContent">erhöht</td>') : '') +
                    ((kerb == 'flush') ? ('<td class="attContent">auf Straßenebene</td>') : '') +
                '</tr><tr>' + 
                    ((!surface) ? '' : ('<td class="att">Oberfläche</td>')) +
                    ((surface == 'asphalt') ? ('<td class="attContent">Asphalt</td>') : '') +
                    ((surface == 'paving_stones') ? ('<td class="attContent">Pflastersteine</td>') : '') +
                    ((surface == 'sett') ? ('<td class="attContent">Behauenes Steinpflaster</td>') : '') +
                    ((surface == 'cobblestone') ? ('<td class="attContent">Kopfsteinpflaster</td>') : '') +
                    ((surface == 'cobblestone:flattened') ? ('<td class="attContent">Pflaster mit abgeflachten Steinen</td>') : '') +
                    ((surface == 'compacted') ? ('<td class="attContent">Verdichtete Deckschicht</td>') : '') +
                    ((surface == 'concrete') ? ('<td class="attContent">Beton</td>') : '') +
                    ((surface == 'concrete:plates') ? ('<td class="attContent">Betonplatten</td>') : '') +
                    ((surface == 'ground') ? ('<td class="attContent">Gewachsene, naturbelassene Oberfläche</td>') : '') +
                    ((surface == 'grass_paver') ? ('<td class="attContent">Rasengittersteine</td>') : '') +
                    ((surface == 'pebblestone') ? ('<td class="attContent">Kies</td>') : '') +
                    ((surface == 'unhewn_cobblestone') ? ('<td class="attContent">Rohes Kopfsteinpflaster</td>') : '') +
                    ((surface == 'unpaved') ? ('<td class="attContent">Ohne Straßenbelag</td>') : '') +                    
                '</tr><tr>' + 
                    ((!wheelchair) ? '' : ('<td class="att">Rollstuhlbefahrbarkeit</td>')) + 
                    ((wheelchair == 'yes') ? ('<td class="attContent">ja</td>') : '') +
                    ((wheelchair == 'no') ? ('<td class="attContent">nein</td>') : '') +
                    ((wheelchair == 'limited') ? ('<td class="attContent">begrenzt</td>') : '') +              
                '</tr>\
            </table><table>\
                <tr>' +
                    ((!image) ? '' : ('<td class="attContentLink"><a href="' + image + '" target="_blank">&#10149 Foto</a></td>')) + 
                '</tr>\
            </table>';
};