import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const {
        name,
        portal,
        ÖPNV,
        Sharing,
        Parken,
        Radverkehr,
        Laden,
        Barrierefreiheit,
        Baustellen,
        Verkehrszeichen,
        Verkehrskameras,
        Autoverkehr,
        url
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages(
                ({
                    'Baden-Württemberg': 'MobiDataBW',
                    'Deutschland': 'Mobilithek',
                    'Frankreich': 'transport.data.gouv.fr',
                    'Österreich': 'data.gv.at',
                    'Schweiz': 'Open-Data-Plattform Schweiz',
                }[name]) ?? name
            )}
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Portal</td>
                <td class="attContent">${portal}</td>
            </tr>
            <tr>
                <td class="att">Zuständigkeit</td>
                <td class="attContent">${name}</td>
            </tr>
        </table><br><table>
            <tr>
              <td class="title title2">Datenangebot</td>
            </tr>
            ${ (ÖPNV == 'ja') ? '<tr><td class="attContent">ÖPNV</td></tr>' : '' }
            ${ (Sharing == 'ja') ? '<tr><td class="attContent">Sharing</td></tr>' : '' }
            ${ (Parken == 'ja') ? '<tr><td class="attContent">Parken</td></tr>' : '' }
            ${ (Radverkehr == 'ja') ? '<tr><td class="attContent">Radverkehr</td></tr>' : '' }
            ${ (Laden == 'ja') ? '<tr><td class="attContent">Laden</td></tr>' : '' }
            ${ (Barrierefreiheit == 'ja') ? '<tr><td class="attContent">Barrierefreiheit</td></tr>' : '' }
            ${ (Baustellen == 'ja') ? '<tr><td class="attContent">Baustellen</td></tr>' : '' }
            ${ (Verkehrszeichen == 'ja') ? '<tr><td class="attContent">Verkehrszeichen</td></tr>' : '' }
            ${ (Verkehrskameras == 'ja') ? '<tr><td class="attContent">Verkehrskameras</td></tr>' : '' }
            ${ (Autoverkehr == 'ja') ? '<tr><td class="attContent">Autoverkehr</td></tr>' : '' }
        </table><table>
            <tr>
                <td class="attContentLink"><a href="${url}" target="_blank">&#10149 zum Portal</a></td>
            </tr>
        </table>
    `;

};