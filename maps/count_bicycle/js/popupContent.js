import { popupImages } from "../../../src/js/popupImages.js";
import { popupCanvas } from "./popupCanvas.js";


export function popupContent(feature) {

    /* INITIALIZE constIABLES */
    const {
        domain_name,
        counter_site,
        counter_site_id,
        iso_timestamp,
        ['2024_ALL']: countEndYear,
        ALL
    } = feature;

    /* CONVERT TIMESTAMP */
    const dateField = new Date(iso_timestamp);
    const date = dateField.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }); 

    /* SET UNIT */
    let unit;
    if (countEndYear >= 100000) {
        unit = 'Mio.'
    } else {
        unit = 'Tsd.'
    };

    /* POPUP CONTENT */
    const htmlContent = `
        <table id="popupContentTableCountBicycle">
            <tr>
                ${domain_name == 'Stadt Freiburg' ? popupImages('Stadt Freiburg im Breisgau') : popupImages(domain_name)}
                <th class="title">${counter_site}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${domain_name}</td>
            </tr><tr>
                <td class="att">Zählstellen-ID</td>
                <td class="attContent">${counter_site_id}</td>
            </tr><tr>
                <td class="att">Erstzählung</td>
                <td class="attContent">${date}</td>
            </tr>            
        </table>
        ${!ALL ? '' : (`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in ${unit})</td>
            </tr>
        </table><table>
            <tr>
                ${ALL == 0 ? '<td><i class="attContent">keine Zähldaten</i></td>' : ''}
        </table>
        `)}
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${counter_site_id}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>
            <tr>
        </table>
    `;


    setTimeout(() => {
        popupCanvas(feature);
    }, 0);


    return htmlContent;

};