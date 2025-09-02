import{a as u,l as i,i as g,b,c as p,d as f}from"../../addControlLayers-DdHOxOpH.js";import{p as M}from"../../popupImages-CL540eOO.js";import{p as S}from"../../popups-Cbog4_SW.js";window.PUBLIC_PATH="/karten_dev/";const v={type:"geojson",data:"data/strassenverkehrszaehlung_ravensburg.geojson"},a={source:"sourceCountRavensburg",group:"Straßenverkehrszählung Ravensburg"},C=[{id:"countRavensburg1",label:"bis 1 Tsd.",filter:["<=",["get","SUMME"],1e3],color:"#ffe600",...a},{id:"countRavensburg2",label:"1 - 5 Tsd.",filter:["all",[">",["get","SUMME"],1e3],["<=",["get","SUMME"],5e3]],color:"#f6b500",...a},{id:"countRavensburg3",label:"5 Tsd. - 15 Tsd.",filter:["all",[">",["get","SUMME"],5e3],["<=",["get","SUMME"],15e3]],color:"#e78300",...a},{id:"countRavensburg4",label:"15 Tsd. - 30 Tsd.",filter:["all",[">",["get","SUMME"],15e3],["<=",["get","SUMME"],3e4]],color:"#d25000",...a},{id:"countRavensburg5",label:"über 30 Tsd.",filter:[">",["get","SUMME"],3e4],color:"#b70101",...a}];function h(t){const{IDNummer:o,KFZ:e,RAD:s,FÜßGÄNGER:n,SV:l,DATUM:d,SUMME:c}=t;return`
        <table>
             <tr>
                ${M("Stadt Ravensburg")}
                <th class="title">${o}</th>
            </tr>
        </table><br><table>       
            <tr>
                <td class="att">Kraftfahrzeug</td>
                <td class="attContent">${e.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fahrrad</td>
                <td class="attContent">${s.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fußgänger</td>
                <td class="attContent">${n.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Schwerlastverkehr</td>
                <td class="attContent">${l.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Summe</td>
                <td class="attContent">${c.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Letzte Zählung</td>
                <td class="attContent">${d}</td>
            </tr>       
        </table> 
    `}function m(t){const o={collapsed:!1,layers:u(r,"Legende")},e=new i(o);e._exclusiveAllGroups=!0,t.addControl(e,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{const t=g({configZoom:window.innerWidth<577?10:12,configCenter:[9.609503,47.780424],configMinZoom:10,configShape:"shapesRavensburg.geojson"});b(t),t.on("load",()=>{[{id:"sourceCountRavensburg",source:v}].forEach(e=>p(t,e)),r=C,r.forEach(e=>f(t,e)),m(t),S(t,r,h)})});
