export function popupContentAfzs(feature) {

    /* INITIALIZE VARIABLES */
    const {
         ID,
        ['18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Von']: from,
        ['18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Nach']: to,
        ['18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Querschnitt']: count       
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                <th class="title">${ID}</th>            
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${from}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${to}</td>
            </tr><tr>
                <td class="att">Zählung</td>
                <td class="attContent">${count.toLocaleString()}</td>
            </tr>      
        </table>
    `;

};

export function popupContentStations(feature) {

    /* INITIALIZE VARIABLES */
    const {
        name_2       
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>               
               <th class="title">${name_2}</th>            
            </tr>       
        </table>
    `;

};