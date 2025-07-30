import { iplPath } from '../../../utils/paths.js';
import { timeStamps } from '../../timeStamps.js';
import { popupImages } from '../../popupImages.js';
import { popupCanvas } from './popupCanvas.js';

export function popupContent(features) {
    // console.log(features);

    popupCanvas(features);

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

    /* MAPPING */
    let datengeberMapping = new Map();

    /* PROD */
    datengeberMapping = {
        "2": "Stadt Freiburg im Breisgau",
        "3": "Stadt Heidelberg",
        "6": "DB BahnPark",
        "7": "Parkraumgesellschaft Baden-Württemberg mbH",
        "8": "Stadt Neckarsulm",
        "9": "Verband Region Stuttgart",
        "10": "Stadt Pforzheim",
        "11": "Stadt Reutlingen",
        "12": "Stadt Karlsruhe",
        "15": "Stadt Reutlingen",
        "16": "Verkehrsministerium Baden-Württemberg",
        "21": "Stadt Karlsruhe",
        "22": "Stadt Ellwangen",
        "23": "Stadt Buchen",
        "24": "Stadt Bietigheim-Bissingen",
        "25": "Verkehrsministerium Baden-Württemberg",
        "26": "APCOA PARKING",
        "27": "Stadt Herrenberg",
        "28": "RadVIS",
        "29": "Goldbeck",
        "30": "Open-Data-Plattform Schweiz",
        "31": "Kienzler",
        "33": "Kienzler",
        "34": "Kienzler",
        "35": "Kienzler",
        "36": "Kienzler",
        "37": "Stadt Konstanz",
        "38": "NVBW",
        "39": "NVBW",
        "40": "Verband Region Stuttgart",
        "41": "Verband Region Stuttgart",
        "42": "Verband Region Stuttgart",
        "43": "Verband Region Stuttgart",
        "44": "PARK SERVICE HÜFNER",
        "45": "Stadt Herrenberg",
        "47": "Stadt Konstanz",
        "48": "Stadt Mannheim",
        "49": "VELOBRIX",
        "50": "Verkehrsverbund Rhein-Neckar",
        "51": "Stadt Friedrichshafen",
        "51": "Stadt Friedrichshafen",
        "52": "Stadt Freiburg im Breisgau",
        "53": "Stadt Freiburg im Breisgau",
        "54": "Stadt Ulm",
        "55": "Stadt Mannheim",
        "56": "Stadt Freiburg im Breisgau",
        "57": "Stadt Freiburg im Breisgau",
        "58": "B+B Parkhaus GmbH & Co. KG",
        "59": "Stadt Freiburg im Breisgau",
        "60": "Stadt Heidelberg",
        "61": "Stadt Esslingen",
        "62": "Stadt Keltern",
        "63": "Stadt Reutlingen",
        "64": "Stadt Stuttgart"
    };


    /* LOGOS */
    let logo = '', datengeber = '';

    for (let key in datengeberMapping) {
        if (source_id == key) {
            logo += popupImages(datengeberMapping[key]);
            datengeber += `<td class="attContent">${datengeberMapping[key]}</td>`;
        }
    };


    /* POPUP CONTENT */
    const htmlContent =
        '<table>\
                <tr>' +
        logo +
        ((!name) ? '' : (
            '<th class="title">' + name + '</th>'
        )) +
        '</table><br><table>' +
        ((datengeber == '') ? '' : (
            '<tr>\
            <td class="att">Datengeber</td>' +
            datengeber +
            '</tr>'
        )) +
        ((!operator_name || operator_name == '-' || operator_name == '') ? '' : (
            '<tr>\
            <td class="att">Betreiber</td>\
            <td class="attContent">' + operator_name + '</td>\
        </tr> '
        )) +
        ((!type) ? '' : (
            '<tr>\
            <td class="att">Typ</td>' +
            ((type == 'ON_STREET') ? ('<td class="attContent">Straßen-Parkplatz</td>') : '') +
            ((type == 'OFF_STREET_PARKING_GROUND') ? ('<td class="attContent">Parkplatz abseits der Straße</td>') : '') +
            ((type == 'CAR_PARK') ? ('<td class="attContent">Parkhaus</td>') : '') +
            ((type == 'UNDERGROUND') ? ('<td class="attContent">Tiefgarage</td>') : '') +
            ((type == 'WALL_LOOPS') ? ('<td class="attContent">Vorderradhalter</td>') : '') +
            ((type == 'SAFE_WALL_LOOPS') ? ('<td class="attContent">Vorderradhalter mit Sicherung</td>') : '') +
            ((type == 'STANDS') ? ('<td class="attContent">Anlehnbügel</td>') : '') +
            ((type == 'LOCKERS' && purpose == 'BIKE') ? ('<td class="attContent">Fahrradschrank</td>') : '') +
            (((type == 'LOCKERS' && purpose == 'ITEM') || type == 'LOCKBOX') ? ('<td class="attContent">Schließfach</td>') : '') +
            ((type == 'SHED') ? ('<td class="attContent">Sammelanlage</td>') : '') +
            ((type == 'TWO_TIER') ? ('<td class="attContent">Zweistock-Abstellanlage</td>') : '') +
            ((type == 'BUILDING') ? ('<td class="attContent">Parkhaus</td>') : '') +
            ((type == 'FLOOR') ? ('<td class="attContent">Abstellfläche</td>') : '') +
            ((type == 'OTHER') ? ('<td class="attContent">Sonstige</td>') : '') +
            '</tr>'
        )) +
        ((!address || address == '') ? '' : (
            '<tr>\
                <td class="att">Adresse</td>\
                <td class="attContent">' + address + '</td>\
            </tr>'
        )) +
        ((!park_and_ride_type) ? '' : (
            '<tr>\
            <td class="att">P+R-Typ</td>' +
            ((park_and_ride_type == 'CARPOOL') ? ('<td class="attContent">Fahrgemeinschaft</td>') : '') +
            ((park_and_ride_type == 'TRAIN') ? ('<td class="attContent">Bahn</td>') : '') +
            ((park_and_ride_type == 'BUS') ? ('<td class="attContent">Bus</td>') : '') +
            ((park_and_ride_type == 'TRAM') ? ('<td class="attContent">Straßenbahn</td>') : '') +
            ((park_and_ride_type == 'YES') ? ('<td class="attContent">ja</td>') : '') +
            ((park_and_ride_type == 'NO') ? ('<td class="attContent">nein</td>') : '') +
            '</tr>'
        )) +
        ((!realtime_opening_status) ? '' : (
            '<tr>\
            <td class="att">Status</td>' +
            ((realtime_opening_status == 'OPEN') ? ('<td class="attContent">geöffnet</td>') : '') +
            ((realtime_opening_status == 'CLOSED') ? ('<td class="attContent">geschlossen</td>') : '') +
            ((realtime_opening_status == 'UNKNOWN') ? ('<td class="attContent">unbekannt</td>') : '') +
            '</tr>'
        )) +
        ((!realtime_data_updated_at) ? '' : (
            '<tr>\
            <td class="att">Stand Echtzeitinformationen</td>' +
            (realtime_data_outdated ? '<td class="attContent outDated">' + date + ', ' + time + '</td>' : '<td class="attContent">' + date + ', ' + time + '</td>') +
            '</tr>'
        )) +
        '</tr>\
            </table>\
            <br>\
            <div class="title title2">Parkplätze</div>\
            <div id="divParkingSites">\
                <div>\
                    <div id="anchor-' + id + '"></div>\
                </div>\
                <div id="divTable">\
                    <table>\
                        <tr>' +
        /* PARKING SPOT */
        ((parking_object == 'spot') ?
            ('<td class="att">alle (frei/gesamt)</td>' +
                ((realtime_status == 'AVAILABLE') ? ('<td class="attContent">1 / 1</td>') : '') +
                ((realtime_status == 'TAKEN') ? ('<td class="attContent">0 / 1</td>') : '') +
                ((realtime_status == 'UNKNOWN') ? ('<td class="attContent">- / 1</td>') : '') +
                ((has_realtime_data == undefined) ? ('<td class="attContent">- / 1</td>') : '') +
                '</tr><tr>' +
                ((!restriction_type) ? '' : (
                    '<tr>\
                    <td class="att">Parkberechtigte</td>' +
                    ((restriction_type == '') ? ('<td class="attContent">alle</td>') : '') +
                    ((restriction_type.match('DISABLED')) ? ('<td class="attContent">Behinderte</td>') : '') +
                    ((restriction_type.match('CHARGING')) ? ('<td class="attContent">zum Laden</td>') : '') +
                    ((restriction_type.match('FAMILY')) ? ('<td class="attContent">Familien</td>') : '') +
                    '</tr>'
                )) +
                ((!restriction_hours) ? '' : (
                    '<tr>\
                        <td class="att">Parkzeiten</td>\
                        <td class="attContent">' + restriction_hours + '</td>\
                    </tr>'
                )) +
                ((!restriction_max_stay) ? '' : (
                    '<tr>\
                        <td class="att">Max. Parkdauer</td>\
                        <td class="attContent">' + restriction_max_stay + '</td>\
                    </tr>'
                ))
            ) :
            /* PARKING SITE */
            (
                ((!capacity && !realtime_capacity) ? '' : ('<td class="att2">alle (frei/gesamt)</td>')) +
                ('<td class="attContent2">' +
                    (((!realtime_free_capacity) ? '-' : realtime_free_capacity)
                        + ' / ' +
                        ((!realtime_capacity && !capacity) ? '-' : ((realtime_capacity) ? realtime_capacity : capacity))) +
                    '</td>') +
                '</tr>' +
                ((!capacity_disabled || capacity_disabled == '0') ? '' : (
                    '<tr>\
                        <td class="att2">für Behinderte</td>\
                        <td class="attContent2">' + capacity_disabled + '</td>\
                    </tr>'
                )) +
                ((!capacity_woman || capacity_woman == '0') ? '' : (
                    '<tr>\
                        <td class="att2">für Frauen</td>\
                        <td class="attContent2">' + capacity_woman + '</td>\
                    </tr>'
                )) +
                ((!capacity_family || capacity_family == '0') ? '' : (
                    '<tr>\
                        <td class="att2">für Familien</td>\
                        <td class="attContent2">' + capacity_family + '</td>\
                     </tr>'
                )) +
                ((!capacity_charging || capacity_charging == '0') ? '' : (
                    '<tr>\
                        <td class="att2">mit Lademöglichkeit</td>\
                        <td class="attContent2">' + capacity_charging + '</td>\
                    </tr>'
                )) +
                ((!capacity_carsharing || capacity_carsharing == '0') ? '' : (
                    '<tr>\
                        <td class="att2">für Carsharing</td>\
                        <td class="attContent2">' + capacity_carsharing + '</td>'
                ))
            )) +
        '</tr>\
            </table>\
                </div>\
            </div>\
            <table id="divURLs">\
                <tr>' +
        ((!public_url) ? '' :
            ('<td class="attContentLink"><a href="' + public_url + '" target="_blank">&#10149 Datengeber<a></td>')) +
        ((!public_url) ?
            ('<td class="attContentLink"><a href="https://' + iplPath + '.mobidata-bw.de/park-api/api/public/v3/parking-' + `${parking_object}s/` + id + '" target="_blank">&#10149 ParkAPI<a></td>') :
            ('<td class="attContentLink"><a href="https://' + iplPath + '.mobidata-bw.de/park-api/api/public/v3/parking-' + `${parking_object}s/` + id + '" class="photoMargin" target="_blank">&#10149 ParkAPI<a></td>')) +
        ((!photo_url) ? '' : ('<td class="attContentLink"><a href="' + photo_url + '" class="photoMargin" target="_blank">&#10149 Foto<a></td>')) +
        '</tr>\
            </table>';


    setTimeout(() => {
        popupCanvas(features);
    }, 0);


    return htmlContent;


};