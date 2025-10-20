import{u as _,t as et}from"./timeStamps-CJ2Ek9ou.js";import{j as Z}from"./addControlLayers-CYfvbK8g.js";import{p as at}from"./popupImages-DZWd2PJO.js";const{purpose:f,type:G,geometry:v,object:z,id:R,layerFilter:it,layerGroup:st}=_(),gt={layer:"MobiData-BW:park-api_car",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[5.9,45.8,17,54.8]},_t={layer:"MobiData-BW:park-api_car_lines",style:"MobiData-BW:mdbw_lines",bounds:[7,46,10,50]},yt={layer:"MobiData-BW:park-api_car_polygons",style:"MobiData-BW:mdbw_polygons",bounds:[7,46,10,50]},mt={layer:"MobiData-BW:park-api_bicycle",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[7.1,47.5,13.5,53.8]};function k({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Occupancy_NoRealtimeInformation`,label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!1],a],["all",["==",["get","parking_object"],"spot"],["any",["==",["get","realtime_status"],"UNKNOWN"],["==",["get","has_realtime_data"],!1]],a]],color:"#615fdf",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_OutdatedRealtimeInformation`,label:"Echtzeitdaten älter 30 Minuten",subGroup:"Belegung",filter:["all",["==",["get","has_realtime_data"],!0],["==",["get","realtime_data_outdated"],!0],a,["!=",["get","source_id"],55]],color:"#cacaca",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_Closed`,label:"Geschlossen",subGroup:"Belegung",filter:["all",["==",["get","realtime_opening_status"],"CLOSED"],a],color:"#880000",scope:["car","bicycle","item","buildings","buildings_disabled","site"],...e},{id:`parkApi${t}Occupancy_VeryLowAvailability`,label:"Kaum Plätze (unter 2 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["get","realtime_free_capacity"],0],["<",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["!=",["get","realtime_opening_status"],"CLOSED"]],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"TAKEN"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#ed0000",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_LowAvailability`,label:"Wenig Plätze (2 bis 20 %)",subGroup:"Belegung",filter:["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["<=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2]],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],color:"#dfab27",scope:["car","bicycle","item","buildings","buildings_disabled","on_street_disabled","site"],...e},{id:`parkApi${t}Occupancy_HighAvailability`,label:"Viele Plätze (über 20 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],[">",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"AVAILABLE"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#059b02",scope:["car","bicycle","item","buildings","on_street","buildings_disabled","on_street_disabled","site","spot"],...e}]}const x=k(_());let j;f=="car"?G==null&&v==null&&z==null?j=x.filter(t=>t.scope.includes(f)):j=x.filter(t=>t.scope.includes(f)&&(t.scope.includes(G)||t.scope.includes(v)||t.scope.includes(z))):j=x;const ht=k(_({purpose:"car"})).filter(t=>t.scope.includes("car")),ft=k(_({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle")),U=["any",["all",["has","capacity_disabled"],[">",["get","capacity_disabled"],0]],["all",["has","restriction_type"],["==",["get","restriction_type"],"DISABLED"]]],lt=["all",U,["any",["!=",["get","type"],"ON_STREET"],["!",["has","type"]]]],ct=["all",U,["any",["==",["get","type"],"ON_STREET"],["!",["has","type"]]]],kt=k(_({purpose:"car",id:"CarDisabled",layerFilter:U})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})),St=k(_({purpose:"car",id:"CarDisabledBuildings",layerFilter:lt})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})).filter(t=>t.scope.includes("buildings_disabled")),Ct=k(_({purpose:"car",id:"CarDisabledOnStreet",layerFilter:ct})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"})).filter(t=>t.scope.includes("on_street_disabled")),nt=["==",["get","purpose"],"ITEM"],At=k(_({purpose:"bicycle",id:"Item",layerFilter:nt})).map(t=>({...t,subGroup:`${t.subGroup} `,visibility:"none"}));function q({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Type_Other`,label:"Sonstige",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],a],color:"#cacaca",visibility:"none",scope:["car","bicycle","buildings","on_street","polygon","site","spot"],...e},{id:"parkApiCarType_OnStreet",label:"Straßen-Parkplatz",subGroup:"Typ",filter:["all",["==",["get","type"],"ON_STREET"],a],color:"black",scope:["car","on_street","line","polygon","site","spot"],visibility:"none",...e},{id:"parkApiCarType_OffStreet",label:"Parkplatz abseits der Straße",subGroup:"Typ",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],a],color:"#009688",visibility:"none",scope:["car","buildings","polygon","site","spot"],...e},{id:"parkApiCarType_Underground",label:"Tiefgarage",subGroup:"Typ",filter:["all",["==",["get","type"],"UNDERGROUND"],a],color:"#BF91B6",visibility:"none",scope:["car","buildings","site"],...e},{id:"parkApiCarType_CarPark",label:"Parkhaus",subGroup:"Typ",filter:["all",["==",["get","type"],"CAR_PARK"],a],color:"#5587eb",visibility:"none",scope:["car","buildings","polygon","site"],...e},{id:"parkApiBicycleType_WallLoops",label:"Vorderradhalter",subGroup:"Typ",filter:["==",["get","type"],"WALL_LOOPS"],color:"#5587eb",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Stands",label:"Anlehnbügel",subGroup:"Typ",filter:["==",["get","type"],"STANDS"],color:"#bf91b6",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_LockersLockbox",label:"Fahrradbox",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"LOCKERS"],["==",["get","type"],"LOCKBOX"]],["==",["get","purpose"],"BIKE"]],color:"#ff9933",visibility:"none",scope:["bicycle"],...e},{id:"parkApiItemType_LockersLockbox",label:"Schließfach",subGroup:"Typ",filter:["all",["any",["==",["get","type"],"LOCKERS"],["==",["get","type"],"LOCKBOX"]],["==",["get","purpose"],"ITEM"]],color:"#ff9933",visibility:"none",scope:["item"],...e},{id:"parkApiBicycleType_Shed",label:"Fahrrad-Sammelanlage",subGroup:"Typ",filter:["==",["get","type"],"SHED"],color:"#ee5959",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_TwoTier",label:"Offene Zweistock-Abstellanlage",subGroup:"Typ",filter:["==",["get","type"],"TWO_TIER"],color:"#009688",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_SafeWallLoops",label:"Vorderradhalter mit Sicherung",subGroup:"Typ",filter:["==",["get","type"],"SAFE_WALL_LOOPS"],color:"#30D5C8",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Building",label:"Parkhaus",subGroup:"Typ",filter:["==",["get","type"],"BUILDING"],color:"#c2e72a",visibility:"none",scope:["bicycle"],...e},{id:"parkApiBicycleType_Floor",label:"Abstellfläche",subGroup:"Typ",filter:["==",["get","type"],"FLOOR"],color:"black",visibility:"none",scope:["bicycle"],...e}]}const K=q({id:R,layerGroup:st,layerFilter:it});if(v=="polygon"){const e={subGroup:"Typ",scope:["car","polygon"],source:"sourceParkApiCar",sourceLayer:"park-api_car",type:"circle",circleRadius:["interpolate",["linear"],["zoom"],6,5,9,4,12,3]};[{id:`parkApi${R}Type_Other_Circle`,label:"Sonstige",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#cacaca",...e},{id:`parkApi${R}Type_OnStreet_Circle`,label:"Straßen-Parkplatz",filter:["all",["==",["get","type"],"ON_STREET"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"black",...e},{id:`parkApi${R}Type_OffStreet_Circle`,label:"Parkplatz abseits der Straße",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#009688",...e},{id:`parkApi${R}Type_CarPark_Circle`,label:"Parkhaus",filter:["all",["==",["get","type"],"CAR_PARK"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#5587eb",...e}].forEach(r=>{K.push(r)})}let H;H=K.filter(t=>t.scope.includes(f));f=="car"&&(G==null&&v==null&&z==null?H=K.filter(t=>t.scope.includes(f)):H=K.filter(t=>t.scope.includes(f)&&(t.scope.includes(G)||t.scope.includes(v)||t.scope.includes(z))));q(_({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle"));function rt(){return fetch(`https://${Z}.mobidata-bw.de/park-api/api/public/v3/sources`).then(t=>t.json()).then(t=>t.items)}function ot(t){const e=t.capacity,a=t.realtime_capacity,r=t.realtime_free_capacity;if(r&&e&&(e!=0||a!=0)){const S=document.getElementById("anchor-"+t.id);if(S){const D='<td rowspan="7"><canvas class="canvasPie" id="canvas-'+t.id+'" width="110" height="96"></canvas></td>';S.outerHTML=D;const c=document.getElementById("canvas-"+t.id),s=c.getContext("2d"),o=a||e,i=r/o,L=(o-r)/o,N=(i*100).toFixed(0)+"%",d=(L*100).toFixed(0)+"%",C=(i*100).toFixed(0)+"%";let B=i*2,m=(1-i)*2;const A=["#5ce75c","#8B0000"],E=[N,d],$=[Math.PI*B,Math.PI*m],O=1;let p=-Math.PI/2,y=p;const b=c.width/2-10,u=c.height/2+7,n=40;for(let l=0;l<$.length;l++){p=y,y=y+$[l];const g=(p+y)/2,T=Math.cos(g)*O,h=Math.sin(g)*O;s.beginPath(),s.fillStyle=A[l%A.length],s.moveTo(b+T,u+h),s.arc(b+T,u+h,n,p,y),s.lineTo(b+T,u+h),s.fill(),m!==2&&m!==0&&(s.strokeStyle="white",s.lineWidth=.5,s.stroke());let P=b+Math.cos(g)*(n-18),I=u+Math.sin(g)*(n-18);s.fillStyle="white",s.font="bold 11px Arial",s.textAlign="center",o===r||r===0?s.fillText(C,b,u):((i<.15&&l===0||L<.15&&l===1)&&(s.fillStyle="black",P=b+Math.cos(g)*(n+5),I=u+Math.sin(g)*(n+5)),s.fillText(E[l],P,I))}}}}const dt=rt();function $t(t){const{parking_object:e,realtime_data_updated_at:a,realtime_data_outdated:r,has_realtime_data:S,source_id:D,id:c,name:s,operator_name:o,type:i,purpose:L,address:N,park_and_ride_type:d,realtime_opening_status:C,capacity:B,capacity_disabled:m,capacity_woman:A,capacity_family:E,capacity_charging:$,capacity_carsharing:O,realtime_capacity:p,realtime_free_capacity:y,public_url:b,photo_url:u,realtime_status:n,restriction_type:l,restriction_hours:g,restriction_max_stay:T}=t;let h,P;a&&({date:h,time:P}=et(a));const I=`
            <tr>
            <td class="att">alle (frei/gesamt)</td>
            ${n=="AVAILABLE"?'<td class="attContent">1 / 1</td>':""}
            ${n=="TAKEN"?'<td class="attContent">0 / 1</td>':""}
            ${n=="UNKNOWN"?'<td class="attContent">- / 1</td>':""}
            ${!S||!n?'<td class="attContent">- / 1</td>':""}
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
    `,J=`
            ${!B&&!p?"":`
            <tr>
                <td class="att2">alle (frei/gesamt)</td>
                <td class="attContent2">
                ${S==!1||!y?"-":y}
                / 
                ${!p&&B==null?"-":p||B}
                </td>
            </tr>
            `}
            ${!m||m=="0"?"":`
            <tr><td class="att2">für Behinderte</td><td class="attContent2">${m}</td></tr>
            `}
            ${!A||A=="0"?"":`
            <tr><td class="att2">für Frauen</td><td class="attContent2">${A}</td></tr>
            `}
            ${!E||E=="0"?"":`
            <tr><td class="att2">für Familien</td><td class="attContent2">${E}</td></tr>
            `}
            ${!$||$=="0"?"":`
            <tr><td class="att2">mit Lademöglichkeit</td><td class="attContent2">${$}</td></tr>
            `}
            ${!O||O=="0"?"":`
            <tr><td class="att2">für Carsharing</td><td class="attContent2">${O}</td></tr>
            `}
            `,Q=`
        <table>
            <tr>
            <th id="logos-${c}"></th>
            ${s?`<th class="title">${s}</th>`:""}
            </tr>
        </table>
        <br>
        <table>
            <tr id="datengeber-${c}"></tr>
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
                ${(i=="LOCKERS"||i=="LOCKBOX")&&L=="BIKE"?'<td class="attContent">Fahrradbox</td>':""}
                ${(i=="LOCKERS"||i=="LOCKBOX")&&L=="ITEM"?'<td class="attContent">Schließfach</td>':""}
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
                ${r&&D!=55?`<td class="attContent outDated">${h}, ${P}</td>`:`<td class="attContent">${h}, ${P}</td>`}
            </tr>
            `}
        </table>
        <br>
        <div class="title title2">Parkplätze</div>
        <div id="divParkingSites">
        <div id="anchor-${c}"></div>
        <div id="divTable">
        <table>
            ${e=="spot"?I:J}
        </table>          
        <table id="divURLs">
            <tr>
                ${b?`<td class="attContentLink"><a href="${b}" target="_blank">&#10149 Datengeber</a></td>`:""}
                <td class="attContentLink"><a href="https://${Z}.mobidata-bw.de/park-api/api/public/v3/parking-${e}s/${c}" target="_blank">&#10149 ParkAPI</a></td>
                ${u?`<td class="attContentLink"><a href="${u}" class="photoMargin" target="_blank">&#10149 Foto</a></td>`:""}
            </tr>
        </table>
    `;return setTimeout(()=>{let M="",w="";dt.then(tt=>{tt.forEach(X=>{const F={aalen:"Stadt Aalen",apcoa:"APCOA PARKING",bahn_v2:"DB BahnPark",bb_parkhaus:"B+B Parkhaus GmbH & Co. KG",bfrk:"NVBW",bietigheim_bissingen:"Stadt Bietigheim-Bissingen",buchen:"Stadt Buchen",ellwangen:"Stadt Ellwangen",esslingen:"Stadt Esslingen",freiburg:"Stadt Freiburg im Breisgau",friedrichshafen:"Stadt Friedrichshafen",goldbeck:"Goldbeck",heidelberg:"Stadt Heidelberg",herrenberg:"Stadt Herrenberg",huefner:"PARK SERVICE HÜFNER GmbH + Co. KG",karlsruhe:"Stadt Karlsruhe",keltern:"Stadt Keltern",kienzler:"Kienzler",konstanz:"Stadt Konstanz",ladenburg:"Stadt Ladenburg",mannheim:"Stadt Mannheim",m_bw:"Verkehrsministerium Baden-Württemberg",neckarsulm:"Stadt Neckarsulm",opendata_swiss:"Open-Data-Plattform Schweiz",pbw:"Parkraumgesellschaft Baden-Württemberg mbH",pforzheim:"Stadt Pforzheim",radvis_bw:"RadVIS",radolfzell:"Stadt Radolfzell",reutlingen:"Stadt Reutlingen",stuttgart_:"Stadt Stuttgart",ulm_:"Stadt Ulm",velobrix:"Velobrix",vrn_:"Verkehrsverbund Rhein-Neckar",vrs:"Verband Region Stuttgart"};for(let W in F)X.uid.match(W)&&D==X.id&&(M+=at(F[W]),w+=`<td class="attContent">${F[W]}</td>`)});const V=document.getElementById("logos-"+c);V&&M&&(V.innerHTML=M);const Y=document.getElementById("datengeber-"+c);Y&&w&&(Y.innerHTML=`
                    <td class="att">Datengeber</td>
                    <td class="attContent"${w}</td>`)}),ot(t)},0),Q}export{_t as a,yt as b,mt as c,H as d,At as e,kt as f,St as g,Ct as h,ht as i,ft as j,j as l,$t as p,gt as s};
