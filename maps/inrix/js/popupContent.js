import { popupImages } from '../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */
    const {
        OID, // "18879736"
        XDSegID, // "252866865"
        PreviousXD, // ""
        NextXDSegI, // ""
        FRC, // "5"
        RoadNumber, // "",
        RoadName, // "Aldinger Stra\u00dfe",
        LinearID, // "",
        Country, // "Deutschland",
        State, // "Baden-W\u00fcrttemberg",
        County, // "Waiblingen",
        District, // "",
        PostalCode, // "71334",
        Miles, // "0.05262088900788874",
        Lanes, // "1.0",
        SlipRoad, // "0",
        SpecialRoa, // "",
        RoadList, // "Aldinger Stra\u00dfe",     
        Bearing, // "N",
        XDGroup // "4",
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            ${OID == '' ? '' : `
            <tr>
                <td class="att">OID</td>
                <td class="attContent">${OID}</td>               
            </tr>
            `}
           ${XDSegID == '' ? '' : `
            <tr>
                <td class="att">XDSegID</td>
                <td class="attContent">${XDSegID}</td>               
            </tr>
            `}
            ${PreviousXD == '' ? '' : `
            <tr>
                <td class="att">PreviousXD</td>
                <td class="attContent">${PreviousXD}</td>               
            </tr>
            `}
            ${NextXDSegI == '' ? '' : `
            <tr>
                <td class="att">NextXDSegI</td>
                <td class="attContent">${NextXDSegI}</td>               
            </tr>
            `}
            ${FRC == '' ? '' : `
            <tr>
                <td class="att">FRC</td>
                <td class="attContent">${FRC}</td>               
            </tr>
            `}
            ${RoadNumber == '' ? '' : `
            <tr>
                <td class="att">RoadNumber</td>
                <td class="attContent">${RoadNumber}</td>               
            </tr>
            `}
            ${RoadName == '' ? '' : `
            <tr>
                <td class="att">RoadName</td>
                <td class="attContent">${RoadName}</td>               
            </tr>
            `}
            ${LinearID == '' ? '' : `
            <tr>
                <td class="att">LinearID</td>
                <td class="attContent">${LinearID}</td>               
            </tr>
            `}
            ${Country == '' ? '' : `
            <tr>
                <td class="att">Country</td>
                <td class="attContent">${Country}</td>               
            </tr>
            `}
            ${State == '' ? '' : `
            <tr>
                <td class="att">State</td>
                <td class="attContent">${State}</td>               
            </tr>
            `}
            ${County == '' ? '' : `
            <tr>
                <td class="att">County</td>
                <td class="attContent">${County}</td>               
            </tr>
            `}
            ${District == '' ? '' : `
            <tr>
                <td class="att">District</td>
                <td class="attContent">${District}</td>               
            </tr>
            `}
            ${PostalCode == '' ? '' : `
            <tr>
                <td class="att">PostalCode</td>
                <td class="attContent">${PostalCode}</td>               
            </tr>
            `}
            ${Miles == '' ? '' : `
            <tr>
                <td class="att">Miles</td>
                <td class="attContent">${Miles}</td>               
            </tr>
            `}
            ${Lanes == '' ? '' : `
            <tr>
                <td class="att">Lanes</td>
                <td class="attContent">${Lanes}</td>               
            </tr>
            `}
            ${SlipRoad == '' ? '' : `
            <tr>
                <td class="att">SlipRoad</td>
                <td class="attContent">${SlipRoad}</td>               
            </tr>
            `}
            ${SpecialRoa == '' ? '' : `
            <tr>
                <td class="att">SpecialRoa</td>
                <td class="attContent">${SpecialRoa}</td>               
            </tr>
            `}
            ${RoadList == '' ? '' : `
            <tr>
                <td class="att">RoadList</td>
                <td class="attContent">${RoadList}</td>               
            </tr>
            `}
            ${Bearing == '' ? '' : `
            <tr>
                <td class="att">Bearing</td>
                <td class="attContent">${Bearing}</td>               
            </tr>
            `}
            ${XDGroup == '' ? '' : `
            <tr>
                <td class="att">XDGroup</td>
                <td class="attContent">${XDGroup}</td>               
            </tr>
            `}
        </table>
    `;

};