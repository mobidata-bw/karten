import { iplPath } from '../../../../src/utils/paths.js';
import { popupImages } from "../../../../src/js/popupImages.js";


export function popupContentTransitStops(features) {

    /* INITIALIZE VARIABLES */
    const {
        stop_name,
        stop_id,
        wheelchair_boarding,
        location_type
    } = features;
    const stopIdStation = stop_id.split('_')[0];
    const urlDepartures = 'https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&' +
        'stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&' +
        'itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true';
    const urlArrivals = 'https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&' +
        'stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&' +
        'itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr';

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${popupImages('Piktogramm_Haltestelle')}
                <th class="title">${stop_name}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltesteig-ID</td>
                <td class="attContent">${stop_id}</td>
            </tr>
            ${wheelchair_boarding == 'accessible' ? `
            <tr>
                <td class="att"> Barrierefreiheit</td>
                <td class="attContent">Rollstuhl-Einstiegsmöglichkeit</td>
            </tr>
            ` : ''}
            <tr>
        </table><table>
            <tr>
                <td colspan="2" class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/gtfs/stops?stop_id=eq.${stop_id}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${location_type == 'station' ? `
                <td class="attContentLink"><a href="${urlDepartures}&name_dm=${stopIdStation}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${urlArrivals}&name_dm=${stopIdStation}" target="_blank">&#10149 Ankunftsmonitor<a></td>` :
            `<td class="attContentLink"><a href="${urlDepartures}&name_dm=${stop_id}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${urlArrivals}&name_dm=${stop_id}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `;

};

export function popupContentTransitStations(features) {

    /* INITIALIZE VARIABLES */
    const {
        prio_route_type,
        station_name,
        station_id
    } = features;

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${prio_route_type == '0' ? popupImages('Piktogramm_U_Bahn') : ''}
                ${prio_route_type == '2' ? popupImages('Piktogramm_Bahn') : ''}
                ${prio_route_type == '3' ? popupImages('Piktogramm_Bus') : ''}
                <th class="title">${station_name}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${station_id}</td>
            </tr>
        </table>
    `;

};

export function popupContentTransitShapes(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        route_names,
        route_ids,
        agency_id,
        agency_name,
        agency_url
    } = features;

    /* SUBGRIDS */
    const defas = 'DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)';
    const subgrids = {
        /* DEUTSCHE BAHN */
        'drb': { subgrid: 'Regio Bus Bayern', source: defas },
        'ovf': { subgrid: 'Ominbusverkehr Franken', source: defas },
        'rab': { subgrid: 'Regionalverkehr Alb-Bodensee' },
        'rbo': { subgrid: 'Regionalbus Ostbayern', source: defas },
        'rbs': { subgrid: 'Regional Bus Stuttgart', },
        'rva': { subgrid: 'Regionalverkehr Allgäu', source: defas },
        'rvs': { subgrid: 'Südwestbus' },
        'sbg': { subgrid: 'Südbadenbus' },
        /* TRANSIT ASSOCIATIONS */
        'avv': { subgrid: 'Augsburger Verkehrs- und Tarifverbund', abb: 'AVV', source: defas },
        'bod': { subgrid: 'Bodensee-Oberschwaben-Verkehrsverbund', abb: 'bodo' },
        'cw': { subgrid: 'Verkehrsgesellschaft Bäderkreis Calw', abb: 'VGC' },
        'din': { subgrid: 'Donau-Iller-Nahverkehrsverbund', abb: 'DING', description: 'DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund (HTV)' },
        'fds': { subgrid: 'Verkehrsgemeinschaft Freudenstadt', abb: 'vgf' },
        'hnv': { subgrid: 'Heilbronner Hohenloher Haller Nahverkehr', abb: 'HNV' },
        'kvv': { subgrid: 'Karlsruher Verkehrsverbund', abb: 'KVV' },
        'mvv': { subgrid: 'Münchner Verkehrs- und Tarifverbund', abb: 'MVV', source: defas },
        'oam': { subgrid: 'OstalbMobil', abb: 'OAM' },
        'rmv': { subgrid: 'Rhein-Main-Verkehrsverbund', abb: 'RMV', source: 'Rhein-Main-Verkehrsverbund Servicegesellschaft' },
        'tgo': { subgrid: 'Tarifverbund Ortenau', abb: 'TGO' },
        'tub': { subgrid: 'Verkehrsverbund Neckar-Alb-Donau', abb: 'naldo' },
        'tvv': { subgrid: 'Verkehrsverbund Schwarzwald-Baar-Heuberg (TUTicket)', abb: 'Move', source: 'Landratsamt Tuttlingen', description: 'Landratsamt liefert nur die Daten im Landkreis Tuttlingen, auch nach Aufgehen des ehemaligen Verkehrsverbundes TUTicket in Move' },
        'vgn': { subgrid: 'Verkehrsverbund Großraum Nürnberg', abb: 'VGN', source: defas },
        'vhb': { subgrid: 'Verkehrsverbund Hegau-Bodensee', abb: 'VHB' },
        'vpe': { subgrid: 'Verkehrsverbund Pforzheim-Enzkreis', abb: 'VPE' },
        'vrn': { subgrid: 'Verkehrsverbund Rhein-Neckar', abb: 'VRN' },
        'vsb': { subgrid: 'Verkehrsverbund Schwarzwald-Baar-Heuberg (VSB)', abb: 'Move', source: 'Landratsamt Schwarzwald-Baar-Kreis', description: 'Landratsamt liefert nur die Daten im Schwarzwald-Baar-Kreis, auch nach Aufgehen des ehemaligen Verkehrsverbundes Schwarzald-Baar in Move' },
        'vsh': { subgrid: 'Kreisverkehr Schwäbisch Hall', description: 'KVSH' },
        'vvr': { subgrid: 'Verkehrsverbund Schwarzwald-Baar-Heuberg (VVR)', abb: 'Move', source: 'Landratsamt Rottweil', description: 'Landratsamt liefert nur die Daten im Landkreis Rottweil, auch nach Aufgehen des ehemaligen Verkehrsverbundes Rottweil in Move' },
        'vvs': { subgrid: 'Verkehrsverbund Stuttgart', abb: 'VVS' },
        'wvv': { subgrid: 'Würzburger Versorgungs- und Verkehrs-GmbH', abb: 'WVV', source: defas },
        /* MUNICIPAL UTILITIES */
        'abs': { subgrid: 'Stadtwerke Aschaffenburg', source: defas },
        'abv': { subgrid: 'Ansbacher Bäder und Verkehrs GmbH', source: defas },
        'avg': { subgrid: 'Augsburger Verkehrsgesellschaft', abb: 'AVG', source: defas },
        'bam': { subgrid: 'Stadtwerke Bamberg', source: defas },
        'esw': { subgrid: 'Erlanger Stadtwerke', source: defas },
        'frb': { subgrid: 'Freiburger Verkehrs AG' },
        'fue': { subgrid: 'infra Fürth', source: defas },
        'inv': { subgrid: 'Ingolstädter Verkehrsgesellschaft', abb: 'INVG', source: defas },
        'kgv': { subgrid: 'Kahlgrund Verkehrs-Gesellschaft', abb: 'KVG', source: defas },
        'ndo': { subgrid: 'Landkreis Neuburg-Schrobenhausen', source: defas },
        'scw': { subgrid: 'Stadtwerke Schweinfurt', source: defas },
        'sw1': { subgrid: 'Südwestdeutsche Landesverkehrs-GmbH', abb: 'SWEG' },
        'van': { subgrid: 'Verkehrs-Aktiengesellschaft Nürnberg', abb: 'VAG Nürnberg', source: defas },
        'vgs': { subgrid: 'Zweckverband Personennahverkehr Saarland', source: 'Durchgängige elektronische Fahrgastinformation (DELFI)', description: 'ehemals Verkehrsmanagement-Gesellschaft Saar mbH (VGS)' },
        'vu': { subgrid: 'Verkehrsgemeinschaft am Bayerischen Untermain', abb: 'VAB', source: defas },
        /* TRANSIT COMPANIES */
        'bcl': { subgrid: 'BusClassic', source: defas, description: 'Teil der Weiglein-Firmengruppe' },
        'bur': { subgrid: 'Burlein Und Sohn & Wagenhäuser Reisen', source: defas },
        'etg': { subgrid: 'Ehard Touristik', source: defas },
        'gai': { subgrid: 'Omnibusverkehr Gairing & Omnibus Weidachstein', source: defas },
        'gei': { subgrid: 'Kurt Geis', source: defas },
        'ghu': { subgrid: 'Gute Reise Hauck', source: defas },
        'grh': { subgrid: 'Grasmann-Reisen', source: defas },
        'hgg': { subgrid: 'OmnibusVerkehrBischofsheim', source: defas },
        'klz': { subgrid: 'O.K. Reisen Kleinhenz', source: defas },
        'kra': { subgrid: 'Omnibus Kraus', source: defas },
        'krg': { subgrid: 'Kraus-Reisen', source: defas },
        'lys': { subgrid: 'Lyst Reisen', source: defas },
        'omp': { subgrid: 'OMNIPART Verkehrsdienstleistungen', source: defas },
        'osm': { subgrid: 'Omnibus-Service Mellrichstadt', source: defas },
        'rmb': { subgrid: 'Rombs Touristik', source: defas },
        'roh': { subgrid: 'Röhler Stadtbus Roth', source: defas },
        'smr': { subgrid: 'Schmetterling Reisen', source: defas },
        'vog': { subgrid: 'Vogel Omnibus', source: defas },
        /* ABROAD */
        'als': { subgrid: 'Fluo Grand Est', description: 'Elsass und Lothringen in der Region Grand Est' },
        'bel': { subgrid: 'Mehrere belgische Verkehrsunternehmen', source: 'iRail', description: 'iRail ist eine belgische Non-Profit-Organisation, der sich als Open-Data-Initiative für den freien Zugang zu Mobilitätsdaten engagiert' },
        'bvb': { subgrid: 'Basler Verkehrsbetrieb' },
        'obb': { subgrid: 'Österreichische Bundesbahn', source: 'Mobilitätsverbünde Österreich OG' },
        'sbb': { subgrid: 'Schweizer Bundesbahn', source: 'Basler Verkehrsbetrieb', description: 'Landesweites Netz', },
        'stv': { subgrid: 'Steirischer Verkehrsverbund', source: 'Mobilitätsverbünde Österreich OG' },
        'vvt': { subgrid: 'Verkehrsverbund Tirol', source: 'Mobilitätsverbünde Österreich OG' },
        'vvv': { subgrid: 'Verkehrsverbund Vorarlberg', source: 'Mobilitätsverbünde Österreich OG' },
        /* OTHER */
        'ddb': { subgrid: 'Mehrere Eisenbahngesellschaften', source: 'Europäisches Fahrplanzentrum' },
        'nvb': { subgrid: 'Nahverkehrsgesellschaft Baden-Württemberg', description: 'seitens der Nahverkehrsgesellschaft Baden-Württemberg eingepflegte Linien' },
        'bus': { subgrid: 'Flix', source: 'Durchgängige elektronische Fahrgastinformation (DELFI)', description: 'FlixBus und FlixTrain', },
        'hn': { subgrid: 'Bürgerbusverkehre', source: 'Match Rider im Auftrag der Bürgerbus-Vereine', description: 'enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden' },
        'nth': { subgrid: 'Verkehrsgemeinschaft Mittelthüringen', description: 'Thüringer Landesnetz' }
    }

    const routeIdsPrefix = route_ids.split("-")[0];
    let subgrid = '', abb = '', source = '', description = '';
    for (let i in subgrids) {
        i = i.split("-")[0];
        if (routeIdsPrefix == i) {
            subgrid += subgrids[i].subgrid;
            if (subgrids[i].source) source += subgrids[i].source;
            if (subgrids[i].abb) abb += subgrids[i].abb;
            if (subgrids[i].description) description += subgrids[i].description;
        }
        else {
            subgrid == '';
        }
    };

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${(subgrid == 'Mehrere Eisenbahngesellschaften' || subgrid == '') ? '' :
            (subgrid.startsWith('Verkehrsverbund Schwarzwald-Baar-Heuberg') ? popupImages("Move") : popupImages(subgrid))}
                <th class="title">${route_names}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Linien-ID</td>
                <td class="attContent">${route_ids}</td>
            </tr><tr>
                <td class="att">Betreiber-ID</td>
                <td class="attContent">${agency_id}</td>
            </tr><tr>
                <td class="att">Betreibername</td>
                <td class="attContent">${agency_name}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${agency_url}" target="_blank">Link</a></td>
            </tr>
        </table>
        ${subgrid == '' ? '' : (`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${!source ? `
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${subgrid}</td>
            </tr>
            ` : ''}
            ${subgrid && source ? `
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${subgrid}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${source}</td>
            </tr>
            ` : ''}
             ${!abb ? '' : `
            <tr>
                <td class="att">Kurzform</td>
                <td class="attContent">${abb}</td>
            </tr>
            `}         
            ${!description ? '' : `
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${description}</td>
            </tr>
            `}            
        </table>`
        )}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/gtfs/routes?route_id=eq.${route_ids}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${iplPath}.mobidata-bw.de/gtfs/trips?route_id=eq.${route_ids}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `;

};