import { popupImages } from "../../../src/js/popupImages.js";
import { popupCanvas } from "./popupCanvas.js";


export function popupContent(feature) {

    /* INITIALIZE constIABLES */
    const domainName = feature.domain_name;
    const counterSite = feature.counter_site;
    const counterSideId = feature.counter_site_id;
    const all = feature.ALL;

    /* POPUP CONTENT */
    const htmlContent =
        '<table id="popupContentTableCountBicycle">\
                <tr>' +
        ((domainName == 'Stadt Freiburg') ? popupImages('Stadt Freiburg im Breisgau') : popupImages(domainName)) +
        '<th class="title">' + counterSite + '</th>\
                </tr>\
            </table><br><table>\
                <tr>\
                    <td class="att">Datengeber</td>\
                    <td class="attContent">' + domainName + '</td>\
                </tr><tr>\
                    <td class="att">Zählstellen-ID</td>\
                    <td class="attContent">' + counterSideId + '</td>\
                </tr>\
            </table>' +
        ((!all) ? '' :
            ('<br><table>\
                <tr>\
                    <td class="title title2">Jährliche Zähldaten seit 2013 (in Mio.)</td>\
                </tr>\
            </table><table>\
                <tr>' +
                (((all == 0) ? ('<td><i class="attContent">keine Zähldaten</i></td>') : '')) +
                '</table>')) +
        '<table>\
                <tr>\
                    <td><canvas class="canvasBar" id="canvas-' + counterSideId + '" width="300" height="100" /></td>\
                <tr>\
            </table>\
            <table>\
                <tr>\
                    <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>\
                <tr>\
            </table>';


    setTimeout(() => {
        popupCanvas(feature);
    }, 0);


    return htmlContent;

};