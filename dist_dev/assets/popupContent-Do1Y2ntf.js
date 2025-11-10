import{k as y}from"./addControlLayers-0lIGzMVq.js";import{p as C}from"./popupImages-0K_rmlav.js";const O={layer:"MobiData-BW:charge_points",style:"MobiData-BW:mdbw_charge_points_dynamic",bounds:[5.2,47.2,15.8,55.7]},r={source:"sourceChargePoints",sourceLayer:"charge_points",group:"E-Ladesäulen",circleRadius:["interpolate",["linear"],["zoom"],6,4,12,5]},S=[{id:"chargePointsPower_Normal",label:"Ladesäule",subGroup:"Ladeleistung",filter:["<=",["get","max_electric_power"],22e3],color:"#08a4a7",...r},{id:"chargePointsPower_Fast",label:"Schnellladesäule",subGroup:"Ladeleistung",filter:[">",["get","max_electric_power"],22e3],color:"#91FFFF",...r},{id:"chargePointsPower_Unknown",label:"Ladeleistung unbekannt",subGroup:"Ladeleistung",filter:["==",["get","max_electric_power"],null],color:"#cacaca",...r}],T=[{id:"chargePointsOccupancy_OutdatedRealtimeInformation",label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:[">",["get","chargepoint_static_count"],0],color:"#615fdf",visibility:"none",...r},{id:"chargePointsOccupancy_StaticUnknown",label:"Status unbekannt",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],[">",["get","chargepoint_unknown_count"],0]],color:"#cacaca",visibility:"none",...r},{id:"chargePointsOccupancy_InoperativeOutOfOrder",label:"Ladesäule nicht nutzbar",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],["any",[">",["get","chargepoint_inoperative_count"],0],[">",["get","chargepoint_outoforder_count"],0]]],color:"#ffcc00",visibility:"none",...r},{id:"chargePointsOccupancy_ChargingReserved",label:"Ladesäule belegt",subGroup:"Belegung",filter:["all",["any",[">",["get","chargepoint_charging_count"],0],[">",["get","chargepoint_reserved_count"],0]],["==",["get","chargepoint_available_count"],0]],color:"#ed0000",visibility:"none",...r},{id:"chargePointsOccupancy_Available",label:"Ladesäule frei",subGroup:"Belegung",filter:[">",["get","chargepoint_available_count"],0],color:"#059b02",visibility:"none",...r}];function P(n){const l=document.querySelector("#canvas-"+n.id);if(l){const e=l.getContext("2d"),p=n.chargepoint_available_count,k=n.chargepoint_charging_count+n.chargepoint_reserved_count,b=n.chargepoint_inoperative_count+n.chargepoint_outoforder_count,a=[p,k,b,n.chargepoint_unknown_count,n.chargepoint_static_count];let u=0;for(let t in a)u<a[t]&&(u=a[t]);const c=l.height,_=l.width,f=15,s=4,o=c-f,v=1.5,m=c-f-v,g=_/5.2,i=(o-12)/u;e.beginPath(),e.moveTo(1.5,0),e.lineWidth=v,e.lineTo(1.5,o),e.lineTo(_,o),e.stroke();for(let t in a){const d=["#059b02","#ed0000","#ffcc00","#cacaca","#615fdf"],h=["frei","belegt","nicht nutzbar","unbekannt","statisch"];switch(e.fillStyle=d[t],e.fillRect(3+t*g+1*t,m,g,-a[t]*i),e.font="11px, Arial",e.fillStyle="black",!0){case t==0:e.fillText(a[t],28,o-s-a[t]*i),e.fillText(h[t],23,c-2);break;case t==1:e.fillText(a[t],87,o-s-a[t]*i),e.fillText(h[t],76,c-2);break;case t==2:e.fillText(a[t],146,o-s-a[t]*i),e.fillText(h[t],120,c-2);break;case t==3:e.fillText(a[t],205,o-s-a[t]*i),e.fillText(h[t],183,c-2);break;case t==4:e.fillText(a[t],264,o-s-a[t]*i),e.fillText(h[t],250,c-2);break}}}}function $(n){const{id:l,source:e,name:p,address:k,max_electric_power:b,operator_name:a,chargepoint_static_count:u,chargepoint_unknown_count:c,chargepoint_available_count:_,chargepoint_charging_count:f,chargepoint_reserved_count:s,chargepoint_inoperative_count:o,chargepoint_outoforder_count:v}=n,m=u+c+_+f+s+o+v,g={bnetza:"Bundesnetzagentur",bnetza_api:"Bundesnetzagentur",chargecloud_stuttgart:"Stadtwerke Stuttgart",chargecloud_pforzheim:"Stadtwerke Pforzheim",ochp_albwerk:"AlbWerk",heilbronn_neckarbogen:"Stadtwerke Heilbronn",opendata_swiss:"Open-Data-Plattform Schweiz",chargecloud_tuebingen:"Stadtwerke Tübingen"};let w="",i="";for(let d in g)e==d&&(w+=C(g[d]),i+=`<td class="attContent">${g[d]}</td>`);const t=`
        <table>
            <tr>
                ${w}
                <th class="title">${k}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                ${i}
            </tr>
            ${!a||a==""?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${a}</td>
            </tr> 
            `}          
            ${p?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${p}</td>
            </tr>
            `:""}
            <tr>
                <td class="att">Anzahl Ladepunkte</td>
                <td class="attContent">${m}</td>
            </tr>       
            ${b?`
            <tr>
                <td class="att">Max. Ladeleistung</td>
                <td class="attContent">${(b/1e3).toLocaleString("de-DE")+"kW"}</td>
            </tr>
            `:""}           
        </table>
        <br>
        <div class="title title2">Belegung Ladepunkte</div>
        <br>
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${l}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${y}.mobidata-bw.de/ocpdb/api/public/v1/locations/${l}" target="_blank">&#10149 Open ChargePoint DataBase<a></td>
            </tr>
        </table>
    `;return setTimeout(()=>{P(n)},0),t}export{T as a,S as l,$ as p,O as s};
