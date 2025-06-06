export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        street,
        direction,
        type,
        subtype,
        starttime,
        endtime,
        description
    } = features;

    return '<table>\
                    <tr>' +
        ((street == null) ? '' : ('<th class="title">' + street + '</th>')) +
        '</tr>\
                </table><br><table>\
                    <tr>' +
        ((direction == null) ? '' : ('<td class="att">Richtung</td>')) +
        ((direction == 'BOTH_DIRECTIONS') ? ('<td class="attContent">Beide Richtungen</td>') : '') +
        ((direction == 'ONE_DIRECTION') ? ('<td class="attContent">Eine Richtung</td>') : '') +
        '</tr><tr>' +
        ((type == null) ? '' : ('<td class="att">Einschränkung</td>')) +
        ((subtype == 'ROAD_CLOSED_CONSTRUCTION') ? ('<td class="attContent">Straße gesperrt wegen Bauarbeiten</td>') : (
            ((type == 'ROAD_CLOSED') ? ('<td class="attContent">Straße gesperrt</td>') : '') +
            ((type == 'CONSTRUCTION') ? ('<td class="attContent">Bauarbeiten</td>') : '')
        )
        ) +
        '</tr>' +
        ((starttime == null) ? '' : (
            '<tr>\
            <td class="att">Beginn</td>\
            <td class="attContent">' + starttime + '</td>\
        </tr>'
        )) +
        ((endtime == null) ? '' : (
            '<tr>\
            <td class="att">Ende</td>\
            <td class="attContent">' + endtime + '</td>\
            </tr>'
        )) +
        ((description == null) ? '' : (
            '<tr>\
            <td class="att">Beschreibung</td>\
            <td class="attContent">' + description + '</td>\
         </tr>'
        )) +
        '</table>';
};