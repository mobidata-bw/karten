export function popupContentAfzs(feature) {

    /* INITIALIZE VARIABLES */
    const {
        ['22.10.2025_Querschnitt_Von']: from,
        ['22.10.2025_Querschnitt_Nach']: to,
        ['22.10.2025_Querschnitt_Querschnitt']: count,
        ['22.10.2025_Querschnitt_1. HJ 2025']: count_last,
        ['22.10.2025_Querschnitt_2.HJ 2024']: count_second_last,
        ['22.10.2025_Querschnitt_1.HJ 2024']: count_third_last
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>    
            ${count == null ? `
            <tr>
                <td class="attContent"><i>Zähldaten nicht vorhanden</i></td>
            </tr> 
            ` : `     
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${from}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${to}</td>           
            </tr>
        </table><br>
        <div class="title title2">Zählung</div>
        <table>
            <tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${count.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2025</td>
                <td class="attContent">${count_last.toLocaleString()}</td>
            </tr><tr>
                <td class="att">2. Hj. 2024</td>
                <td class="attContent">${count_second_last.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2024</td>
                <td class="attContent">${count_third_last.toLocaleString()}</td>
            </tr>   
            `}   
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