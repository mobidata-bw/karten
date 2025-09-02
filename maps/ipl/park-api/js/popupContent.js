import { iplPath } from '../../../../src/utils/paths.js';
import { timeStamps } from '../../../../src/js/timeStamps.js';
import { popupImages } from '../../../../src/js/popupImages.js';
import { popupCanvas } from './popupCanvas.js';


export function popupContent(features) {
    // console.log(features);

    /* INITIALIZE VARIABLES */
    const {
        parking_object,
        realtime_data_updated_at,
        realtime_data_outdated,
        has_realtime_data,
        // PARKING SITES
        source_id,
        id,
        name,
        operator_name,
        type,
        purpose,
        address,
        park_and_ride_type,
        realtime_opening_status,
        capacity,
        capacity_disabled,
        capacity_woman,
        capacity_family,
        capacity_charging,
        capacity_carsharing,
        realtime_capacity,
        realtime_free_capacity,
        public_url,
        photo_url,
        // PARKING SPOTS
        realtime_status,
        restriction_type,
        restriction_hours,
        restriction_max_stay
    } = features;

    let date, time;

    if (realtime_data_updated_at) {
        ({ date, time } = timeStamps(realtime_data_updated_at));
    };

    /* POPUP CONTENT */
    const spots = `
            <tr>
            <td class="att">alle (frei/gesamt)</td>
            ${realtime_status == 'AVAILABLE' ? '<td class="attContent">1 / 1</td>' : ''}
            ${realtime_status == 'TAKEN' ? '<td class="attContent">0 / 1</td>' : ''}
            ${realtime_status == 'UNKNOWN' ? '<td class="attContent">- / 1</td>' : ''}
            ${(!has_realtime_data || !realtime_status) ? '<td class="attContent">- / 1</td>' : ''}
            </tr>
            ${!restriction_type ? '' : `
            <tr>
                <td class="att">Parkberechtigte</td>
                ${restriction_type == '' ? '<td class="attContent">alle</td>' : ''}
                ${restriction_type.match('DISABLED') ? '<td class="attContent">Behinderte</td>' : ''}
                ${restriction_type.match('CHARGING') ? '<td class="attContent">zum Laden</td>' : ''}
                ${restriction_type.match('FAMILY') ? '<td class="attContent">Familien</td>' : ''}
            </tr>
            `}
            ${!restriction_hours ? '' : `
            <tr>
                <td class="att">Parkzeiten</td>
                <td class="attContent">${restriction_hours}</td>
            </tr>
            `}
            ${!restriction_max_stay ? '' : `
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${restriction_max_stay}</td>
            </tr>
            `}
    `;

    const sites = `
            ${(!capacity && !realtime_capacity) ? '' : `
            <tr>
                <td class="att2">alle (frei/gesamt)</td>
                <td class="attContent2">
                ${(has_realtime_data == false || !realtime_free_capacity) ? '-' : realtime_free_capacity}
                / 
                ${(!realtime_capacity && capacity == undefined) ? '-' : (realtime_capacity ? realtime_capacity : capacity)}
                </td>
            </tr>
            `}
            ${(!capacity_disabled || capacity_disabled == '0') ? '' : `
            <tr><td class="att2">für Behinderte</td><td class="attContent2">${capacity_disabled}</td></tr>
            `}
            ${(!capacity_woman || capacity_woman == '0') ? '' : `
            <tr><td class="att2">für Frauen</td><td class="attContent2">${capacity_woman}</td></tr>
            `}
            ${(!capacity_family || capacity_family == '0') ? '' : `
            <tr><td class="att2">für Familien</td><td class="attContent2">${capacity_family}</td></tr>
            `}
            ${(!capacity_charging || capacity_charging == '0') ? '' : `
            <tr><td class="att2">mit Lademöglichkeit</td><td class="attContent2">${capacity_charging}</td></tr>
            `}
            ${(!capacity_carsharing || capacity_carsharing == '0') ? '' : `
            <tr><td class="att2">für Carsharing</td><td class="attContent2">${capacity_carsharing}</td></tr>
            `}
            `;

    const htmlContent = `
        <table>
            <tr>
            <th id="logos-${id}"></th>
            ${name ? `<th class="title">${name}</th>` : ''}
            </tr>
        </table>
        <br>
        <table>
            <tr id="datengeber-${id}"></tr>
            ${(!operator_name || operator_name == '-' || operator_name == '') ? '' : `
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${operator_name}</td>
            </tr>
            `}
            <tr>
                <td class="att">Typ</td>
                ${type == 'ON_STREET' ? '<td class="attContent">Straßen-Parkplatz</td>' : ''}
                ${type == 'OFF_STREET_PARKING_GROUND' ? '<td class="attContent">Parkplatz abseits der Straße</td>' : ''}
                ${type == 'CAR_PARK' ? '<td class="attContent">Parkhaus</td>' : ''}
                ${type == 'UNDERGROUND' ? '<td class="attContent">Tiefgarage</td>' : ''}
                ${type == 'WALL_LOOPS' ? '<td class="attContent">Vorderradhalter</td>' : ''}
                ${type == 'SAFE_WALL_LOOPS' ? '<td class="attContent">Vorderradhalter mit Sicherung</td>' : ''}
                ${type == 'STANDS' ? '<td class="attContent">Anlehnbügel</td>' : ''}
                ${(type == 'LOCKERS' && purpose == 'BIKE') ? '<td class="attContent">Fahrradschrank</td>' : ''}
                ${((type == 'LOCKERS' && purpose == 'ITEM') || type == 'LOCKBOX') ? '<td class="attContent">Schließfach</td>' : ''}
                ${type == 'SHED' ? '<td class="attContent">Sammelanlage</td>' : ''}
                ${type == 'TWO_TIER' ? '<td class="attContent">Zweistock-Abstellanlage</td>' : ''}
                ${type == 'BUILDING' ? '<td class="attContent">Parkhaus</td>' : ''}
                ${type == 'FLOOR' ? '<td class="attContent">Abstellfläche</td>' : ''}
                ${type == 'OTHER' ? '<td class="attContent">Sonstige</td>' : ''}
                ${!type ? '<td class="attContent">unbekannt</td>' : ''}
            </tr>
            ${!address ? '' : `
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${address}</td>
            </tr>
            `}
            ${!park_and_ride_type ? '' : `
            <tr>
                <td class="att">P+R-Typ</td>
                ${park_and_ride_type == 'CARPOOL' ? '<td class="attContent">Fahrgemeinschaft</td>' : ''}
                ${park_and_ride_type == 'TRAIN' ? '<td class="attContent">Bahn</td>' : ''}
                ${park_and_ride_type == 'BUS' ? '<td class="attContent">Bus</td>' : ''}
                ${park_and_ride_type == 'TRAM' ? '<td class="attContent">Straßenbahn</td>' : ''}
                ${park_and_ride_type == 'YES' ? '<td class="attContent">ja</td>' : ''}
                ${park_and_ride_type == 'NO' ? '<td class="attContent">nein</td>' : ''}
            </tr>
            `}
            ${!realtime_opening_status ? '' : `
            <tr>
                <td class="att">Status</td>
                ${realtime_opening_status == 'OPEN' ? '<td class="attContent">geöffnet</td>' : ''}
                ${realtime_opening_status == 'CLOSED' ? '<td class="attContent">geschlossen</td>' : ''}
                ${realtime_opening_status == 'UNKNOWN' ? '<td class="attContent">unbekannt</td>' : ''}
            </tr>
            `}
            ${has_realtime_data == false ? '' : `
            <tr>
                <td class="att">Stand Echtzeitdaten</td>
                ${realtime_data_outdated
                ? `<td class="attContent outDated">${date}, ${time}</td>`
                : `<td class="attContent">${date}, ${time}</td>`}
            </tr>
            `}
        </table>
        <br>
        <div class="title title2">Parkplätze</div>
        <div id="divParkingSites">
        <div><div id="anchor-${id}"></div></div>
        <div id="divTable">
        <table>
            ${parking_object == 'spot' ? spots : sites}
        </table>
            </div>
        </div>
        <table id="divURLs">
            <tr>
                ${public_url ? `<td class="attContentLink"><a href="${public_url}" target="_blank">&#10149 Datengeber</a></td>` : ''}
                <td class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/park-api/api/public/v3/parking-${parking_object}s/${id}" target="_blank">&#10149 ParkAPI</a></td>
                ${photo_url ? `<td class="attContentLink"><a href="${photo_url}" class="photoMargin" target="_blank">&#10149 Foto</a></td>` : ''}
            </tr>
        </table>
    `;

    /* PARK API SOURCES */
    setTimeout(() => {

        fetch(`https://${iplPath}.mobidata-bw.de/park-api/api/public/v3/sources`)
            .then(response => response.json())
            .then(data => {

                let htmlLogo = '', htmlDatengeber = '';

                data.items.forEach(item => {

                    const mapDatengeber = {
                        'aalen': 'Stadt Aalen',
                        'apcoa': 'APCOA PARKING',
                        'bahn_v2': 'DB BahnPark',
                        'bb_parkhaus': 'B+B Parkhaus GmbH & Co. KG',
                        'bfrk': 'NVBW',
                        'bietigheim_bissingen': 'Stadt Bietigheim-Bissingen',
                        'buchen': 'Stadt Buchen',
                        'ellwangen': 'Stadt Ellwangen',
                        'esslingen': 'Stadt Esslingen',
                        'freiburg': 'Stadt Freiburg im Breisgau',
                        'friedrichshafen': 'Stadt Friedrichshafen',
                        'goldbeck': 'Goldbeck',
                        'heidelberg': 'Stadt Heidelberg',
                        'herrenberg': 'Stadt Herrenberg',
                        'huefner': 'PARK SERVICE HÜFNER GmbH + Co. KG',
                        'karlsruhe': 'Stadt Karlsruhe',
                        'keltern': 'Stadt Keltern',
                        'kienzler': 'Kienzler',
                        'konstanz': 'Stadt Konstanz',
                        'mannheim': 'Stadt Mannheim',
                        'm_bw': 'Verkehrsministerium Baden-Württemberg',
                        'neckarsulm': 'Stadt Neckarsulm',
                        'opendata_swiss': 'Open-Data-Plattform Schweiz',
                        'pbw': 'Parkraumgesellschaft Baden-Württemberg mbH',
                        'pforzheim': 'Stadt Pforzheim',
                        'radvis_bw': 'RadVIS',
                        'reutlingen': 'Stadt Reutlingen',
                        'stuttgart_': 'Stadt Stuttgart',
                        'ulm_': 'Stadt Ulm',
                        'velobrix': 'Velobrix',
                        'vrn_': 'Verkehrsverbund Rhein-Neckar',
                        'vrs': 'Verband Region Stuttgart'
                    };

                    for (let key in mapDatengeber) {
                        if (item.uid.match(key) && source_id == item.id) {
                            htmlLogo += popupImages(mapDatengeber[key]);
                            htmlDatengeber += `<td class="attContent">${mapDatengeber[key]}</td>`;
                        }
                    };

                });

                const thLogo = document.getElementById('logos-' + id);
                if (thLogo && htmlLogo) thLogo.innerHTML = htmlLogo;

                const trDatengeber = document.getElementById('datengeber-' + id);
                if (trDatengeber && htmlDatengeber) trDatengeber.innerHTML = `
                    <td class="att">Datengeber</td>
                    <td class="attContent"${htmlDatengeber}</td>`;

            });

        /* INITIALIZE POPUP CANVAS */
        popupCanvas(features);

    }, 0);

    return htmlContent;

};