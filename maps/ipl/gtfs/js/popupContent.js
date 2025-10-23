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

    /* TEILNETZE */
    const subgrids = {
        /* DB-TOECHTER */
        "rab": { subgrid: "Regionalverkehr Alb-Bodensee", description: "", source: "Regionalverkehr Alb-Bodensee", mode: "Bus" },
        "rbs": { subgrid: "Regional Bus Stuttgart", description: "", source: "Regional Bus Stuttgart", mode: "Bus" },
        "sbg": { subgrid: "Südbadenbus", description: "", source: "Südbadenbus", mode: "Bus" },
        "ovf": { subgrid: "Ominbusverkehr Franken", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "rvs": { subgrid: "Südwestbus", description: "", source: "Südwestbus", mode: "Bus" },
        /* VERKEHRSVERBUENDE BADEN-WUERTTEMBERG */
        "vvs": { subgrid: "Verkehrsverbund Stuttgart", description: "", source: "Verkehrsverbund Stuttgart", mode: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus" },
        "vrn": { subgrid: "Verkehrsverbund Rhein-Neckar", description: "", source: "Verkehrsverbund Rhein-Neckar", mode: "Straßen-/S-/U-Bahn, Bus, Fähre, Seilbahn" },
        "tub": { subgrid: "Verkehrsverbund Neckar-Alb-Donau", description: "", source: "Verkehrsverbund Neckar-Alb-Donau", mode: "Regionalverkehr, Bus" },
        "din": { subgrid: "Donau-Iller-Nahverkehrsverbund", description: "DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund", source: "Donau-Iller-Nahverkehrsverbund", mode: "Straßen-/S-/U-Bahn, Bus" },
        "kvv": { subgrid: "Karlsruher Verkehrsverbund", description: "", source: "Karlsruher Verkehrsverbund", mode: "Straßen-/S-/U-Bahn, Bus" },
        "bod": { subgrid: "Bodensee-Oberschwaben-Verkehrsverbund", description: "", source: "Bodensee-Oberschwaben-Verkehrsverbund", mode: "Regionalverkehr, Bus" },
        "hnv": { subgrid: "Heilbronner Hohenloher Haller Nahverkehr", description: "", source: "Heilbronner Hohenloher Haller Nahverkehr", mode: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus" },
        "oam": { subgrid: "OstalbMobil", description: "", source: "OstalbMobil", mode: "Bus" },
        "tvv": { subgrid: "Move (TUTicket)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals TUTicket", source: "Move (TUTicket)", mode: "Bus" },
        "vsb": { subgrid: "Move (VSB)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Schwarzwald-Baar", source: "Landratsamt Schwarzwald-Baar-Kreis", mode: "Bus" },
        "vvr": { subgrid: "Move (VVR)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Rottweil", source: "Move (VVR)", mode: "Bus" },
        "cw": { subgrid: "Verkehrsgesellschaft Calw", description: "", source: "Verkehrsgesellschaft Calw", mode: "Bus" },
        "tgo": { subgrid: "Tarifverbund Ortenau", description: "", source: "Tarifverbund Ortenau", mode: "Bus" },
        "vhb": { subgrid: "Verkehrsverbund Hegau-Bodensee", description: "", source: "Verkehrsverbund Hegau-Bodensee", mode: "Bus" },
        "vpe": { subgrid: "Verkehrsverbund Pforzheim-Enzkreis", description: "", source: "Verkehrsverbund Pforzheim-Enzkreis", mode: "Bus" },
        "vsh": { subgrid: "Kreisverkehr Schwäbisch Hall", description: "", source: "Kreisverkehr Schwäbisch Hall", mode: "Bus" },
        "fds": { subgrid: "Verkehrsgemeinschaft Freudenstadt", description: "", source: "Verkehrsgemeinschaft Freudenstadt", mode: "Bus" },
        "rmv": { subgrid: "Rhein-Main-Verkehrsverbund", description: "", source: "Rhein-Main-Verkehrsverbund Servicegesellschaft", mode: "Bus" },
        "vgn": { subgrid: "Verkehrsverbund Großraum Nürnberg", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "wvv": { subgrid: "Würzburger Versorgungs- und Verkehrs-GmbH", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        /* VERKEHRSUNTERNEHMEN */
        "bcl": { subgrid: "BusClassic", description: "Teil der Weiglein-Firmengruppe", source: "", mode: "Bus" },
        "ddb": { subgrid: "Verschiedene Eisenbahngesellschaften", description: "", source: "Europäisches Fahrplanzentrum", mode: "Regionalverkehr, Straßen-/S-/U-Bahn" },
        "swh": { subgrid: "Nahverkehr Hohenlohekreis", description: "Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre", source: "Nahverkehr Hohenlohekreis", mode: "Bus" },
        "frb": { subgrid: "Freiburger Verkehrs AG", description: "", source: "Freiburger Verkehrs AG", mode: "Straßen-/S-/U-Bahn, Bus" },
        "swg": { subgrid: "SWEG", description: "", source: "SWEG", mode: "Bus" },
        "omp": { subgrid: "Omnipart", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "vu": { subgrid: "Verkehrsgemeinschaft am Bayerischen Untermain", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "gai": { subgrid: "Omnibusverkehr Gairing und Omnibus Weidachstein", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "ghu": { subgrid: "Gute Reise Hauck", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        "grh": { subgrid: "Grasmann-Reisen Gmbh", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", mode: "Bus" },
        /* AUSLAND */
        "als": { subgrid: "Fluo Grand Est", description: "umfasst in der Region Grand Est das Elsass und Lothringen", source: "Fluo Grand Est", mode: "Straßen-/S-/U-Bahn, Bus" },
        "sbb": { subgrid: "Schweizer Bundesbahn", description: "Landesweites Netz", source: "Basler Verkehrsbetrieb", mode: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus, Fähre" },
        "bvb": { subgrid: "Basler Verkehrsbetrieb", description: "", source: "Basler Verkehrsbetrieb", mode: "Straßen-/S-/U-Bahn, Bus" },
        /* SONSTIGE */
        "nvb": { subgrid: "NVBW", description: "seitens der NVBW eingepflegte Linien", source: "NVBW", mode: "Bus" },
        "bus": { subgrid: "Flix", description: "FlixBus und FlixTrain", source: "DELFI", mode: "Regionalverkehr, Bus" },
        "hn": { subgrid: "Bürgerbusverkehre", description: "enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden", source: "Match Rider im Auftrag der Bürgerbus-Vereine", mode: "Bus" },
        "nth": { subgrid: "Verkehrsgemeinschaft Mittelthüringen", description: "Thüringer Landesnetz", source: "Verkehrsgemeinschaft Mittelthüringen", mode: "Regionalverkehr" }
    }

    const routeIdsPrefix = route_ids.split("-")[0];
    let subgrid = '', description = '', source = '', mode = '';
    for (let i in subgrids) {
        i = i.split("-")[0];
        if (routeIdsPrefix == i) {
            subgrid += subgrids[i].subgrid;
            description += subgrids[i].description;
            source += subgrids[i].source;
            mode += subgrids[i].mode;
        }
        else {
            subgrid == '';
        }
    };

    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${(subgrid == 'Verschiedene Eisenbahngesellschaften' || subgrid == '') ? '' :
            (subgrid.startsWith('Move') ? popupImages("MOVE") : popupImages(subgrid))}
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
            ${subgrid == source ? `
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${subgrid}</td>
            </tr>
            ` : ''}
            ${subgrid != source ? `
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${subgrid}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${source}</td>
            </tr>
            ` : ''}
            ${description == '' ? '' : `
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${description}</td>
            </tr>
            `}
            <tr>
                <td class="att">Bus</td>
                ${mode.match("Bus") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Regionalverkehr</td>
                ${mode.match("Regionalverkehr") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Straßen-, S- oder U-Bahn</td>
                ${mode.match("Straßen-/S-/U-Bahn") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Fähre</td>
                ${mode.match("Fähre") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Seilbahn</td>
                ${mode.match("Seilbahn") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr>
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