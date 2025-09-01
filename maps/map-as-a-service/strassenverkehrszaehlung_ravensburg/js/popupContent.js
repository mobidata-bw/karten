import { popupImages } from "../../../../src/js/popupImages.js";


export function popupContent(features) {

    /* INITIALIZE VARIABLES */
    const {
        IDNummer,
        KFZ,
        RAD,
        FÜßGÄNGER,
        SV,
        DATUM,
        SUMME
    } = features;

    /* POPUP CONTENT */
    return `
        <table>
             <tr>
                ${popupImages('Stadt Ravensburg')}
                <th class="title">${IDNummer}</th>
            </tr>
        </table><br><table>       
            <tr>
                <td class="att">Kraftfahrzeug</td>
                <td class="attContent">${KFZ.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fahrrad</td>
                <td class="attContent">${RAD.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fußgänger</td>
                <td class="attContent">${FÜßGÄNGER.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Schwerlastverkehr</td>
                <td class="attContent">${SV.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Summe</td>
                <td class="attContent">${SUMME.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Letzte Zählung</td>
                <td class="attContent">${DATUM}</td>
            </tr>       
        </table> 
    `;

};