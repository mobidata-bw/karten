import{a as P,l as S,j as t,c as B,d as L}from"../../addControlLayers-BWBFQWHW.js";import{c as j}from"../../main-DU-47mmZ.js";import{p as _}from"../../popupImages-BbCFPXc0.js";import{p as C}from"../../popups-DOvjiyHa.js";import"../../popupContent-D0zpQ939.js";import"../../timeStamps-CJ2Ek9ou.js";import"../../popupContent-DpPh6b5Q.js";import"../../popupContent-BFfBjzFr.js";import"../../popupContent-XB6Eld66.js";import"../../layers-L5nyhIMW.js";import"../../popupContent-BPb1lGIe.js";import"../../popupContent-8FpygOzg.js";import"../../popupContent-DLCAX-0Q.js";import"../../popupContent-CREK6xEU.js";import"../../popupContent-BDpYLnXd.js";import"../../wms-r7-HZ4PM.js";window.PUBLIC_PATH="/karten_dev/";const v={type:"geojson",data:"/karten_geojsons/boundaries/shapesKonstanz.geojson"},w={id:"fillShapeKonstanz",type:"fill",source:"shapeKonstanz",paint:{"fill-color":"black","fill-opacity":.1}},x={id:"lineShapeKonstanz",type:"line",source:"shapeKonstanz",paint:{"line-color":"black","line-width":2}},G={type:"geojson",data:"/karten_geojsons/maps/map-as-a-service/gebuendelte_daten_konstanz/konstanz_pls.geojson"},I={type:"geojson",data:"/karten_geojsons/maps/map-as-a-service/gebuendelte_daten_konstanz/konstanz_behindertenparken.geojson"},k=[{id:"konstanzPls",label:"Parkleitsystem",subGroup:"Parken",source:"sourceKonstanzPls",color:"#d85959"}],g=[{id:"konstanzBehindertenparken",label:"Behindertenparken",subGroup:"Parken",source:"sourceKonstanzBehindertenparken",color:"#325ff2"}];function M(e){const{name:a,type:s,operator:o,address:d,fee_descr:l,opening_h:i,max_stay:c,has_light:p,max_hei:u,park_ride:h,opening_s:$,descript:m,max_cap:n,capacity_d:b,capacity_w:y,capacity_c:z,capacity_s:f,public_url:K}=e;return`
        <table>
            <tr>
                ${_("Stadt Konstanz")}
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
            ${d==" "?"":`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${d}</td>
            <tr>
            `}
            ${l==" "?"":`
            <tr>
                <td class="att">Gebühren</td>
                <td class="attContent">${l}</td>
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
            ${m==" "?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${m}</td>
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
            ${b==0?"":`
            <tr>
                <td class="att">für Behinderte</td>
                <td class="attContent">${b}</td>
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
                <td class="attContentLink"><a href="${K}" target="_blank">&#10149 zum Betreiber</a></td>
            </tr>
        </table>
    `}function E(e){const{Name:a,Informatio:s}=e;return`
        <table>
            <tr>
                ${_("Stadt Konstanz")}
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
    `}function T(e){e.removeControl(j);const a={collapsed:!1,layers:P(r,"Stadt Konstanz")},s=new S(a);e.addControl(s,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{t.on("load",()=>{t.setCenter([9.15681,47.701872]),t.setMaxBounds([[9.034195,47.606163],[9.28688,47.780866]]),t.once("load",()=>{t.resize(),t.jumpTo({center:[9.15681,47.701872]}),t.getContainer().style.visibility="visible"}),t.addSource("shapeKonstanz",v),t.addLayer(w),t.addLayer(x),t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceKonstanzPls",source:G},{id:"sourceKonstanzBehindertenparken",source:I}].forEach(a=>B(t,a)),r=[...g,...k],r.forEach(a=>L(t,a)),T(t),C(t,k,M),C(t,g,E)})});
