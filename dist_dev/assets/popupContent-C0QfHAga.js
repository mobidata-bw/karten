import{u as O,t as et}from"./timeStamps-DV8Kc6Rw.js";import{k as Z}from"./addControlLayers-DdHOxOpH.js";import{p as at}from"./popupImages-CL540eOO.js";const{purpose:h,type:D,parking:z,geometry:R,object:I,layerFilter:it,layerGroup:st,id:B}=O(),pt={layer:"MobiData-BW:park-api_car",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[5.9,45.8,17,54.8]},bt={layer:"MobiData-BW:park-api_car_lines",style:"MobiData-BW:mdbw_lines",bounds:[7,46,10,50]},gt={layer:"MobiData-BW:park-api_car_polygons",style:"MobiData-BW:mdbw_polygons",bounds:[7,46,10,50]},ut={layer:"MobiData-BW:park-api_bicycle",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[7.1,47.5,13.5,53.8]};function M({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Occupancy_NoRealtimeInformation`,label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!1],a],["all",["==",["get","parking_object"],"spot"],["any",["==",["get","realtime_status"],"UNKNOWN"],["==",["get","has_realtime_data"],!1]],a]],color:"#615fdf",scope:["car","bicycle","item","buildings","on_street","disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_OutdatedRealtimeInformation`,label:"Echtzeitdaten älter 30 Minuten",subGroup:"Belegung",filter:["all",["==",["get","has_realtime_data"],!0],["==",["get","realtime_data_outdated"],!0],a,["!=",["get","source_id"],55]],color:"#cacaca",scope:["car","bicycle","item","buildings","disabled"],...e},{id:`parkApi${t}Occupancy_Closed`,label:"Geschlossen",subGroup:"Belegung",filter:["all",["==",["get","realtime_opening_status"],"CLOSED"],a],color:"#880000",scope:["car","bicycle","item","buildings","disabled","site"],...e},{id:`parkApi${t}Occupancy_VeryLowAvailability`,label:"Kaum Plätze (unter 2 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["get","realtime_free_capacity"],0],["<",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["!=",["get","realtime_opening_status"],"CLOSED"]],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"TAKEN"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#ed0000",scope:["car","bicycle","item","buildings","on_street","disabled","site","spot"],...e},{id:`parkApi${t}Occupancy_LowAvailability`,label:"Wenig Plätze (2 bis 20 %)",subGroup:"Belegung",filter:["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["<=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2]],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],color:"#dfab27",scope:["car","bicycle","item","buildings","disabled","site"],...e},{id:`parkApi${t}Occupancy_HighAvailability`,label:"Viele Plätze (über 20 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],[">",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"AVAILABLE"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],a]],color:"#059b02",scope:["car","bicycle","item","buildings","on_street","disabled","site","spot"],...e}]}const F=M(O());let H;h=="car"?D==null&&z==null&&R==null&&I==null?H=F.filter(t=>t.scope.includes(h)):H=F.filter(t=>t.scope.includes(h)&&(t.scope.includes(D)||t.scope.includes(z)||t.scope.includes(R)||t.scope.includes(I))):H=F;const _t=M(O({purpose:"car"})).filter(t=>t.scope.includes("car")),yt=M(O({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle")),mt=M(O({purpose:"item"})).filter(t=>t.scope.includes("item"));function q({id:t,layerGroup:e,layerFilter:a}){return[{id:`parkApi${t}Type_Other`,label:"Sonstige",subGroup:"Typ",filter:["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],color:"#cacaca",visibility:"none",scope:["car","bicycle","buildings","on_street","disabled","polygon","site","spot"],...e},{id:`parkApi${t}Type_OnStreet`,label:"Straßen-Parkplatz",subGroup:"Typ",filter:["all",["==",["get","type"],"ON_STREET"],a],color:"black",scope:["car","on_street","disabled","line","polygon","site","spot"],visibility:"none",...e},{id:`parkApi${t}Type_OffStreet`,label:"Parkplatz abseits der Straße",subGroup:"Typ",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],a],color:"#009688",visibility:"none",scope:["car","buildings","disabled","polygon","site","spot"],...e},{id:`parkApi${t}Type_Underground`,label:"Tiefgarage",subGroup:"Typ",filter:["all",["==",["get","type"],"UNDERGROUND"],a],color:"#BF91B6",visibility:"none",scope:["car","buildings","disabled","site"],...e},{id:`parkApi${t}Type_CarPark`,label:"Parkhaus",subGroup:"Typ",filter:["all",["==",["get","type"],"CAR_PARK"],a],color:"#5587eb",visibility:"none",scope:["car","buildings","disabled","polygon","site"],...e},{id:`parkApi${t}Type_WallLoops`,label:"Vorderradhalter",subGroup:"Typ",filter:["==",["get","type"],"WALL_LOOPS"],color:"#5587eb",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Stands`,label:"Anlehnbügel",subGroup:"Typ",filter:["==",["get","type"],"STANDS"],color:"#bf91b6",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Lockers`,label:"Fahrradschrank",subGroup:"Typ",filter:["all",["==",["get","type"],"LOCKERS"],a],color:"#ff9933",visibility:"none",scope:["bicycle","item"],...e},{id:`parkApi${t}Type_Shed`,label:"Sammelanlage",subGroup:"Typ",filter:["==",["get","type"],"SHED"],color:"#ee5959",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_TwoTier`,label:"Zweistock-Abstellanlage",subGroup:"Typ",filter:["==",["get","type"],"TWO_TIER"],color:"#009688",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Lockbox`,label:"Schließfach",subGroup:"Typ",filter:["all",["==",["get","type"],"LOCKBOX"],a],color:"white",...e,scope:["bicycle","item"],visibility:"none"},{id:`parkApi${t}Type_SafeWallLoops`,label:"Vorderradhalter mit Sicherung",subGroup:"Typ",filter:["==",["get","type"],"SAFE_WALL_LOOPS"],color:"#30D5C8",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Building`,label:"Parkhaus",subGroup:"Typ",filter:["==",["get","type"],"BUILDING"],color:"#c2e72a",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Floor`,label:"Abstellfläche",subGroup:"Typ",filter:["==",["get","type"],"FLOOR"],color:"black",visibility:"none",scope:["bicycle"],...e}]}const G=q({id:B,layerGroup:st,layerFilter:it});if(R=="polygon"){const e={subGroup:"Typ",scope:["car","polygon"],source:"sourceParkApiCar",sourceLayer:"park-api_car",type:"circle",circleRadius:["interpolate",["linear"],["zoom"],6,5,9,4,12,3]};[{id:`parkApi${B}Type_Other_Circle`,label:"Sonstige",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#cacaca",...e},{id:`parkApi${B}Type_OnStreet_Circle`,label:"Straßen-Parkplatz",filter:["all",["==",["get","type"],"ON_STREET"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"black",...e},{id:`parkApi${B}Type_OffStreet_Circle`,label:"Parkplatz abseits der Straße",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#009688",...e},{id:`parkApi${B}Type_CarPark_Circle`,label:"Parkhaus",filter:["all",["==",["get","type"],"CAR_PARK"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#5587eb",...e}].forEach(r=>{G.push(r)})}let U;U=G.filter(t=>t.scope.includes(h));h=="car"&&(D==null&&z==null&&R==null&&I==null?U=G.filter(t=>t.scope.includes(h)):U=G.filter(t=>t.scope.includes(h)&&(t.scope.includes(D)||t.scope.includes(z)||t.scope.includes(R)||t.scope.includes(I))));const ht=q(O({purpose:"bicycle"})).filter(t=>t.scope.includes("bicycle"));function lt(){return fetch(`https://${Z}.mobidata-bw.de/park-api/api/public/v3/sources`).then(t=>t.json()).then(t=>t.items)}function ct(t){const e=t.capacity,a=t.realtime_capacity,r=t.realtime_free_capacity;if(r&&e&&(e!=0||a!=0)){const f=document.getElementById("anchor-"+t.id);if(f){const K='<td rowspan="7"><canvas class="canvasPie" id="canvas-'+t.id+'" width="110" height="96"></canvas></td>';f.outerHTML=K;const c=document.getElementById("canvas-"+t.id),s=c.getContext("2d"),o=a||e,i=r/o,P=(o-r)/o,v=(i*100).toFixed(0)+"%",d=(P*100).toFixed(0)+"%",k=(i*100).toFixed(0)+"%";let L=i*2,y=(1-i)*2;const $=["#5ce75c","#8B0000"],E=[v,d],S=[Math.PI*L,Math.PI*y],A=1;let p=-Math.PI/2,_=p;const b=c.width/2-10,g=c.height/2+7,n=40;for(let l=0;l<S.length;l++){p=_,_=_+S[l];const u=(p+_)/2,C=Math.cos(u)*A,m=Math.sin(u)*A;s.beginPath(),s.fillStyle=$[l%$.length],s.moveTo(b+C,g+m),s.arc(b+C,g+m,n,p,_),s.lineTo(b+C,g+m),s.fill(),y!==2&&y!==0&&(s.strokeStyle="white",s.lineWidth=.5,s.stroke());let T=b+Math.cos(u)*(n-18),N=g+Math.sin(u)*(n-18);s.fillStyle="white",s.font="bold 11px Arial",s.textAlign="center",o===r||r===0?s.fillText(k,b,g):((i<.15&&l===0||P<.15&&l===1)&&(s.fillStyle="black",T=b+Math.cos(u)*(n+5),N=g+Math.sin(u)*(n+5)),s.fillText(E[l],T,N))}}}}const nt=lt();function ft(t){const{parking_object:e,realtime_data_updated_at:a,realtime_data_outdated:r,has_realtime_data:f,source_id:K,id:c,name:s,operator_name:o,type:i,purpose:P,address:v,park_and_ride_type:d,realtime_opening_status:k,capacity:L,capacity_disabled:y,capacity_woman:$,capacity_family:E,capacity_charging:S,capacity_carsharing:A,realtime_capacity:p,realtime_free_capacity:_,public_url:b,photo_url:g,realtime_status:n,restriction_type:l,restriction_hours:u,restriction_max_stay:C}=t;let m,T;a&&({date:m,time:T}=et(a));const N=`
            <tr>
            <td class="att">alle (frei/gesamt)</td>
            ${n=="AVAILABLE"?'<td class="attContent">1 / 1</td>':""}
            ${n=="TAKEN"?'<td class="attContent">0 / 1</td>':""}
            ${n=="UNKNOWN"?'<td class="attContent">- / 1</td>':""}
            ${!f||!n?'<td class="attContent">- / 1</td>':""}
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
            ${u?`
            <tr>
                <td class="att">Parkzeiten</td>
                <td class="attContent">${u}</td>
            </tr>
            `:""}
            ${C?`
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${C}</td>
            </tr>
            `:""}
    `,J=`
            ${!L&&!p?"":`
            <tr>
                <td class="att2">alle (frei/gesamt)</td>
                <td class="attContent2">
                ${f==!1||!_?"-":_}
                / 
                ${!p&&L==null?"-":p||L}
                </td>
            </tr>
            `}
            ${!y||y=="0"?"":`
            <tr><td class="att2">für Behinderte</td><td class="attContent2">${y}</td></tr>
            `}
            ${!$||$=="0"?"":`
            <tr><td class="att2">für Frauen</td><td class="attContent2">${$}</td></tr>
            `}
            ${!E||E=="0"?"":`
            <tr><td class="att2">für Familien</td><td class="attContent2">${E}</td></tr>
            `}
            ${!S||S=="0"?"":`
            <tr><td class="att2">mit Lademöglichkeit</td><td class="attContent2">${S}</td></tr>
            `}
            ${!A||A=="0"?"":`
            <tr><td class="att2">für Carsharing</td><td class="attContent2">${A}</td></tr>
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
                ${i=="CAR_PARK"?'<td class="attContent">Parkhaus</td>':""}
                ${i=="UNDERGROUND"?'<td class="attContent">Tiefgarage</td>':""}
                ${i=="WALL_LOOPS"?'<td class="attContent">Vorderradhalter</td>':""}
                ${i=="SAFE_WALL_LOOPS"?'<td class="attContent">Vorderradhalter mit Sicherung</td>':""}
                ${i=="STANDS"?'<td class="attContent">Anlehnbügel</td>':""}
                ${i=="LOCKERS"&&P=="BIKE"?'<td class="attContent">Fahrradschrank</td>':""}
                ${i=="LOCKERS"&&P=="ITEM"||i=="LOCKBOX"?'<td class="attContent">Schließfach</td>':""}
                ${i=="SHED"?'<td class="attContent">Sammelanlage</td>':""}
                ${i=="TWO_TIER"?'<td class="attContent">Zweistock-Abstellanlage</td>':""}
                ${i=="BUILDING"?'<td class="attContent">Parkhaus</td>':""}
                ${i=="FLOOR"?'<td class="attContent">Abstellfläche</td>':""}
                ${i=="OTHER"?'<td class="attContent">Sonstige</td>':""}
                ${i?"":'<td class="attContent">unbekannt</td>'}
            </tr>
            ${v?`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${v}</td>
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
            ${k?`
            <tr>
                <td class="att">Status</td>
                ${k=="OPEN"?'<td class="attContent">geöffnet</td>':""}
                ${k=="CLOSED"?'<td class="attContent">geschlossen</td>':""}
                ${k=="UNKNOWN"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${f==!1?"":`
            <tr>
                <td class="att">Stand Echtzeitdaten</td>
                ${r?`<td class="attContent outDated">${m}, ${T}</td>`:`<td class="attContent">${m}, ${T}</td>`}
            </tr>
            `}
        </table>
        <br>
        <div class="title title2">Parkplätze</div>
        <div id="divParkingSites">
        <div><div id="anchor-${c}"></div></div>
        <div id="divTable">
        <table>
            ${e=="spot"?N:J}
        </table>
            </div>
        </div>
        <table id="divURLs">
            <tr>
                ${b?`<td class="attContentLink"><a href="${b}" target="_blank">&#10149 Datengeber</a></td>`:""}
                <td class="attContentLink"><a href="https://${Z}.mobidata-bw.de/park-api/api/public/v3/parking-${e}s/${c}" target="_blank">&#10149 ParkAPI</a></td>
                ${g?`<td class="attContentLink"><a href="${g}" class="photoMargin" target="_blank">&#10149 Foto</a></td>`:""}
            </tr>
        </table>
    `;return setTimeout(()=>{let w="",W="";nt.then(tt=>{tt.forEach(X=>{const j={aalen:"Stadt Aalen",apcoa:"APCOA PARKING",bahn_v2:"DB BahnPark",bb_parkhaus:"B+B Parkhaus GmbH & Co. KG",bfrk:"NVBW",bietigheim_bissingen:"Stadt Bietigheim-Bissingen",buchen:"Stadt Buchen",ellwangen:"Stadt Ellwangen",esslingen:"Stadt Esslingen",freiburg:"Stadt Freiburg im Breisgau",friedrichshafen:"Stadt Friedrichshafen",goldbeck:"Goldbeck",heidelberg:"Stadt Heidelberg",herrenberg:"Stadt Herrenberg",huefner:"PARK SERVICE HÜFNER GmbH + Co. KG",karlsruhe:"Stadt Karlsruhe",keltern:"Stadt Keltern",kienzler:"Kienzler",konstanz:"Stadt Konstanz",ladenburg:"Stadt Ladenburg",mannheim:"Stadt Mannheim",m_bw:"Verkehrsministerium Baden-Württemberg",neckarsulm:"Stadt Neckarsulm",opendata_swiss:"Open-Data-Plattform Schweiz",pbw:"Parkraumgesellschaft Baden-Württemberg mbH",pforzheim:"Stadt Pforzheim",radvis_bw:"RadVIS",radolfzell:"Stadt Radolfzell",reutlingen:"Stadt Reutlingen",stuttgart_:"Stadt Stuttgart",ulm_:"Stadt Ulm",velobrix:"Velobrix",vrn_:"Verkehrsverbund Rhein-Neckar",vrs:"Verband Region Stuttgart"};for(let x in j)X.uid.match(x)&&K==X.id&&(w+=at(j[x]),W+=`<td class="attContent">${j[x]}</td>`)});const V=document.getElementById("logos-"+c);V&&w&&(V.innerHTML=w);const Y=document.getElementById("datengeber-"+c);Y&&W&&(Y.innerHTML=`
                    <td class="att">Datengeber</td>
                    <td class="attContent"${W}</td>`)}),ct(t)},0),Q}export{bt as a,gt as b,ut as c,H as d,yt as e,ht as f,mt as g,_t as h,U as l,ft as p,pt as s};
