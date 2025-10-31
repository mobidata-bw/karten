import { popupImages } from '../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const {     
        XDSegID, // "252866865"        
        FRC, // "5"      
        County, // "Waiblingen",       
        PostalCode, // "71334",
        Miles, // "0.05262088900788874",
        Lanes, // "1.0",      
        RoadList, // "Aldinger Stra\u00dfe"       
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>            
           ${XDSegID == '' ? '' : `
            <tr>
                <td class="att">Abschnitt</td>
                <td class="attContent">${XDSegID}</td>               
            </tr>
            `}           
            ${Miles == '' ? '' : `
            <tr>
                <td class="att">Länge</td>
                <td class="attContent">${Math.round(Miles * 1609.344)} m</td>               
            </tr>
            `}        
            ${Lanes == '' ? '' : `
            <tr>
                <td class="att">Fahrstreifen</td>
                <td class="attContent">${Lanes}</td>               
            </tr>
            `}           
            ${FRC == '' ? '' : `
            <tr>
                <td class="att">Straßenklasse</td>
                <td class="attContent">${FRC}</td>               
            </tr>
            `}
            ${RoadList == '' ? '' : `
            <tr>
                <td class="att">Straßenname</td>
                <td class="attContent">${RoadList}</td>               
            </tr>
            `}
            ${(County == '' && PostalCode == '') ? '' : `
            <tr>
                <td class="att">Ort</td>
                <td class="attContent">${PostalCode + ' ' + County}</td>               
            </tr>
            `}       
              
        </table>
    `;

};