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
        "rab": { subgrid: "Regionalverkehr Alb-Bodensee", description: "", source: "Regionalverkehr Alb-Bodensee" },
        "rbs": { subgrid: "Regional Bus Stuttgart", description: "", source: "Regional Bus Stuttgart" },
        "sbg": { subgrid: "Südbadenbus", description: "", source: "Südbadenbus", },
        "ovf": { subgrid: "Ominbusverkehr Franken", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "rvs": { subgrid: "Südwestbus", description: "", source: "Südwestbus" },
        /* VERKEHRSVERBUENDE BADEN-WUERTTEMBERG */
        "vvs": { subgrid: "Verkehrsverbund Stuttgart", description: "", source: "Verkehrsverbund Stuttgart" },
        "vrn": { subgrid: "Verkehrsverbund Rhein-Neckar", description: "", source: "Verkehrsverbund Rhein-Neckar" },
        "tub": { subgrid: "Verkehrsverbund Neckar-Alb-Donau", description: "", source: "Verkehrsverbund Neckar-Alb-Donau" },
        "din": { subgrid: "Donau-Iller-Nahverkehrsverbund", description: "DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund", source: "Donau-Iller-Nahverkehrsverbund" },
        "kvv": { subgrid: "Karlsruher Verkehrsverbund", description: "", source: "Karlsruher Verkehrsverbund" },
        "bod": { subgrid: "Bodensee-Oberschwaben-Verkehrsverbund", description: "", source: "Bodensee-Oberschwaben-Verkehrsverbund" },
        "hnv": { subgrid: "Heilbronner Hohenloher Haller Nahverkehr", description: "", source: "Heilbronner Hohenloher Haller Nahverkehr" },
        "oam": { subgrid: "OstalbMobil", description: "", source: "OstalbMobil" },
        "tvv": { subgrid: "Move (TUTicket)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals TUTicket", source: "Move (TUTicket)" },
        "vsb": { subgrid: "Move (VSB)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Schwarzwald-Baar", source: "Landratsamt Schwarzwald-Baar-Kreis" },
        "vvr": { subgrid: "Move (VVR)", description: "Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Rottweil", source: "Move (VVR)" },
        "cw": { subgrid: "Verkehrsgesellschaft Calw", description: "", source: "Verkehrsgesellschaft Calw" },
        "tgo": { subgrid: "Tarifverbund Ortenau", description: "", source: "Tarifverbund Ortenau" },
        "vhb": { subgrid: "Verkehrsverbund Hegau-Bodensee", description: "", source: "Verkehrsverbund Hegau-Bodensee" },
        "vpe": { subgrid: "Verkehrsverbund Pforzheim-Enzkreis", description: "", source: "Verkehrsverbund Pforzheim-Enzkreis" },
        "vsh": { subgrid: "Kreisverkehr Schwäbisch Hall", description: "", source: "Kreisverkehr Schwäbisch Hall" },
        "fds": { subgrid: "Verkehrsgemeinschaft Freudenstadt", description: "", source: "Verkehrsgemeinschaft Freudenstadt" },
        "rmv": { subgrid: "Rhein-Main-Verkehrsverbund", description: "", source: "Rhein-Main-Verkehrsverbund Servicegesellschaft" },
        "vgn": { subgrid: "Verkehrsverbund Großraum Nürnberg", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "wvv": { subgrid: "Würzburger Versorgungs- und Verkehrs-GmbH", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        /* VERKEHRSUNTERNEHMEN */
        "bcl": { subgrid: "BusClassic", description: "Teil der Weiglein-Firmengruppe", source: "" },
        "ddb": { subgrid: "Verschiedene Eisenbahngesellschaften", description: "", source: "Europäisches Fahrplanzentrum" },
        "swh": { subgrid: "Nahverkehr Hohenlohekreis", description: "Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre", source: "Nahverkehr Hohenlohekreis" },
        "frb": { subgrid: "Freiburger Verkehrs AG", description: "", source: "Freiburger Verkehrs AG" },
        "swg": { subgrid: "SWEG", description: "", source: "SWEG" },
        "omp": { subgrid: "Omnipart", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "vu": { subgrid: "Verkehrsgemeinschaft am Bayerischen Untermain", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "gai": { subgrid: "Omnibusverkehr Gairing und Omnibus Weidachstein", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "ghu": { subgrid: "Gute Reise Hauck", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        "grh": { subgrid: "Grasmann-Reisen Gmbh", description: "", source: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)" },
        /* AUSLAND */
        "als": { subgrid: "Fluo Grand Est", description: "umfasst in der Region Grand Est das Elsass und Lothringen", source: "Fluo Grand Est" },
        "sbb": { subgrid: "Schweizer Bundesbahn", description: "Landesweites Netz", source: "Basler Verkehrsbetrieb" },
        "bvb": { subgrid: "Basler Verkehrsbetrieb", description: "", source: "Basler Verkehrsbetrieb" },
        /* SONSTIGE */
        "nvb": { subgrid: "NVBW", description: "seitens der NVBW eingepflegte Linien", source: "NVBW" },
        "bus": { subgrid: "Flix", description: "FlixBus und FlixTrain", source: "DELFI" },
        "hn": { subgrid: "Bürgerbusverkehre", description: "enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden", source: "Match Rider im Auftrag der Bürgerbus-Vereine" },
        "nth": { subgrid: "Verkehrsgemeinschaft Mittelthüringen", description: "Thüringer Landesnetz", source: "Verkehrsgemeinschaft Mittelthüringen" }
    }

    const routeIdsPrefix = route_ids.split("-")[0];
    let subgrid = '', description = '', source = '';
    for (let i in subgrids) {
        i = i.split("-")[0];
        if (routeIdsPrefix == i) {
            subgrid += subgrids[i].subgrid;
            description += subgrids[i].description;
            source += subgrids[i].source;
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