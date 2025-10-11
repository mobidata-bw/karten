import{s as d,a as u,l as c,e as n,i as g,b as p,c as f,d as b}from"../../addControlLayers-BDsgUQb2.js";import{p as y}from"../../popups-Dpu7bE-q.js";window.PUBLIC_PATH="/karten_dev/";const h=d("maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),v={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}};function k(e,a,s){let t;return t={url:`/karten_geojsons/${a}/${s}.pmtiles`},t}const m=k("pmtiles","maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_stuttgart"),w={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:.9,fillOutlineColor:"transparent"},C=[{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",sourceLayer:"oepnv_gueteklassen_stuttgart",...w}];function $(e){const{qg:a,su:s,sc:t,pt:l}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${a=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${a}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${s}</td>
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
    `}function G(e){const a={collapsed:!1,layers:u(r,"ÖPNV-Güteklassen")},s=new c(a);e.addControl(s,"top-right")}const S=`
  <div id="divLegend">
    <div class="title">Haltestellen-Kategorie</div>
    <ul>  
      <li>${n("#ab1417")}A</li>
      <li>${n("#e75739")}B</li>
      <li>${n("#fdae61")}C</li>
      <li>${n("#fed266")}D</li>
      <li>${n("#efef63")}E</li>
      <li>${n("#aedc5e")}F</li>
      <li>${n("#5fba4f")}G</li>
      <li>${n("#5c9c7e")}H</li>
      <li>${n("#5a84e5")}I</li>
      <li>${n("#4b44f3")}J</li>
    </ul>
  </div>
`;let i;function o(e){const a=e.getStyle().layers,s=a.find(t=>t.type=="fill");a.filter(t=>t.id.startsWith("oepnvGueteklassen")).forEach(t=>{e.getLayer(t.id)&&e.getLayoutProperty(t.id,"visibility")=="visible"&&(i=t.id)}),!(!i||!e.getLayer(i))&&e.moveLayer(i,s.id)}let r;window.addEventListener("DOMContentLoaded",()=>{const e=g();p(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",h),e.addLayer(v),[{id:"sourceOepnvGueteklassenStuttgart",source:m}].forEach(t=>f(e,t)),r=C,r.forEach(t=>b(e,t)),G(e);const s=document.getElementById("legend");s&&(s.innerHTML=S),o(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,o(e))}),y(e,r,$)})});
