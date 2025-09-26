import{s as a,a as u,l as i,i as c,b as d,c as g,d as p}from"../../addControlLayers-CknNjr4T.js";import{p as b}from"../../popups-BtelJi0j.js";window.PUBLIC_PATH="/karten/";const k=a("maps/auswertungen/oepnv_gueteklassen","regierungsbezirke"),v={id:"lineShapeRegierungsbezirke",type:"line",source:"shapeRegierungsbezirke",paint:{"line-color":"black","line-width":1}},G=a("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_stuttgart"),h={type:"geojson",data:{type:"FeatureCollection",features:[]}},f={type:"geojson",data:{type:"FeatureCollection",features:[]}},C={type:"geojson",data:{type:"FeatureCollection",features:[]}},r={group:"ÖPNV-Güteklassen",subGroup:"Regierungsbezirke",exclusiveWithinGroup:!0,type:"fill",fillSortKey:["index-of",["get","qg"],["literal",["J","I","H","G","F","E","D","C","B","A"]]],color:["match",["get","qg"],"A","#ab1417","B","#e75739","C","#fdae61","D","#fed266","E","#efef63","F","#aedc5e","G","#5fba4f","H","#5c9c7e","I","#5a84e5","J","#4b44f3","#cacaca"],fillOpacity:1,fillOutlineColor:"transparent"},y=[{id:"oepnvGueteklassenTuebingen",label:"Tübingen",source:"sourceOepnvGueteklassenTuebingen",visibility:"none",legendColor:"none",...r,url:a("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_tuebingen").data},{id:"oepnvGueteklassenFreiburg",label:"Freiburg",source:"sourceOepnvGueteklassenFreiburg",visibility:"none",legendColor:"none",...r,url:a("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_freiburg").data},{id:"oepnvGueteklassenKarlsruhe",label:"Karlsruhe",source:"sourceOepnvGueteklassenKarlsruhe",visibility:"none",legendColor:"none",...r,url:a("maps/auswertungen/oepnv_gueteklassen","oepnv_gueteklassen_karlsruhe").data},{id:"oepnvGueteklassenStuttgart",label:"Stuttgart",source:"sourceOepnvGueteklassenStuttgart",legendColor:"none",...r}];function m(e){const{qg:n,su:s,sc:l,pt:t}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${n=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${n}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${t=="bus"||t=="rufbus"||t=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${t=="re-rb"||t=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${t=="tram"||t=="stadtbahn"||t=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function O(e){const n={collapsed:!1,layers:u(o,"ÖPNV-Güteklassen")},s=new i(n);e.addControl(s,"top-right")}let o;window.addEventListener("DOMContentLoaded",()=>{const e=c();d(e,{style:"railway"}),e.on("load",()=>{e.addSource("shapeRegierungsbezirke",k),e.addLayer(v),[{id:"sourceOepnvGueteklassenStuttgart",source:G},{id:"sourceOepnvGueteklassenKarlsruhe",source:h},{id:"sourceOepnvGueteklassenFreiburg",source:f},{id:"sourceOepnvGueteklassenTuebingen",source:C}].forEach(s=>g(e,s)),o=y,o.forEach(s=>p(e,s)),O(e),b(e,o,m)})});
