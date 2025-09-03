import{a as f,l as g,i as C,b as S,c as h,d as L}from"../../addControlLayers-DdHOxOpH.js";import{p as m}from"../../popupImages-CL540eOO.js";import{p as v}from"../../popups-Cbog4_SW.js";window.PUBLIC_PATH="/karten_dev/";const z={layer:"MobiData-BW:bicycle_service_points",style:"",bounds:[7.5,47.4,10.4,49.7],server:"test"},r={source:"sourceBicycleServicePoints",sourceLayer:"bicycle_service_points",group:"Datengeber"},R=[{id:"TFIS",label:"Touristisches Freizeitinformationssystem",filter:["any",["==",["get","QuelleLayer"],"TFISReparatur"],["==",["get","QuelleLayer"],"TFISRadservicepunkte"]],color:"#cacaca",...r},{id:"radvis",label:"RadVIS",filter:["==",["get","QuelleLayer"],"RadVIS"],color:"#e6007d",...r},{id:"radkultur",label:"RadKULTUR",filter:["==",["get","QuelleLayer"],"RadKULTUR"],color:"#0d46a0ff",...r},{id:"konstanz",label:"Stadt Konstanz",filter:["==",["get","QuelleLayer"],"SB_Fahrradreparaturstationen(Konstanz)"],color:"#00ff00",...r},{id:"freiburg",label:"Stadt Freiburg im Breisgau",filter:["==",["get","QuelleLayer"],"Frelo-Radreparaturstationen"],color:"black",...r}];function k(t){const{RadVIS_ID:a,Name:e,Betreiber:n,Zuestaendig_in_RadVIS:d,Servicestation_Typ:l,Marke:o,Luftpumpe:c,Kettenwerkzeug:i,Werkzeug:u,Fahrradhalterung:p,Gebuehren:y,Oeffnungszeiten:$,Beschreibung:b}=t;return`
        <table>
            <tr>
                ${m("Stadt Konstanz")}
                ${a?`<th class="title">${a}</th>`:'<th class="title"><i>ohne ID</i></th>'}
            </tr>
        </table><br><table>
        ${e?`
        <tr>
            <td class="att">Name</td>
            <td class="attContent">${e}</td>
        </tr> 
        `:""}
        ${n?`
        <tr>
            <td class="att">Betreiber</td>
            <td class="attContent">${n}</td>
        </tr> 
        `:""}      
        ${d?`
            <tr>
                <td class="att">Zuständig in RadVIS</td>
                <td class="attContent">${d}</td>
            </tr> 
        `:""}
        ${l?`
            <tr>
                <td class="att">Servicestation-Typ</td>
                <td class="attContent">${l}</td>
            </tr>
        `:""}
        ${o?`
        <tr>
            <td class="att">Marke</td>
            <td class="attContent">${o}</td>
        </tr> 
        `:""}
        ${c?`
        <tr>
            <td class="att">Luftpumpe</td>
            <td class="attContent">${c}</td>
        </tr> 
        `:""}
        ${i?`
        <tr>
            <td class="att">Kettenwerkzeug</td>
            <td class="attContent">${i}</td>
        </tr> 
        `:""}
        ${u?`
        <tr>
            <td class="att">Werkzeug</td>
            <td class="attContent">${u}</td>
        </tr> 
        `:""}
        ${p?`
        <tr>
            <td class="att">Fahrradhalterung</td>
            <td class="attContent">${p}</td>
        </tr> 
        `:""}
        ${y?`
        <tr>
            <td class="att">Gebühren</td>
            <td class="attContent">${y}</td>
        </tr> 
        `:""}
        ${$?`
        <tr>
            <td class="att">Öffnungszeiten</td>
            <td class="attContent">${$}</td>
        </tr> 
        `:""}
        ${b?`
        <tr>
            <td class="att">Beschreibung</td>
            <td class="attContent">${b}</td>
        </tr> 
        `:""}
        </table>           
    `}function B(t){const a={collapsed:!1,layers:f(s,"Gebündelte Radservicepunkte")},e=new g(a);t.addControl(e,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=C();S(t),t.on("load",()=>{[{id:"sourceBicycleServicePoints",source:z}].forEach(e=>h(t,e)),s=R,s.forEach(e=>L(t,e)),B(t),v(t,s,k)})});
