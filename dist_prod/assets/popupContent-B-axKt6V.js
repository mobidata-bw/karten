import{j as g}from"./addControlLayers-B8v3Vujt.js";import{p as i}from"./popupImages-C83DM7eO.js";function B(d){const{stop_name:s,stop_id:e,wheelchair_boarding:o,location_type:c}=d,u=e.split("_")[0],r="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true",l="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr";return`
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
            ${o=="accessible"?`
            <tr>
                <td class="att"> Barrierefreiheit</td>
                <td class="attContent">Rollstuhl-Einstiegsmöglichkeit</td>
            </tr>
            `:""}
            <tr>
        </table><table>
            <tr>
                <td colspan="2" class="attContentLink"><a href="https://${g}.mobidata-bw.de/gtfs/stops?stop_id=eq.${e}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${c=="station"?`
                <td class="attContentLink"><a href="${r}&name_dm=${u}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${l}&name_dm=${u}" target="_blank">&#10149 Ankunftsmonitor<a></td>`:`<td class="attContentLink"><a href="${r}&name_dm=${e}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${l}&name_dm=${e}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `}function k(d){const{prio_route_type:s,station_name:e,station_id:o}=d;return`
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
                <td class="attContent">${o}</td>
            </tr>
        </table>
    `}function v(d){const{route_names:s,route_ids:e,agency_id:o,agency_name:c,agency_url:u}=d,r={rab:{subgrid:"Regionalverkehr Alb-Bodensee",description:"",source:"Regionalverkehr Alb-Bodensee",mode:"Bus"},rbs:{subgrid:"Regional Bus Stuttgart",description:"",source:"Regional Bus Stuttgart",mode:"Bus"},sbg:{subgrid:"Südbadenbus",description:"",source:"Südbadenbus",mode:"Bus"},ovf:{subgrid:"Ominbusverkehr Franken",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},rvs:{subgrid:"Südwestbus",description:"",source:"Südwestbus",mode:"Bus"},vvs:{subgrid:"Verkehrsverbund Stuttgart",description:"",source:"Verkehrsverbund Stuttgart",mode:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus"},vrn:{subgrid:"Verkehrsverbund Rhein-Neckar",description:"",source:"Verkehrsverbund Rhein-Neckar",mode:"Straßen-/S-/U-Bahn, Bus, Fähre, Seilbahn"},tub:{subgrid:"Verkehrsverbund Neckar-Alb-Donau",description:"",source:"Verkehrsverbund Neckar-Alb-Donau",mode:"Regionalverkehr, Bus"},din:{subgrid:"Donau-Iller-Nahverkehrsverbund",description:"DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund",source:"Donau-Iller-Nahverkehrsverbund",mode:"Straßen-/S-/U-Bahn, Bus"},kvv:{subgrid:"Karlsruher Verkehrsverbund",description:"",source:"Karlsruher Verkehrsverbund",mode:"Straßen-/S-/U-Bahn, Bus"},bod:{subgrid:"Bodensee-Oberschwaben-Verkehrsverbund",description:"",source:"Bodensee-Oberschwaben-Verkehrsverbund",mode:"Regionalverkehr, Bus"},hnv:{subgrid:"Heilbronner Hohenloher Haller Nahverkehr",description:"",source:"Heilbronner Hohenloher Haller Nahverkehr",mode:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus"},oam:{subgrid:"OstalbMobil",description:"",source:"OstalbMobil",mode:"Bus"},tvv:{subgrid:"Move (TUTicket)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals TUTicket",source:"Move (TUTicket)",mode:"Bus"},vsb:{subgrid:"Move (VSB)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Schwarzwald-Baar",source:"Landratsamt Schwarzwald-Baar-Kreis",mode:"Bus"},vvr:{subgrid:"Move (VVR)",description:"Verkehrsverbund Schwarzwald-Baar-Heuberg, ehemals Verkehrsverbund Rottweil",source:"Move (VVR)",mode:"Bus"},cw:{subgrid:"Verkehrsgesellschaft Calw",description:"",source:"Verkehrsgesellschaft Calw",mode:"Bus"},tgo:{subgrid:"Tarifverbund Ortenau",description:"",source:"Tarifverbund Ortenau",mode:"Bus"},vhb:{subgrid:"Verkehrsverbund Hegau-Bodensee",description:"",source:"Verkehrsverbund Hegau-Bodensee",mode:"Bus"},vpe:{subgrid:"Verkehrsverbund Pforzheim-Enzkreis",description:"",source:"Verkehrsverbund Pforzheim-Enzkreis",mode:"Bus"},vsh:{subgrid:"Kreisverkehr Schwäbisch Hall",description:"",source:"Kreisverkehr Schwäbisch Hall",mode:"Bus"},fds:{subgrid:"Verkehrsgemeinschaft Freudenstadt",description:"",source:"Verkehrsgemeinschaft Freudenstadt",mode:"Bus"},rmv:{subgrid:"Rhein-Main-Verkehrsverbund",description:"",source:"Rhein-Main-Verkehrsverbund Servicegesellschaft",mode:"Bus"},vgn:{subgrid:"Verkehrsverbund Großraum Nürnberg",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},wvv:{subgrid:"Würzburger Versorgungs- und Verkehrs-GmbH",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},bcl:{subgrid:"BusClassic",description:"Teil der Weiglein-Firmengruppe",source:"",mode:"Bus"},ddb:{subgrid:"Verschiedene Eisenbahngesellschaften",description:"",source:"Europäisches Fahrplanzentrum",mode:"Regionalverkehr, Straßen-/S-/U-Bahn"},swh:{subgrid:"Nahverkehr Hohenlohekreis",description:"Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre",source:"Nahverkehr Hohenlohekreis",mode:"Bus"},frb:{subgrid:"Freiburger Verkehrs AG",description:"",source:"Freiburger Verkehrs AG",mode:"Straßen-/S-/U-Bahn, Bus"},swg:{subgrid:"SWEG",description:"",source:"SWEG",mode:"Bus"},omp:{subgrid:"Omnipart",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},vu:{subgrid:"Verkehrsgemeinschaft am Bayerischen Untermain",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},gai:{subgrid:"Omnibusverkehr Gairing und Omnibus Weidachstein",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},ghu:{subgrid:"Gute Reise Hauck",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},grh:{subgrid:"Grasmann-Reisen Gmbh",description:"",source:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",mode:"Bus"},als:{subgrid:"Fluo Grand Est",description:"umfasst in der Region Grand Est das Elsass und Lothringen",source:"Fluo Grand Est",mode:"Straßen-/S-/U-Bahn, Bus"},sbb:{subgrid:"Schweizer Bundesbahn",description:"Landesweites Netz",source:"Basler Verkehrsbetrieb",mode:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus, Fähre"},bvb:{subgrid:"Basler Verkehrsbetrieb",description:"",source:"Basler Verkehrsbetrieb",mode:"Straßen-/S-/U-Bahn, Bus"},nvb:{subgrid:"NVBW",description:"seitens der NVBW eingepflegte Linien",source:"NVBW",mode:"Bus"},bus:{subgrid:"Flix",description:"FlixBus und FlixTrain",source:"DELFI",mode:"Regionalverkehr, Bus"},hn:{subgrid:"Bürgerbusverkehre",description:"enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden",source:"Match Rider im Auftrag der Bürgerbus-Vereine",mode:"Bus"},nth:{subgrid:"Verkehrsgemeinschaft Mittelthüringen",description:"Thüringer Landesnetz",source:"Verkehrsgemeinschaft Mittelthüringen",mode:"Regionalverkehr"}},l=e.split("-")[0];let t="",h="",b="",n="";for(let a in r)a=a.split("-")[0],l==a&&(t+=r[a].subgrid,h+=r[a].description,b+=r[a].source,n+=r[a].mode);return`
        <table>
            <tr>
                ${t=="Verschiedene Eisenbahngesellschaften"||t==""?"":t.startsWith("Move")?i("MOVE"):i(t)}
                <th class="title">${s}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Linien-ID</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Betreiber-ID</td>
                <td class="attContent">${o}</td>
            </tr><tr>
                <td class="att">Betreibername</td>
                <td class="attContent">${c}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${u}" target="_blank">Link</a></td>
            </tr>
        </table>
        ${t==""?"":`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${t==b?`
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${t}</td>
            </tr>
            `:""}
            ${t!=b?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${t}</td>
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
            <tr>
                <td class="att">Bus</td>
                ${n.match("Bus")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Regionalverkehr</td>
                ${n.match("Regionalverkehr")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Straßen-, S- oder U-Bahn</td>
                ${n.match("Straßen-/S-/U-Bahn")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Fähre</td>
                ${n.match("Fähre")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Seilbahn</td>
                ${n.match("Seilbahn")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr>
        </table>`}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${g}.mobidata-bw.de/gtfs/routes?route_id=eq.${e}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${g}.mobidata-bw.de/gtfs/trips?route_id=eq.${e}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `}export{k as a,v as b,B as p};
