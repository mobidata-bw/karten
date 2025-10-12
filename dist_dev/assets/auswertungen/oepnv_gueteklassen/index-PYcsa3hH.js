import{a as d,l as u,i as c,b as g,c as p,d as b}from"../../addControlLayers-DpI8AOJ_.js";import{s as o}from"../../setFilePath-CKvzmloB.js";import{p as f}from"../../popups-D19OfOkG.js";window.PUBLIC_PATH="/karten_dev/";const y=o("pmtiles","maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),_={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke","source-layer":"regierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}},k=o("pmtiles","maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen"),t={group:"ÖPNV-Güteklassen",type:"fill",source:"sourceOepnvGueteklassen",sourceLayer:"oepnvGueteklassen",fillOpacity:.9,fillOutlineColor:"transparent"},v=[{id:"oepnvGueteklassen_J",label:"J",filter:["==",["get","quality_gr"],"J"],color:"#4b44f3",...t},{id:"oepnvGueteklassen_I",label:"I",filter:["==",["get","quality_gr"],"I"],color:"#5a84e5",...t},{id:"oepnvGueteklassen_H",label:"H",filter:["==",["get","quality_gr"],"H"],color:"#5c9c7e",...t},{id:"oepnvGueteklassen_G",label:"G",filter:["==",["get","quality_gr"],"G"],color:"#5fba4f",...t},{id:"oepnvGueteklassen_F",label:"F",filter:["==",["get","quality_gr"],"F"],color:"#aedc5e",...t},{id:"oepnvGueteklassen_E",label:"E",filter:["==",["get","quality_gr"],"E"],color:"#efef63",...t},{id:"oepnvGueteklassen_D",label:"D",filter:["==",["get","quality_gr"],"D"],color:"#fed266",...t},{id:"oepnvGueteklassen_C",label:"C",filter:["==",["get","quality_gr"],"C"],color:"#fdae61",...t},{id:"oepnvGueteklassen_B",label:"B",filter:["==",["get","quality_gr"],"B"],color:"#e75739",...t},{id:"oepnvGueteklassen_A",label:"A",filter:["==",["get","quality_gr"],"A"],color:"#ab1417",...t}];function h(e){const{quality_gr:s,spatial_un:a,station_ca:l,public_tra:n}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${s=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${s}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${n=="bus"||n=="rufbus"||n=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${n=="re-rb"||n=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${n=="tram"||n=="stadtbahn"||n=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function G(e){const s={collapsed:!1,layers:d(r,"Legende")},a=new u(s);e.addControl(a,"top-right")}function i(e){const s=e.getStyle().layers,a=s.find(l=>l.type=="fill");s.filter(l=>l.id.startsWith("oepnvGueteklassen")).forEach(l=>{e.getLayer(l.id)&&e.moveLayer(l.id,a.id)})}let r;window.addEventListener("DOMContentLoaded",()=>{const e=c();g(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",y),e.addLayer(_),[{id:"sourceOepnvGueteklassen",source:k}].forEach(a=>p(e,a)),r=v,r.forEach(a=>b(e,a)),G(e),i(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,i(e))}),f(e,r,h)})});
