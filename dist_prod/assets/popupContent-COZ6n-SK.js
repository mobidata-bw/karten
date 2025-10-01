import{s as o}from"./addControlLayers-WybunddG.js";import{p as f}from"./popupImages-CGynC9EW.js";const w={type:"geojson",data:{type:"FeatureCollection",features:[]}},k={type:"geojson",data:{type:"FeatureCollection",features:[]}},m={type:"geojson",data:{type:"FeatureCollection",features:[]}},F=o("maps/pedestrian_crossings","zebra"),n={group:"Fußgängerüberwege"},v=[{id:"uncontrolled",label:"Uncontrolled",source:"sourceUncontrolled",color:"#C4001F",...n,url:o("maps/pedestrian_crossings","uncontrolled").data,visibility:"none"},{id:"footway",label:"Footway",source:"sourceFootway",color:"#75b9a2",...n,url:o("maps/pedestrian_crossings","footway").data,visibility:"none"},{id:"marked",label:"Marked",source:"sourceMarked",color:"#ffe280",...n,url:o("maps/pedestrian_crossings","marked").data,visibility:"none"},{id:"zebra",label:"Zebra",source:"sourceZebra",color:"#366491",...n}];function S(h){const{id:u,id_2:b,check_date:d,check_da_1:r,check_da_2:l,check_da_3:c,check_da_4:i,check_da_5:$,survey_dat:p,highway:e,turning_circle:g,kerb:a,surface:t,wheelchair:s,image:C}=h;return`
        <table>
            <tr>
                ${f("OpenStreetMap")}
                ${u?`<th class="title">${u}</th>`:""}
                ${b?`<th class="title">${b}</th>`:""}
            </tr>
        </table><br><table>
            <tr>
                ${!d&&!r&&!l&&!c&&!i&&!$&&!p?"":'<td class="att">Letze Überprüfung</td>'}
                ${d?`<td class="attContent">${d}</td>`:""}
                ${r?`<td class="attContent">${r}</td>`:""}
                ${l?`<td class="attContent">${l}</td>`:""}
                ${c?`<td class="attContent">${c}</td>`:""}
                ${i?`<td class="attContent">${i}</td>`:""}
                ${$?`<td class="attContent">${$}</td>`:""}
                ${p?`<td class="attContent">${p}</td>`:""}
            </tr><tr>
                ${e?'<td class="att">Straßentyp</td>':""}
                ${e=="crossing"?'<td class="attContent">Fußgängerüberweg</td>':""}
                ${e=="footway"?'<td class="attContent">Gehweg</td>':""}
                ${e=="cycleway"?'<td class="attContent">Radweg</td>':""}
                ${e=="path"?'<td class="attContent">Wanderweg/Trampelpfad</td>':""}
                ${e=="proposed"?'<td class="attContent">Geplante, noch nicht gebaute Straße</td>':""}
                ${e=="service"?'<td class="attContent">Erschließungsweg</td>':""}
                ${e=="track"?'<td class="attContent">Wirtschafts-, Feld- oder Waldweg</td>':""}
                ${e=="pedestrian"?'<td class="attContent">Weg, Platz oder Straße ausschließlich für Fußgänger (z.B. Fußgängerzone)</td>':""}
                ${g=="turning_circle"?'<td class="attContent">Wendestelle</td>':""}
                ${g=="traffic_signals"?'<td class="attContent">Ampel</td>':""}
            </tr><tr>
                ${a?'<td class="att">Bordstein</td>':""}
                ${a=="no"?'<td class="attContent">nein</td>':""}
                ${a=="lowered"?'<td class="attContent">abgesenkt</td>':""}
                ${a=="raised"?'<td class="attContent">erhöht</td>':""}
                ${a=="flush"?'<td class="attContent">auf Straßenebene</td>':""}
            </tr><tr>
                ${t?'<td class="att">Oberfläche</td>':""}
                ${t=="asphalt"?'<td class="attContent">Asphalt</td>':""}
                ${t=="paving_stones"?'<td class="attContent">Pflastersteine</td>':""}
                ${t=="sett"?'<td class="attContent">Behauenes Steinpflaster</td>':""}
                ${t=="cobblestone"?'<td class="attContent">Kopfsteinpflaster</td>':""}
                ${t=="cobblestone:flattened"?'<td class="attContent">Pflaster mit abgeflachten Steinen</td>':""}
                ${t=="compacted"?'<td class="attContent">Verdichtete Deckschicht</td>':""}
                ${t=="concrete"?'<td class="attContent">Beton</td>':""}
                ${t=="concrete:plates"?'<td class="attContent">Betonplatten</td>':""}
                ${t=="ground"?'<td class="attContent">Gewachsene, naturbelassene Oberfläche</td>':""}
                ${t=="grass_paver"?'<td class="attContent">Rasengittersteine</td>':""}
                ${t=="pebblestone"?'<td class="attContent">Kies</td>':""}
                ${t=="unhewn_cobblestone"?'<td class="attContent">Rohes Kopfsteinpflaster</td>':""}
                ${t=="unpaved"?'<td class="attContent">Ohne Straßenbelag</td>':""}                    
            </tr><tr>
                ${s?'<td class="att">Rollstuhlbefahrbarkeit</td>':""}
                ${s=="yes"?'<td class="attContent">ja</td>':""}
                ${s=="no"?'<td class="attContent">nein</td>':""}
                ${s=="limited"?'<td class="attContent">begrenzt</td>':""}              
            </tr>
        </table><table>
            <tr>
                ${C?`<td class="attContentLink"><a href="${C}" target="_blank">&#10149 Foto</a></td>`:""}
            </tr>
        </table>
    `}export{k as a,m as b,F as c,v as l,S as p,w as s};
