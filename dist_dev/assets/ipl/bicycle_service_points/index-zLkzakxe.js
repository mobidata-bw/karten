import{a as L,l as R,i as h,b as m,c as I,d as v}from"../../addControlLayers-BWBFQWHW.js";import{p as z}from"../../popupImages-BbCFPXc0.js";import{p as B}from"../../popups-DOvjiyHa.js";window.PUBLIC_PATH="/karten_dev/";const k={layer:"MobiData-BW:bicycle_service_points",style:"",bounds:[7.5,47.4,10.4,49.7],server:"test"},r={source:"sourceBicycleServicePoints",sourceLayer:"bicycle_service_points",group:"Datengeber"},F=[{id:"TFIS",label:"Touristisches Freizeitinformationssystem",filter:["any",["==",["get","QuelleLayer"],"TFISReparatur"],["==",["get","QuelleLayer"],"TFISRadservicepunkte"]],color:"#cacaca",...r},{id:"radvis",label:"RadVIS",filter:["==",["get","QuelleLayer"],"RadVIS"],color:"#e6007d",...r},{id:"radkultur",label:"RadKULTUR",filter:["==",["get","QuelleLayer"],"RadKULTUR"],color:"#0d46a0ff",...r},{id:"konstanz",label:"Stadt Konstanz",filter:["==",["get","QuelleLayer"],"SB_Fahrradreparaturstationen(Konstanz)"],color:"#00ff00",...r},{id:"freiburg",label:"Stadt Freiburg im Breisgau",filter:["==",["get","QuelleLayer"],"Frelo-Radreparaturstationen"],color:"black",...r}];function T(t){const{RadVIS_ID:a,Name:e,Betreiber:n,Zuestaendig_in_RadVIS:d,Servicestation_Typ:l,Marke:o,Luftpumpe:i,Kettenwerkzeug:c,Werkzeug:u,Fahrradhalterung:p,Gebuehren:g,Oeffnungszeiten:y,Beschreibung:b,QuelleLayer:f}=t,$={RadVIS:"RadVIS",RadKULTUR:"RadKULTUR","SB_Fahrradreparaturstationen(Konstanz)":"Stadt Konstanz","Frelo-Radreparaturstationen":"Stadt Freiburg im Breisgau"};let S="";for(let C in $)f==C&&!f.includes("TFIS")&&(S+=z($[C]));return`
        <table>
            <tr>
                ${S}
                ${a?`<th class='title'>${a}</th>`:"<th class='title'><i>ohne ID</i></th>"}
            </tr>
        </table><br><table>
        ${e?`
        <tr>
            <td class='att'>Name</td>
            <td class='attContent'>${e}</td>
        </tr> 
        `:""}
        ${n?`
        <tr>
            <td class='att'>Betreiber</td>
            <td class='attContent'>${n}</td>
        </tr> 
        `:""}      
        ${d?`
            <tr>
                <td class='att'>Zuständig in RadVIS</td>
                <td class='attContent'>${d}</td>
            </tr> 
        `:""}
        ${l?`
            <tr>
                <td class='att'>Servicestation-Typ</td>
                <td class='attContent'>${l}</td>
            </tr>
        `:""}
        ${o?`
        <tr>
            <td class='att'>Marke</td>
            <td class='attContent'>${o}</td>
        </tr> 
        `:""}
        ${i?`
        <tr>
            <td class='att'>Luftpumpe</td>
            <td class='attContent'>${i}</td>
        </tr> 
        `:""}
        ${c?`
        <tr>
            <td class='att'>Kettenwerkzeug</td>
            <td class='attContent'>${c}</td>
        </tr> 
        `:""}
        ${u?`
        <tr>
            <td class='att'>Werkzeug</td>
            <td class='attContent'>${u}</td>
        </tr> 
        `:""}
        ${p?`
        <tr>
            <td class='att'>Fahrradhalterung</td>
            <td class='attContent'>${p}</td>
        </tr> 
        `:""}
        ${g?`
        <tr>
            <td class='att'>Gebühren</td>
            <td class='attContent'>${g}</td>
        </tr> 
        `:""}
        ${y?`
        <tr>
            <td class='att'>Öffnungszeiten</td>
            <td class='attContent'>${y}</td>
        </tr> 
        `:""}
        ${b?`
        <tr>
            <td class='att'>Beschreibung</td>
            <td class='attContent'>${b}</td>
        </tr> 
        `:""}
        </table>           
    `}function _(t){const a={collapsed:!1,layers:L(s,"Gebündelte Radservicepunkte")},e=new R(a);t.addControl(e,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=h();m(t),t.on("load",()=>{[{id:"sourceBicycleServicePoints",source:k}].forEach(e=>I(t,e)),s=F,s.forEach(e=>v(t,e)),_(t),B(t,s,T)})});
