import{k}from"./addControlLayers-0lIGzMVq.js";import{t as P}from"./timeStamps-DlIY0qCy.js";import{p as x}from"./popupImages-0K_rmlav.js";const B={layer:"MobiData-BW:charge_points",style:"MobiData-BW:mdbw_charge_points_dynamic",bounds:[5.2,47.2,15.8,55.7]},c={source:"sourceChargePoints",sourceLayer:"charge_points",group:"E-Ladesäulen",circleRadius:["interpolate",["linear"],["zoom"],6,4,12,5]},z=[{id:"chargePointsPower_Normal",label:"Ladesäule",subGroup:"Ladeleistung",filter:["<=",["get","max_electric_power"],22e3],color:"#08a4a7",...c},{id:"chargePointsPower_Fast",label:"Schnellladesäule",subGroup:"Ladeleistung",filter:[">",["get","max_electric_power"],22e3],color:"#91FFFF",...c},{id:"chargePointsPower_Unknown",label:"Ladeleistung unbekannt",subGroup:"Ladeleistung",filter:["==",["get","max_electric_power"],null],color:"#cacaca",...c}],F=[{id:"chargePointsOccupancy_OutdatedRealtimeInformation",label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["==",["get","realtime_data_outdated"],!0],color:"#cacaca",visibility:"none",...c},{id:"chargePointsOccupancy_StaticUnknown",label:"Status unbekannt",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],["any",[">",["get","chargepoint_static_count"],0],[">",["get","chargepoint_unknown_count"],0]],["==",["get","realtime_data_outdated"],!1]],color:"#006eaf",visibility:"none",...c},{id:"chargePointsOccupancy_InoperativeOutOfOrder",label:"Ladesäule nicht nutzbar",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0],["any",[">",["get","chargepoint_inoperative_count"],0],[">",["get","chargepoint_outoforder_count"],0]],["==",["get","realtime_data_outdated"],!1]],color:"#3a4044",visibility:"none",...c},{id:"chargePointsOccupancy_Charging",label:"Ladesäule frei",subGroup:"Belegung",filter:["all",[">",["get","chargepoint_charging_count"],0],["==",["get","chargepoint_available_count"],0],["==",["get","realtime_data_outdated"],!1]],color:"#ed0000",visibility:"none",...c},{id:"chargePointsOccupancy_Available",label:"Ladesäule belegt",subGroup:"Belegung",filter:["all",[">",["get","chargepoint_available_count"],0],["==",["get","realtime_data_outdated"],!1]],color:"#059b02",visibility:"none",...c}];function $(n){const r=document.querySelector("#canvas-"+n.id);if(r){const e=r.getContext("2d"),p=n.chargepoint_static_count+n.chargepoint_unknown_count,m=n.chargepoint_available_count,_=n.chargepoint_charging_count+n.chargepoint_reserved_count,d=n.chargepoint_inoperative_count+n.chargepoint_outoforder_count,a=[p+m+_+d,p,m,_,d];let s=0;for(let t in a)s<a[t]&&(s=a[t]);const o=r.height,g=r.width,h=15,i=4,l=o-h,u=1.5,w=o-h-u,C=g/5.2,b=(l-12)/s;e.beginPath(),e.moveTo(1.5,0),e.lineWidth=u,e.lineTo(1.5,l),e.lineTo(g,l),e.stroke();for(let t in a){const y=["#006eaf","#ffcc00","#059b02","#ed0000","#3a4044"],f=["gesamt","unbekannt","verfügbar","belegt","nicht nutzbar"];e.fillStyle=y[t],e.fillRect(3+t*C+1*t,w,C,-a[t]*b),e.font="11px, Arial",e.fillStyle="black",t==0?(e.fillText(a[t],28,l-i-a[t]*b),e.fillText(f[t],13,o-2)):t==1?(e.fillText(a[t],87,l-i-a[t]*b),e.fillText(f[t],66,o-2)):t==2?(e.fillText(a[t],146,l-i-a[t]*b),e.fillText(f[t],127,o-2)):t==3?(e.fillText(a[t],205,l-i-a[t]*b),e.fillText(f[t],194,o-2)):t==4&&(e.fillText(a[t],264,l-i-a[t]*b),e.fillText(f[t],238,o-2))}}}function G(n){const{id:r,source:e,name:p,address:m,max_electric_power:_,operator_name:d,last_updated:v,realtime_data_outdated:a}=n;let s,o;v&&({date:s,time:o}=P(v));const g={bnetza:"Bundesnetzagentur",bnetza_api:"Bundesnetzagentur",chargecloud_stuttgart:"Stadtwerke Stuttgart",chargecloud_pforzheim:"Stadtwerke Pforzheim",ochp_albwerk:"AlbWerk",heilbronn_neckarbogen:"Stadtwerke Heilbronn",opendata_swiss:"Open-Data-Plattform Schweiz",chargecloud_tuebingen:"Stadtwerke Tübingen"};let h="",i="";for(let u in g)e==u&&(h+=x(g[u]),i+=`<td class="attContent">${g[u]}</td>`);const l=`
        <table>
            <tr>
                ${h}
                <th class="title">${m}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                ${i}
            </tr>
            ${!d||d==""?"":`
                <tr>
                    <td class="att">Betreiber</td>
                    <td class="attContent">${d}</td>
                </tr> 
            `}
            ${p?`
                <tr>
                    <td class="att">Name</td>
                    <td class="attContent">${p}</td>
                </tr>
            `:""}
            ${_?`
                <tr>
                    <td class="att">Max. Ladeleistung</td>
                    <td class="attContent">${(_/1e3).toLocaleString("de-DE")+"kW"}</td>
                </tr>
            `:""}
            <tr>
                <td class="att">Stand Echtzeitdaten</td>
                ${a?`<td class="attContent outDated">${s}, ${o}</td>`:`<td class="attContent">${s}, ${o}</td>`}
            </tr>
        </table>
        <br>
        <div class="title title2">Belegung Ladepunkte</div>
        <br>
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${r}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${k}.mobidata-bw.de/ocpdb/api/public/v1/locations/${r}" target="_blank">&#10149 Open ChargePoint DataBase<a></td>
            </tr>
        </table>
    `;return setTimeout(()=>{$(n)},0),l}export{F as a,z as l,G as p,B as s};
