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
    return '<table>\
            <tr>' +
        popupImages('Stadt Konstanz') +
        '<th class="title">' + name + '</th>\
            </tr>\
        </table><br><table>\
            <tr>' +
        ((type == " ") ? '' : ('<td class="att">Typ<td>')) +
        ((type == " ") ? '' : ('<td class="attContent">' + type + '<td>')) +
        '<tr>' +
        ((operator == " ") ? '' : ('<td class="att">Betreiber<td>')) +
        ((operator == " ") ? '' : ('<td class="attContent">' + operator + '<td>')) +
        '<tr>' +
        ((address == " ") ? '' : ('<td class="att">Adresse<td>')) +
        ((address == " ") ? '' : ('<td class="attContent">' + address + '<td>')) +
        '<tr>' +
        ((fee_descr == " ") ? '' : ('<td class="att">Gebühren<td>')) +
        ((fee_descr == " ") ? '' : ('<td class="attContent">' + fee_descr + '<td>')) +
        '<tr>' +
        ((opening_h == " ") ? '' : ('<td class="att">Öffnungszeiten<td>')) +
        ((opening_h == " ") ? '' : ('<td class="attContent">' + opening_h + '<td>')) +
        '<tr>' +
        ((max_stay == " ") ? '' : ('<td class="att">Max. Parkdauer<td>')) +
        ((max_stay == " ") ? '' : ('<td class="attContent">' + max_stay + '<td>')) +
        '<tr>' +
        ((has_light == " ") ? '' : ('<td class="att">Beleuchtung<td>')) +
        ((has_light == " ") ? '' : ('<td class="attContent">' + has_light + '<td>')) +
        '<tr>' +
        ((max_hei == " ") ? '' : ('<td class="att">Max. Höhe<td>')) +
        ((max_hei == " ") ? '' : ('<td class="attContent">' + max_hei + '<td>')) +
        '<tr>' +
        ((park_ride == " ") ? '' : ('<td class="att">P+R<td>')) +
        ((park_ride == " ") ? '' : ('<td class="attContent">' + park_ride + '<td>')) +
        '<tr>' +
        ((opening_s == " ") ? '' : ('<td class="att">Geöffnet<td>')) +
        ((opening_s == " ") ? '' : ('<td class="attContent">' + opening_s + '<td>')) +
        '<tr>' +
        ((descript == " ") ? '' : ('<td class="att">Beschreibung<td>')) +
        ((descript == " ") ? '' : ('<td class="attContent">' + descript + '<td>')) +
        '</tr>\
        </table><br><table>\
            <tr>\
                <td class="title title2">Parkplätze</td>\
            </tr>\
        </table><table>\
            <tr>' +
        ((max_cap == 0.0) ? '' : ('<td class="att">Stellplätze<td>')) +
        ((max_cap == 0.0) ? '' : ('<td class="attContent">' + max_cap + '<td>')) +
        '<tr>' +
        ((capacity_d == 0.0) ? '' : ('<td class="att">für Behinderte<td>')) +
        ((capacity_d == 0.0) ? '' : ('<td class="attContent">' + capacity_d + '<td>')) +
        '<tr>' +
        ((capacity_w == 0.0) ? '' : ('<td class="att">für Frauen<td>')) +
        ((capacity_w == 0.0) ? '' : ('<td class="attContent">' + capacity_w + '<td>')) +
        '<tr>' +
        ((capacity_c == 0.0) ? '' : ('<td class="att">mit Lademöglichkeit<td>')) +
        ((capacity_c == 0.0) ? '' : ('<td class="attContent">' + capacity_c + '<td>')) +
        '<tr>' +
        ((capacity_s == 0.0) ? '' : ('<td class="att">für Carsharing<td>')) +
        ((capacity_s == 0.0) ? '' : ('<td class="attContent">' + capacity_s + '<td>')) +
        '</tr><tr>\
        </table><table>\
            <tr>\
                <td class="attContentLink"><a href="' + public_url + '" target="_blank">&#10149 zum Betreiber</a></td>\
            </tr>\
        </table>';
};

export function popKonstanzBehindertenparken(feature) {

    /* INITIALIZE VARIABLES */
    const {
        Name,
        Informatio
    } = feature;

    /* POPUP CONTENT */
    return '<table>\
            <tr>\
                <th><img src="../../../../img/popup/Stadt Konstanz.svg" class="image"></th>\
                <th class="title">' + Name + '</th>\
            </tr>\
        </table><br><table>\
            <tr>' +
        ((Informatio == " ") ? '' : ('<td class="att">Information<td>')) +
        ((Informatio == " ") ? '' : ('<td class="attContent">' + Informatio + '<td>')) +
        '</tr>\
        </table>';
};