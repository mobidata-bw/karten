import { popupImages } from '../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const {
        id,
        id_2,
        check_date,
        check_da_1,
        check_da_2,
        check_da_3,
        check_da_4,
        check_da_5,
        survey_dat,
        highway,
        turning_circle,
        kerb,
        surface,
        wheelchair,
        image
    } = feature;
    
    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages('OpenStreetMap')}
                ${!id ? '' : `<th class="title">${id}</th>`}
                ${!id_2 ? '' : `<th class="title">${id_2}</th>`}
            </tr>
        </table><br><table>
            <tr>
                ${(!check_date && !check_da_1 && !check_da_2 && !check_da_3 && !check_da_4 && !check_da_5 && !survey_dat) ? '' : '<td class="att">Letze Überprüfung</td>'}
                ${!check_date ? '' : `<td class="attContent">${check_date}</td>`}
                ${!check_da_1 ? '' : `<td class="attContent">${check_da_1}</td>`}
                ${!check_da_2 ? '' : `<td class="attContent">${check_da_2}</td>`}
                ${!check_da_3 ? '' : `<td class="attContent">${check_da_3}</td>`}
                ${!check_da_4 ? '' : `<td class="attContent">${check_da_4}</td>`}
                ${!check_da_5 ? '' : `<td class="attContent">${check_da_5}</td>`}
                ${!survey_dat ? '' : `<td class="attContent">${survey_dat}</td>`}
            </tr><tr>
                ${!highway ? '' : '<td class="att">Straßentyp</td>'}
                ${highway == 'crossing' ? '<td class="attContent">Fußgängerüberweg</td>': ''}
                ${highway == 'footway' ? '<td class="attContent">Gehweg</td>': ''}
                ${highway == 'cycleway' ? '<td class="attContent">Radweg</td>': ''}
                ${highway == 'path' ? '<td class="attContent">Wanderweg/Trampelpfad</td>': ''}
                ${highway == 'proposed' ? '<td class="attContent">Geplante, noch nicht gebaute Straße</td>': ''}
                ${highway == 'service' ? '<td class="attContent">Erschließungsweg</td>': ''}
                ${highway == 'track' ? '<td class="attContent">Wirtschafts-, Feld- oder Waldweg</td>': ''}
                ${highway == 'pedestrian' ? '<td class="attContent">Weg, Platz oder Straße ausschließlich für Fußgänger (z.B. Fußgängerzone)</td>': ''}
                ${turning_circle == 'turning_circle' ? '<td class="attContent">Wendestelle</td>': ''}
                ${turning_circle == 'traffic_signals' ? '<td class="attContent">Ampel</td>': ''}
            </tr><tr>
                ${!kerb ? '' : '<td class="att">Bordstein</td>'}
                ${kerb == 'no' ? '<td class="attContent">nein</td>': ''}
                ${kerb == 'lowered' ? '<td class="attContent">abgesenkt</td>': ''}
                ${kerb == 'raised' ? '<td class="attContent">erhöht</td>': ''}
                ${kerb == 'flush' ? '<td class="attContent">auf Straßenebene</td>': ''}
            </tr><tr>
                ${!surface ? '' : '<td class="att">Oberfläche</td>'}
                ${surface == 'asphalt' ? '<td class="attContent">Asphalt</td>': ''}
                ${surface == 'paving_stones' ? '<td class="attContent">Pflastersteine</td>': ''}
                ${surface == 'sett' ? '<td class="attContent">Behauenes Steinpflaster</td>': ''}
                ${surface == 'cobblestone' ? '<td class="attContent">Kopfsteinpflaster</td>': ''}
                ${surface == 'cobblestone:flattened' ? '<td class="attContent">Pflaster mit abgeflachten Steinen</td>': ''}
                ${surface == 'compacted' ? '<td class="attContent">Verdichtete Deckschicht</td>': ''}
                ${surface == 'concrete' ? '<td class="attContent">Beton</td>': ''}
                ${surface == 'concrete:plates' ? '<td class="attContent">Betonplatten</td>': ''}
                ${surface == 'ground' ? '<td class="attContent">Gewachsene, naturbelassene Oberfläche</td>': ''}
                ${surface == 'grass_paver' ? '<td class="attContent">Rasengittersteine</td>': ''}
                ${surface == 'pebblestone' ? '<td class="attContent">Kies</td>': ''}
                ${surface == 'unhewn_cobblestone' ? '<td class="attContent">Rohes Kopfsteinpflaster</td>': ''}
                ${surface == 'unpaved' ? '<td class="attContent">Ohne Straßenbelag</td>': ''}                    
            </tr><tr>
                ${!wheelchair ? '' : '<td class="att">Rollstuhlbefahrbarkeit</td>'}
                ${wheelchair == 'yes' ? '<td class="attContent">ja</td>': ''}
                ${wheelchair == 'no' ? '<td class="attContent">nein</td>': ''}
                ${wheelchair == 'limited' ? '<td class="attContent">begrenzt</td>': ''}              
            </tr>
        </table><table>
            <tr>
                ${!image ? '' : `<td class="attContentLink"><a href="${image}" target="_blank">&#10149 Foto</a></td>`}
            </tr>
        </table>
    `;

};