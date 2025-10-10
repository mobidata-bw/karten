import{a as R,l as h,i as m,b as I,c as z,d as B}from"../../addControlLayers-SG5wBw20.js";import{p as D}from"../../popupImages--lnaT5xr.js";import{p as L}from"../../popups-BQhWvGkZ.js";window.PUBLIC_PATH="/karten_dev/";const k={layer:"MobiData-BW:bicycle_service_points",style:"",bounds:[7.3,47.4,10.4,49.7]},a={source:"sourceBicycleServicePoints",sourceLayer:"bicycle_service_points",group:"Datengeber"},v=[{id:"konstanz",label:"Stadt Konstanz",filter:["==",["get","Datengeber"],"SB_Fahrradreparaturstationen(Konstanz)"],color:"#00ff00",...a},{id:"freiburg",label:"Stadt Freiburg im Breisgau",filter:["==",["get","Datengeber"],"Frelo-Radreparaturstationen"],color:"black",...a},{id:"adac",label:"ADAC",filter:["==",["get","Datengeber"],"ADAC"],color:"#ffd000",...a},{id:"TFIS",label:"Touristisches Freizeitinformationssystem",filter:["any",["==",["get","Datengeber"],"TFISReparatur"],["==",["get","Datengeber"],"TFISRadservicepunkte"]],color:"#cacaca",...a},{id:"radvis",label:"RadVIS",filter:["==",["get","Datengeber"],"RadVIS"],color:"#e6007d",...a},{id:"radkultur",label:"RadKULTUR",filter:["==",["get","Datengeber"],"RadKULTUR"],color:"#0d46a0ff",...a}];function F(t){console.log(t);const{RadVIS_ID:r,Name:e,Betreiber:n,Zuestaendig_in_RadVIS:d,Servicestation_Typ:o,Marke:l,Luftpumpe:i,Kettenwerkzeug:c,Werkzeug:u,Fahrradhalterung:g,Gebuehren:b,Oeffnungszeiten:p,Beschreibung:f,QuelleLayer:$}=t,y={RadVIS:"RadVIS",RadKULTUR:"RadKULTUR","SB_Fahrradreparaturstationen(Konstanz)":"Stadt Konstanz","Frelo-Radreparaturstationen":"Stadt Freiburg im Breisgau"};let S="";for(let C in y)$==C&&!$.includes("TFIS")&&(S+=D(y[C]));return`
        <table>
            <tr>
                ${S}
                ${r?`<th class='title'>${r}</th>`:"<th class='title'><i>ohne ID</i></th>"}
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
        ${o?`
            <tr>
                <td class='att'>Servicestation-Typ</td>
                <td class='attContent'>${o}</td>
            </tr>
        `:""}
        ${l?`
        <tr>
            <td class='att'>Marke</td>
            <td class='attContent'>${l}</td>
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
        ${g?`
        <tr>
            <td class='att'>Fahrradhalterung</td>
            <td class='attContent'>${g}</td>
        </tr> 
        `:""}
        ${b?`
        <tr>
            <td class='att'>Gebühren</td>
            <td class='attContent'>${b}</td>
        </tr> 
        `:""}
        ${p?`
        <tr>
            <td class='att'>Öffnungszeiten</td>
            <td class='attContent'>${p}</td>
        </tr> 
        `:""}
        ${f?`
        <tr>
            <td class='att'>Beschreibung</td>
            <td class='attContent'>${f}</td>
        </tr> 
        `:""}
        </table>           
    `}function T(t){const r={collapsed:!1,layers:R(s,"Gebündelte Radservicepunkte")},e=new h(r);t.addControl(e,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=m();I(t),t.on("load",()=>{[{id:"sourceBicycleServicePoints",source:k}].forEach(e=>z(t,e)),s=v,s.forEach(e=>B(t,e)),T(t),L(t,s,F)})});
