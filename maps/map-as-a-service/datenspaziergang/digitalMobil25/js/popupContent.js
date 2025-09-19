export function popupContent(features) {

    /* INITIALIZE VARIABLES */ 
    const {
        Station
    } = features;

    /* POPUP CONTENT */   
    return `
        <table>
            <tr>
                <th class="title">${Station}</th>
            </tr>        
        </table>
    `;
};