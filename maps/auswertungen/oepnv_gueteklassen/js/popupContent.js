export function popupContent(feature) {

    // console.log(feature);

    /* INITIALIZE VARIABLES */
    const {
        quality_gr,
        spatial_un,
        station_ca,
        public_tra
    } = feature;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${quality_gr == 'J' ? '<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>' : `<td class="attContent">${quality_gr}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${spatial_un}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${station_ca}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${(public_tra == 'bus' || public_tra == 'rufbus' || public_tra == 'odv') ? '<td class="attContent">Bus, Rufbus & On-Demand</td>' : ''}
                ${(public_tra == 're-rb' || public_tra == 's-bahn') ? '<td class="attContent">RE & RB, S-Bahn</td>' : ''}
                ${(public_tra == 'tram' || public_tra == 'stadtbahn' || public_tra == 'regiobus') ? '<td class="attContent">Tram & Stadtbahn, Regiobus</td>' : ''}
            </tr>
        </table>
    `;
    
};