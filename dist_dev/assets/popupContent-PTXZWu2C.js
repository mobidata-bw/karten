import{k as x}from"./addControlLayers-BDsgUQb2.js";import{p as P}from"./popupImages-BJeYjfuO.js";const L={layer:"MobiData-BW:charge_points",style:"MobiData-BW:mdbw_charge_points_dynamic",bounds:[5.2,47.2,15.8,55.7]},b={source:"sourceChargePoints",sourceLayer:"charge_points",group:"E-Ladesäulen",circleRadius:["interpolate",["linear"],["zoom"],6,4,12,5]},z=[{id:"chargePointsPower_Normal",label:"Ladesäule",subGroup:"Ladeleistung",filter:["<=",["get","max_electric_power"],22e3],color:"#08a4a7",...b},{id:"chargePointsPower_Fast",label:"Schnellladesäule",subGroup:"Ladeleistung",filter:[">",["get","max_electric_power"],22e3],color:"#91FFFF",...b},{id:"chargePointsPower_Unknown",label:"Ladeleistung unbekannt",subGroup:"Ladeleistung",filter:["==",["get","max_electric_power"],null],color:"#cacaca",...b}],B=[{id:"chargePointsOccupancy_Static",label:"Echtzeitdaten nicht vorhanden",subGroup:"Belegung",filter:["all",[">",["get","chargepoint_static_count"],0],["==",["get","chargepoint_outoforder_count"],0],["==",["get","chargepoint_unknown_count"],0],["==",["get","chargepoint_inoperative_count"],0],["==",["get","chargepoint_available_count"],0],["==",["get","chargepoint_charging_count"],0]],color:"#615fdf",visibility:"none",...b},{id:"chargePointsOccupancy_Realtime",label:"Echtzeitdaten verfügbar",subGroup:"Belegung",filter:["all",["==",["get","chargepoint_static_count"],0],["any",[">",["get","chargepoint_outoforder_count"],0],[">",["get","chargepoint_unknown_count"],0],[">",["get","chargepoint_inoperative_count"],0],[">",["get","chargepoint_available_count"],0],[">",["get","chargepoint_charging_count"],0]]],color:"#dfab27",visibility:"none",...b}];function y(n){const c=document.querySelector("#canvas-"+n.id);if(c){const e=c.getContext("2d"),u=n.chargepoint_static_count+n.chargepoint_unknown_count,_=n.chargepoint_available_count,d=n.chargepoint_charging_count+n.chargepoint_reserved_count,l=n.chargepoint_inoperative_count+n.chargepoint_outoforder_count,a=[u+_+d+l,u,_,d,l];let r=0;for(let t in a)r<a[t]&&(r=a[t]);const o=c.height,s=c.width,m=15,h=4,i=o-m,v=1.5,C=o-m-v,w=s/5.2,g=(i-12)/r;e.beginPath(),e.moveTo(1.5,0),e.lineWidth=v,e.lineTo(1.5,i),e.lineTo(s,i),e.stroke();for(let t in a){const k=["#006eaf","#ffcc00","#5ce75c","#8B0000","#3a4044"],p=["gesamt","unbekannt","verfügbar","belegt","nicht nutzbar"];e.fillStyle=k[t],e.fillRect(3+t*w+1*t,C,w,-a[t]*g),e.font="11px, Arial",e.fillStyle="black",t==0?(e.fillText(a[t],28,i-h-a[t]*g),e.fillText(p[t],13,o-2)):t==1?(e.fillText(a[t],87,i-h-a[t]*g),e.fillText(p[t],66,o-2)):t==2?(e.fillText(a[t],146,i-h-a[t]*g),e.fillText(p[t],127,o-2)):t==3?(e.fillText(a[t],205,i-h-a[t]*g),e.fillText(p[t],194,o-2)):t==4&&(e.fillText(a[t],264,i-h-a[t]*g),e.fillText(p[t],238,o-2))}}}function F(n){const{id:c,source:e,name:u,address:_,max_electric_power:d,operator_name:l}=n,f={bnetza:"Bundesnetzagentur",bnetza_api:"Bundesnetzagentur",chargecloud_stuttgart:"Stadtwerke Stuttgart",chargecloud_pforzheim:"Stadtwerke Pforzheim",ochp_albwerk:"AlbWerk",heilbronn_neckarbogen:"Stadtwerke Heilbronn",opendata_swiss:"Open-Data-Plattform Schweiz",chargecloud_tuebingen:"Stadtwerke Tübingen"};let a="",r="";for(let s in f)e==s&&(a+=P(f[s]),r+=`<td class="attContent">${f[s]}</td>`);const o=`
        <table>
            <tr>
                ${a}
                <th class="title">${_}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                ${r}
            </tr>
        ${!l||l==""?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${l}</td>
            </tr> 
        `}
        ${u?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${u}</td>
            </tr>
        `:""}
        ${d?`
            <tr>
                <td class="att">Max. Ladeleistung</td>
                <td class="attContent">${(d/1e3).toLocaleString("de-DE")+"kW"}</td>
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
                <td class="attContentLink"><a href="https://${x}.mobidata-bw.de/ocpdb/api/public/v1/locations/${c}" target="_blank">&#10149 Open ChargePoint DataBase<a></td>
            </tr>
        </table>
    `;return setTimeout(()=>{y(n)},0),o}export{B as a,z as l,F as p,L as s};
