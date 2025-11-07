import{s as i,a as d,l as c,i as u,b as f,c as y,d as g}from"../../addControlLayers-DMQ61Nfk.js";import{s as p}from"../../setupLayerInteractions-KBxddlYR.js";window.PUBLIC_PATH="/karten_test/";const _=i({format:"mbtiles",file:"oepnv_gueteklassen"}),t={group:"ÖPNV-Güteklassen",type:"fill",source:"sourceOepnvGueteklassen",sourceLayer:"oepnvGueteklassen",fillOpacity:.9,fillOutlineColor:"transparent"},b=[{id:"oepnvGueteklassen_J",label:"J",filter:["==",["get","quality_gr"],"J"],color:"#4b44f3",fillSortKey:0,...t},{id:"oepnvGueteklassen_I",label:"I",filter:["==",["get","quality_gr"],"I"],color:"#5a84e5",fillSortKey:1,...t},{id:"oepnvGueteklassen_H",label:"H",filter:["==",["get","quality_gr"],"H"],color:"#5c9c7e",fillSortKey:2,...t},{id:"oepnvGueteklassen_G",label:"G",filter:["==",["get","quality_gr"],"G"],color:"#5fba4f",fillSortKey:3,...t},{id:"oepnvGueteklassen_F",label:"F",filter:["==",["get","quality_gr"],"F"],color:"#aedc5e",fillSortKey:4,...t},{id:"oepnvGueteklassen_E",label:"E",filter:["==",["get","quality_gr"],"E"],color:"#efef63",fillSortKey:5,...t},{id:"oepnvGueteklassen_D",label:"D",filter:["==",["get","quality_gr"],"D"],color:"#fed266",fillSortKey:6,...t},{id:"oepnvGueteklassen_C",label:"C",filter:["==",["get","quality_gr"],"C"],color:"#fdae61",fillSortKey:7,...t},{id:"oepnvGueteklassen_B",label:"B",filter:["==",["get","quality_gr"],"B"],color:"#e75739",fillSortKey:8,...t},{id:"oepnvGueteklassen_A",label:"A",filter:["==",["get","quality_gr"],"A"],color:"#ab1417",fillSortKey:9,...t}];function k(e){const{quality_gr:a,spatial_un:l,station_ca:s,public_tra:o}=e;return`
        <table>
            <tr>
                <td class="att">Güteklasse</td>
                ${a=="J"?'<td class="attContent">Gebiete innerhalb von 1.260m um eine Haltestelle schlechter der Kategorie VII</td>':`<td class="attContent">${a}</td>`}
            </tr><tr>
                <td class="att">Haltestellen-ID</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Haltestellenkategorie</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Maßgebliche Verkehrsmittelkategorie</td>
                ${o=="bus"||o=="rufbus"||o=="odv"?'<td class="attContent">Bus, Rufbus & On-Demand</td>':""}
                ${o=="re-rb"||o=="s-bahn"?'<td class="attContent">RE & RB, S-Bahn</td>':""}
                ${o=="tram"||o=="stadtbahn"||o=="regiobus"?'<td class="attContent">Tram & Stadtbahn, Regiobus</td>':""}
            </tr>
        </table>
    `}function G(e){const a={collapsed:!1,layers:d(r,"Legende")},l=new c(a);e.addControl(l,"top-right")}function n(e){const a=e.getStyle().layers,l=a.find(s=>s.type=="fill");a.filter(s=>s.id.startsWith("oepnvGueteklassen")).forEach(s=>{e.getLayer(s.id)&&e.moveLayer(s.id,l.id)})}let r;window.addEventListener("DOMContentLoaded",()=>{const e=u();f(e,{style:"railway"}),e.on("load",()=>{[{id:"sourceOepnvGueteklassen",source:_}].forEach(l=>y(e,l)),r=b,r.forEach(l=>g(e,l)),G(e),n(e),e.on("styledata",()=>{(window.__layerSwitching||window.__basemapSwitching)&&(window.__layerSwitching=!1,window.__basemapSwitching=!1,n(e))}),p(e,r,k)})});
