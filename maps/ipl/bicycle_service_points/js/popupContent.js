import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        RadVIS_ID,
        Name,
        Betreiber,      
        Zuestaendig_in_RadVIS,
        Servicestation_Typ,
        Marke,
        Luftpumpe,
        Kettenwerkzeug,
        Werkzeug,
        Fahrradhalterung,       
        Gebuehren,
        Oeffnungszeiten,
        Beschreibung,
        QuelleLayer
    } = features;

    /* MAPPING */   
    const datengeberMap = {     
        'RadVIS': 'RadVIS',
        'RadKULTUR': 'RadKULTUR',
        'SB_Fahrradreparaturstationen(Konstanz)': 'Stadt Konstanz',
        'Frelo-Radreparaturstationen': 'Stadt Freiburg im Breisgau'       
    };

    let logo = '';
    
    for (let key in datengeberMap) {
        if (QuelleLayer == key && !QuelleLayer.includes('TFIS')) {
            logo += popupImages(datengeberMap[key]);            
        }
    };

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${logo}
                ${!RadVIS_ID ? `<th class='title'><i>ohne ID</i></th>` : `<th class='title'>${RadVIS_ID}</th>`}
            </tr>
        </table><br><table>
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
        ${!Zuestaendig_in_RadVIS ? '' : `
            <tr>
                <td class='att'>Zuständig in RadVIS</td>
                <td class='attContent'>${Zuestaendig_in_RadVIS}</td>
            </tr> 
        `}
        ${!Servicestation_Typ ? '' : `
            <tr>
                <td class='att'>Servicestation-Typ</td>
                <td class='attContent'>${Servicestation_Typ}</td>
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
        ${!Gebuehren ? '' : `
        <tr>
            <td class='att'>Gebühren</td>
            <td class='attContent'>${Gebuehren}</td>
        </tr> 
        `}
        ${!Oeffnungszeiten ? '' : `
        <tr>
            <td class='att'>Öffnungszeiten</td>
            <td class='attContent'>${Oeffnungszeiten}</td>
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