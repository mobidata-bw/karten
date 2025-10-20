export function popupContentAfzs(feature) {

    /* INITIALIZE VARIABLES */
    const {
        Von,
        Nach,
        Querschnitt: count,
        ['2025_HJ_1']: count_last,
        ['2024_HJ_2']: count_second_last,
        ['2024_HJ_1']: count_third_last
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
                <td class="attContent">${Von}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${Nach}</td>           
            </tr>
        </table><br>
        <div class="title title2">Zählung</div>
        <table>
            <tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${count.toLocaleString()}</td>
            </tr><tr>
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