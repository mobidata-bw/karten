import{a as l,l as u,i,b as g,c,d}from"../../addControlLayers-B6jD97xZ.js";import{p}from"../../popups-DduF0MME.js";window.PUBLIC_PATH="/karten_test/";const k={type:"geojson",data:"/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/regierungsbezirke.geojson"},b={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1}},v={type:"geojson",data:{type:"FeatureCollection",features:[]}},f={type:"geojson",data:{type:"FeatureCollection",features:[]}},G={type:"geojson",data:{type:"FeatureCollection",features:[]}},h={type:"geojson",data:{type:"FeatureCollection",features:[]}},a={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:1,fillOutlineColor:"transparent"},C=[{id:"oepnvGueteklassenTuebingen",label:"Tübingen",source:"sourceOepnvGueteklassenTuebingen",visibility:"none",legendColor:"none",...a,url:"/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_tuebingen.geojson"},{id:"oepnvGueteklassenFreiburg",label:"Freiburg",source:"sourceOepnvGueteklassenFreiburg",visibility:"none",legendColor:"none",...a,url:"/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_freiburg.geojson"},{id:"oepnvGueteklassenKarlsruhe",label:"Karlsruhe",source:"sourceOepnvGueteklassenKarlsruhe",visibility:"none",legendColor:"none",...a,url:"/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_karlsruhe.geojson"},{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",...a,url:"/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/oepnv_gueteklassen_stuttgart.geojson"}];function y(e){const{qg:n,su:s,sc:r,pt:t}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${n=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${n}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${t=="bus"||t=="rufbus"||t=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${t=="re-rb"||t=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${t=="tram"||t=="stadtbahn"||t=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function _(e){const n={collapsed:!1,layers:l(o,"ÖPNV-Güteklassen")},s=new u(n);e.addControl(s,"top-right")}let o;window.addEventListener("DOMContentLoaded",()=>{const e=i();g(e),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",k),e.addLayer(b),[{id:"sourceOepnvGueteklassenStuttgart",source:v},{id:"sourceOepnvGueteklassenKarlsruhe",source:f},{id:"sourceOepnvGueteklassenFreiburg",source:G},{id:"sourceOepnvGueteklassenTuebingen",source:h}].forEach(s=>c(e,s)),o=C,o.forEach(s=>d(e,s)),_(e),p(e,o,y)})});
