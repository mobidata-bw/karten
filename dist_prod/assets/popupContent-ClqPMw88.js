import{u as _,t as et}from"./timeStamps-CJ2Ek9ou.js";import{k as X}from"./addControlLayers-CK2s8XcE.js";import{p as at}from"./popupImages-BDXiGBGW.js";const{purpose:f,type:G,geometry:R,object:z,id:v,layerFilter:it,layerGroup:st}=_(),_t={layer:"MobiData-BW:park-api_car",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[5.9,45.8,17,54.8]},yt={layer:"MobiData-BW:park-api_car_lines",style:"MobiData-BW:mdbw_lines",bounds:[7,46,10,50],promoteId:"id"},mt={layer:"MobiData-BW:park-api_car_polygons",style:"MobiData-BW:mdbw_polygons",bounds:[7,46,10,50]},ht={layer:"MobiData-BW:park-api_bicycle",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[7.1,47.5,13.5,53.8]};function k({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Occupancy_NoRealtimeInformation`,label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!1],a],["all",["==",["get","parking_object"],"spot"],["any",["==",["get","realtime_status"],"UNKNOWN"],["==",["get","has_realtime_data"],!1]],a]],color:"#615fdf",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_OutdatedRealtimeInformation`,label:"Echtzeitdaten älter 30 Minuten",subGroup:"Belegung",filter:["all",["==",["get","has_realtime_data"],!0],["==",["get","realtime_data_outdated"],!0],a,["!=",["get","source_id"],55]],color:"#cacaca",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_Closed`,label:"Geschlossen",subGroup:"Belegung",filter:["all",["==",["get","realtime_opening_status"],"CLOSED"],a],color:"#880000",scope:["car","bicycle","item","buildings","buildings_disabled","site"],...e},{id:`parkApi${t}Occupancy_VeryLowAvailability`,label:"Kaum Plätze (unter 2 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["get","realtime_free_capacity"],0],["<",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["!=",["get","realtime_opening_status"],"CLOSED"]],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"TAKEN"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#ed0000",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_LowAvailability`,label:"Wenig Plätze (2 bis 20 %)",subGroup:"Belegung",filter:["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["<=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2]],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],color:"#dfab27",scope:["car","bicycle","item","buildings","buildings_disabled","on_street_disabled","site"],...e},{id:`parkApi${t}Occupancy_HighAvailability`,label:"Viele Plätze (über 20 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],[">",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"AVAILABLE"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#059b02",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e}]}const W=k(_());let w;f=="car"?G==null&&R==null&&z==null?w=W.filter(t=>t.scope.includes(f)):w=W.filter(t=>t.scope.includes(f)&&(t.scope.includes(G)||t.scope.includes(R)||t.scope.includes(z))):w=W;const ft=k(_({purpose:"car"})).filter(t=>t.scope.includes("car")),kt=k(_({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle")),j=["any",["all",["has","capacity_disabled"],[">",["get","capacity_disabled"],0]],["all",["has","restriction_type"],["==",["get","restriction_type"],"DISABLED"]]],lt=["all",j,["any",["!=",["get","type"],"ON_STREET"],["!",["has","type"]]]],rt=["all",j,["any",["==",["get","type"],"ON_STREET"],["!",["has","type"]]]],St=k(_({purpose:"car",id:"CarDisabled",layerFilter:j})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})),Ct=k(_({purpose:"car",id:"CarDisabledBuildings",layerFilter:lt})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})).filter(t=>t.scope.includes("buildings_disabled")),At=k(_({purpose:"car",id:"CarDisabledOnStreet",layerFilter:rt})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})).filter(t=>t.scope.includes("on_street_disabled")),ct=["==",["get","purpose"],"ITEM"],Ot=k(_({purpose:"bicycle",id:"Item",layerFilter:ct})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"}));function Z({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Type_Other`,label:"Sonstige",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],a],color:"#cacaca",visibility:"none",scope:["car","bicycle","buildings","on_street","polygon","site","spot"],...e},{id:"parkApiCarType_OnStreet",label:"Straßen-Parkplatz",subGroup:"Typ",filter:["all",["==",["get","type"],"ON_STREET"],a],color:"black",scope:["car","on_street","line","polygon","site","spot"],visibility:"none",...e},{id:"parkApiCarType_OffStreet",label:"Parkplatz abseits der Straße",subGroup:"Typ",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],a],color:"#009688",visibility:"none",scope:["car","buildings","polygon","site","spot"],...e},{id:"parkApiCarType_Underground",label:"Tiefgarage",subGroup:"Typ",filter:["all",["==",["get","type"],"UNDERGROUND"],a],color:"#BF91B6",visibility:"none",scope:["car","buildings","site"],...e},{id:"parkApiCarType_CarPark",label:"Parkhaus",subGroup:"Typ",filter:["all",["==",["get","type"],"CAR_PARK"],a],color:"#5587eb",visibility:"none",scope:["car","buildings","polygon","site"],...e},{id:"parkApiBicycleType_WallLoops",label:"Vorderradhalter",subGroup:"Typ",filter:["==",["get","type"],"WALL_LOOPS"],color:"#5587eb",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Stands",label:"Anlehnbügel",subGroup:"Typ",filter:["==",["get","type"],"STANDS"],color:"#bf91b6",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_LockersLockbox",label:"Fahrradbox",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"LOCKERS"],["==",["get","type"],"LOCKBOX"]],["==",["get","purpose"],"BIKE"]],color:"#ff9933",visibility:"none",scope:["bicycle"],...e},{id:"parkApiItemType_LockersLockbox",label:"Schließfach",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"LOCKERS"],["==",["get","type"],"LOCKBOX"]],["==",["get","purpose"],"ITEM"]],color:"#ff9933",visibility:"none",scope:["item"],...e},{id:"parkApiBicycleType_Shed",label:"Fahrrad-Sammelanlage",subGroup:"Typ",filter:["==",["get","type"],"SHED"],color:"#ee5959",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_TwoTier",label:"Offene Zweistock-Abstellanlage",subGroup:"Typ",filter:["==",["get","type"],"TWO_TIER"],color:"#009688",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_SafeWallLoops",label:"Vorderradhalter mit Sicherung",subGroup:"Typ",filter:["==",["get","type"],"SAFE_WALL_LOOPS"],color:"#30D5C8",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Building",label:"Parkhaus",subGroup:"Typ",filter:["==",["get","type"],"BUILDING"],color:"#c2e72a",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Floor",label:"Abstellfläche",subGroup:"Typ",filter:["==",["get","type"],"FLOOR"],color:"black",visibility:"none",scope:["bicycle"],...e}]}const K=Z({id:v,layerGroup:st,layerFilter:it});if(R=="polygon"){const e={subGroup:"Typ",scope:["car","polygon"],source:"sourceParkApiCar",sourceLayer:"park-api_car",type:"circle",circleRadius:["interpolate",["linear"],["zoom"],6,5,9,4,12,3]};[{id:`parkApi${v}Type_Other_Circle`,label:"Sonstige",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#cacaca",...e},{id:`parkApi${v}Type_OnStreet_Circle`,label:"Straßen-Parkplatz",filter:["all",["==",["get","type"],"ON_STREET"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"black",...e},{id:`parkApi${v}Type_OffStreet_Circle`,label:"Parkplatz abseits der Straße",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#009688",...e},{id:`parkApi${v}Type_CarPark_Circle`,label:"Parkhaus",filter:["all",["==",["get","type"],"CAR_PARK"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#5587eb",...e}].forEach(n=>{K.push(n)})}let x;x=K.filter(t=>t.scope.includes(f));f=="car"&&(G==null&&R==null&&z==null?x=K.filter(t=>t.scope.includes(f)):x=K.filter(t=>t.scope.includes(f)&&(t.scope.includes(G)||t.scope.includes(R)||t.scope.includes(z))));Z(_({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle"));function nt(){return fetch(`https://${X}.mobidata-bw.de/park-api/api/public/v3/sources`).then(t=>t.json()).then(t=>t.items)}const ot={"APCOA PARKING":"apcoa","B+B Parkhaus GmbH & Co. KG":"bb_parkhaus","DB BahnPark":"bahn_v2","Freiburger Verkehrs AG":"freiburg_vag_bike",Goldbeck:"goldbeck",Kienzler:"kienzler","Ministerium für Verkehr Baden-Württemberg":"^p.{1}m_","Nahverkehrsgesellschaft Baden-Württemberg":"bfrk","Open-Data-Plattform Schweiz":"opendata_swiss","PARK SERVICE HÜFNER GmbH + Co. KG":"huefner","Parkraumgesellschaft Baden-Württemberg mbH":"pbw",RadVIS:"radvis_bw","Stadt Aalen":"aalen","Stadt Bietigheim-Bissingen":"bietigheim_bissingen","Stadt Buchen":"buchen","Stadt Ellwangen":"ellwangen","Stadt Esslingen":"esslingen","Stadt Freiburg im Breisgau":"^freiburg(?!_vag)","Stadt Friedrichshafen":"friedrichshafen","Stadt Heidelberg":"heidelberg","Stadt Herrenberg":"herrenberg","Stadt Karlsruhe":"karlsruhe","Stadt Keltern":"keltern","Stadt Konstanz":"konstanz","Stadt Ladenburg":"ladenburg","Stadt Mannheim":"mannheim","Stadt Neckarsulm":"neckarsulm","Stadt Pforzheim":"pforzheim","Stadt Radolfzell":"radolfzell","Stadt Reutlingen":"reutlingen","Stadt Stuttgart":"stuttgart","Stadt Ulm":"^ulm",Velobrix:"velobrix","Verband Region Stuttgart":"vrs","Verkehrsverbund Rhein-Neckar":"vrn"};function dt(t){const e=t.capacity,a=t.realtime_capacity,n=t.realtime_free_capacity;if(n&&e&&(e!=0||a!=0)){const S=document.getElementById("anchor-"+t.id);if(S){const D='<td rowspan="7"><canvas class="canvasPie" id="canvas-'+t.id+'" width="110" height="96"></canvas></td>';S.outerHTML=D;const r=document.getElementById("canvas-"+t.id),s=r.getContext("2d"),o=a||e,i=n/o,P=(o-n)/o,N=(i*100).toFixed(0)+"%",d=(P*100).toFixed(0)+"%",C=(i*100).toFixed(0)+"%";let B=i*2,m=(1-i)*2;const A=["#059b02","#ed0000"],E=[N,d],O=[Math.PI*B,Math.PI*m],$=1;let p=-Math.PI/2,y=p;const b=r.width/2-10,u=r.height/2+7,c=40;for(let l=0;l<O.length;l++){p=y,y=y+O[l];const g=(p+y)/2,T=Math.cos(g)*$,h=Math.sin(g)*$;s.beginPath(),s.fillStyle=A[l%A.length],s.moveTo(b+T,u+h),s.arc(b+T,u+h,c,p,y),s.lineTo(b+T,u+h),s.fill(),m!==2&&m!==0&&(s.strokeStyle="white",s.lineWidth=.5,s.stroke());let L=b+Math.cos(g)*(c-18),I=u+Math.sin(g)*(c-18);s.fillStyle="white",s.font="bold 11px Arial",s.textAlign="center",o===n||n===0?s.fillText(C,b,u):((i<.15&&l===0||P<.15&&l===1)&&(s.fillStyle="black",L=b+Math.cos(g)*(c+5),I=u+Math.sin(g)*(c+5)),s.fillText(E[l],L,I))}}}}const pt=nt();function $t(t){const{parking_object:e,realtime_data_updated_at:a,realtime_data_outdated:n,has_realtime_data:S,source_id:D,id:r,name:s,operator_name:o,type:i,purpose:P,address:N,park_and_ride_type:d,realtime_opening_status:C,capacity:B,capacity_disabled:m,capacity_woman:A,capacity_family:E,capacity_charging:O,capacity_carsharing:$,realtime_capacity:p,realtime_free_capacity:y,public_url:b,photo_url:u,realtime_status:c,restriction_type:l,restriction_hours:g,restriction_max_stay:T}=t;let h,L;a&&({date:h,time:L}=et(a));const I=`
            <tr>
            <td class="att">alle (frei/gesamt)</td>
            ${c=="AVAILABLE"?'<td class="attContent">1 / 1</td>':""}
            ${c=="TAKEN"?'<td class="attContent">0 / 1</td>':""}
            ${c=="UNKNOWN"?'<td class="attContent">- / 1</td>':""}
            ${!S||!c?'<td class="attContent">- / 1</td>':""}
            </tr>
            ${l?`
            <tr>
                <td class="att">Parkberechtigte</td>
                ${l==""?'<td class="attContent">alle</td>':""}
                ${l.match("DISABLED")?'<td class="attContent">Behinderte</td>':""}
                ${l.match("CHARGING")?'<td class="attContent">zum Laden</td>':""}
                ${l.match("FAMILY")?'<td class="attContent">Familien</td>':""}
            </tr>
            `:""}
            ${g?`
            <tr>
                <td class="att">Parkzeiten</td>
                <td class="attContent">${g}</td>
            </tr>
            `:""}
            ${T?`
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${T}</td>
            </tr>
            `:""}
    `,q=`
            ${!B&&!p?"":`
            <tr>
                <td class="att2">alle (frei/gesamt)</td>
                <td class="attContent2">
                    ${S==!1||!y?"-":y.toLocaleString()}
                    / 
                    ${!p&&B==null?"-":p?p.toLocaleString():B.toLocaleString()}
                </td>
            </tr>
            `}
            ${!m||m=="0"?"":`
            <tr>
                <td class="att2">für Behinderte</td><td class="attContent2">${m}</td>
            </tr>
            `}
            ${!A||A=="0"?"":`
            <tr>
                <td class="att2">für Frauen</td><td class="attContent2">${A}</td>
            </tr>
            `}
            ${!E||E=="0"?"":`
            <tr>
                <td class="att2">für Familien</td><td class="attContent2">${E}</td>
            </tr>
            `}
            ${!O||O=="0"?"":`
            <tr>
                <td class="att2">mit Lademöglichkeit</td><td class="attContent2">${O}</td>
            </tr>
            `}
            ${!$||$=="0"?"":`
            <tr>
                <td class="att2">für Carsharing</td><td class="attContent2">${$}</td>
            </tr>
            `}
    `,J=`
        <table>
            <tr>
            <th id="logos-${r}"></th>
            ${s?`<th class="title">${s}</th>`:""}
            </tr>
        </table>
        <br>
        <table>
            <tr id="datengeber-${r}"></tr>
            ${!o||o=="-"||o==""?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${o}</td>
            </tr>
            `}
            <tr>
                <td class="att">Typ</td>
                ${i=="ON_STREET"?'<td class="attContent">Straßen-Parkplatz</td>':""}
                ${i=="OFF_STREET_PARKING_GROUND"?'<td class="attContent">Parkplatz abseits der Straße</td>':""}              
                ${i=="UNDERGROUND"?'<td class="attContent">Tiefgarage</td>':""}
                ${i=="CAR_PARK"||i=="BUILDING"?'<td class="attContent">Parkhaus</td>':""}
                ${i=="WALL_LOOPS"?'<td class="attContent">Vorderradhalter</td>':""}
                ${i=="SAFE_WALL_LOOPS"?'<td class="attContent">Vorderradhalter mit Sicherung</td>':""}
                ${i=="STANDS"?'<td class="attContent">Anlehnbügel</td>':""}
                ${(i=="LOCKERS"||i=="LOCKBOX")&&P=="BIKE"?'<td class="attContent">Fahrradbox</td>':""}
                ${(i=="LOCKERS"||i=="LOCKBOX")&&P=="ITEM"?'<td class="attContent">Schließfach</td>':""}
                ${i=="SHED"?'<td class="attContent">Fahrrad-Sammelanlage</td>':""}
                ${i=="TWO_TIER"?'<td class="attContent">Offene Zweistock-Abstellanlage</td>':""}             
                ${i=="FLOOR"?'<td class="attContent">Abstellfläche</td>':""}
                ${i=="OTHER"?'<td class="attContent">Sonstige</td>':""}
                ${i?"":'<td class="attContent">unbekannt</td>'}
            </tr>
            ${N?`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${N}</td>
            </tr>
            `:""}
            ${d?`
            <tr>
                <td class="att">P+R-Typ</td>
                ${d=="CARPOOL"?'<td class="attContent">Fahrgemeinschaft</td>':""}
                ${d=="TRAIN"?'<td class="attContent">Bahn</td>':""}
                ${d=="BUS"?'<td class="attContent">Bus</td>':""}
                ${d=="TRAM"?'<td class="attContent">Straßenbahn</td>':""}
                ${d=="YES"?'<td class="attContent">ja</td>':""}
                ${d=="NO"?'<td class="attContent">nein</td>':""}
            </tr>
            `:""}
            ${C?`
            <tr>
                <td class="att">Status</td>
                ${C=="OPEN"?'<td class="attContent">geöffnet</td>':""}
                ${C=="CLOSED"?'<td class="attContent">geschlossen</td>':""}
                ${C=="UNKNOWN"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${S==!1?"":`
            <tr>
                <td class="att">Stand Echtzeitdaten</td>
                ${n&&D!=55?`<td class="attContent outDated">${h}, ${L}</td>`:`<td class="attContent">${h}, ${L}</td>`}
            </tr>
            `}
        </table>
        <br>
        <div class="title title2">Parkplätze</div>
        <div id="divParkingSites">
            <div id="anchor-${r}"></div>
            <div id="divTable">
                <table>
                    ${e=="spot"?I:q}
                </table>
            </div>
        </div>
        <table id="divURLs">
            <tr>
                ${b?`<td class="attContentLink"><a href="${b}" target="_blank">&#10149 Datengeber</a></td>`:""}
                <td class="attContentLink"><a href="https://${X}.mobidata-bw.de/park-api/api/public/v3/parking-${e}s/${r}" target="_blank">&#10149 ParkAPI</a></td>
                ${u?`<td class="attContentLink"><a href="${u}" class="photoMargin" target="_blank">&#10149 Foto</a></td>`:""}
            </tr>
        </table>        
    `;return setTimeout(()=>{let M="",F="";pt.then(Q=>{Q.forEach(V=>{for(const[Y,tt]of Object.entries(ot))if(V.uid.match(tt)&&D==V.id){M+=at(Y),F+=`<td class="attContent">${Y}</td>`;break}});const H=document.getElementById("logos-"+r);H&&M&&(H.innerHTML=M);const U=document.getElementById("datengeber-"+r);U&&F&&(U.innerHTML=`
                    <td class="att">Datengeber</td>
                    <td class="attContent"${F}</td>`)}),dt(t)},0),J}export{yt as a,mt as b,ht as c,x as d,Ot as e,St as f,Ct as g,At as h,ft as i,kt as j,w as l,$t as p,_t as s};
