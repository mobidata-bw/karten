import{k as u}from"./addControlLayers-f-Zisxao.js";import{p as i}from"./popupImages-Dx9_mmy5.js";function f(a){const{stop_name:s,stop_id:e,wheelchair_boarding:d,location_type:l}=a,o=e.split("_")[0],t="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true",c="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr";return`
        <table>
            <tr>
                ${i("Piktogramm_Haltestelle")}
                <th class="title">${s}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltesteig-ID</td>
                <td class="attContent">${e}</td>
            </tr>
            ${d=="accessible"?`
            <tr>
                <td class="att"> Barrierefreiheit</td>
                <td class="attContent">Rollstuhl-Einstiegsmöglichkeit</td>
            </tr>
            `:""}
            <tr>
        </table><table>
            <tr>
                <td colspan="2" class="attContentLink"><a href="https://${u}.mobidata-bw.de/gtfs/stops?stop_id=eq.${e}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${l=="station"?`
                <td class="attContentLink"><a href="${t}&name_dm=${o}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${c}&name_dm=${o}" target="_blank">&#10149 Ankunftsmonitor<a></td>`:`<td class="attContentLink"><a href="${t}&name_dm=${e}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${c}&name_dm=${e}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `}function B(a){const{prio_route_type:s,station_name:e,station_id:d}=a;return`
        <table>
            <tr>
                ${s=="0"?i("Piktogramm_U_Bahn"):""}
                ${s=="2"?i("Piktogramm_Bahn"):""}
                ${s=="3"?i("Piktogramm_Bus"):""}
                <th class="title">${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${d}</td>
            </tr>
        </table>
    `}function k(a){const{route_names:s,route_ids:e,agency_id:d,agency_name:l,agency_url:o}=a,t={drb:{subgrid:"DB Regio Bus Bayern",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},ovf:{subgrid:"Ominbusverkehr Franken",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},rab:{subgrid:"Regionalverkehr Alb-Bodensee",description:"",source:"Regionalverkehr Alb-Bodensee"},rbo:{subgrid:"Regionalbus Ostbayern",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},rbs:{subgrid:"Regional Bus Stuttgart",description:"",source:"Regional Bus Stuttgart"},rva:{subgrid:"Regionalverkehr Allgäu",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},rvs:{subgrid:"Südwestbus",description:"",source:"Südwestbus"},sbg:{subgrid:"Südbadenbus",description:"",source:"Südbadenbus"},avv:{subgrid:"Augsburger Verkehrs- und Tarifverbund",description:"Kürzel: AVV",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},bod:{subgrid:"Bodensee-Oberschwaben-Verkehrsverbund",description:"Kürzel: bodo",source:"Bodensee-Oberschwaben-Verkehrsverbund"},cw:{subgrid:"Verkehrsgesellschaft Bäderkreis Calw",description:"VGC",source:"Verkehrsgesellschaft Bäderkreis Calw"},din:{subgrid:"Donau-Iller-Nahverkehrsverbund",description:"Kürzel: DING; übernimmt Datenlieferung für den Heidenheimer Tarifverbund (HTV)",source:"Donau-Iller-Nahverkehrsverbund"},fds:{subgrid:"Verkehrsgemeinschaft Freudenstadt",description:"Kürzel: vgf",source:"Verkehrsgemeinschaft Freudenstadt"},hnv:{subgrid:"Heilbronner Hohenloher Haller Nahverkehr",description:"Kürzel: HNV",source:"Heilbronner Hohenloher Haller Nahverkehr"},kvv:{subgrid:"Karlsruher Verkehrsverbund",description:"Kürzel: KVV",source:"Karlsruher Verkehrsverbund"},mvv:{subgrid:"Münchner Verkehrs- und Tarifverbund",description:"Kürzel: MVV",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},oam:{subgrid:"OstalbMobil",description:"Kürzel: OAM",source:"OstalbMobil"},rmv:{subgrid:"Rhein-Main-Verkehrsverbund",description:"Kürzel: RMV",source:"Rhein-Main-Verkehrsverbund Servicegesellschaft"},tgo:{subgrid:"Tarifverbund Ortenau",description:"Kürzel: TGO",source:"Tarifverbund Ortenau"},tub:{subgrid:"Verkehrsverbund Neckar-Alb-Donau",description:"Kürzel: naldo",source:"Verkehrsverbund Neckar-Alb-Donau"},tvv:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (TUTicket)",description:"Kürzel: Move; Landratsamt liefert nur die Daten im Landkreis Tuttlingen, auch nach Aufgehen des ehemaligen Verkehrsverbundes TUTicket in Move",source:"Landratsamt Tuttlingen"},vgn:{subgrid:"Verkehrsverbund Großraum Nürnberg",description:"Kürzel: VGN",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},vhb:{subgrid:"Verkehrsverbund Hegau-Bodensee",description:"Kürzel: VHB",source:"Verkehrsverbund Hegau-Bodensee"},vpe:{subgrid:"Verkehrsverbund Pforzheim-Enzkreis",description:"Kürzel: VPE",source:"Verkehrsverbund Pforzheim-Enzkreis"},vrn:{subgrid:"Verkehrsverbund Rhein-Neckar",description:"Kürzel: VRN",source:"Verkehrsverbund Rhein-Neckar"},vsb:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (VSB)",description:"Kürzel: Move; Landratsamt liefert nur die Daten im Schwarzwald-Baar-Kreis, auch nach Aufgehen des ehemaligen Verkehrsverbundes Schwarzald-Baar in Move",source:"Landratsamt Schwarzwald-Baar-Kreis"},vsh:{subgrid:"Kreisverkehr Schwäbisch Hall",description:"Kürzel: KVSH",source:"Kreisverkehr Schwäbisch Hall"},vvr:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (VVR)",description:"Kürzel: Move; Landratsamt liefert nur die Daten im Landkreis Rottweil, auch nach Aufgehen des ehemaligen Verkehrsverbundes Rottweil in Move",source:"Landratsamt Rottweil"},vvs:{subgrid:"Verkehrsverbund Stuttgart",description:"Kürzel: VVS",source:"Verkehrsverbund Stuttgart"},wvv:{subgrid:"Würzburger Versorgungs- und Verkehrs-GmbH",description:"Kürzel: WVV",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},abs:{subgrid:"Stadtwerke Aschaffenburg",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},abv:{subgrid:"Ansbacher Bäder und Verkehrs GmbH",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},avg:{subgrid:"Augsburger Verkehrsgesellschaft",description:"Kürzel: AVG",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},bam:{subgrid:"Stadtwerke Bamberg",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},esw:{subgrid:"Erlanger Stadtwerke",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},frb:{subgrid:"Freiburger Verkehrs AG",description:"",source:"Freiburger Verkehrs AG"},fue:{subgrid:"infra Fürth",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},inv:{subgrid:"Ingolstädter Verkehrsgesellschaft",description:"Kürzel: INVG",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},kgv:{subgrid:"Kahlgrund Verkehrs-Gesellschaft",description:"Kürzel: KVG",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},ndo:{subgrid:"Landkreis Neuburg-Schrobenhausen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},scw:{subgrid:"Stadtwerke Schweinfurt",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},sw1:{subgrid:"Südwestdeutsche Landesverkehrs-GmbH",description:"Kürzel: SWEG",source:"Südwestdeutsche Landesverkehrs-GmbH"},van:{subgrid:"Verkehrs-Aktiengesellschaft Nürnberg",description:"Kürzel: VAG Nürnberg",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},vgs:{subgrid:"Zweckverband Personennahverkehr Saarland",description:"ehemals Verkehrsmanagement-Gesellschaft Saar mbH (VGS)",source:"Durchgängige elektronische Fahrgastinformation (DELFI)"},vu:{subgrid:"Verkehrsgemeinschaft am Bayerischen Untermain",description:"Kürzel: VAB",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},bcl:{subgrid:"BusClassic",description:"Teil der Weiglein-Firmengruppe",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},bur:{subgrid:"Burlein Und Sohn & Wagenhäuser Reisen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},etg:{subgrid:"Ehard Touristik",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},gai:{subgrid:"Omnibusverkehr Gairing & Omnibus Weidachstein",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},gei:{subgrid:"Kurt Geis",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},ghu:{subgrid:"Gute Reise Hauck",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},grh:{subgrid:"Grasmann-Reisen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},hgg:{subgrid:"OmnibusVerkehrBischofsheim",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},klz:{subgrid:"O.K. Reisen Kleinhenz",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},kra:{subgrid:"Omnibus Kraus",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},krg:{subgrid:"Kraus-Reisen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},lys:{subgrid:"Lyst Reisen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},omp:{subgrid:"OMNIPART Verkehrsdienstleistungen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},osm:{subgrid:"Omnibus-Service Mellrichstadt",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},rmb:{subgrid:"Rombs Touristik",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},roh:{subgrid:"Röhler Stadtbus Roth",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},smr:{subgrid:"Schmetterling Reisen",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},vog:{subgrid:"Vogel Omnibus",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},als:{subgrid:"Fluo Grand Est",description:"umfasst in der Region Grand Est das Elsass und Lothringen",source:"Fluo Grand Est"},bel:{subgrid:"Mehrere belgische Verkehrsunternehmen",description:"iRail ist eine belgische Non-Profit-Organisation, der sich als Open-Data-Initiative für den freien Zugang zu Mobilitätsdaten engagiert.",source:"iRail"},bvb:{subgrid:"Basler Verkehrsbetrieb",description:"",source:"Basler Verkehrsbetrieb"},obb:{subgrid:"Österreichische Bundesbahn",description:"",source:"Mobilitätsverbünde Österreich OG"},sbb:{subgrid:"Schweizer Bundesbahn",description:"Landesweites Netz",source:"Basler Verkehrsbetrieb"},stv:{subgrid:"Steirischer Verkehrsverbund",description:"",source:"Mobilitätsverbünde Österreich OG"},vvt:{subgrid:"Verkehrsverbund Tirol",description:"",source:"Mobilitätsverbünde Österreich OG"},vvv:{subgrid:"Verkehrsverbund Vorarlberg",description:"",source:"Mobilitätsverbünde Österreich OG"},ddb:{subgrid:"Mehrere Eisenbahngesellschaften",description:"",source:"Europäisches Fahrplanzentrum"},nvb:{subgrid:"Nahverkehrsgesellschaft Baden-Württemberg",description:"seitens der Nahverkehrsgesellschaft Baden-Württemberg eingepflegte Linien",source:"Nahverkehrsgesellschaft Baden-Württemberg"},bus:{subgrid:"Flix",description:"FlixBus und FlixTrain",source:"DELFI"},hn:{subgrid:"Bürgerbusverkehre",description:"enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden",source:"Match Rider im Auftrag der Bürgerbus-Vereine"},nth:{subgrid:"Verkehrsgemeinschaft Mittelthüringen",description:"Thüringer Landesnetz",source:"Verkehrsgemeinschaft Mittelthüringen"}},c=e.split("-")[0];let r="",h="",b="";for(let n in t)n=n.split("-")[0],c==n&&(r+=t[n].subgrid,h+=t[n].description,b+=t[n].source);return`
        <table>
            <tr>
                ${r=="Verschiedene Eisenbahngesellschaften"||r==""?"":r.startsWith("Verkehrsverbund Schwarzwald-Baar-Heuberg")?i("Move"):i(r)}
                <th class="title">${s}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Linien-ID</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Betreiber-ID</td>
                <td class="attContent">${d}</td>
            </tr><tr>
                <td class="att">Betreibername</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${o}" target="_blank">Link</a></td>
            </tr>
        </table>
        ${r==""?"":`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${r==b?`
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${r}</td>
            </tr>
            `:""}
            ${r!=b?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${b}</td>
            </tr>
            `:""}
            ${h==""?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${h}</td>
            </tr>
            `}            
        </table>`}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${u}.mobidata-bw.de/gtfs/routes?route_id=eq.${e}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${u}.mobidata-bw.de/gtfs/trips?route_id=eq.${e}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `}export{B as a,k as b,f as p};
