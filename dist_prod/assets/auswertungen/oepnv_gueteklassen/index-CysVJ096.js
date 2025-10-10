import{s as r,a as c,l as d,i as g,b as p,c as b,d as k}from"../../addControlLayers-oFVf9ecf.js";import{p as v}from"../../popups-Da-3PA5A.js";window.PUBLIC_PATH="/karten/";const y=r("maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),f={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1},layout:{visibility:"visible"}},h=r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_stuttgart"),G={type:"geojson",data:{type:"FeatureCollection",features:[]}},C={type:"geojson",data:{type:"FeatureCollection",features:[]}},w={type:"geojson",data:{type:"FeatureCollection",features:[]}},o={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:.9,fillOutlineColor:"transparent"},_=[{id:"oepnvGueteklassenTuebingen",label:"Tübingen",source:"sourceOepnvGueteklassenTuebingen",visibility:"none",legendColor:"none",...o,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_tuebingen").data},{id:"oepnvGueteklassenFreiburg",label:"Freiburg",source:"sourceOepnvGueteklassenFreiburg",visibility:"none",legendColor:"none",...o,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_freiburg").data},{id:"oepnvGueteklassenKarlsruhe",label:"Karlsruhe",source:"sourceOepnvGueteklassenKarlsruhe",visibility:"none",legendColor:"none",...o,url:r("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_karlsruhe").data},{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",...o}];function m(e){const{qg:n,su:t,sc:s,pt:a}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${n=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${n}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${t}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${a=="bus"||a=="rufbus"||a=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${a=="re-rb"||a=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${a=="tram"||a=="stadtbahn"||a=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function O(e){const n={collapsed:!1,layers:c(i,"ÖPNV-Güteklassen")},t=new d(n);e.addControl(t,"top-right")}let l;function u(e){const n=e.getStyle().layers,t=n.find(s=>s.type=="fill");n.filter(s=>s.id.startsWith("oepnvGueteklassen")).forEach(s=>{e.getLayer(s.id)&&e.getLayoutProperty(s.id,"visibility")=="visible"&&(l=s.id)}),!(!l||!e.getLayer(l))&&e.moveLayer(l,t.id)}let i;window.addEventListener("DOMContentLoaded",()=>{const e=g();p(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",y),e.addLayer(f),[{id:"sourceOepnvGueteklassenStuttgart",source:h},{id:"sourceOepnvGueteklassenKarlsruhe",source:G},{id:"sourceOepnvGueteklassenFreiburg",source:C},{id:"sourceOepnvGueteklassenTuebingen",source:w}].forEach(t=>b(e,t)),i=_,i.forEach(t=>k(e,t)),O(e),u(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,u(e))}),v(e,i,m)})});
