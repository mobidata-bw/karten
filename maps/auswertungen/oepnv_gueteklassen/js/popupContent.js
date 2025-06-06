export function popupContent(feature) {

    // console.log(feature);

    /* INITIALIZE VARIABLES */
    const {
        qg,
        su,
        sc,
        pt
    } = feature;

    /* POPUP CONTENT */
    return '<table>\
                <tr>\
                    <td class="att">Güteklasse</td>' +
                    (qg == 'J'  ? '<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>' : '<td class="attContent">' + qg + '</td>') +
                '</tr><tr>\
                    <td class="att">Haltestellen-ID</td>\
                    <td class="attContent">' + su + '</td>\
                </tr><tr>\
                    <td class="att">Haltestellenkategorie</td>\
                    <td class="attContent">' + sc + '</td>\
                </tr><tr>\
                    <td class="att">Maßgebliche Verkehrsmittelkategorie</td>' +
                    ((pt == 'bus' || pt == 'rufbus' || pt == 'odv') ? '<td class="attContent">Bus, Rufbus & On-Demand</td>' : '') +
                    ((pt == 're-rb' || pt == 's-bahn') ? '<td class="attContent">RE & RB, S-Bahn</td>' : '') +
                    ((pt == 'tram' || pt == 'stadtbahn' || pt == 'regiobus') ? '<td class="attContent">Tram & Stadtbahn, Regiobus</td>' : '') +
                '</tr>\
            </table>';
};