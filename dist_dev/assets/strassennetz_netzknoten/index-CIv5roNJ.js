import{s as d,a as i,l as z,i as u,b as p,c as k,d as f}from"../addControlLayers-Dq1Bdo7J.js";import{p as r}from"../popups-Cnl_2xRt.js";window.PUBLIC_PATH="/karten_dev/";const b=d("pmtiles","maps/strassennetz_netzknoten","BLK_Strassennetz_250130"),m=d("pmtiles","maps/strassennetz_netzknoten","BLK_Netzknoten_250130"),a={source:"sourceStrassennetz",sourceLayer:"strassennetz",type:"line",group:"Straßennetz",lineWidth:["interpolate",["linear"],["zoom"],6,2,12,3]},l=[{id:"strassennetz_K",label:"Kreisstraße",color:"#a88f00",filter:["==",["get","StrassenArt"],"K"],...a},{id:"strassennetz_L",label:"Landstraße",color:"#00ff00",filter:["==",["get","StrassenArt"],"L"],...a},{id:"strassennetz_B",label:"Bundesstraße",color:"#0089cd",filter:["==",["get","StrassenArt"],"B"],...a}],c=[{id:"netzknoten",label:"Netzknoten",group:"Netzknoten",source:"sourceNetzknoten",sourceLayer:"netzknoten",color:"#e12942",visibility:"none"}];function y(t){const{StrassenName:n,Anfangsnetzknoten:e,Endnetzknoten:s}=t;return`
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
    `}function L(t){const{NK_Name:n,Netzknoten:e,NKArt:s}=t;return`
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
        `}function N(t){const n={collapsed:!1,layers:i(o,"Legende")},e=new z(n);t.addControl(e,"top-right")}let o;window.addEventListener("DOMContentLoaded",()=>{const t=u();p(t),t.on("load",()=>{[{id:"sourceNetzknoten",source:m},{id:"sourceStrassennetz",source:b}].forEach(e=>k(t,e)),o=[...c,...l],o.forEach(e=>f(t,e)),N(t),t.moveLayer("netzknoten"),t.on("styledata",()=>{window.__basemapSwitching&&setTimeout(()=>{t.getLayer("netzknoten")&&t.moveLayer("netzknoten")},0)}),r(t,l,y),r(t,c,L)})});
