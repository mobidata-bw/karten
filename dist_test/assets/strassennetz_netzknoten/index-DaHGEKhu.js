import{s as c,a as i,l as z,i as u,b as k,c as p,d as f}from"../addControlLayers-DkKEqnNS.js";import{p as r}from"../popups-BDlfsaYT.js";window.PUBLIC_PATH="/karten_test/";const b=c("maps/strassennetz_netzknoten","BLK_Strassennetz_250130"),y=c("maps/strassennetz_netzknoten","BLK_Netzknoten_250130"),o={source:"sourceStrassennetz",type:"line",group:"Straßennetz",lineWidth:["interpolate",["linear"],["zoom"],6,2,12,3]},l=[{id:"strassennetz_K",label:"Kreisstraße",color:"#a88f00",filter:["==",["get","StrassenArt"],"K"],...o},{id:"strassennetz_L",label:"Landstraße",color:"#00ff00",filter:["==",["get","StrassenArt"],"L"],...o},{id:"strassennetz_B",label:"Bundesstraße",color:"#0089cd",filter:["==",["get","StrassenArt"],"B"],...o}],d=[{id:"netzknoten",label:"Netzknoten",group:"Netzknoten",source:"sourceNetzknoten",color:"#e12942",visibility:"none"}];function L(t){const{StrassenName:n,Anfangsnetzknoten:e,Endnetzknoten:s}=t;return`
        <table>
            <tr>
                <th class="title">${n}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Anfangsnetzknoten</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Endnetzknoten</td>
                <td class="attContent">${s}</td>
            </tr>
        </table>
    `}function N(t){const{NK_Name:n,Netzknoten:e,NKArt:s}=t;return`
        <table>
            <tr>
                <th class="title">${n}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Netzknoten-ID</td>
                <td class="attContent">${e}</td>
            </tr><tr>
                <td class="att">Netzknotenart</td>
                <td class="attContent">${s}</td>
            </tr>
        </table>
        `}function _(t){const n={collapsed:!1,layers:i(a,"Legende")},e=new z(n);t.moveLayer("netzknoten"),t.on("styledata",()=>{window.__basemapSwitching&&setTimeout(()=>{t.getLayer("netzknoten")&&t.moveLayer("netzknoten")},0)}),t.addControl(e,"top-right")}let a;window.addEventListener("DOMContentLoaded",()=>{const t=u();k(t),t.on("load",()=>{[{id:"sourceNetzknoten",source:y},{id:"sourceStrassennetz",source:b}].forEach(e=>p(t,e)),a=[...d,...l],a.forEach(e=>f(t,e)),_(t),r(t,l,L),r(t,d,N)})});
