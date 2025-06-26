export function popupContent(features) {

    /* INITIALIZE VARIABLES */ 
    const {
        Name,
        Location
    } = features;

    /* POPUP CONTENT */   
    return '<table>\
                <tr>\
                    <th class="title">' + Name + '</th>\
                </tr>\
            </table><br><table>\
                <tr>\
                    <td class="attContent">' + Location + '</td>\
                </tr>\
            </table>';
};