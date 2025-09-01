import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContentOnStreet(feature) {

    /* INITIALIZE VARIABLES */
    const {
        Layer1,
        Layer2,
        Parkwinkel,
        length,
        Straßenseite,
        Zahlungszeitraum,
        Höchstparkdauer,
        Details

    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages('Stadt Friedrichshafen')}
                ${Layer2 == null ? `<th class="title">${Layer1}</th>` : `<th class="title">${Layer2}</th>`}
            </tr>
        </table><br><table>
            <tr>
                ${(Parkwinkel == null || Parkwinkel == 'no_parking') ? '' : '<td class="att">Geschätzte Anzahl</td>'}
                ${Parkwinkel == 'perpendicular' ? `<td class="attContent">${Math.round(length / 2.5)}</td>` : ''}
                ${Parkwinkel == 'parallel' ? `<td class="attContent">${Math.round(length / 5)}</td>` : ''}
                ${Parkwinkel == 'diagonal' ? `<td class="attContent">${Math.round(length / 3)}</td>` : ''}
            </tr><tr>
                ${(Parkwinkel == null || Parkwinkel == 'no_parking') ? '' : '<td class="att">Parkwinkel</td>'}
                ${Parkwinkel == 'perpendicular' ? '<td class="attContent">quer</td>' : ''}
                ${Parkwinkel == 'parallel' ? '<td class="attContent">längs</td>' : ''} 
                ${Parkwinkel == 'diagonal' ? '<td class="attContent">schräg</td>' : ''}                     
            </tr><tr>
                ${Straßenseite == null ? '' : '<td class="att">Straßenseite</td>'}
                ${Straßenseite == 'right' ? '' : '<td class="attContent">rechts</td>'}
                ${Straßenseite == 'left' ? '' : '<td class="attContent">links</td>'}
            </tr>
                ${Zahlungszeitraum == null ? '' : `
                <tr>
                    <td class="att">Zahlungszeitraum</td>
                    <td class="attContent">${Zahlungszeitraum}</td>
                </tr>
                `}
                ${Höchstparkdauer == null ? '' : `
                <tr>
                    <td class="att">Höchstparkdauer</td>
                    <td class="attContent">${Höchstparkdauer}</td>
                </tr>
                `}
                ${Details == null ? '' : `
                <tr>
                    <td class="att">Details</td>
                    <td class="attContent">${Details}</td>
                </tr>
                `}
            </table>
        `;

};

export function popupContentTaxis() {

    return `
        <table>
            <tr>
                <th class="title">Taxistand</th>
            </tr>
        </table>
    `;

};