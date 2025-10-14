import{s as o,a as S,l as B,k as t,c as L,d as v}from"../../addControlLayers-DfXe2HhN.js";import{c as w}from"../../main-Bq7zD0Eh.js";import{p as g}from"../../popupImages-q--p1uQq.js";import{p as k}from"../../popups-DLguoyzS.js";import"../../popupContent-CLk5S_d7.js";import"../../timeStamps-CJ2Ek9ou.js";import"../../popupContent-BbZ6tXz4.js";import"../../popupContent-C7-KT_UV.js";import"../../popupContent-DtDVU1fu.js";import"../../popupContent-XB6Eld66.js";import"../../layers-HeZuYLBu.js";import"../../popupContent-BPb1lGIe.js";import"../../popupContent-BBd_D8qD.js";import"../../popupContent-hy4VwGrj.js";import"../../popupContent-B987RlJI.js";import"../../popupContent-Bomvfiv0.js";import"../../popupContent-CHVIgaF6.js";import"../../wms-C7o0zNRO.js";window.PUBLIC_PATH="/karten/";const x=o("geojson","shapes","shapeKonstanz"),G={id:"fillShapeKonstanz",type:"fill",source:"shapeKonstanz",paint:{"fill-color":"black","fill-opacity":.1},layout:{visibility:"visible"}},j={id:"lineShapeKonstanz",type:"line",source:"shapeKonstanz",paint:{"line-color":"black","line-width":2},layout:{visibility:"visible"}},I=o("geojson","maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_pls"),M=o("geojson","maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_behindertenparken"),K=[{id:"konstanzPls",label:"Parkleitsystem",subGroup:"Parken",source:"sourceKonstanzPls",color:"#d85959"}],_=[{id:"konstanzBehindertenparken",label:"Behindertenparken",subGroup:"Parken",source:"sourceKonstanzBehindertenparken",color:"#325ff2"}];function E(e){const{name:a,type:s,operator:l,address:d,fee_descr:i,opening_h:c,max_stay:p,has_light:u,max_hei:h,park_ride:$,opening_s:b,descript:m,max_cap:n,capacity_d:y,capacity_w:z,capacity_c:f,capacity_s:C,public_url:P}=e;return`
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
            ${l==" "?"":`
            <tr>
                <td class="att">Betreiber</td>
                <td class="attContent">${l}</td>
            <tr>
            `}
            ${d==" "?"":`
            <tr>
                <td class="att">Adresse</td>
                <td class="attContent">${d}</td>
            <tr>
            `}
            ${i==" "?"":`
            <tr>
                <td class="att">Gebühren</td>
                <td class="attContent">${i}</td>
            <tr>
            `}
            ${c==" "?"":`
            <tr>
                <td class="att">Öffnungszeiten</td>
                <td class="attContent">${c}</td>
            <tr>
            `}
            ${p==" "?"":`
            <tr>
                <td class="att">Max. Parkdauer</td>
                <td class="attContent">${p}</td>
            <tr>
            `}
            ${u==" "?"":`
            <tr>
                <td class="att">Beleuchtung</td>
                <td class="attContent">${u}</td>
            <tr>
            `}
            ${h==" "?"":`
            <tr>
                <td class="att">Max. Höhe</td>
                <td class="attContent">${h}</td>
            <tr>
            `}
            ${$==" "?"":`
            <tr>
                <td class="att">P+R</td>
                <td class="attContent">${$}</td>
            <tr>
            `}          
            ${b==" "?"":`
            <tr>
                <td class="att">Geöffnet</td>
                <td class="attContent">${b}</td>
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
            ${y==0?"":`
            <tr>
                <td class="att">für Behinderte</td>
                <td class="attContent">${y}</td>
            <tr>
            `}    
            ${z==0?"":`
            <tr>
                <td class="att">für Frauen</td>
                <td class="attContent">${z}</td>
            <tr>
            `}    
            ${f==0?"":`
            <tr>
                <td class="att">mit Lademöglichkeit</td>
                <td class="attContent">${f}</td>
            <tr>
            `}    
            ${C==0?"":`
            <tr>
                <td class="att">für Carsharing</td>
                <td class="attContent">${C}</td>
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
    `}function T(e){const{Name:a,Informatio:s}=e;return`
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
    `}function A(e){e.removeControl(w);const a={collapsed:!1,layers:S(r,"Stadt Konstanz")},s=new B(a);e.addControl(s,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{t.on("load",()=>{t.setCenter([9.15681,47.701872]),t.setMaxBounds([[9.034195,47.606163],[9.28688,47.780866]]),t.once("load",()=>{t.resize(),t.jumpTo({center:[9.15681,47.701872]}),t.getContainer().style.visibility="visible"}),t.addSource("shapeKonstanz",x),t.addLayer(G),t.addLayer(j),t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceKonstanzPls",source:I},{id:"sourceKonstanzBehindertenparken",source:M}].forEach(a=>L(t,a)),r=[..._,...K],r.forEach(a=>v(t,a)),A(t),k(t,K,E),k(t,_,T)})});
