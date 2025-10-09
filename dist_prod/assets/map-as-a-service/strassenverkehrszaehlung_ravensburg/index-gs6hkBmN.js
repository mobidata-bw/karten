import{s as K,a as T,l as k,i as N,b as y,c as M,d as V}from"../../addControlLayers-BMAPoybg.js";import{p as w}from"../../popupImages-DmUP8mKv.js";import{p as z}from"../../popups-RroL-G3M.js";window.PUBLIC_PATH="/karten/";const P=K("maps/map-as-a-service/strassenverkehrszaehlung_ravensburg","strassenverkehrszaehlung_ravensburg"),c={source:"sourceCountRavensburg",group:"Straßenverkehrszählung Ravensburg"},a=["case",["!=",["get","KFZ_1"],null],["+",["get","KFZ_1"],["get","RAD_1"],["get","FUSSGAENGER_1"],["get","SV_1"]],["!=",["get","KFZ_2"],null],["+",["get","KFZ_2"],["get","RAD_2"],["get","FUSSGAENGER_2"],["get","SV_2"]],["!=",["get","KFZ_3"],null],["+",["get","KFZ_3"],["get","RAD_3"],["get","FUSSGAENGER_3"],["get","SV_3"]],["!=",["get","KFZ_4"],null],["+",["get","KFZ_4"],["get","RAD_4"],["get","FUSSGAENGER_4"],["get","SV_4"]],0],I=[{id:"countRavensburg1",label:"bis 1 Tsd.",filter:["<=",a,1e3],color:"#ffe600",...c},{id:"countRavensburg2",label:"1 - 5 Tsd.",filter:["all",[">",a,1e3],["<=",a,5e3]],color:"#f6b500",...c},{id:"countRavensburg3",label:"5 Tsd. - 15 Tsd.",filter:["all",[">",a,5e3],["<=",a,15e3]],color:"#e78300",...c},{id:"countRavensburg4",label:"15 Tsd. - 30 Tsd.",filter:["all",[">",a,15e3],["<=",a,3e4]],color:"#d25000",...c},{id:"countRavensburg5",label:"über 30 Tsd.",filter:[">",a,3e4],color:"#b70101",...c}];function x(t){const{ID:r,NAME:e,KFZ_1:b,RAD_1:f,FUSSGAENGER_1:R,SV_1:p,DATUM_1:A,KFZ_2:F,RAD_2:h,FUSSGAENGER_2:v,SV_2:C,DATUM_2:S,KFZ_3:E,RAD_3:G,FUSSGAENGER_3:$,SV_3:D,DATUM_3:u,KFZ_4:m,RAD_4:Z,FUSSGAENGER_4:L,SV_4:U,DATUM_4:g}=t;let n,o,l,d,s;!S&&!u&&!g?(n=b,o=f,l=R,d=p,s=A):!u&&!g?(n=F,o=h,l=v,d=C,s=S):g?(n=m,o=Z,l=L,d=U,s=g):(n=E,o=G,l=$,d=D,s=u);let _;return _="/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg",`
        <table>
             <tr>
                ${w("Stadt Ravensburg")}
            </tr>
        </table><br><table>       
            <tr>
                <td class="att">ID</td>
                <td class="attContent">${r}</td>
            </tr><tr>             
                <td class="att">Name</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Kraftfahrzeug</td>
                <td class="attContent">${n.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fahrrad</td>
                <td class="attContent">${o.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fußgänger</td>
                <td class="attContent">${l.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Schwerlastverkehr</td>
                <td class="attContent">${d.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Letzte Zählung</td>
                <td class="attContent">${s}</td>
            </tr>       
        </table><table>    
            <tr>
                ${`<td class="attContentLink"><a href="${_}/files/${r}/${s}/${e}.pdf" target="_blank">&#10149 PDF</a></td>`}  
                ${`<td class="attContentLink"><a href="${_}/files/${r}/${s}/${e}.xlsx" target="_blank">&#10149 XLSX</a></td>`}                  
            </tr>
        </table>
    `}function X(t){const r={collapsed:!1,layers:T(i,"Legende")},e=new k(r);t.addControl(e,"top-right")}let i;window.addEventListener("DOMContentLoaded",()=>{const t=N({configZoom:window.innerWidth<577?10:12,configCenter:[9.609503,47.780424],configMinZoom:10,configShape:"shapeRavensburg"});y(t),t.on("load",()=>{[{id:"sourceCountRavensburg",source:P}].forEach(e=>M(t,e)),i=I,i.forEach(e=>V(t,e)),X(t),z(t,i,x)})});
