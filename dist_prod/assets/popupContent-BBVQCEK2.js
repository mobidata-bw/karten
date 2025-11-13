import{k as h}from"./addControlLayers-CK2s8XcE.js";import{p as n}from"./popupImages-BDXiGBGW.js";function f(d){const{stop_name:i,stop_id:r,wheelchair_boarding:b,location_type:l}=d,u=r.split("_")[0],e="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true",t="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr";return`
        <table>
            <tr>
                ${n("Piktogramm_Haltestelle")}
                <th class="title">${i}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltesteig-ID</td>
                <td class="attContent">${r}</td>
            </tr>
            ${b=="accessible"?`
            <tr>
                <td class="att"> Barrierefreiheit</td>
                <td class="attContent">Rollstuhl-Einstiegsmöglichkeit</td>
            </tr>
            `:""}
            <tr>
        </table><table>
            <tr>
                <td colspan="2" class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/stops?stop_id=eq.${r}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${l=="station"?`
                <td class="attContentLink"><a href="${e}&name_dm=${u}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${t}&name_dm=${u}" target="_blank">&#10149 Ankunftsmonitor<a></td>`:`<td class="attContentLink"><a href="${e}&name_dm=${r}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${t}&name_dm=${r}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `}function p(d){const{prio_route_type:i,station_name:r,station_id:b}=d;return`
        <table>
            <tr>
                ${i=="0"?n("Piktogramm_U_Bahn"):""}
                ${i=="2"?n("Piktogramm_Bahn"):""}
                ${i=="3"?n("Piktogramm_Bus"):""}
                <th class="title">${r}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${b}</td>
            </tr>
        </table>
    `}function V(d){const{route_names:i,route_ids:r,agency_id:b,agency_name:l,agency_url:u}=d,e="DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",t={drb:{subgrid:"Regio Bus Bayern",source:e},ovf:{subgrid:"Ominbusverkehr Franken",source:e},rab:{subgrid:"Regionalverkehr Alb-Bodensee"},rbo:{subgrid:"Regionalbus Ostbayern",source:e},rbs:{subgrid:"Regional Bus Stuttgart"},rva:{subgrid:"Regionalverkehr Allgäu",source:e},rvs:{subgrid:"Südwestbus"},sbg:{subgrid:"Südbadenbus"},avv:{subgrid:"Augsburger Verkehrs- und Tarifverbund",abb:"AVV",source:e},bod:{subgrid:"Bodensee-Oberschwaben-Verkehrsverbund",abb:"bodo"},cw:{subgrid:"Verkehrsgesellschaft Bäderkreis Calw",abb:"VGC"},din:{subgrid:"Donau-Iller-Nahverkehrsverbund",abb:"DING",description:"DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund (HTV)"},fds:{subgrid:"Verkehrsgemeinschaft Freudenstadt",abb:"vgf"},hnv:{subgrid:"Heilbronner Hohenloher Haller Nahverkehr",abb:"HNV"},kvv:{subgrid:"Karlsruher Verkehrsverbund",abb:"KVV"},mvv:{subgrid:"Münchner Verkehrs- und Tarifverbund",abb:"MVV",source:e},oam:{subgrid:"OstalbMobil",abb:"OAM"},rmv:{subgrid:"Rhein-Main-Verkehrsverbund",abb:"RMV",source:"Rhein-Main-Verkehrsverbund Servicegesellschaft"},tgo:{subgrid:"Tarifverbund Ortenau",abb:"TGO"},tub:{subgrid:"Verkehrsverbund Neckar-Alb-Donau",abb:"naldo"},tvv:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (TUTicket)",abb:"Move",source:"Landratsamt Tuttlingen",description:"Landratsamt liefert nur die Daten im Landkreis Tuttlingen, auch nach Aufgehen des ehemaligen Verkehrsverbundes TUTicket in Move"},vgn:{subgrid:"Verkehrsverbund Großraum Nürnberg",abb:"VGN",source:e},vhb:{subgrid:"Verkehrsverbund Hegau-Bodensee",abb:"VHB"},vpe:{subgrid:"Verkehrsverbund Pforzheim-Enzkreis",abb:"VPE"},vrn:{subgrid:"Verkehrsverbund Rhein-Neckar",abb:"VRN"},vsb:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (VSB)",abb:"Move",source:"Landratsamt Schwarzwald-Baar-Kreis",description:"Landratsamt liefert nur die Daten im Schwarzwald-Baar-Kreis, auch nach Aufgehen des ehemaligen Verkehrsverbundes Schwarzald-Baar in Move"},vsh:{subgrid:"Kreisverkehr Schwäbisch Hall",description:"KVSH"},vvr:{subgrid:"Verkehrsverbund Schwarzwald-Baar-Heuberg (VVR)",abb:"Move",source:"Landratsamt Rottweil",description:"Landratsamt liefert nur die Daten im Landkreis Rottweil, auch nach Aufgehen des ehemaligen Verkehrsverbundes Rottweil in Move"},vvs:{subgrid:"Verkehrsverbund Stuttgart",abb:"VVS"},wvv:{subgrid:"Würzburger Versorgungs- und Verkehrs-GmbH",abb:"WVV",source:e},abs:{subgrid:"Stadtwerke Aschaffenburg",source:e},abv:{subgrid:"Ansbacher Bäder und Verkehrs GmbH",source:e},avg:{subgrid:"Augsburger Verkehrsgesellschaft",abb:"AVG",source:e},bam:{subgrid:"Stadtwerke Bamberg",source:e},esw:{subgrid:"Erlanger Stadtwerke",source:e},frb:{subgrid:"Freiburger Verkehrs AG"},fue:{subgrid:"infra Fürth",source:e},inv:{subgrid:"Ingolstädter Verkehrsgesellschaft",abb:"INVG",source:e},kgv:{subgrid:"Kahlgrund Verkehrs-Gesellschaft",abb:"KVG",source:e},ndo:{subgrid:"Landkreis Neuburg-Schrobenhausen",source:e},scw:{subgrid:"Stadtwerke Schweinfurt",source:e},sw1:{subgrid:"Südwestdeutsche Landesverkehrs-GmbH",abb:"SWEG"},van:{subgrid:"Verkehrs-Aktiengesellschaft Nürnberg",abb:"VAG Nürnberg",source:e},vgs:{subgrid:"Zweckverband Personennahverkehr Saarland",source:"Durchgängige elektronische Fahrgastinformation (DELFI)",description:"ehemals Verkehrsmanagement-Gesellschaft Saar mbH (VGS)"},vu:{subgrid:"Verkehrsgemeinschaft am Bayerischen Untermain",abb:"VAB",source:e},bcl:{subgrid:"BusClassic",source:e,description:"Teil der Weiglein-Firmengruppe"},bur:{subgrid:"Burlein Und Sohn & Wagenhäuser Reisen",source:e},etg:{subgrid:"Ehard Touristik",source:e},gai:{subgrid:"Omnibusverkehr Gairing & Omnibus Weidachstein",source:e},gei:{subgrid:"Kurt Geis",source:e},ghu:{subgrid:"Gute Reise Hauck",source:e},grh:{subgrid:"Grasmann-Reisen",source:e},hgg:{subgrid:"OmnibusVerkehrBischofsheim",source:e},klz:{subgrid:"O.K. Reisen Kleinhenz",source:e},kra:{subgrid:"Omnibus Kraus",source:e},krg:{subgrid:"Kraus-Reisen",source:e},lys:{subgrid:"Lyst Reisen",source:e},omp:{subgrid:"OMNIPART Verkehrsdienstleistungen",source:e},osm:{subgrid:"Omnibus-Service Mellrichstadt",source:e},rmb:{subgrid:"Rombs Touristik",source:e},roh:{subgrid:"Röhler Stadtbus Roth",source:e},smr:{subgrid:"Schmetterling Reisen",source:e},vog:{subgrid:"Vogel Omnibus",source:e},als:{subgrid:"Fluo Grand Est",description:"Elsass und Lothringen in der Region Grand Est"},bel:{subgrid:"Mehrere belgische Verkehrsunternehmen",source:"iRail",description:"iRail ist eine belgische Non-Profit-Organisation, der sich als Open-Data-Initiative für den freien Zugang zu Mobilitätsdaten engagiert"},bvb:{subgrid:"Basler Verkehrsbetrieb"},obb:{subgrid:"Österreichische Bundesbahn",source:"Mobilitätsverbünde Österreich OG"},sbb:{subgrid:"Schweizer Bundesbahn",source:"Basler Verkehrsbetrieb",description:"Landesweites Netz"},stv:{subgrid:"Steirischer Verkehrsverbund",source:"Mobilitätsverbünde Österreich OG"},vvt:{subgrid:"Verkehrsverbund Tirol",source:"Mobilitätsverbünde Österreich OG"},vvv:{subgrid:"Verkehrsverbund Vorarlberg",source:"Mobilitätsverbünde Österreich OG"},ddb:{subgrid:"Mehrere Eisenbahngesellschaften",source:"Europäisches Fahrplanzentrum"},nvb:{subgrid:"Nahverkehrsgesellschaft Baden-Württemberg",description:"seitens der Nahverkehrsgesellschaft Baden-Württemberg eingepflegte Linien"},bus:{subgrid:"Flix",source:"Durchgängige elektronische Fahrgastinformation (DELFI)",description:"FlixBus und FlixTrain"},hn:{subgrid:"Bürgerbusverkehre",source:"Match Rider im Auftrag der Bürgerbus-Vereine",description:"enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden"},nth:{subgrid:"Verkehrsgemeinschaft Mittelthüringen",description:"Thüringer Landesnetz"}},m=r.split("-")[0];let a="",g="",o="",c="";for(let s in t)s=s.split("-")[0],m==s&&(a+=t[s].subgrid,t[s].source&&(o+=t[s].source),t[s].abb&&(g+=t[s].abb),t[s].description&&(c+=t[s].description));return`
        <table>
            <tr>
                ${a=="Mehrere Eisenbahngesellschaften"||a==""?"":a.startsWith("Verkehrsverbund Schwarzwald-Baar-Heuberg")?n("Move"):n(a)}
                <th class="title">${i}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Linien-ID</td>
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Betreiber-ID</td>
                <td class="attContent">${b}</td>
            </tr><tr>
                <td class="att">Betreibername</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${u}" target="_blank">Link</a></td>
            </tr>
        </table>
        ${a==""?"":`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${o?"":`
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${a}</td>
            </tr>
            `}
            ${a&&o?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${o}</td>
            </tr>
            `:""}
             ${g?`
            <tr>
                <td class="att">Kurzform</td>
                <td class="attContent">${g}</td>
            </tr>
            `:""}         
            ${c?`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${c}</td>
            </tr>
            `:""}            
        </table>`}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/routes?route_id=eq.${r}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/trips?route_id=eq.${r}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `}export{p as a,V as b,f as p};
