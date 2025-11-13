import{s as i,a as c,l as u,i as C,b as p,c as m,d as y}from"../addControlLayers-CK2s8XcE.js";import{s as L}from"../setupLayerInteractions-Dp18YMFs.js";window.PUBLIC_PATH="/karten/";const $=i({format:"mbtiles",file:"inrix",promoteId:"XDSegID"}),f=[{id:"inrix",group:"INRIX",type:"line",label:"Straßenabschnitte",source:"sourceInrix",sourceLayer:"inrix",color:"red",lineWidth:["interpolate",["linear"],["zoom"],6,1,12,4]}];function I(t){const{XDSegID:e,FRC:a,County:r,PostalCode:n,Miles:o,Lanes:d,RoadList:l}=t;return`
        <table>            
           ${e==""?"":`
            <tr>
                <td class="att">Abschnitt</td>
                <td class="attContent">${e}</td>               
            </tr>
            `}           
            ${o==""?"":`
            <tr>
                <td class="att">Länge</td>
                <td class="attContent">${Math.round(o*1609.344)} m</td>               
            </tr>
            `}        
            ${d==""?"":`
            <tr>
                <td class="att">Fahrstreifen</td>
                <td class="attContent">${d}</td>               
            </tr>
            `}           
            ${a==""?"":`
            <tr>
                <td class="att">Straßenklasse</td>
                <td class="attContent">${a}</td>               
            </tr>
            `}
            ${l==""?"":`
            <tr>
                <td class="att">Straßenname</td>
                <td class="attContent">${l}</td>               
            </tr>
            `}
            ${r==""&&n==""?"":`
            <tr>
                <td class="att">Ort</td>
                <td class="attContent">${n+" "+r}</td>               
            </tr>
            `}       
              
        </table>
    `}function h(t){const e={collapsed:!1,layers:c(s,"Legende")},a=new u(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=C();p(t),t.on("load",()=>{const e=[{id:"sourceInrix",source:$}];e.forEach(a=>m(t,a)),s=f,s.forEach(a=>y(t,a)),h(t),L(t,s,I,e)})});
