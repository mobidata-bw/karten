import { iplPath } from '../../../../src/utils/paths.js';


export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        strasse,
        bezeichnung,
        blickrichtung,
        kamera_nr,
        bild
    } = features;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>              
                <th class='title'>${kamera_nr}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class='att'>Straße</td>
                <td class='attContent'>${strasse}</td>
            </tr><tr>
                <td class='att'>Standort</td>
                <td class='attContent'>${bezeichnung}</td>
            </tr><tr>
                    <td class='att'>Richtung</td>
                    <td class='attContent'>${blickrichtung}</td>
            </tr>        
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/webcam/overview/${bild}.jpg" target="_blank">&#10149 Webcam-Bild<a></td>
            </tr>
        </table>    
    `;

};