import{u as R,t as tt}from"./timeStamps-DA8GkGVr.js";import{k as U}from"./addControlLayers-DdHOxOpH.js";import{p as et}from"./popupImages-CL540eOO.js";const{purpose:B,type:X,parking:at,geometry:w,object:Z,layerFilter:n,layerGroup:it,id:E}=R(),ot={layer:"MobiData-BW:park-api_car",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[5.9,45.8,17,54.8]},dt={layer:"MobiData-BW:park-api_car_lines",style:"MobiData-BW:mdbw_lines",bounds:[7,46,10,50]},pt={layer:"MobiData-BW:park-api_car_polygons",style:"MobiData-BW:mdbw_polygons",bounds:[7,46,10,50]},bt={layer:"MobiData-BW:park-api_bicycle",style:"MobiData-BW:mdbw_park-api_parking-object",bounds:[7.1,47.5,13.5,53.8]};function D({id:t,layerGroup:e}){return[{id:`parkApi${t}Occupancy_NoRealtimeInformation`,label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!1],n],["all",["==",["get","parking_object"],"spot"],["any",["==",["get","realtime_status"],"UNKNOWN"],["==",["get","has_realtime_data"],!1]],n]],color:"#615fdf",scope:["car","bicycle","buildings","on_street","line","polygon","site","spot"],...e},{id:`parkApi${t}Occupancy_OutdatedRealtimeInformation`,label:"Echtzeitdaten älter 30 Minuten",subGroup:"Belegung",filter:["all",["==",["get","has_realtime_data"],!0],["==",["get","realtime_data_outdated"],!0],n,["!=",["get","source_id"],55]],color:"#cacaca",scope:["car","bicycle","item"],...e},{id:`parkApi${t}Occupancy_Closed`,label:"Geschlossen",subGroup:"Belegung",filter:["all",["==",["get","realtime_opening_status"],"CLOSED"],n],color:"#880000",scope:["car","bicycle","item","buildings","site"],...e},{id:`parkApi${t}Occupancy_VeryLowAvailability`,label:"Kaum Plätze (unter 2 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["get","realtime_free_capacity"],0],["<",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["!=",["get","realtime_opening_status"],"CLOSED"]],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],n],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"TAKEN"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],n]],color:"#ed0000",scope:["car","bicycle","item","buildings","on_street","site","spot"],...e},{id:`parkApi${t}Occupancy_LowAvailability`,label:"Wenig Plätze (2 bis 20 %)",subGroup:"Belegung",filter:["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],["all",[">=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.02],["<=",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2]],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],n],color:"#dfab27",scope:["car","bicycle","item","buildings","site"],...e},{id:`parkApi${t}Occupancy_HighAvailability`,label:"Viele Plätze (über 20 %)",subGroup:"Belegung",filter:["any",["all",["==",["get","parking_object"],"site"],["==",["get","has_realtime_data"],!0],[">",["/",["*",1,["get","realtime_free_capacity"]],["case",["has","realtime_capacity"],["get","realtime_capacity"],["get","capacity"]]],.2],["!=",["get","realtime_opening_status"],"CLOSED"],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],n],["all",["==",["get","parking_object"],"spot"],["==",["get","realtime_status"],"AVAILABLE"],["==",["get","has_realtime_data"],!0],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","source_id"],55]],n]],color:"#059b02",scope:["car","bicycle","item","buildings","on_street","site","spot"],...e}]}const V=D(R());let Y;B=="car"?Y=V.filter(t=>t.scope.includes(B)||t.scope.includes(X)||t.scope.includes(w)||t.scope.includes(Z)):Y=V;const gt=D(R({purpose:"car"})),_t=D(R({purpose:"bicycle"}));D(R({purpose:"item"}));function st({id:t,layerGroup:e,layerFilter:l}){return[{id:`parkApi${t}Type_Other`,label:"Sonstige",subGroup:"Typ",filter:["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],color:"#cacaca",visibility:"none",scope:["car","bicycle","buildings","on_street","disabled","polygon","site","spot"],...e},{id:`parkApi${t}Type_OnStreet`,label:"Straßen-Parkplatz",subGroup:"Typ",filter:["all",["==",["get","type"],"ON_STREET"],l],color:"black",scope:["car","on_street","line","polygon","site","spot"],visibility:"none",...e},{id:`parkApi${t}Type_OffStreet`,label:"Parkplatz abseits der Straße",subGroup:"Typ",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],l],color:"#009688",visibility:"none",scope:["car","buildings","disabled","polygon","site","spot"],...e},{id:`parkApi${t}Type_Underground`,label:"Tiefgarage",subGroup:"Typ",filter:["all",["==",["get","type"],"UNDERGROUND"],l],color:"#BF91B6",visibility:"none",scope:["car","buildings","disabled","site"],...e},{id:`parkApi${t}Type_CarPark`,label:"Parkhaus",subGroup:"Typ",filter:["all",["==",["get","type"],"CAR_PARK"],l],color:"#5587eb",visibility:"none",scope:["car","buildings","disabled","polygon","site"],...e},{id:`parkApi${t}Type_WallLoops`,label:"Vorderradhalter",subGroup:"Typ",filter:["==",["get","type"],"WALL_LOOPS"],color:"#5587eb",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Stands`,label:"Anlehnbügel",subGroup:"Typ",filter:["==",["get","type"],"STANDS"],color:"#bf91b6",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Lockers`,label:"Fahrradschrank",subGroup:"Typ",filter:["==",["get","type"],"LOCKERS"],color:"#ff9933",visibility:"none",scope:["bicycle","item"],...e},{id:`parkApi${t}Type_Shed`,label:"Sammelanlage",subGroup:"Typ",filter:["==",["get","type"],"SHED"],color:"#ee5959",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_TwoTier`,label:"Zweistock-Abstellanlage",subGroup:"Typ",filter:["==",["get","type"],"TWO_TIER"],color:"#009688",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Lockbox`,label:"Schließfach",subGroup:"Typ",filter:["==",["get","type"],"LOCKBOX"],color:"white",...e,scope:["bicycle","item"],visibility:"none"},{id:`parkApi${t}Type_SafeWallLoops`,label:"Vorderradhalter mit Sicherung",subGroup:"Typ",filter:["==",["get","type"],"SAFE_WALL_LOOPS"],color:"#30D5C8",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Building`,label:"Parkhaus",subGroup:"Typ",filter:["==",["get","type"],"BUILDING"],color:"#c2e72a",visibility:"none",scope:["bicycle"],...e},{id:`parkApi${t}Type_Floor`,label:"Abstellfläche",subGroup:"Typ",filter:["==",["get","type"],"FLOOR"],color:"black",visibility:"none",scope:["bicycle"],...e}]}const W=st({id:E,layerGroup:it,layerFilter:n});if(w=="polygon"){const e={subGroup:"Typ",scope:["car","polygon"],source:"sourceParkApiCar",sourceLayer:"park-api_car",type:"circle",circleRadius:["interpolate",["linear"],["zoom"],6,5,9,4,12,3]};[{id:`parkApi${E}Type_Other_Circle`,label:"Sonstige",filter:["all",["any",["==",["get","type"],"OTHER"],["!",["has","type"]]],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#cacaca",...e},{id:`parkApi${E}Type_OnStreet_Circle`,label:"Straßen-Parkplatz",filter:["all",["==",["get","type"],"ON_STREET"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"black",...e},{id:`parkApi${E}Type_OffStreet_Circle`,label:"Parkplatz abseits der Straße",filter:["all",["==",["get","type"],"OFF_STREET_PARKING_GROUND"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#009688",...e},{id:`parkApi${E}Type_CarPark_Circle`,label:"Parkhaus",filter:["all",["==",["get","type"],"CAR_PARK"],["<",["zoom"],13],["==",["get","geojson"],"POLYGON"]],color:"#5587eb",...e}].forEach(o=>{W.push(o)})}let q;q=W.filter(t=>t.scope.includes(B));B=="car"&&(q=W.filter(t=>t.scope.includes(B)||t.scope.includes(X)||t.scope.includes(at)||t.scope.includes(w)||t.scope.includes(Z)));function lt(t){const e=t.capacity,l=t.realtime_capacity,o=t.realtime_free_capacity;if(o&&e&&(e!=0||l!=0)){const f=document.getElementById("anchor-"+t.id);if(f){const z='<td rowspan="7"><canvas class="canvasPie" id="canvas-'+t.id+'" width="110" height="96"></canvas></td>';f.outerHTML=z;const r=document.getElementById("canvas-"+t.id),i=r.getContext("2d"),d=l||e,a=o/d,O=(d-o)/d,v=(a*100).toFixed(0)+"%",p=(O*100).toFixed(0)+"%",k=(a*100).toFixed(0)+"%";let P=a*2,m=(1-a)*2;const $=["#5ce75c","#8B0000"],L=[v,p],S=[Math.PI*P,Math.PI*m],A=1;let b=-Math.PI/2,y=b;const g=r.width/2-10,_=r.height/2+7,c=40;for(let s=0;s<S.length;s++){b=y,y=y+S[s];const u=(b+y)/2,C=Math.cos(u)*A,h=Math.sin(u)*A;i.beginPath(),i.fillStyle=$[s%$.length],i.moveTo(g+C,_+h),i.arc(g+C,_+h,c,b,y),i.lineTo(g+C,_+h),i.fill(),m!==2&&m!==0&&(i.strokeStyle="white",i.lineWidth=.5,i.stroke());let T=g+Math.cos(u)*(c-18),N=_+Math.sin(u)*(c-18);i.fillStyle="white",i.font="bold 11px Arial",i.textAlign="center",d===o||o===0?i.fillText(k,g,_):((a<.15&&s===0||O<.15&&s===1)&&(i.fillStyle="black",T=g+Math.cos(u)*(c+5),N=_+Math.sin(u)*(c+5)),i.fillText(L[s],T,N))}}}}function ut(t){const{parking_object:e,realtime_data_updated_at:l,realtime_data_outdated:o,has_realtime_data:f,source_id:z,id:r,name:i,operator_name:d,type:a,purpose:O,address:v,park_and_ride_type:p,realtime_opening_status:k,capacity:P,capacity_disabled:m,capacity_woman:$,capacity_family:L,capacity_charging:S,capacity_carsharing:A,realtime_capacity:b,realtime_free_capacity:y,public_url:g,photo_url:_,realtime_status:c,restriction_type:s,restriction_hours:u,restriction_max_stay:C}=t;let h,T;l&&({date:h,time:T}=tt(l));const N=`
            <tr>
            <td class="att">alle (frei/gesamt)</td>
            ${c==="AVAILABLE"?'<td class="attContent">1 / 1</td>':""}
            ${c==="TAKEN"?'<td class="attContent">0 / 1</td>':""}
            ${c==="UNKNOWN"?'<td class="attContent">- / 1</td>':""}
            ${!f||!c?'<td class="attContent">- / 1</td>':""}
            </tr>
            ${s?`
            <tr>
                <td class="att">Parkberechtigte</td>
                ${s===""?'<td class="attContent">alle</td>':""}
                ${s.match("DISABLED")?'<td class="attContent">Behinderte</td>':""}
                ${s.match("CHARGING")?'<td class="attContent">zum Laden</td>':""}
                ${s.match("FAMILY")?'<td class="attContent">Familien</td>':""}
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
            ${!P&&!b?"":`
            <tr>
                <td class="att2">alle (frei/gesamt)</td>
                <td class="attContent2">
                ${f===!1||!y?"-":y}
                / 
                ${!b&&P===void 0?"-":b||P}
                </td>
            </tr>
            `}
            ${!m||m==="0"?"":`
            <tr><td class="att2">für Behinderte</td><td class="attContent2">${m}</td></tr>
            `}
            ${!$||$==="0"?"":`
            <tr><td class="att2">für Frauen</td><td class="attContent2">${$}</td></tr>
            `}
            ${!L||L==="0"?"":`
            <tr><td class="att2">für Familien</td><td class="attContent2">${L}</td></tr>
            `}
            ${!S||S==="0"?"":`
            <tr><td class="att2">mit Lademöglichkeit</td><td class="attContent2">${S}</td></tr>
            `}
            ${!A||A==="0"?"":`
            <tr><td class="att2">für Carsharing</td><td class="attContent2">${A}</td></tr>
            `}
            `,Q=`
        <table>
            <tr>
            <th id="logos-${r}"></th>
            ${i?`<th class="title">${i}</th>`:""}
            </tr>
        </table>
        <br>
        <table>
            <tr id="datengeber-${r}"></tr>
            ${!d||d==="-"||d===""?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${d}</td>
            </tr>
            `}
            ${a?`
            <tr>
                <td class="att">Typ</td>
                ${a==="ON_STREET"?'<td class="attContent">Straßen-Parkplatz</td>':""}
                ${a==="OFF_STREET_PARKING_GROUND"?'<td class="attContent">Parkplatz abseits der Straße</td>':""}
                ${a==="CAR_PARK"?'<td class="attContent">Parkhaus</td>':""}
                ${a==="UNDERGROUND"?'<td class="attContent">Tiefgarage</td>':""}
                ${a==="WALL_LOOPS"?'<td class="attContent">Vorderradhalter</td>':""}
                ${a==="SAFE_WALL_LOOPS"?'<td class="attContent">Vorderradhalter mit Sicherung</td>':""}
                ${a==="STANDS"?'<td class="attContent">Anlehnbügel</td>':""}
                ${a==="LOCKERS"&&O==="BIKE"?'<td class="attContent">Fahrradschrank</td>':""}
                ${a==="LOCKERS"&&O==="ITEM"||a==="LOCKBOX"?'<td class="attContent">Schließfach</td>':""}
                ${a==="SHED"?'<td class="attContent">Sammelanlage</td>':""}
                ${a==="TWO_TIER"?'<td class="attContent">Zweistock-Abstellanlage</td>':""}
                ${a==="BUILDING"?'<td class="attContent">Parkhaus</td>':""}
                ${a==="FLOOR"?'<td class="attContent">Abstellfläche</td>':""}
                ${a==="OTHER"?'<td class="attContent">Sonstige</td>':""}
            </tr>
            `:""}
            ${v?`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${v}</td>
            </tr>
            `:""}
            ${p?`
            <tr>
                <td class="att">P+R-Typ</td>
                ${p==="CARPOOL"?'<td class="attContent">Fahrgemeinschaft</td>':""}
                ${p==="TRAIN"?'<td class="attContent">Bahn</td>':""}
                ${p==="BUS"?'<td class="attContent">Bus</td>':""}
                ${p==="TRAM"?'<td class="attContent">Straßenbahn</td>':""}
                ${p==="YES"?'<td class="attContent">ja</td>':""}
                ${p==="NO"?'<td class="attContent">nein</td>':""}
            </tr>
            `:""}
            ${k?`
            <tr>
                <td class="att">Status</td>
                ${k==="OPEN"?'<td class="attContent">geöffnet</td>':""}
                ${k==="CLOSED"?'<td class="attContent">geschlossen</td>':""}
                ${k==="UNKNOWN"?'<td class="attContent">unbekannt</td>':""}
            </tr>
            `:""}
            ${f===!1?"":`
            <tr>
                <td class="att">Stand Echtzeitdaten</td>
                ${o?`<td class="attContent outDated">${h}, ${T}</td>`:`<td class="attContent">${h}, ${T}</td>`}
            </tr>
            `}
        </table>
        <br>
        <div class="title title2">Parkplätze</div>
        <div id="divParkingSites">
        <div><div id="anchor-${r}"></div></div>
        <div id="divTable">
        <table>
            ${e==="spot"?N:J}
        </table>
            </div>
        </div>
        <table id="divURLs">
            <tr>
                ${g?`<td class="attContentLink"><a href="${g}" target="_blank">&#10149 Datengeber</a></td>`:""}
                <td class="attContentLink"><a href="https://${U}.mobidata-bw.de/park-api/api/public/v3/parking-${e}s/${r}" target="_blank">&#10149 ParkAPI</a></td>
                ${_?`<td class="attContentLink"><a href="${_}" class="photoMargin" target="_blank">&#10149 Foto</a></td>`:""}
            </tr>
        </table>
    `;return setTimeout(()=>{fetch(`https://${U}.mobidata-bw.de/park-api/api/public/v3/sources`).then(I=>I.json()).then(I=>{let F="",G="";I.items.forEach(H=>{const M={aalen:"Stadt Aalen",apcoa:"APCOA PARKING",bahn_v2:"DB BahnPark",bb_parkhaus:"B+B Parkhaus GmbH & Co. KG",bfrk:"NVBW",bietigheim_bissingen:"Stadt Bietigheim-Bissingen",buchen:"Stadt Buchen",ellwangen:"Stadt Ellwangen",esslingen:"Stadt Esslingen",freiburg:"Stadt Freiburg im Breisgau",friedrichshafen:"Stadt Friedrichshafen",goldbeck:"Goldbeck",heidelberg:"Stadt Heidelberg",herrenberg:"Stadt Herrenberg",huefner:"PARK SERVICE HÜFNER GmbH + Co. KG",karlsruhe:"Stadt Karlsruhe",keltern:"Stadt Keltern",kienzler:"Kienzler",konstanz:"Stadt Konstanz",mannheim:"Stadt Mannheim",m_bw:"Verkehrsministerium Baden-Württemberg",neckarsulm:"Stadt Neckarsulm",opendata_swiss:"Open-Data-Plattform Schweiz",pbw:"Parkraumgesellschaft Baden-Württemberg mbH",pforzheim:"Stadt Pforzheim",radvis_bw:"RadVIS",reutlingen:"Stadt Reutlingen",stuttgart_:"Stadt Stuttgart",ulm_:"Stadt Ulm",velobrix:"Velobrix",vrn_:"Verkehrsverbund Rhein-Neckar",vrs:"Verband Region Stuttgart"};for(let K in M)H.uid.match(K)&&z==H.id&&(F+=et(M[K]),G+=`<td class="attContent">${M[K]}</td>`)});const j=document.getElementById("logos-"+r);j&&F&&(j.innerHTML=F);const x=document.getElementById("datengeber-"+r);x&&G&&(x.innerHTML=`
                    <td class="att">Datengeber</td>
                    <td class="attContent"${G}</td>`)}),lt(t)},0),Q}export{dt as a,pt as b,bt as c,Y as d,gt as e,_t as f,q as l,ut as p,ot as s};
