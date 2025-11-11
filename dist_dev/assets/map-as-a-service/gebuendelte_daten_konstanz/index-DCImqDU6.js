import{s as o,a as L,l as S,n as t,c as B,d as v}from"../../addControlLayers-0lIGzMVq.js";import{c as w}from"../../main-BqEHePJQ.js";import{p as g}from"../../popupImages-0K_rmlav.js";import{s as k}from"../../setupLayerInteractions-CT5YNCWO.js";import"../../popupContent-Di32Nprc.js";import"../../timeStamps-CJ2Ek9ou.js";import"../../popupContent-oMjjvNno.js";import"../../popupContent-DCV-7dNA.js";import"../../popupContent-B55QQTdQ.js";import"../../popupContent-CL48ClyL.js";import"../../layers-HeZuYLBu.js";import"../../popupContent-BPb1lGIe.js";import"../../popupContent-D1UrbHWp.js";import"../../popupContent-Bam1TdiX.js";import"../../popupContent-D4WnIXe6.js";import"../../popupContent-BBGWQjV4.js";import"../../popupContent-6-znjfEK.js";import"../../wms-9XK0S6-z.js";import"../../summarizeControlLayers-BHCkUhx6.js";window.PUBLIC_PATH="/karten_dev/";const x=o({format:"geojson",directory:"shapes",file:"shapeKonstanz"}),G={id:"fillShapeKonstanz",type:"fill",source:"shapeKonstanz",paint:{"fill-color":"black","fill-opacity":.1},layout:{visibility:"visible"}},I={id:"lineShapeKonstanz",type:"line",source:"shapeKonstanz",paint:{"line-color":"black","line-width":2},layout:{visibility:"visible"}},j=o({format:"geojson",directory:"maps/map-as-a-service/gebuendelte_daten_konstanz",file:"konstanz_pls"}),M=o({format:"geojson",directory:"maps/map-as-a-service/gebuendelte_daten_konstanz",file:"konstanz_behindertenparken"}),K=[{id:"konstanzPls",label:"Parkleitsystem",subGroup:"Parken",source:"sourceKonstanzPls",color:"#d85959"}],_=[{id:"konstanzBehindertenparken",label:"Behindertenparken",subGroup:"Parken",source:"sourceKonstanzBehindertenparken",color:"#325ff2"}];function E(e){const{name:a,type:s,operator:l,address:d,fee_descr:i,opening_h:c,max_stay:p,has_light:u,max_hei:m,park_ride:h,opening_s:y,descript:$,max_cap:n,capacity_d:b,capacity_w:f,capacity_c:z,capacity_s:C,public_url:P}=e;return`
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
            ${m==" "?"":`
            <tr>
                <td class="att">Max. Höhe</td>
                <td class="attContent">${m}</td>
            <tr>
            `}
            ${h==" "?"":`
            <tr>
                <td class="att">P+R</td>
                <td class="attContent">${h}</td>
            <tr>
            `}          
            ${y==" "?"":`
            <tr>
                <td class="att">Geöffnet</td>
                <td class="attContent">${y}</td>
            <tr>
            `}
            ${$==" "?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${$}</td>
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
            ${f==0?"":`
            <tr>
                <td class="att">für Frauen</td>
                <td class="attContent">${f}</td>
            <tr>
            `}    
            ${z==0?"":`
            <tr>
                <td class="att">mit Lademöglichkeit</td>
                <td class="attContent">${z}</td>
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
    `}function A(e){e.removeControl(w);const a={collapsed:!1,layers:L(r,"Stadt Konstanz")},s=new S(a);e.addControl(s,"top-right")}let r;window.addEventListener("DOMContentLoaded",()=>{t.on("load",()=>{t.setCenter([9.15681,47.701872]),t.setMaxBounds([[9.034195,47.606163],[9.28688,47.780866]]),t.once("load",()=>{t.resize(),t.jumpTo({center:[9.15681,47.701872]}),t.getContainer().style.visibility="visible"}),t.addSource("shapeKonstanz",x),t.addLayer(G),t.addLayer(I),t.on("styledata",()=>{t.getLayer("fillShape")&&t.setLayoutProperty("fillShape","visibility","none"),t.getLayer("lineShape")&&t.setLayoutProperty("lineShape","visibility","none")}),[{id:"sourceKonstanzPls",source:j},{id:"sourceKonstanzBehindertenparken",source:M}].forEach(a=>B(t,a)),r=[..._,...K],r.forEach(a=>v(t,a)),A(t),k(t,K,E),k(t,_,T)})});
