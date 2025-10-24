import{s as c,a as l,l as d,i as u,b as i,c as p,d as C}from"../addControlLayers-B8v3Vujt.js";import{p as k}from"../popups-CT4-ONlZ.js";window.PUBLIC_PATH="/karten/";const g=c({format:"geojson",directory:"maps/lang-lkw-strecken",file:"lang-lkw-strecken"}),y=[{id:"lang-lkw-strecken",label:"Strecken",group:"Lang-LKW-Strecken",type:"line",source:"sourceTruckRoutes",color:"#C4001F"}];function f(t){const{ID:s,TYP:e,STR_KENNUNG:o,BESCHREIBUNG:r,FAHRTRICHTUNG:n}=t;return`
        <table>          
            <tr>
                <td class="att">ID</td>                
                <td class="attContent">${s}</td>
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
                <td class="attContent">${n}</td>
            </tr><tr>  
                <td class="att">Beschreibung</td>                
                <td class="attContent">${r}</td>
            </tr>
        </table>
    `}function T(t){const s={collapsed:!1,layers:l(a,"Legende")},e=new d(s);t.addControl(e,"top-right")}let a;window.addEventListener("DOMContentLoaded",()=>{const t=u();i(t),t.on("load",()=>{[{id:"sourceTruckRoutes",source:g}].forEach(e=>p(t,e)),a=y,a.forEach(e=>C(t,e)),T(t),k(t,a,f)})});
