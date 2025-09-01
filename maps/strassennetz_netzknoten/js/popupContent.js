export function popupContentStrassennetz(feature) {

    /* INITIALIZE VARIABLES */
    const {
        StrassenName,
        Anfangsnetzknoten,
        Endnetzknoten
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                <th class="title">${StrassenName}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Anfangsnetzknoten</td>
                <td class="attContent">${Anfangsnetzknoten}</td>
            </tr><tr>
                <td class="att">Endnetzknoten</td>
                <td class="attContent">${Endnetzknoten}</td>
            </tr>
        </table>
    `;

};

export function popupContentNetzknoten(feature) {

    /* INITIALIZE VARIABLES */
    const {
        NK_Name,
        Netzknoten,
        NKArt
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                <th class="title">${NK_Name}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Netzknoten-ID</td>
                <td class="attContent">${Netzknoten}</td>
            </tr><tr>
                <td class="att">Netzknotenart</td>
                <td class="attContent">${NKArt}</td>
            </tr>
        </table>
        `;

};