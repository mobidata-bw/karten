export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const {
        ID,
        TYP,
        STR_KENNUNG,
        BESCHREIBUNG,
        FAHRTRICHTUNG
    } = feature;
    
    /* POPUP CONTENT */
    return `
        <table>          
            <tr>
                <td class="att">ID</td>                
                <td class="attContent">${ID}</td>
            </tr><tr>
                <td class="att">Typ</td>                
                <td class="attContent">${TYP}</td>
            </tr>
            ${STR_KENNUNG == null ? '' : `
            <tr>
                <td class="att">Strecken-Kennung</td>               
                <td class="attContent">${STR_KENNUNG}</td>
            </tr>
            `}
            <tr>
                <td class="att">Fahrtrichtung</td>                
                <td class="attContent">${FAHRTRICHTUNG}</td>
            </tr><tr>  
                <td class="att">Beschreibung</td>                
                <td class="attContent">${BESCHREIBUNG}</td>
            </tr>
        </table>
    `;

};