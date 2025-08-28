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
    const teilnetzeMapping = {

        /* DB-TOECHTER */
        "rab": { teilnetz: "Regionalverkehr Alb-Bodensee", teilnetzBeschreibung: "", datengeber: "Regionalverkehr Alb-Bodensee", verkehrsmittel: "Bus" },
        "rbs": { teilnetz: "Regional Bus Stuttgart", teilnetzBeschreibung: "", datengeber: "Regional Bus Stuttgart", verkehrsmittel: "Bus" },
        "sbg": { teilnetz: "Südbadenbus", teilnetzBeschreibung: "", datengeber: "Südbadenbus", verkehrsmittel: "Bus" },
        "ovf": { teilnetz: "Ominbusverkehr Franken", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "rvs": { teilnetz: "Südwestbus", teilnetzBeschreibung: "", datengeber: "Südwestbus", verkehrsmittel: "Bus" },
        /* VERKEHRSVERBUENDE BADEN-WUERTTEMBERG */
        "vvs": { teilnetz: "Verkehrsverbund Stuttgart", teilnetzBeschreibung: "", datengeber: "Verkehrsverbund Stuttgart", verkehrsmittel: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus" },
        "vrn": { teilnetz: "Verkehrsverbund Rhein-Neckar", teilnetzBeschreibung: "", datengeber: "Verkehrsverbund Rhein-Neckar", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus, Fähre, Seilbahn" },
        "tub": { teilnetz: "Verkehrsverbund Neckar-Alb-Donau", teilnetzBeschreibung: "", datengeber: "Verkehrsverbund Neckar-Alb-Donau", verkehrsmittel: "Regionalverkehr, Bus" },
        "din": { teilnetz: "Donau-Iller-Nahverkehrsverbund", teilnetzBeschreibung: "DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund", datengeber: "Donau-Iller-Nahverkehrsverbund", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus" },
        "kvv": { teilnetz: "Karlsruher Verkehrsverbund", teilnetzBeschreibung: "", datengeber: "Karlsruher Verkehrsverbund", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus" },
        "bod": { teilnetz: "Bodensee-Oberschwaben-Verkehrsverbund", teilnetzBeschreibung: "", datengeber: "Bodensee-Oberschwaben-Verkehrsverbund", verkehrsmittel: "Regionalverkehr, Bus" },
        "hnv": { teilnetz: "Heilbronner Hohenloher Haller Nahverkehr", teilnetzBeschreibung: "", datengeber: "Heilbronner Hohenloher Haller Nahverkehr", verkehrsmittel: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus" },
        "oam": { teilnetz: "OstalbMobil", teilnetzBeschreibung: "", datengeber: "OstalbMobil", verkehrsmittel: "Bus" },
        "tvv": { teilnetz: "Move (TUTicket)", teilnetzBeschreibung: "ehemals TUTicket", datengeber: "Move (TUTicket)", verkehrsmittel: "Bus" },
        "vsb": { teilnetz: "Move (VSB)", teilnetzBeschreibung: "ehemals Verkehrsverbund Schwarzwald-Baar", datengeber: "Landratsamt Schwarzwald-Baar-Kreis", verkehrsmittel: "Bus" },
        "vvr": { teilnetz: "Move (VVR)", teilnetzBeschreibung: "ehemals Verkehrsverbund Rottweil", datengeber: "Move (VVR)", verkehrsmittel: "Bus" },
        "cw": { teilnetz: "Verkehrsgesellschaft Calw", teilnetzBeschreibung: "", datengeber: "Verkehrsgesellschaft Calw", verkehrsmittel: "Bus" },
        "tgo": { teilnetz: "Tarifverbund Ortenau", teilnetzBeschreibung: "", datengeber: "Tarifverbund Ortenau", verkehrsmittel: "Bus" },
        "vhb": { teilnetz: "Verkehrsverbund Hegau-Bodensee", teilnetzBeschreibung: "", datengeber: "Verkehrsverbund Hegau-Bodensee", verkehrsmittel: "Bus" },
        "vpe": { teilnetz: "Verkehrsverbund Pforzheim-Enzkreis", teilnetzBeschreibung: "", datengeber: "Verkehrsverbund Pforzheim-Enzkreis", verkehrsmittel: "Bus" },
        "vsh": { teilnetz: "Kreisverkehr Schwäbisch Hall", teilnetzBeschreibung: "", datengeber: "Kreisverkehr Schwäbisch Hall", verkehrsmittel: "Bus" },
        "fds": { teilnetz: "Verkehrsgemeinschaft Freudenstadt", teilnetzBeschreibung: "", datengeber: "Verkehrsgemeinschaft Freudenstadt", verkehrsmittel: "Bus" },
        /* VERKEHRSUNTERNEHMEN */
        "ddb": { teilnetz: "Verschiedene Eisenbahngesellschaften", teilnetzBeschreibung: "", datengeber: "Europäisches Fahrplanzentrum", verkehrsmittel: "Regionalverkehr, Straßen-/S-/U-Bahn" },
        "swh": { teilnetz: "Nahverkehr Hohenlohekreis", teilnetzBeschreibung: "Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre", datengeber: "Nahverkehr Hohenlohekreis", verkehrsmittel: "Bus" },
        "frb": { teilnetz: "Freiburger Verkehrs AG", teilnetzBeschreibung: "", datengeber: "Freiburger Verkehrs AG", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus" },
        "swg": { teilnetz: "SWEG", teilnetzBeschreibung: "", datengeber: "SWEG", verkehrsmittel: "Bus" },
        "omp": { teilnetz: "Omnipart", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "vu": { teilnetz: "Verkehrsgemeinschaft am Bayerischen Untermain", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "gai": { teilnetz: "Omnibusverkehr Gairing und Omnibus Weidachstein", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "ghu": { teilnetz: "Gute Reise Hauck", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "grh": { teilnetz: "Grasmann-Reisen Gmbh", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        /* AUSLAND */
        "als": { teilnetz: "Fluo Grand Est", teilnetzBeschreibung: "umfasst in der Region Grand Est das Elsass und Lothringen", datengeber: "Fluo Grand Est", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus" },
        "sbb": { teilnetz: "Schweizer Bundesbahn", teilnetzBeschreibung: "Landesweites Netz", datengeber: "Basler Verkehrsbetrieb", verkehrsmittel: "Regionalverkehr, Straßen-/S-/U-Bahn, Bus, Fähre" },
        "bvb": { teilnetz: "Basler Verkehrsbetrieb", teilnetzBeschreibung: "", datengeber: "Basler Verkehrsbetrieb", verkehrsmittel: "Straßen-/S-/U-Bahn, Bus" },
        /* SONSTIGE */
        "nvb": { teilnetz: "NVBW", teilnetzBeschreibung: "seitens der NVBW eingepflegte Linien", datengeber: "NVBW", verkehrsmittel: "Bus" },
        "bus": { teilnetz: "Flix", teilnetzBeschreibung: "FlixBus und FlixTrain", datengeber: "DELFI", verkehrsmittel: "Regionalverkehr, Bus" },
        "hn": { teilnetz: "Bürgerbusverkehre", teilnetzBeschreibung: "enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden", datengeber: "Match Rider im Auftrag der Bürgerbus-Vereine", verkehrsmittel: "Bus" },
        "nth": { teilnetz: "Verkehrsgemeinschaft Mittelthüringen", teilnetzBeschreibung: "Thüringer Landesnetz", datengeber: "Verkehrsgemeinschaft Mittelthüringen", verkehrsmittel: "Regionalverkehr" },
        "rmv": { teilnetz: "Rhein-Main-Verkehrsverbund", teilnetzBeschreibung: "", datengeber: "Rhein-Main-Verkehrsverbund Servicegesellschaft", verkehrsmittel: "Bus" },
        "vgn": { teilnetz: "Verkehrsverbund Großraum Nürnberg", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" },
        "wvv": { teilnetz: "Würzburger Versorgungs- und Verkehrs-GmbH", teilnetzBeschreibung: "", datengeber: "DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)", verkehrsmittel: "Bus" }
    }


    const routeIdsPrefix = route_ids.split("-")[0];
    let teilnetze = '', teilnetzeBeschreibung = '', datengeber = '', verkehrsmittel = '';
    for (let teilnetz in teilnetzeMapping) {
        teilnetz = teilnetz.split("-")[0];
        if (routeIdsPrefix == teilnetz) {
            teilnetze += teilnetzeMapping[teilnetz].teilnetz;
            teilnetzeBeschreibung += teilnetzeMapping[teilnetz].teilnetzBeschreibung;
            datengeber += teilnetzeMapping[teilnetz].datengeber;
            verkehrsmittel += teilnetzeMapping[teilnetz].verkehrsmittel;
        }
        else {
            teilnetze == '';
        }
    };


    /* POPUP CONTENT */
    return `
        <table>
            <tr>
                ${(teilnetze == 'Verschiedene Eisenbahngesellschaften' || teilnetze == '') ? '' : (((teilnetze == 'Move (TUTicket)' || teilnetze == 'Move (VSB)') || teilnetze == 'Move (VVR)') ? popupImages("MOVE") : popupImages(teilnetze))}
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
        </table>' +
        ${teilnetze == '' ? '' : (`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${teilnetze == datengeber ? `
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${teilnetze}</td>
            </tr>
            ` : '' }
            ${teilnetze != datengeber ? `
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${teilnetze}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${datengeber}</td>
            </tr>'
            ` : '' }
            ${teilnetzeBeschreibung == '' ? '' : `
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${teilnetzeBeschreibung}</td>
            </tr>
            `}
            '<tr>
                <td class="att">Bus</td>
                ${verkehrsmittel.match("Bus") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Regionalverkehr</td>
                ${verkehrsmittel.match("Regionalverkehr") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Straßen-, S- oder U-Bahn</td>
                ${verkehrsmittel.match("Straßen-/S-/U-Bahn") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Fähre</td>
                ${verkehrsmittel.match("Fähre") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Seilbahn</td>
                ${verkehrsmittel.match("Seilbahn") ? '<td class="tdDatengeber">&#10003;</td>' : '<td class="tdDatengeber">&#x2717;</td>'}
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