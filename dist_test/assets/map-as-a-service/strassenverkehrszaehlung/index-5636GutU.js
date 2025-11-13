import{s as K,a as T,l as m,i as N,b as M,c as V,d as w}from"../../addControlLayers-GormjcAr.js";import{s as $}from"../../setupLayerInteractions-DQRYyinl.js";window.PUBLIC_PATH="/karten_test/";const z=K({format:"geojson",directory:"maps/map-as-a-service/strassenverkehrszaehlung_ravensburg",file:"strassenverkehrszaehlung_ravensburg"}),d={source:"sourceCountRavensburg",group:"Straßenverkehrszählung"},e=["case",["!=",["get","KFZ_1"],null],["+",["get","KFZ_1"],["get","RAD_1"],["get","FUSSGAENGER_1"],["get","SV_1"]],["!=",["get","KFZ_2"],null],["+",["get","KFZ_2"],["get","RAD_2"],["get","FUSSGAENGER_2"],["get","SV_2"]],["!=",["get","KFZ_3"],null],["+",["get","KFZ_3"],["get","RAD_3"],["get","FUSSGAENGER_3"],["get","SV_3"]],["!=",["get","KFZ_4"],null],["+",["get","KFZ_4"],["get","RAD_4"],["get","FUSSGAENGER_4"],["get","SV_4"]],0],k=[{id:"countRavensburg1",label:"bis 1 Tsd.",filter:["<=",e,1e3],color:"#ffe600",...d},{id:"countRavensburg2",label:"1 - 5 Tsd.",filter:["all",[">",e,1e3],["<=",e,5e3]],color:"#f6b500",...d},{id:"countRavensburg3",label:"5 Tsd. - 15 Tsd.",filter:["all",[">",e,5e3],["<=",e,15e3]],color:"#e78300",...d},{id:"countRavensburg4",label:"15 Tsd. - 30 Tsd.",filter:["all",[">",e,15e3],["<=",e,3e4]],color:"#d25000",...d},{id:"countRavensburg5",label:"über 30 Tsd.",filter:[">",e,3e4],color:"#b70101",...d}];function P(t){const{ID:i,NAME:a,KFZ_1:S,RAD_1:f,FUSSGAENGER_1:R,SV_1:b,DATUM_1:A,KFZ_2:F,RAD_2:p,FUSSGAENGER_2:h,SV_2:E,DATUM_2:_,KFZ_3:v,RAD_3:y,FUSSGAENGER_3:C,SV_3:G,DATUM_3:u,KFZ_4:D,RAD_4:L,FUSSGAENGER_4:Z,SV_4:U,DATUM_4:c}=t;let s,r,n,o,l;return!_&&!u&&!c?(s=S,r=f,n=R,o=b,l=A):!u&&!c?(s=F,r=p,n=h,o=E,l=_):c?(s=D,r=L,n=Z,o=U,l=c):(s=v,r=y,n=C,o=G,l=u),`
        <table>         
            <tr>
                <td class="att">ID</td>
                <td class="attContent">${i}</td>
            </tr><tr>             
                <td class="att">Name</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Kraftfahrzeug</td>
                <td class="attContent">${s.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fahrrad</td>
                <td class="attContent">${r.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Fußgänger</td>
                <td class="attContent">${n.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Schwerlastverkehr</td>
                <td class="attContent">${o.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Letzte Zählung</td>
                <td class="attContent">${l}</td>
            </tr>             
        </table>
    `}function I(t){const i={collapsed:!1,layers:T(g,"Legende")},a=new m(i);t.addControl(a,"top-right")}let g;window.addEventListener("DOMContentLoaded",()=>{const t=N({configZoom:window.innerWidth<577?10:12,configCenter:[9.609503,47.780424],configMinZoom:10,configShape:"shapeRavensburg"});M(t),t.on("load",()=>{t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceCountRavensburg",source:z}].forEach(a=>V(t,a)),g=k,g.forEach(a=>w(t,a)),I(t),$(t,g,P)})});
