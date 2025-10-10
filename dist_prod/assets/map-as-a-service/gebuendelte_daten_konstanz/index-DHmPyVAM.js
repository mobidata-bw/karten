import{s as o,a as S,l as B,k as t,c as L,d as v}from"../../addControlLayers-oFVf9ecf.js";import{c as w}from"../../main-BNL_N1Qk.js";import{p as g}from"../../popupImages-ClJBt1BX.js";import{p as k}from"../../popups-Da-3PA5A.js";import"../../popupContent-nw07xm-5.js";import"../../timeStamps-CJ2Ek9ou.js";import"../../popupContent-oYFjx800.js";import"../../popupContent-DablEvrA.js";import"../../popupContent-XB6Eld66.js";import"../../layers-HeZuYLBu.js";import"../../popupContent-BPb1lGIe.js";import"../../popupContent-B_kLHz9v.js";import"../../popupContent-BGMWoUza.js";import"../../popupContent--ioRosgZ.js";import"../../popupContent-Cx8POdDu.js";import"../../wms-BZe2L0dE.js";window.PUBLIC_PATH="/karten/";const x=o("shapes","shapeKonstanz"),G={id:"fillShapeKonstanz",type:"fill",source:"shapeKonstanz",paint:{"fill-color":"black","fill-opacity":.1},layout:{visibility:"visible"}},I={id:"lineShapeKonstanz",type:"line",source:"shapeKonstanz",paint:{"line-color":"black","line-width":2},layout:{visibility:"visible"}},M=o("maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_pls"),E=o("maps/map-as-a-service/gebuendelte_daten_konstanz","konstanz_behindertenparken"),K=[{id:"konstanzPls",label:"Parkleitsystem",subGroup:"Parken",source:"sourceKonstanzPls",color:"#d85959"}],_=[{id:"konstanzBehindertenparken",label:"Behindertenparken",subGroup:"Parken",source:"sourceKonstanzBehindertenparken",color:"#325ff2"}];function T(e){const{name:a,type:s,operator:l,address:d,fee_descr:i,opening_h:c,max_stay:p,has_light:u,max_hei:h,park_ride:$,opening_s:b,descript:m,max_cap:n,capacity_d:y,capacity_w:z,capacity_c:f,capacity_s:C,public_url:P}=e;return`
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
    `}function H(e){e.removeControl(w);const a={collapsed:!1,layers:S(r,"Stadt Konstanz")},s=new B(a);e.addControl(s,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{t.on("load",()=>{t.setCenter([9.15681,47.701872]),t.setMaxBounds([[9.034195,47.606163],[9.28688,47.780866]]),t.once("load",()=>{t.resize(),t.jumpTo({center:[9.15681,47.701872]}),t.getContainer().style.visibility="visible"}),t.addSource("shapeKonstanz",x),t.addLayer(G),t.addLayer(I),t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceKonstanzPls",source:M},{id:"sourceKonstanzBehindertenparken",source:E}].forEach(a=>L(t,a)),r=[..._,...K],r.forEach(a=>v(t,a)),H(t),k(t,K,T),k(t,_,A)})});
