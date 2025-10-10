import{s as r,a as c,l as g,e as s,i as p,b,c as v,d as f}from"../../addControlLayers-CjQ9N_vG.js";import{p as k}from"../../popups-P1UyR7Dx.js";window.PUBLIC_PATH="/karten_test/";const y=r("maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),h={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}},G=r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_stuttgart"),C={type:"geojson",data:{type:"FeatureCollection",features:[]}},w={type:"geojson",data:{type:"FeatureCollection",features:[]}},_={type:"geojson",data:{type:"FeatureCollection",features:[]}},i={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:.9,fillOutlineColor:"transparent"},m=[{id:"oepnvGueteklassenTuebingen",label:"Tübingen",source:"sourceOepnvGueteklassenTuebingen",visibility:"none",legendColor:"none",...i,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_tuebingen").data},{id:"oepnvGueteklassenFreiburg",label:"Freiburg",source:"sourceOepnvGueteklassenFreiburg",visibility:"none",legendColor:"none",...i,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_freiburg").data},{id:"oepnvGueteklassenKarlsruhe",label:"Karlsruhe",source:"sourceOepnvGueteklassenKarlsruhe",visibility:"none",legendColor:"none",...i,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_karlsruhe").data},{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",...i}];function O(e){const{qg:n,su:a,sc:t,pt:l}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${n=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${n}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${a}</td>
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
    `}function S(e){const n={collapsed:!1,layers:c(u,"ÖPNV-Güteklassen")},a=new g(n);e.addControl(a,"top-right")}const $=`
  <div id="divLegend">
    <div class="title">Haltestellen-Kategorie</div>
    <ul>  
      <li>${s("#ab1417")}A</li>
      <li>${s("#e75739")}B</li>
      <li>${s("#fdae61")}C</li>
      <li>${s("#fed266")}D</li>
      <li>${s("#efef63")}E</li>
      <li>${s("#aedc5e")}F</li>
      <li>${s("#5fba4f")}G</li>
      <li>${s("#5c9c7e")}H</li>
      <li>${s("#5a84e5")}I</li>
      <li>${s("#4b44f3")}J</li>
    </ul>
  </div>
`;let o;function d(e){const n=e.getStyle().layers,a=n.find(t=>t.type=="fill");n.filter(t=>t.id.startsWith("oepnvGueteklassen")).forEach(t=>{e.getLayer(t.id)&&e.getLayoutProperty(t.id,"visibility")=="visible"&&(o=t.id)}),!(!o||!e.getLayer(o))&&e.moveLayer(o,a.id)}let u;window.addEventListener("DOMContentLoaded",()=>{const e=p();b(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",y),e.addLayer(h),[{id:"sourceOepnvGueteklassenStuttgart",source:G},{id:"sourceOepnvGueteklassenKarlsruhe",source:C},{id:"sourceOepnvGueteklassenFreiburg",source:w},{id:"sourceOepnvGueteklassenTuebingen",source:_}].forEach(t=>v(e,t)),u=m,u.forEach(t=>f(e,t)),S(e);const a=document.getElementById("legend");a&&(a.innerHTML=$),d(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,d(e))}),k(e,u,O)})});
