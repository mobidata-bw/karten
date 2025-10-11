import{a as u,l as d,i as c,b as g,c as p,d as b}from"../../addControlLayers-NvgRZUMR.js";import{p as f}from"../../popups-BEExRuvf.js";window.PUBLIC_PATH="/karten_dev/";function o(e,s,t){let a;return a={type:"vector",url:`pmtiles:///karten_geojsons/${s}/${t}.pmtiles`},a}const y=o("pmtiles","maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),_={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke","source-layer":"regierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}},k=o("pmtiles","maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen"),l={group:"ÖPNV-Güteklassen",type:"fill",source:"sourceOepnvGueteklassen",sourceLayer:"oepnvGueteklassen",fillOpacity:.9,fillOutlineColor:"transparent"},v=[{id:"oepnvGueteklassen_J",label:"J",filter:["==",["get","quality_gr"],"J"],color:"#4b44f3",...l},{id:"oepnvGueteklassen_I",label:"I",filter:["==",["get","quality_gr"],"I"],color:"#5a84e5",...l},{id:"oepnvGueteklassen_H",label:"H",filter:["==",["get","quality_gr"],"H"],color:"#5c9c7e",...l},{id:"oepnvGueteklassen_G",label:"G",filter:["==",["get","quality_gr"],"G"],color:"#5fba4f",...l},{id:"oepnvGueteklassen_F",label:"F",filter:["==",["get","quality_gr"],"F"],color:"#aedc5e",...l},{id:"oepnvGueteklassen_E",label:"E",filter:["==",["get","quality_gr"],"E"],color:"#efef63",...l},{id:"oepnvGueteklassen_D",label:"D",filter:["==",["get","quality_gr"],"D"],color:"#fed266",...l},{id:"oepnvGueteklassen_C",label:"C",filter:["==",["get","quality_gr"],"C"],color:"#fdae61",...l},{id:"oepnvGueteklassen_B",label:"B",filter:["==",["get","quality_gr"],"B"],color:"#e75739",...l},{id:"oepnvGueteklassen_A",label:"A",filter:["==",["get","quality_gr"],"A"],color:"#ab1417",...l}];function h(e){const{quality_gr:s,spatial_un:t,station_ca:a,public_tra:n}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${s=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${s}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${t}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${n=="bus"||n=="rufbus"||n=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${n=="re-rb"||n=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${n=="tram"||n=="stadtbahn"||n=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function G(e){const s={collapsed:!1,layers:u(r,"Legende")},t=new d(s);e.addControl(t,"top-right")}function i(e){const s=e.getStyle().layers,t=s.find(a=>a.type=="fill");s.filter(a=>a.id.startsWith("oepnvGueteklassen")).forEach(a=>{e.getLayer(a.id)&&e.moveLayer(a.id,t.id)})}let r;window.addEventListener("DOMContentLoaded",()=>{const e=c();g(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",y),e.addLayer(_),[{id:"sourceOepnvGueteklassen",source:k}].forEach(t=>p(e,t)),r=v,r.forEach(t=>b(e,t)),G(e),i(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,i(e))}),f(e,r,h)})});
