import { popupImages } from "../../../../src/js/popupImages.js";


export function popKonstanzPls(feature) {

    /* INITIALIZE VARIABLES */
    const {
        name,
        type,
        operator,
        address,
        fee_descr,
        opening_h,
        max_stay,
        has_light,
        max_hei,
        park_ride,
        opening_s,
        descript,
        max_cap,
        capacity_d,
        capacity_w,
        capacity_c,
        capacity_s,
        public_url
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages('Stadt Konstanz')}
                <th class="title">${name}</th>
            </tr>
        </table><br><table>
            ${type == ' ' ? '' : `
            <tr>
                <td class="att">Typ</td>
                <td class="attContent">${type}</td>
            <tr>
            `}
            ${operator == ' ' ? '' : `
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${operator}</td>
            <tr>
            `}
            ${address == ' ' ? '' : `
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${address}</td>
            <tr>
            `}
            ${fee_descr == ' ' ? '' : `
            <tr>
                <td class="att">Gebühren</td>
                <td class="attContent">${fee_descr}</td>
            <tr>
            `}
            ${opening_h == ' ' ? '' : `
            <tr>
                <td class="att">Öffnungszeiten</td>
                <td class="attContent">${opening_h}</td>
            <tr>
            `}
            ${max_stay == ' ' ? '' : `
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${max_stay}</td>
            <tr>
            `}
            ${has_light == ' ' ? '' : `
            <tr>
                <td class="att">Beleuchtung</td>
                <td class="attContent">${has_light}</td>
            <tr>
            `}
            ${max_hei == ' ' ? '' : `
            <tr>
                <td class="att">Max. Höhe</td>
                <td class="attContent">${max_hei}</td>
            <tr>
            `}
            ${park_ride == ' ' ? '' : `
            <tr>
                <td class="att">P+R</td>
                <td class="attContent">${park_ride}</td>
            <tr>
            `}          
            ${opening_s == ' ' ? '' : `
            <tr>
                <td class="att">Geöffnet</td>
                <td class="attContent">${opening_s}</td>
            <tr>
            `}
            ${descript == ' ' ? '' : `
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${descript}</td>
            <tr>
            `}              
        </table><br><table>\
            <tr>
                <td class="title title2">Parkplätze</td>
            </tr>
        </table><table>
            ${max_cap == 0.0 ? '' : `
            <tr>
                <td class="att">Stellplätze</td>
                <td class="attContent">${max_cap}</td>
            <tr>
            `}
            ${capacity_d == 0.0 ? '' : `
            <tr>
                <td class="att">für Behinderte</td>
                <td class="attContent">${capacity_d}</td>
            <tr>
            `}    
            ${capacity_w == 0.0 ? '' : `
            <tr>
                <td class="att">für Frauen</td>
                <td class="attContent">${capacity_w}</td>
            <tr>
            `}    
            ${capacity_c == 0.0 ? '' : `
            <tr>
                <td class="att">mit Lademöglichkeit</td>
                <td class="attContent">${capacity_c}</td>
            <tr>
            `}    
            ${capacity_s == 0.0 ? '' : `
            <tr>
                <td class="att">für Carsharing</td>
                <td class="attContent">${capacity_s}</td>
            <tr>
            `}    
            ${max_cap == 0.0 ? '' : `
            <tr>
                <td class="att">Stellplätze</td>
                <td class="attContent">${max_cap}</td>
            <tr>
            `}   
        </table><table>
            <tr>
                <td class="attContentLink"><a href="${public_url}" target="_blank">&#10149 zum Betreiber</a></td>
            </tr>
        </table>
    `;

};


export function popKonstanzBehindertenparken(feature) {

    /* INITIALIZE VARIABLES */
    const {
        Name,
        Informatio
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages('Stadt Konstanz')}
                <th class="title">${Name}</th>
            </tr>
        </table><br><table>
            ${Informatio == ' ' ? '' : `
            <tr>
                <td class="att">Information</td>
                <td class="attContent">${Informatio}</td>
            </tr>
            `} 
        </table>
    `;

};