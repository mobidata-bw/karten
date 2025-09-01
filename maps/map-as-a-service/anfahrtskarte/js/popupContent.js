export function popupContent(features) {

    /* INITIALIZE VARIABLES */
    const {
        Tour,
        name,
        Guide,
        Streckenlänge,
        Fahrzeit,
        Treffpunkt,
        Höhenmeter
    } = features;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                <th class="title">${Tour}</th>
            </tr>
        </table><br><table>
            ${!name ? '' : `
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${name}</td>
            </tr>
            `}
            ${!Guide ? '' : `
            <tr>
                <td class="att">Guide</td>
                <td class="attContent">${Guide}</td>
            </tr>
            `}
            ${!Streckenlänge ? '' : `
            <tr>
                <td class="att">Streckenlänge</td>
                <td class="attContent">${Streckenlänge}</td>
            </tr>
            `}
            ${!Fahrzeit ? '' : `
            <tr>
                <td class="att">Fahrzeit</td>
                <td class="attContent">${Fahrzeit}</td>
            </tr>
            `}
            ${!Treffpunkt ? '' : `
            <tr>
                <td class="att">Treffpunkt</td>
                <td class="attContent">${Treffpunkt}</td>
            </tr>
            `}
            ${!Höhenmeter ? '' : `
            <tr>
                <td class="att">Höhenmeter</td>
                <td class="attContent">${Höhenmeter}</td>
            </tr>
            `}
        </table>
    `;

};