import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        ID,
        ['Externe ID']: externeId,
        Name,
        Betreiber,
        ['Zuständig in RadVIS']: zuestaendigInRadVIS,
        ['Servicestation-Typ']: servicestationTyp,
        Marke,
        Luftpumpe,
        Kettenwerkzeug,
        Werkzeug,
        Fahrradhalterung,
        Gebühren,
        Öffnungszeiten,
        Beschreibung,
        Datengeber
    } = features;
    
    /* POPUP CONTENT */
    return `
        ${Datengeber == 'Touristisches Freizeitinformationssystem' ? '' : `
        <table>            
            <tr>
                ${popupImages(Datengeber)}               
            </tr>           
        </table><br>
        `}
        <table>          
            <tr>
                <td class='att'>ID</td>
                <td class='attContent'>${ID}</td>
            </tr> 
             ${!externeId ? '' : `
            <tr>
                <td class='att'>Externe ID</td>
                <td class='attContent'>${externeId}</td>
            </tr> 
            `}          
            ${!Name ? '' : `
            <tr>
                <td class='att'>Name</td>
                <td class='attContent'>${Name}</td>
            </tr> 
            `}            
            ${!Betreiber ? '' : `
            <tr>
                <td class='att'>Betreiber</td>
                <td class='attContent'>${Betreiber}</td>
            </tr> 
            `}      
            ${!zuestaendigInRadVIS ? '' : `
                <tr>
                    <td class='att'>Zuständig in RadVIS</td>
                    <td class='attContent'>${zuestaendigInRadVIS}</td>
                </tr> 
            `}
            ${!servicestationTyp ? '' : `
                <tr>
                    <td class='att'>Servicestation-Typ</td>
                    <td class='attContent'>${servicestationTyp}</td>
                </tr>
            `}
            ${!Marke ? '' : `
            <tr>
                <td class='att'>Marke</td>
                <td class='attContent'>${Marke}</td>
            </tr> 
            `}
            ${!Luftpumpe ? '' : `
            <tr>
                <td class='att'>Luftpumpe</td>
                <td class='attContent'>${Luftpumpe}</td>
            </tr> 
            `}
            ${!Kettenwerkzeug ? '' : `
            <tr>
                <td class='att'>Kettenwerkzeug</td>
                <td class='attContent'>${Kettenwerkzeug}</td>
            </tr> 
            `}
            ${!Werkzeug ? '' : `
            <tr>
                <td class='att'>Werkzeug</td>
                <td class='attContent'>${Werkzeug}</td>
            </tr> 
            `}
            ${!Fahrradhalterung ? '' : `
            <tr>
                <td class='att'>Fahrradhalterung</td>
                <td class='attContent'>${Fahrradhalterung}</td>
            </tr> 
            `}
            ${!Gebühren ? '' : `
            <tr>
                <td class='att'>Gebühren</td>
                <td class='attContent'>${Gebühren}</td>
            </tr> 
            `}
            ${!Öffnungszeiten ? '' : `
            <tr>
                <td class='att'>Öffnungszeiten</td>
                <td class='attContent'>${Öffnungszeiten}</td>
            </tr> 
            `}
            ${!Beschreibung ? '' : `
            <tr>
                <td class='att'>Beschreibung</td>
                <td class='attContent'>${Beschreibung}</td>
            </tr> 
            `}
        </table>           
    `;

};