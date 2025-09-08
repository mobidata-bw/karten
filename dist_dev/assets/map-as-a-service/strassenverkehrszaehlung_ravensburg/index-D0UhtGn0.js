import{a as U,l as k,i as K,b as T,c as N,d as y}from"../../addControlLayers-DdHOxOpH.js";import{p as z}from"../../popupImages-CL540eOO.js";import{p as M}from"../../popups-Cbog4_SW.js";window.PUBLIC_PATH="/karten_dev/";const V={type:"geojson",data:"/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg/strassenverkehrszaehlung_ravensburg.geojson"},g={source:"sourceCountRavensburg",group:"Straßenverkehrszählung Ravensburg"},a=["case",["!=",["get","KFZ_1"],null],["+",["get","KFZ_1"],["get","RAD_1"],["get","FUSSGAENGER_1"],["get","SV_1"]],["!=",["get","KFZ_2"],null],["+",["get","KFZ_2"],["get","RAD_2"],["get","FUSSGAENGER_2"],["get","SV_2"]],["!=",["get","KFZ_3"],null],["+",["get","KFZ_3"],["get","RAD_3"],["get","FUSSGAENGER_3"],["get","SV_3"]],["!=",["get","KFZ_4"],null],["+",["get","KFZ_4"],["get","RAD_4"],["get","FUSSGAENGER_4"],["get","SV_4"]],0],w=[{id:"countRavensburg1",label:"bis 1 Tsd.",filter:["<=",a,1e3],color:"#ffe600",...g},{id:"countRavensburg2",label:"1 - 5 Tsd.",filter:["all",[">",a,1e3],["<=",a,5e3]],color:"#f6b500",...g},{id:"countRavensburg3",label:"5 Tsd. - 15 Tsd.",filter:["all",[">",a,5e3],["<=",a,15e3]],color:"#e78300",...g},{id:"countRavensburg4",label:"15 Tsd. - 30 Tsd.",filter:["all",[">",a,15e3],["<=",a,3e4]],color:"#d25000",...g},{id:"countRavensburg5",label:"über 30 Tsd.",filter:[">",a,3e4],color:"#b70101",...g}];function j(t){const{ID:r,NAME:e,KFZ_1:S,RAD_1:b,FUSSGAENGER_1:p,SV_1:f,DATUM_1:R,KFZ_2:v,RAD_2:F,FUSSGAENGER_2:A,SV_2:h,DATUM_2:_,KFZ_3:C,RAD_3:E,FUSSGAENGER_3:G,SV_3:m,DATUM_3:u,KFZ_4:D,RAD_4:$,FUSSGAENGER_4:Z,SV_4:L,DATUM_4:c}=t;let n,o,l,d,s;return!_&&!u&&!c?(n=S,o=b,l=p,d=f,s=R):!u&&!c?(n=v,o=F,l=A,d=h,s=_):c?(n=D,o=$,l=Z,d=L,s=c):(n=C,o=E,l=G,d=m,s=u),`
        <table>
             <tr>
                ${z("Stadt Ravensburg")}
            </tr>
        </table><br><table>       
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">ID</td>
                <td class="attContent">${r}</td>
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
                ${`<td class="attContentLink"><a href="/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg/Files/${r}/${s}/${e}.pdf" target="_blank">&#10149 PDF</a></td>`}  
                ${`<td class="attContentLink"><a href="/karten_geojsons/maps/map-as-a-service/strassenverkehrszaehlung_ravensburg/Files/${r}/${s}/${e}.xlsx" target="_blank">&#10149 XLSX</a></td>`}                  
            </tr>
        </table>
    `}function I(t){const r={collapsed:!1,layers:U(i,"Legende")},e=new k(r);t.addControl(e,"top-right")}let i;window.addEventListener("DOMContentLoaded",()=>{const t=K({configZoom:window.innerWidth<577?10:12,configCenter:[9.609503,47.780424],configMinZoom:10,configShape:"shapesRavensburg.geojson"});T(t),t.on("load",()=>{[{id:"sourceCountRavensburg",source:V}].forEach(e=>N(t,e)),i=w,i.forEach(e=>y(t,e)),I(t),M(t,i,j)})});
