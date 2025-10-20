import{s as i,a as d,l as c,i as u,b as f,c as p,d as g}from"../../addControlLayers-CYfvbK8g.js";import{p as _}from"../../popups-C8jrE2sE.js";window.PUBLIC_PATH="/karten_test/";const y=i({format:"mbtiles",file:"oepnv_gueteklassen"}),t={group:"ÖPNV-Güteklassen",type:"fill",source:"sourceOepnvGueteklassen",sourceLayer:"oepnvGueteklassen",fillOpacity:.9,fillOutlineColor:"transparent"},b=[{id:"oepnvGueteklassen_J",label:"J",filter:["==",["get","quality_gr"],"J"],color:"#4b44f3",...t},{id:"oepnvGueteklassen_I",label:"I",filter:["==",["get","quality_gr"],"I"],color:"#5a84e5",...t},{id:"oepnvGueteklassen_H",label:"H",filter:["==",["get","quality_gr"],"H"],color:"#5c9c7e",...t},{id:"oepnvGueteklassen_G",label:"G",filter:["==",["get","quality_gr"],"G"],color:"#5fba4f",...t},{id:"oepnvGueteklassen_F",label:"F",filter:["==",["get","quality_gr"],"F"],color:"#aedc5e",...t},{id:"oepnvGueteklassen_E",label:"E",filter:["==",["get","quality_gr"],"E"],color:"#efef63",...t},{id:"oepnvGueteklassen_D",label:"D",filter:["==",["get","quality_gr"],"D"],color:"#fed266",...t},{id:"oepnvGueteklassen_C",label:"C",filter:["==",["get","quality_gr"],"C"],color:"#fdae61",...t},{id:"oepnvGueteklassen_B",label:"B",filter:["==",["get","quality_gr"],"B"],color:"#e75739",...t},{id:"oepnvGueteklassen_A",label:"A",filter:["==",["get","quality_gr"],"A"],color:"#ab1417",...t}];function k(e){const{quality_gr:l,spatial_un:a,station_ca:s,public_tra:n}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${l=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${l}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${n=="bus"||n=="rufbus"||n=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${n=="re-rb"||n=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${n=="tram"||n=="stadtbahn"||n=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function G(e){const l={collapsed:!1,layers:d(o,"Legende")},a=new c(l);e.addControl(a,"top-right")}function r(e){const l=e.getStyle().layers,a=l.find(s=>s.type=="fill");l.filter(s=>s.id.startsWith("oepnvGueteklassen")).forEach(s=>{e.getLayer(s.id)&&e.moveLayer(s.id,a.id)})}let o;window.addEventListener("DOMContentLoaded",()=>{const e=u();f(e,{style:"railway"}),e.on("load",()=>{[{id:"sourceOepnvGueteklassen",source:y}].forEach(a=>p(e,a)),o=b,o.forEach(a=>g(e,a)),G(e),r(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,r(e))}),_(e,o,k)})});
