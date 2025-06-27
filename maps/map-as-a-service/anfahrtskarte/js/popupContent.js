export function popupContent(features) {

    /* INITIALIZE VARIABLES */
    const {
        Tour,
        name,
        Guide,
        Streckenlänge,
        Fahrzeit,
        Treffpunkt,
        Höhenmeter
    } = features;

    /* POPUP CONTENT */
    return '<table>\
                <tr>' +
        (name ? '<th class="title">' + name + '</th>' : 
        ('<th class="title">' + Tour + '</th>') +
        '</tr>\
            </table><br><table>\
                <tr>\
                    <td class="att">Guide</td>\
                    <td class="attContent">' + Guide + '</td>\
                </tr><tr>\
                    <td class="att">Streckenlänge</td>\
                    <td class="attContent">' + Streckenlänge + '</td>\
                </tr><tr>\
                    <td class="att">Fahrzeit</td>\
                    <td class="attContent">' + Fahrzeit + '</td>\
                </tr><tr>\
                    <td class="att">Treffpunkt</td>\
                    <td class="attContent">' + Treffpunkt + '</td>\
                </tr><tr>\
                    <td class="att">Höhenmeter</td>\
                    <td class="attContent">' + Höhenmeter + '</td>\
                </tr>' ) +
            '</table>';
};