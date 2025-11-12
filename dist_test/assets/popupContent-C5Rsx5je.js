import{k as w}from"./addControlLayers-DMQ61Nfk.js";import{p as y}from"./popupImages-BSddv5uF.js";const S={layer:"MobiData-BW:charge_points",style:"MobiData-BW:mdbw_charge_points_dynamic",bounds:[5.2,47.2,15.8,55.7]},o={source:"sourceChargePoints",sourceLayer:"charge_points",group:"E-Ladesäulen",circleRadius:["interpolate",["linear"],["zoom"],6,4,12,5]},$=[{id:"chargePointsPower_Normal",label:"Ladesäule",subGroup:"Ladeleistung",filter:["<=",["get","max_electric_power"],22e3],color:"#08a4a7",...o},{id:"chargePointsPower_Fast",label:"Schnellladesäule",subGroup:"Ladeleistung",filter:[">",["get","max_electric_power"],22e3],color:"#91FFFF",...o},{id:"chargePointsPower_Unknown",label:"Ladeleistung unbekannt",subGroup:"Ladeleistung",filter:["==",["get","max_electric_power"],null],color:"#cacaca",...o}],x=[{id:"chargePointsOccupancy_NoRealtimeInformation",label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["all",[">",["get","chargepoint_static_count"],0],["==",["get","chargepoint_available_count"],0]],color:"#615fdf",visibility:"none",...o},{id:"chargePointsOccupancy_StaticUnknown",label:"Status unbekannt",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],["==",["get","chargepoint_reserved_count"],0],["==",["get","chargepoint_inoperative_count"],0],["==",["get","chargepoint_outoforder_count"],0],["==",["get","chargepoint_static_count"],0],[">",["get","chargepoint_unknown_count"],0]],color:"#cacaca",visibility:"none",...o},{id:"chargePointsOccupancy_InoperativeOutOfOrder",label:"Ladesäule nicht nutzbar",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],["==",["get","chargepoint_reserved_count"],0],["==",["get","chargepoint_static_count"],0],["any",[">",["get","chargepoint_inoperative_count"],0],[">",["get","chargepoint_outoforder_count"],0]]],color:"#ffcc00",visibility:"none",...o},{id:"chargePointsOccupancy_ChargingReserved",label:"Ladesäule belegt",subGroup:"Belegung",filter:["all",["any",[">",["get","chargepoint_charging_count"],0],[">",["get","chargepoint_reserved_count"],0]],["==",["get","chargepoint_available_count"],0]],color:"#ed0000",visibility:"none",...o},{id:"chargePointsOccupancy_Available",label:"Ladesäule frei",subGroup:"Belegung",filter:[">",["get","chargepoint_available_count"],0],color:"#059b02",visibility:"none",...o}];function P(a){const c=document.querySelector("#canvas-"+a.id);if(c){const t=c.getContext("2d"),n=[a.chargepoint_available_count,a.chargepoint_charging_count+a.chargepoint_reserved_count,a.chargepoint_inoperative_count+a.chargepoint_outoforder_count,a.chargepoint_unknown_count,a.chargepoint_static_count];let g=0;for(let e in n)g<n[e]&&(g=n[e]);const i=c.height,r=c.width,d=15,f=4,l=i-d,_=1.5,m=i-d-_,u=r/5.2,h=(l-12)/g;t.beginPath(),t.moveTo(1.5,0),t.lineWidth=_,t.lineTo(1.5,l),t.lineTo(r,l),t.stroke();for(let e in n){const p=["#059b02","#ed0000","#ffcc00","#cacaca","#615fdf"],b=["frei","belegt","nicht nutzbar","unbekannt","ohne Echtzeit"];t.fillStyle=p[e];const v=3+e*u+1*e;t.fillRect(v,m,u,-n[e]*h),t.font="11px, Arial",t.fillStyle="black",t.textAlign="center";const s=v+u/2;t.fillText(n[e],s,l-f-n[e]*h),t.fillText(b[e],s,i-2)}}}function z(a){const{id:c,source:t,name:n,address:g,max_electric_power:i,operator_name:r,chargepoint_static_count:d,chargepoint_unknown_count:f,chargepoint_available_count:l,chargepoint_charging_count:_,chargepoint_reserved_count:m,chargepoint_inoperative_count:u,chargepoint_outoforder_count:k}=a,h=d+f+l+_+m+u+k,e={bnetza:"Bundesnetzagentur",bnetza_api:"Bundesnetzagentur",chargecloud_stuttgart:"Stadtwerke Stuttgart",chargecloud_pforzheim:"Stadtwerke Pforzheim",ochp_albwerk:"AlbWerk",heilbronn_neckarbogen:"Stadtwerke Heilbronn",opendata_swiss:"Open-Data-Plattform Schweiz",chargecloud_tuebingen:"Stadtwerke Tübingen"};let p="",b="";for(let s in e)t==s&&(p+=y(e[s]),b+=`<td class="attContent">${e[s]}</td>`);const v=`
        <table>
            <tr>
                ${p}
                <th class="title">${g}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                ${b}
            </tr>
            ${!r||r==""?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${r}</td>
            </tr> 
            `}          
            ${n?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${n}</td>
            </tr>
            `:""}
            <tr>
                <td class="att">Anzahl Ladepunkte</td>
                <td class="attContent">${h}</td>
            </tr>       
            ${i?`
            <tr>
                <td class="att">Max. Ladeleistung</td>
                <td class="attContent">${(i/1e3).toLocaleString("de-DE")+"kW"}</td>
            </tr>
            `:""}           
        </table>
        <br>
        <div class="title title2">Belegung Ladepunkte</div>
        <br>
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${c}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${w}.mobidata-bw.de/ocpdb/api/public/v1/locations/${c}" target="_blank">&#10149 Open ChargePoint DataBase<a></td>
            </tr>
        </table>
    `;return setTimeout(()=>{P(a)},0),v}export{x as a,$ as l,z as p,S as s};
