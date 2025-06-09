export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const klasse = feature.klasse;
    const nummer = feature.nummer;
    const svznr = feature.svznr;
    const RI = feature.RI;
    const RII = feature.RII;
    const DTV2023 = feature.DTV2023;
    const DTVSV = feature.DTVSV;
    const zstart = feature.zstart;

    /* POPUP CONTENT */
    return '<table>\
        <tr>' +
        '<th class="title">' + klasse + nummer + '</th>' +
        '</tr>\
    </table><br><table>' +
        ((svznr == null) ? '' : (
            '<tr>\
                <td class="att">Zählstellen-Nr.</td>\
                <td class="attContent">' + svznr + '</td>\
            </tr>'
        )) +
        ((RI == null) ? '' : (
            '<tr>\
                <td class="att">Von</td>\
                <td class="attContent">' + RI + '</td>\
            </tr>'
        )) +
        ((RII == null) ? '' : (
            '<tr>\
                <td class="att">Nach</td>\
                <td class="attContent">' + RII + '</td>\
            </tr>'
        )) +
        ((DTV2023 == null) ? '' : (
            '<tr>\
                <td class="att">DTV KFZ</td>\
                <td class="attContent">' + DTV2023.toLocaleString() + '</td>\
            </tr>'
        )) +
        ((DTVSV == null) ? '' : (
            '<tr>\
                <td class="att">DTV SV</td>\
                <td class="attContent">' + DTVSV.toLocaleString() + '</td>\
            </tr>'
        )) +
        '<tr>\
            <td class="att">Ergebnis aus Jahr</td>\
            <td class="attContent">2023</td>\
        </tr>\
    </table><table>\
        <tr>\
            <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/endergebnisse_strassenverkehrszaehlung#daten&ressourcen" target="_blank">&#10149 Endergebnisse der SVZ</a></td>\
        </tr>'+
        ((zstart == 'DZ') ? (
            '<tr>\
            <td class="attContentLink"><a href="https://mobidata-bw.de/dataset/ergebnisse_ganglinien_dauerzaehlstellen#daten&ressourcen" target="_blank">&#10149 Ergebnisse der Dauerzählstellen</a></td>\
        </tr><tr>\
            <td class="attContentLink"><a href="https://mobidata-bw.de/dataset/stundenwerte_dauerzaehlstellen#daten&ressourcen" target="_blank">&#10149 Stundenwerte der Dauerzählstellen</a></td>\
        </tr>'
        ) : '') +
        '</table > ';

};