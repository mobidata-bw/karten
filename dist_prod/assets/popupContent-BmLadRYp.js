import{k as h}from"./addControlLayers-BdCcY69e.js";import{p as i}from"./popupImages-ZUvzB4LB.js";function k(a){const{stop_name:t,stop_id:e,wheelchair_boarding:d,location_type:c}=a,o=e.split("_")[0],s="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true",b="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr";return`
        <table>
            <tr>
                ${i("Piktogramm_Haltestelle")}
                <th class="title">${t}</th>
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
                <td colspan="2" class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/stops?stop_id=eq.${e}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${c=="station"?`
                <td class="attContentLink"><a href="${s}&name_dm=${o}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${b}&name_dm=${o}" target="_blank">&#10149 Ankunftsmonitor<a></td>`:`<td class="attContentLink"><a href="${s}&name_dm=${e}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${b}&name_dm=${e}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `}function m(a){const{prio_route_type:t,station_name:e,station_id:d}=a;return`
        <table>
            <tr>
                ${t=="0"?i("Piktogramm_U_Bahn"):""}
                ${t=="2"?i("Piktogramm_Bahn"):""}
                ${t=="3"?i("Piktogramm_Bus"):""}
                <th class="title">${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${d}</td>
            </tr>
        </table>
    `}function v(a){const{route_names:t,route_ids:e,agency_id:d,agency_name:c,agency_url:o}=a,s={rab:{subgrid:"Regionalverkehr Alb-Bodensee",description:"",source:"Regionalverkehr Alb-Bodensee"},rbs:{subgrid:"Regional Bus Stuttgart",description:"",source:"Regional Bus Stuttgart"},sbg:{subgrid:"Südbadenbus",description:"",source:"Südbadenbus"},ovf:{subgrid:"Ominbusverkehr Franken",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},rvs:{subgrid:"Südwestbus",description:"",source:"Südwestbus"},vvs:{subgrid:"Verkehrsverbund Stuttgart",description:"",source:"Verkehrsverbund Stuttgart"},vrn:{subgrid:"Verkehrsverbund Rhein-Neckar",description:"",source:"Verkehrsverbund Rhein-Neckar"},tub:{subgrid:"Verkehrsverbund Neckar-Alb-Donau",description:"",source:"Verkehrsverbund Neckar-Alb-Donau"},din:{subgrid:"Donau-Iller-Nahverkehrsverbund",description:"DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund",source:"Donau-Iller-Nahverkehrsverbund"},kvv:{subgrid:"Karlsruher Verkehrsverbund",description:"",source:"Karlsruher Verkehrsverbund"},bod:{subgrid:"Bodensee-Oberschwaben-Verkehrsverbund",description:"",source:"Bodensee-Oberschwaben-Verkehrsverbund"},hnv:{subgrid:"Heilbronner Hohenloher Haller Nahverkehr",description:"",source:"Heilbronner Hohenloher Haller Nahverkehr"},oam:{subgrid:"OstalbMobil",description:"",source:"OstalbMobil"},tvv:{subgrid:"Move (TUTicket)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals TUTicket",source:"Move (TUTicket)"},vsb:{subgrid:"Move (VSB)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Schwarzwald-Baar",source:"Landratsamt Schwarzwald-Baar-Kreis"},vvr:{subgrid:"Move (VVR)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Rottweil",source:"Move (VVR)"},cw:{subgrid:"Verkehrsgesellschaft Calw",description:"",source:"Verkehrsgesellschaft Calw"},tgo:{subgrid:"Tarifverbund Ortenau",description:"",source:"Tarifverbund Ortenau"},vhb:{subgrid:"Verkehrsverbund Hegau-Bodensee",description:"",source:"Verkehrsverbund Hegau-Bodensee"},vpe:{subgrid:"Verkehrsverbund Pforzheim-Enzkreis",description:"",source:"Verkehrsverbund Pforzheim-Enzkreis"},vsh:{subgrid:"Kreisverkehr Schwäbisch Hall",description:"",source:"Kreisverkehr Schwäbisch Hall"},fds:{subgrid:"Verkehrsgemeinschaft Freudenstadt",description:"",source:"Verkehrsgemeinschaft Freudenstadt"},rmv:{subgrid:"Rhein-Main-Verkehrsverbund",description:"",source:"Rhein-Main-Verkehrsverbund Servicegesellschaft"},vgn:{subgrid:"Verkehrsverbund Großraum Nürnberg",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},wvv:{subgrid:"Würzburger Versorgungs- und Verkehrs-GmbH",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},bcl:{subgrid:"BusClassic",description:"Teil der Weiglein-Firmengruppe",source:""},ddb:{subgrid:"Verschiedene Eisenbahngesellschaften",description:"",source:"Europäisches Fahrplanzentrum"},swh:{subgrid:"Nahverkehr Hohenlohekreis",description:"Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre",source:"Nahverkehr Hohenlohekreis"},frb:{subgrid:"Freiburger Verkehrs AG",description:"",source:"Freiburger Verkehrs AG"},swg:{subgrid:"SWEG",description:"",source:"SWEG"},omp:{subgrid:"Omnipart",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},vu:{subgrid:"Verkehrsgemeinschaft am Bayerischen Untermain",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},gai:{subgrid:"Omnibusverkehr Gairing und Omnibus Weidachstein",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},ghu:{subgrid:"Gute Reise Hauck",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},grh:{subgrid:"Grasmann-Reisen Gmbh",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)"},als:{subgrid:"Fluo Grand Est",description:"umfasst in der Region Grand Est das Elsass und Lothringen",source:"Fluo Grand Est"},sbb:{subgrid:"Schweizer Bundesbahn",description:"Landesweites Netz",source:"Basler Verkehrsbetrieb"},bvb:{subgrid:"Basler Verkehrsbetrieb",description:"",source:"Basler Verkehrsbetrieb"},nvb:{subgrid:"NVBW",description:"seitens der NVBW eingepflegte Linien",source:"NVBW"},bus:{subgrid:"Flix",description:"FlixBus und FlixTrain",source:"DELFI"},hn:{subgrid:"Bürgerbusverkehre",description:"enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden",source:"Match Rider im Auftrag der Bürgerbus-Vereine"},nth:{subgrid:"Verkehrsgemeinschaft Mittelthüringen",description:"Thüringer Landesnetz",source:"Verkehrsgemeinschaft Mittelthüringen"}},b=e.split("-")[0];let r="",u="",l="";for(let n in s)n=n.split("-")[0],b==n&&(r+=s[n].subgrid,u+=s[n].description,l+=s[n].source);return`
        <table>
            <tr>
                ${r=="Verschiedene Eisenbahngesellschaften"||r==""?"":r.startsWith("Move")?i("MOVE"):i(r)}
                <th class="title">${t}</th>
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
                <td class="attContent">${c}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${o}" target="_blank">Link</a></td>
            </tr>
        </table>
        ${r==""?"":`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${r==l?`
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${r}</td>
            </tr>
            `:""}
            ${r!=l?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${l}</td>
            </tr>
            `:""}
            ${u==""?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${u}</td>
            </tr>
            `}            
        </table>`}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/routes?route_id=eq.${e}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${h}.mobidata-bw.de/gtfs/trips?route_id=eq.${e}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `}export{m as a,v as b,k as p};
