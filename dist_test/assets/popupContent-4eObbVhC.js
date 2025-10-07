import{j as o}from"./addControlLayers-DrLHwEKM.js";import{p as i}from"./popupImages-CU4m2jyf.js";function v(l){const{stop_name:n,stop_id:e,wheelchair_boarding:h,location_type:u}=l,d=e.split("_")[0],r="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true",b="https://www.efa-bw.de/rtMonitor/XSLT_DM_REQUEST?itdLPxx_banner=mobidatabw.png&itdLPxx_branding=mobidatabw&locationServerActive=1&stateless=1&sRaLP=1&itdLPxx_generalInfo=false&mode=direct&type_dm=any&itdLPxx_stopname=false&itdLPxx_genICS=false&itdLPxx_stopICS=false&itdLPxx_depLineICS=false&itdLPxx_depStopICS=false&itdLPxx_hint=false&itdLPxx_useRealtime=true&itdDateTimeDepArr=arr";return`
        <table>
            <tr>
                ${i("Piktogramm_Haltestelle")}
                <th class="title">${n}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltesteig-ID</td>
                <td class="attContent">${e}</td>
            </tr>
            ${h=="accessible"?`
            <tr>
                <td class="att"> Barrierefreiheit</td>
                <td class="attContent">Rollstuhl-Einstiegsmöglichkeit</td>
            </tr>
            `:""}
            <tr>
        </table><table>
            <tr>
                <td colspan="2" class="attContentLink"><a href="https://${o}.mobidata-bw.de/gtfs/stops?stop_id=eq.${e}" target="_blank">&#10149 Haltestelle/Station<a></td>
            </tr><tr>
                ${u=="station"?`
                <td class="attContentLink"><a href="${r}&name_dm=${d}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${b}&name_dm=${d}" target="_blank">&#10149 Ankunftsmonitor<a></td>`:`<td class="attContentLink"><a href="${r}&name_dm=${e}" target="_blank">&#10149 Abfahrtsmonitor<a></td><td class="attContentLink"><a href="${b}&name_dm=${e}" target="_blank">&#10149 Ankunftsmonitor<a></td>
                `}   
             </tr>
        </table>
    `}function m(l){const{prio_route_type:n,station_name:e,station_id:h}=l;return`
        <table>
            <tr>
                ${n=="0"?i("Piktogramm_U_Bahn"):""}
                ${n=="2"?i("Piktogramm_Bahn"):""}
                ${n=="3"?i("Piktogramm_Bus"):""}
                <th class="title">${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${h}</td>
            </tr>
        </table>
    `}function z(l){const{route_names:n,route_ids:e,agency_id:h,agency_name:u,agency_url:d}=l,r={rab:{teilnetz:"Regionalverkehr Alb-Bodensee",teilnetzBeschreibung:"",datengeber:"Regionalverkehr Alb-Bodensee",verkehrsmittel:"Bus"},rbs:{teilnetz:"Regional Bus Stuttgart",teilnetzBeschreibung:"",datengeber:"Regional Bus Stuttgart",verkehrsmittel:"Bus"},sbg:{teilnetz:"Südbadenbus",teilnetzBeschreibung:"",datengeber:"Südbadenbus",verkehrsmittel:"Bus"},ovf:{teilnetz:"Ominbusverkehr Franken",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},rvs:{teilnetz:"Südwestbus",teilnetzBeschreibung:"",datengeber:"Südwestbus",verkehrsmittel:"Bus"},vvs:{teilnetz:"Verkehrsverbund Stuttgart",teilnetzBeschreibung:"",datengeber:"Verkehrsverbund Stuttgart",verkehrsmittel:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus"},vrn:{teilnetz:"Verkehrsverbund Rhein-Neckar",teilnetzBeschreibung:"",datengeber:"Verkehrsverbund Rhein-Neckar",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus, Fähre, Seilbahn"},tub:{teilnetz:"Verkehrsverbund Neckar-Alb-Donau",teilnetzBeschreibung:"",datengeber:"Verkehrsverbund Neckar-Alb-Donau",verkehrsmittel:"Regionalverkehr, Bus"},din:{teilnetz:"Donau-Iller-Nahverkehrsverbund",teilnetzBeschreibung:"DING übernimmt Datenlieferung für den Heidenheimer Tarifverbund",datengeber:"Donau-Iller-Nahverkehrsverbund",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus"},kvv:{teilnetz:"Karlsruher Verkehrsverbund",teilnetzBeschreibung:"",datengeber:"Karlsruher Verkehrsverbund",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus"},bod:{teilnetz:"Bodensee-Oberschwaben-Verkehrsverbund",teilnetzBeschreibung:"",datengeber:"Bodensee-Oberschwaben-Verkehrsverbund",verkehrsmittel:"Regionalverkehr, Bus"},hnv:{teilnetz:"Heilbronner Hohenloher Haller Nahverkehr",teilnetzBeschreibung:"",datengeber:"Heilbronner Hohenloher Haller Nahverkehr",verkehrsmittel:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus"},oam:{teilnetz:"OstalbMobil",teilnetzBeschreibung:"",datengeber:"OstalbMobil",verkehrsmittel:"Bus"},tvv:{teilnetz:"Move (TUTicket)",teilnetzBeschreibung:"ehemals TUTicket",datengeber:"Move (TUTicket)",verkehrsmittel:"Bus"},vsb:{teilnetz:"Move (VSB)",teilnetzBeschreibung:"ehemals Verkehrsverbund Schwarzwald-Baar",datengeber:"Landratsamt Schwarzwald-Baar-Kreis",verkehrsmittel:"Bus"},vvr:{teilnetz:"Move (VVR)",teilnetzBeschreibung:"ehemals Verkehrsverbund Rottweil",datengeber:"Move (VVR)",verkehrsmittel:"Bus"},cw:{teilnetz:"Verkehrsgesellschaft Calw",teilnetzBeschreibung:"",datengeber:"Verkehrsgesellschaft Calw",verkehrsmittel:"Bus"},tgo:{teilnetz:"Tarifverbund Ortenau",teilnetzBeschreibung:"",datengeber:"Tarifverbund Ortenau",verkehrsmittel:"Bus"},vhb:{teilnetz:"Verkehrsverbund Hegau-Bodensee",teilnetzBeschreibung:"",datengeber:"Verkehrsverbund Hegau-Bodensee",verkehrsmittel:"Bus"},vpe:{teilnetz:"Verkehrsverbund Pforzheim-Enzkreis",teilnetzBeschreibung:"",datengeber:"Verkehrsverbund Pforzheim-Enzkreis",verkehrsmittel:"Bus"},vsh:{teilnetz:"Kreisverkehr Schwäbisch Hall",teilnetzBeschreibung:"",datengeber:"Kreisverkehr Schwäbisch Hall",verkehrsmittel:"Bus"},fds:{teilnetz:"Verkehrsgemeinschaft Freudenstadt",teilnetzBeschreibung:"",datengeber:"Verkehrsgemeinschaft Freudenstadt",verkehrsmittel:"Bus"},ddb:{teilnetz:"Verschiedene Eisenbahngesellschaften",teilnetzBeschreibung:"",datengeber:"Europäisches Fahrplanzentrum",verkehrsmittel:"Regionalverkehr, Straßen-/S-/U-Bahn"},swh:{teilnetz:"Nahverkehr Hohenlohekreis",teilnetzBeschreibung:"Der NVH ist tariflich Teil des HNV, bestellt im Hohenlohekreis als dessen Eigenbetrieb aber die Busverkehre",datengeber:"Nahverkehr Hohenlohekreis",verkehrsmittel:"Bus"},frb:{teilnetz:"Freiburger Verkehrs AG",teilnetzBeschreibung:"",datengeber:"Freiburger Verkehrs AG",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus"},swg:{teilnetz:"SWEG",teilnetzBeschreibung:"",datengeber:"SWEG",verkehrsmittel:"Bus"},omp:{teilnetz:"Omnipart",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},vu:{teilnetz:"Verkehrsgemeinschaft am Bayerischen Untermain",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},gai:{teilnetz:"Omnibusverkehr Gairing und Omnibus Weidachstein",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},ghu:{teilnetz:"Gute Reise Hauck",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},grh:{teilnetz:"Grasmann-Reisen Gmbh",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},als:{teilnetz:"Fluo Grand Est",teilnetzBeschreibung:"umfasst in der Region Grand Est das Elsass und Lothringen",datengeber:"Fluo Grand Est",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus"},sbb:{teilnetz:"Schweizer Bundesbahn",teilnetzBeschreibung:"Landesweites Netz",datengeber:"Basler Verkehrsbetrieb",verkehrsmittel:"Regionalverkehr, Straßen-/S-/U-Bahn, Bus, Fähre"},bvb:{teilnetz:"Basler Verkehrsbetrieb",teilnetzBeschreibung:"",datengeber:"Basler Verkehrsbetrieb",verkehrsmittel:"Straßen-/S-/U-Bahn, Bus"},nvb:{teilnetz:"NVBW",teilnetzBeschreibung:"seitens der NVBW eingepflegte Linien",datengeber:"NVBW",verkehrsmittel:"Bus"},bus:{teilnetz:"Flix",teilnetzBeschreibung:"FlixBus und FlixTrain",datengeber:"DELFI",verkehrsmittel:"Regionalverkehr, Bus"},hn:{teilnetz:"Bürgerbusverkehre",teilnetzBeschreibung:"enthalten sind Bürgerbusverkehre, die nicht über Verkehrsverbünde abgebildet werden",datengeber:"Match Rider im Auftrag der Bürgerbus-Vereine",verkehrsmittel:"Bus"},nth:{teilnetz:"Verkehrsgemeinschaft Mittelthüringen",teilnetzBeschreibung:"Thüringer Landesnetz",datengeber:"Verkehrsgemeinschaft Mittelthüringen",verkehrsmittel:"Regionalverkehr"},rmv:{teilnetz:"Rhein-Main-Verkehrsverbund",teilnetzBeschreibung:"",datengeber:"Rhein-Main-Verkehrsverbund Servicegesellschaft",verkehrsmittel:"Bus"},vgn:{teilnetz:"Verkehrsverbund Großraum Nürnberg",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"},wvv:{teilnetz:"Würzburger Versorgungs- und Verkehrs-GmbH",teilnetzBeschreibung:"",datengeber:"DEFAS Bayern (Angebot der Bayerischen Eisenbahngesellschaft)",verkehrsmittel:"Bus"}},b=e.split("-")[0];let t="",c="",g="",a="";for(let s in r)s=s.split("-")[0],b==s&&(t+=r[s].teilnetz,c+=r[s].teilnetzBeschreibung,g+=r[s].datengeber,a+=r[s].verkehrsmittel);return`
        <table>
            <tr>
                ${t=="Verschiedene Eisenbahngesellschaften"||t==""?"":t=="Move (TUTicket)"||t=="Move (VSB)"||t=="Move (VVR)"?i("MOVE"):i(t)}
                <th class="title">${n}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Linien-ID</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Betreiber-ID</td>
                <td class="attContent">${h}</td>
            </tr><tr>
                <td class="att">Betreibername</td>
                <td class="attContent">${u}</td>
            </tr><tr>
                <td class="att">Betreiber-Webseite</td>
                <td class="attContent"><a href="${d}" target="_blank">Link</a></td>
            </tr>
        </table>' +
        ${t==""?"":`
        <br><table>
        <div class="title title2">Teilnetz</div>
            ${t==g?`
            <tr>
                <td class="att">Name/Datengeber</td>
                <td class="attContent">${t}</td>
            </tr>
            `:""}
            ${t!=g?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${t}</td>
            </tr><tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${g}</td>
            </tr>'
            `:""}
            ${c==""?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${c}</td>
            </tr>
            `}
            '<tr>
                <td class="att">Bus</td>
                ${a.match("Bus")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Regionalverkehr</td>
                ${a.match("Regionalverkehr")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Straßen-, S- oder U-Bahn</td>
                ${a.match("Straßen-/S-/U-Bahn")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Fähre</td>
                ${a.match("Fähre")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr><tr>
                <td class="att">Seilbahn</td>
                ${a.match("Seilbahn")?'<td class="tdDatengeber">&#10003;</td>':'<td class="tdDatengeber">&#x2717;</td>'}
            </tr>
        </table>`}
        <table>
            <tr>
                <td class="attContentLink"><a href="https://${o}.mobidata-bw.de/gtfs/routes?route_id=eq.${e}" target="_blank">&#10149 Linie<a></td>
                <td class="attContentLink"><a href="https://${o}.mobidata-bw.de/gtfs/trips?route_id=eq.${e}" class="photoMargin" target="_blank">&#10149 Fahrten<a></td>
            </tr>
        </table>
    `}export{m as a,z as b,v as p};
