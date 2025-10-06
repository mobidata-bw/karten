import { basePath } from '../../../../src/utils/paths.js';
import { popupImages } from "../../../../src/js/popupImages.js";


export function popupContent(features) {

    /* INITIALIZE VARIABLES */
    const {
        ID,
        NAME,
        KFZ_1, RAD_1, FUSSGAENGER_1, SV_1, DATUM_1,
        KFZ_2, RAD_2, FUSSGAENGER_2, SV_2, DATUM_2,
        KFZ_3, RAD_3, FUSSGAENGER_3, SV_3, DATUM_3,
        KFZ_4, RAD_4, FUSSGAENGER_4, SV_4, DATUM_4
    } = features;

    let KFZ, RAD, FUSSGAENGER, SV, DATUM;
    if (!DATUM_2 && !DATUM_3 && !DATUM_4) {
        KFZ = KFZ_1; RAD = RAD_1; FUSSGAENGER = FUSSGAENGER_1; SV = SV_1; DATUM = DATUM_1;
    } else if (!DATUM_3 && !DATUM_4) {
        KFZ = KFZ_2; RAD = RAD_2; FUSSGAENGER = FUSSGAENGER_2; SV = SV_2; DATUM = DATUM_2;
    } else if (!DATUM_4) {
        KFZ = KFZ_3; RAD = RAD_3; FUSSGAENGER = FUSSGAENGER_3; SV = SV_3; DATUM = DATUM_3;
    } else {
        KFZ = KFZ_4; RAD = RAD_4; FUSSGAENGER = FUSSGAENGER_4; SV = SV_4; DATUM = DATUM_4;
    };

    /* PATHS */
    let filePath;
    if (basePath == '/') {
        filePath = '/data/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg';
    } else {
        filePath = '/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg';
    };

    /* POPUP CONTENT */
    return `
        <table>
             <tr>
                ${popupImages('Stadt Ravensburg')}
            </tr>
        </table><br><table>       
            <tr>
                <td class="att">ID</td>
                <td class="attContent">${ID}</td>
            </tr><tr>             
                <td class="att">Name</td>
                <td class="attContent">${NAME}</td>
            </tr><tr>
                <td class="att">Kraftfahrzeug</td>
                <td class="attContent">${KFZ.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fahrrad</td>
                <td class="attContent">${RAD.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fußgänger</td>
                <td class="attContent">${FUSSGAENGER.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Schwerlastverkehr</td>
                <td class="attContent">${SV.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Letzte Zählung</td>
                <td class="attContent">${DATUM}</td>
            </tr>       
        </table><table>    
            <tr>
                ${`<td class="attContentLink"><a href="${filePath}/files/${ID}/${DATUM}/${NAME}.pdf" target="_blank">&#10149 PDF</a></td>`}  
                ${`<td class="attContentLink"><a href="${filePath}/files/${ID}/${DATUM}/${NAME}.xlsx" target="_blank">&#10149 XLSX</a></td>`}                  
            </tr>
        </table>
    `;

};