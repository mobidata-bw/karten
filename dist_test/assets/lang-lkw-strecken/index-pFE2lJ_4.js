import{s as l,a as c,l as d,i,b as u,c as p,d as C}from"../addControlLayers-dPVqcd6v.js";import{s as k}from"../setupLayerInteractions-CCnmftay.js";window.PUBLIC_PATH="/karten_test/";const g=l({format:"geojson",directory:"maps/lang-lkw-strecken",file:"lang-lkw-strecken",promoteId:"ID"}),y=[{id:"lang-lkw-strecken",label:"Strecken",group:"Lang-LKW-Strecken",type:"line",source:"sourceTruckRoutes",color:"#C4001F",lineWidth:["interpolate",["linear"],["zoom"],6,1,12,4]}];function f(t){const{ID:a,TYP:e,STR_KENNUNG:o,BESCHREIBUNG:n,FAHRTRICHTUNG:r}=t;return`
        <table>          
            <tr>
                <td class="att">ID</td>                
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Typ</td>                
                <td class="attContent">${e}</td>
            </tr>
            ${o==null?"":`
            <tr>
                <td class="att">Strecken-Kennung</td>               
                <td class="attContent">${o}</td>
            </tr>
            `}
            <tr>
                <td class="att">Fahrtrichtung</td>                
                <td class="attContent">${r}</td>
            </tr><tr>  
                <td class="att">Beschreibung</td>                
                <td class="attContent">${n}</td>
            </tr>
        </table>
    `}function m(t){const a={collapsed:!1,layers:c(s,"Legende")},e=new d(a);t.addControl(e,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=i();u(t),t.on("load",()=>{const a=[{id:"sourceTruckRoutes",source:g}];a.forEach(e=>p(t,e)),s=y,s.forEach(e=>C(t,e)),m(t),k(t,s,f,a)})});
