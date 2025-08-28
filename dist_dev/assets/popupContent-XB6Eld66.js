const f={layer:"MobiData-BW:radvis_cycle_network",style:"MobiData-BW:mdbw_radvis_cn_all",bounds:[7.4,47.4,10.5,49.8]},c={type:"line",source:"sourceRadvis",sourceLayer:"radvis_cycle_network",group:"Radnetze",lineWidth:["interpolate",["linear"],["zoom"],6,2,12,3]},m=[{id:"radvis_KommunalesNetz",label:"Kommunales Netz",filter:["case",[">=",["zoom"],12],["all",["==",["get","ext_bw_kommunetz"],1],["!=",["get","ext_bw_kreisnetz"],1],["!=",["get","ext_bw_landesnetz"],1]],!1],color:"#0020aa",visibility:"none",...c},{id:"radvis_Kreisnetz",label:"Kreisnetz",filter:["case",[">=",["zoom"],10],["all",["==",["get","ext_bw_kreisnetz"],1],["!=",["get","ext_bw_landesnetz"],1]],!1],color:"#008001",visibility:"none",...c},{id:"radvis_RadNetzBw",label:"RadNETZ BW",filter:["==",["get","ext_bw_landesnetz"],1],color:"#ff7f00",...c}];function w(b){const{routenname:o,routen_id:i,str_name:$,fuehrung:t,richtung:d,belag:e,laenge:u,licht:r,breite:C,lage:l,b_pflicht:h,bewertung:n,baulast:s,status:a,tempo:g}=b;return`
        <table>
            <tr>
                ${o?`<th class="title">${o}</th>`:'<th class="title"><i>Routenname nicht vorhanden</i></th>'}
            </tr>
            </table><br><table>
            ${i?`
            <tr>
                <td class="att">Routen-ID</td>
                <td class="attContent">${i}</td>
            </tr>
            `:""}
            ${$?`
            <tr>
                <td class="att">Straßenname-ID</td>
                <td class="attContent">${$}</td>
            </tr>
            `:""}
            ${t?`
            <tr>
                <td class="att">Führungsform</td>
                ${t=="100"?'<td class="attContent">Radverkehr auf Fahrbahn (Mischverkehr mit KFZ)</td>':""}
                ${t=="101"?'<td class="attContent">Fahrradstraße</td>':""}
                ${t=="102"?'<td class="attContent">Mehrzweckstreifen</td>':""}
                ${t=="103"?'<td class="attContent">Schutzstreifen</td>':""}
                ${t=="104"?'<td class="attContent">Radverkehr auf Fahrbahnen mit Straßenbahn</td>':""}
                ${t=="105"?'<td class="attContent">Spielstraße</td>':""}
                ${t=="200"?'<td class="attContent">Radfahrstreifen</td>':""}
                ${t=="300"?'<td class="attContent">baulich angelegte Radwege</td>':""}
                ${t=="301"?'<td class="attContent">Einrichtungsradwege</td>':""}
                ${t=="302"?'<td class="attContent">Zweirichtungsradwege</td>':""}
                ${t=="400"?'<td class="attContent">Führung mit Fußgängerverkehr</td>':""}
                ${t=="401"?'<td class="attContent">gemeinsamer Geh- und Radweg (StVO 240)</td>':""}
                ${t=="402"?'<td class="attContent">Führung mit Fußgängerverkehr Radfahrer frei (StVO 239)</td>':""}
                ${t=="403"?'<td class="attContent">Fußgängerzone</td>':""}
                ${t=="404"?'<td class="attContent">Gehweg (Schiebestrecke)</td>':""}
                ${t=="405"?'<td class="attContent">Gehweg (Radverkehr frei)</td>':""}
                ${t=="500"?'<td class="attContent">sonstige Wege</td>':""}
                ${t=="501"?'<td class="attContent">Wirtschaftsweg</td>':""}
                ${t=="502"?'<td class="attContent">Forstweg</td>':""}
                ${t=="503"?'<td class="attContent">Feldweg</td>':""}
                ${t=="504"?'<td class="attContent">Deichweg</td>':""}
                ${t=="505"?'<td class="attContent">Betriebsweg an Bundeswasserstraßen</td>':""}
                ${t=="506"?'<td class="attContent">Treppe</td>':""}
                ${t=="600"?'<td class="attContent">maschinenbetriebene Verbindungen</td>':""}
                ${t=="601"?'<td class="attContent">Fähre</td>':""}
                ${t=="602"?'<td class="attContent">Schienen- bzw. Seilbahnbetrieb</td>':""}
                ${t=="900"?'<td class="attContent">unbekannt</td>':""}
                </tr>
            `:""}
            ${d?`
            <tr>
                <td class="att">Fahrtrichtung</td>
                ${d=="1"?'<td class="attContent">beide Richtungen</td>':""}
                ${d=="2"?'<td class="attContent">in Geometrierichtung</td>':""}
                ${d=="3"?'<td class="attContent">gegen Geometrierichtung</td>':""}
                ${d=="9"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${e?`
            <tr>
                <td class="att">Oberflächenart</td>
                ${e=="100"?'<td class="attContent">befestigte Oberfläche</td>':""}
                ${e=="110"?'<td class="attContent">Deckschicht aus Asphalt</td>':""}
                ${e=="120"?'<td class="attContent">Deckschicht aus Beton</td>':""}
                ${e=="130"?'<td class="attContent">Pflaster</td>':""}
                ${e=="131"?'<td class="attContent">Betonpflaster</td>':""}
                ${e=="132"?'<td class="attContent">Kopf-/Natursteinpflaster</td>':""}
                ${e=="140"?'<td class="attContent">Platten</td>':""}
                ${e=="141"?'<td class="attContent">Betonplatten</td>':""}
                ${e=="142"?'<td class="attContent">Natursteinplatten</td>':""}
                ${e=="143"?'<td class="attContent">sonstige Platten</td>':""}
                ${e=="200"?'<td class="attContent">wassergebundener Belag</td>':""}
                ${e=="201"?'<td class="attContent">feiner Splittbelag</td>':""}
                ${e=="202"?'<td class="attContent">grober Schotter</td>':""}
                ${e=="300"?'<td class="attContent">ungebundener/naturnaher Belag</td>':""}
                ${e=="400"?'<td class="attContent">Holz</td>':""}
                ${e=="500"?'<td class="attContent">Metall</td>':""}
                ${e=="900"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${u?`
            <tr>
                <td class="att">Länge-ID</td>
                <td class="attContent">${u}m</td>
            </tr>
            `:""}
            ${r?`
            <tr>
                <td class="att">Beleuchtung</td>
                ${r=="0"?'<td class="attContent">unbeleuchtet</td>':""}
                ${r=="1"?'<td class="attContent">beleuchtet</td>':""}
                ${r=="2"?'<td class="attContent">Retroreflektierende Randmarkierung</td>':""}
            </tr>
            `:""}
            ${C?`
            <tr>
                <td class="att">Breite</td>
                <td class="attContent">${C}cm</td>
            </tr>
            `:""}       
            ${l?`
            <tr>
                <td class="att">Ortslage</td>
                ${l=="1"?'<td class="attContent">innerorts</td>':""}
                ${l=="2"?'<td class="attContent">außerorts</td>':""}
            </tr>
            `:""}
            ${h?`
            <tr>
                <td class="att">Benutzungspflicht</td>
                <td class="attContent">${h}</td>
            </tr>
            `:""}
            ${n?`
            <tr>
                <td class="att">Bewertung</td>
                ${n=="1"?'<td class="attContent">neuwertig / sehr guter Zustand</td>':""}
                ${n=="2"?'<td class="attContent">guter Zustand</td>':""}
                ${n=="3"?'<td class="attContent">mittlerer Zustand</td>':""}
                ${n=="4"?'<td class="attContent">unzureichender Zustand / Anlass zur Beobachtung/Analyse</td>':""}
                ${n=="5"?'<td class="attContent">unbefahrbar</td>':""}
                ${n=="9"?'<td class="attContent">nicht bewertet</td>':""}
            </tr>
            `:""}
            ${s?`
            <tr>
                <td class="att">Zuständgkeit</td>
                ${s=="1"?'<td class="attContent">Bund</td>':""}
                ${s=="2"?'<td class="attContent">Land</td>':""}
                ${s=="3"?'<td class="attContent">Kreis</td>':""}
                ${s=="4"?'<td class="attContent">Gemeinde</td>':""}
                ${s=="5"?'<td class="attContent">Dritte</td>':""}
                ${s=="9"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${a?`
            <tr>
                <td class="att">Status</td>
                ${a=="10"?'<td class="attContent">befahrbar</td>':""}
                ${a=="20"?'<td class="attContent">in Bau</td>':""}
                ${a=="30"?'<td class="attContent">in Planung</td>':""}
                ${a=="40"?'<td class="attContent">gesperrt</td>':""}
                ${a=="41"?'<td class="attContent">dauerhaft gesperrt</td>':""}
                ${a=="42"?'<td class="attContent">saisonal gesperrt</td>':""}
                ${a=="43"?'<td class="attContent">gesperrt mit Enddatum</td>':""}
            </tr>
            `:""}
            ${g?`
            <tr>
                <td class="att">Geschwindigkeit</td>
                <td class="attContent">${g}km/h</td>
            </tr>
            `:""}
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.balm.bund.de/SharedDocs/ExterneLinks/DE/Download/BALM_Dokumentation_Nationales-Datenmodell_Geodaten-Radverkehrsinfrastruktur.pdf?__blob=publicationFile&v=1" target="_blank">&#10149 zum Datenschema<a></td>
            </tr>
        </table>
    `}export{m as l,w as p,f as s};
