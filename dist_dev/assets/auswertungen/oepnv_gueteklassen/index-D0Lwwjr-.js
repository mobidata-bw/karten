import{s as d,a as c,l as u,e as a,i as g,b as p,c as f,d as b}from"../../addControlLayers-XyfUgBW8.js";import{p as y}from"../../popups-eMlXbjXL.js";window.PUBLIC_PATH="/karten_dev/";const v=d("maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),h={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}},k={url:"pmtiles:///data/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_stuttgart.pmtiles"},m={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:.9,fillOutlineColor:"transparent"},w=[{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",sourceLayer:"oepnv_gueteklassen_stuttgart",...m}];function C(e){const{qg:s,su:n,sc:t,pt:l}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${s=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${s}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${t}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${l=="bus"||l=="rufbus"||l=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${l=="re-rb"||l=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${l=="tram"||l=="stadtbahn"||l=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function G(e){const s={collapsed:!1,layers:c(r,"ÖPNV-Güteklassen")},n=new u(s);e.addControl(n,"top-right")}const S=`
  <div id="divLegend">
    <div class="title">Haltestellen-Kategorie</div>
    <ul>  
      <li>${a("#ab1417")}A</li>
      <li>${a("#e75739")}B</li>
      <li>${a("#fdae61")}C</li>
      <li>${a("#fed266")}D</li>
      <li>${a("#efef63")}E</li>
      <li>${a("#aedc5e")}F</li>
      <li>${a("#5fba4f")}G</li>
      <li>${a("#5c9c7e")}H</li>
      <li>${a("#5a84e5")}I</li>
      <li>${a("#4b44f3")}J</li>
    </ul>
  </div>
`;let i;function o(e){const s=e.getStyle().layers,n=s.find(t=>t.type=="fill");s.filter(t=>t.id.startsWith("oepnvGueteklassen")).forEach(t=>{e.getLayer(t.id)&&e.getLayoutProperty(t.id,"visibility")=="visible"&&(i=t.id)}),!(!i||!e.getLayer(i))&&e.moveLayer(i,n.id)}let r;window.addEventListener("DOMContentLoaded",()=>{const e=g();p(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",v),e.addLayer(h),[{id:"sourceOepnvGueteklassenStuttgart",source:k}].forEach(t=>f(e,t)),r=w,r.forEach(t=>b(e,t)),G(e);const n=document.getElementById("legend");n&&(n.innerHTML=S),o(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,o(e))}),y(e,r,C)})});
