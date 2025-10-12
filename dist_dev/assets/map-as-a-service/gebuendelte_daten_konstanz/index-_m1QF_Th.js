import{s as S,a as B,l as L,k as t,c as v,d as w}from"../../addControlLayers-DpI8AOJ_.js";import{c as x}from"../../main-Dnhr5f6k.js";import{s as _}from"../../setFilePath-CKvzmloB.js";import{p as g}from"../../popupImages-BqgrDCos.js";import{p as C}from"../../popups-D19OfOkG.js";import"../../popupContent-CzRr6_RR.js";import"../../timeStamps-CJ2Ek9ou.js";import"../../popupContent-DGJPa1RH.js";import"../../popupContent-Crr_oNOi.js";import"../../popupContent-XB6Eld66.js";import"../../layers-HeZuYLBu.js";import"../../popupContent-BPb1lGIe.js";import"../../popupContent-DEWlt7k6.js";import"../../popupContent-DLz8lCtE.js";import"../../popupContent-Dfa2J7ZT.js";import"../../popupContent-B7nfX9Kc.js";import"../../wms-CByQMa8Y.js";window.PUBLIC_PATH="/karten_dev/";const G=S("shapes","shapeKonstanz"),I={id:"fillShapeKonstanz",type:"fill",source:"shapeKonstanz",paint:{"fill-color":"black","fill-opacity":.1},layout:{visibility:"visible"}},M={id:"lineShapeKonstanz",type:"line",source:"shapeKonstanz",paint:{"line-color":"black","line-width":2},layout:{visibility:"visible"}},j=_("geojson","maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_pls"),E=_("geojson","maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_behindertenparken"),k=[{id:"konstanzPls",label:"Parkleitsystem",subGroup:"Parken",source:"sourceKonstanzPls",color:"#d85959"}],K=[{id:"konstanzBehindertenparken",label:"Behindertenparken",subGroup:"Parken",source:"sourceKonstanzBehindertenparken",color:"#325ff2"}];function T(e){const{name:a,type:s,operator:o,address:l,fee_descr:d,opening_h:i,max_stay:c,has_light:p,max_hei:u,park_ride:h,opening_s:$,descript:b,max_cap:n,capacity_d:m,capacity_w:y,capacity_c:z,capacity_s:f,public_url:P}=e;return`
        <table>
            <tr>
                ${g("Stadt Konstanz")}
                <th class="title">${a}</th>
            </tr>
        </table><br><table>
            ${s==" "?"":`
            <tr>
                <td class="att">Typ</td>
                <td class="attContent">${s}</td>
            <tr>
            `}
            ${o==" "?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${o}</td>
            <tr>
            `}
            ${l==" "?"":`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${l}</td>
            <tr>
            `}
            ${d==" "?"":`
            <tr>
                <td class="att">Gebühren</td>
                <td class="attContent">${d}</td>
            <tr>
            `}
            ${i==" "?"":`
            <tr>
                <td class="att">Öffnungszeiten</td>
                <td class="attContent">${i}</td>
            <tr>
            `}
            ${c==" "?"":`
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${c}</td>
            <tr>
            `}
            ${p==" "?"":`
            <tr>
                <td class="att">Beleuchtung</td>
                <td class="attContent">${p}</td>
            <tr>
            `}
            ${u==" "?"":`
            <tr>
                <td class="att">Max. Höhe</td>
                <td class="attContent">${u}</td>
            <tr>
            `}
            ${h==" "?"":`
            <tr>
                <td class="att">P+R</td>
                <td class="attContent">${h}</td>
            <tr>
            `}          
            ${$==" "?"":`
            <tr>
                <td class="att">Geöffnet</td>
                <td class="attContent">${$}</td>
            <tr>
            `}
            ${b==" "?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${b}</td>
            <tr>
            `}              
        </table><br><table>            <tr>
                <td class="title title2">Parkplätze</td>
            </tr>
        </table><table>
            ${n==0?"":`
            <tr>
                <td class="att">Stellplätze</td>
                <td class="attContent">${n}</td>
            <tr>
            `}
            ${m==0?"":`
            <tr>
                <td class="att">für Behinderte</td>
                <td class="attContent">${m}</td>
            <tr>
            `}    
            ${y==0?"":`
            <tr>
                <td class="att">für Frauen</td>
                <td class="attContent">${y}</td>
            <tr>
            `}    
            ${z==0?"":`
            <tr>
                <td class="att">mit Lademöglichkeit</td>
                <td class="attContent">${z}</td>
            <tr>
            `}    
            ${f==0?"":`
            <tr>
                <td class="att">für Carsharing</td>
                <td class="attContent">${f}</td>
            <tr>
            `}    
            ${n==0?"":`
            <tr>
                <td class="att">Stellplätze</td>
                <td class="attContent">${n}</td>
            <tr>
            `}   
        </table><table>
            <tr>
                <td class="attContentLink"><a href="${P}" target="_blank">&#10149 zum Betreiber</a></td>
            </tr>
        </table>
    `}function A(e){const{Name:a,Informatio:s}=e;return`
        <table>
            <tr>
                ${g("Stadt Konstanz")}
                <th class="title">${a}</th>
            </tr>
        </table><br><table>
            ${s==" "?"":`
            <tr>
                <td class="att">Information</td>
                <td class="attContent">${s}</td>
            </tr>
            `} 
        </table>
    `}function F(e){e.removeControl(x);const a={collapsed:!1,layers:B(r,"Stadt Konstanz")},s=new L(a);e.addControl(s,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{t.on("load",()=>{t.setCenter([9.15681,47.701872]),t.setMaxBounds([[9.034195,47.606163],[9.28688,47.780866]]),t.once("load",()=>{t.resize(),t.jumpTo({center:[9.15681,47.701872]}),t.getContainer().style.visibility="visible"}),t.addSource("shapeKonstanz",G),t.addLayer(I),t.addLayer(M),t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceKonstanzPls",source:j},{id:"sourceKonstanzBehindertenparken",source:E}].forEach(a=>v(t,a)),r=[...K,...k],r.forEach(a=>w(t,a)),F(t),C(t,k,T),C(t,K,A)})});
