import{p as h}from"./popupImages-q--p1uQq.js";const C={layer:"MobiData-BW:bicycle_service_points",style:"",bounds:[7.3,47.4,10.4,49.7]},t={source:"sourceBicycleServicePoints",sourceLayer:"bicycle_service_points",group:"Radservicepunkte",subGroup:"Datengeber"},I=[{id:"konstanz",label:"Stadt Konstanz",filter:["==",["get","Datengeber"],"SB_Fahrradreparaturstationen(Konstanz)"],color:"#00ff00",...t},{id:"freiburg",label:"Stadt Freiburg im Breisgau",filter:["==",["get","Datengeber"],"Frelo-Radreparaturstationen"],color:"black",...t},{id:"adac",label:"ADAC",filter:["==",["get","Datengeber"],"ADAC"],color:"#ffd000",...t},{id:"TFIS",label:"Touristisches Freizeitinformationssystem",filter:["any",["==",["get","Datengeber"],"TFISReparatur"],["==",["get","Datengeber"],"TFISRadservicepunkte"]],color:"#cacaca",...t},{id:"radvis",label:"RadVIS",filter:["==",["get","Datengeber"],"RadVIS"],color:"#e6007d",...t},{id:"radkultur",label:"RadKULTUR",filter:["==",["get","Datengeber"],"RadKULTUR"],color:"#0d46a0ff",...t}];function D(R){const{RadVIS_ID:e,Name:a,Betreiber:r,Zuestaendig_in_RadVIS:s,Servicestation_Typ:n,Marke:d,Luftpumpe:l,Kettenwerkzeug:i,Werkzeug:c,Fahrradhalterung:o,Gebuehren:u,Oeffnungszeiten:g,Beschreibung:b,QuelleLayer:p}=R,$={RadVIS:"RadVIS",RadKULTUR:"RadKULTUR","SB_Fahrradreparaturstationen(Konstanz)":"Stadt Konstanz","Frelo-Radreparaturstationen":"Stadt Freiburg im Breisgau"};let f="";for(let S in $)p==S&&!p.includes("TFIS")&&(f+=h($[S]));return`
        <table>
            <tr>
                ${f}
                ${e?`<th class='title'>${e}</th>`:"<th class='title'><i>ohne ID</i></th>"}
            </tr>
        </table><br><table>
        ${a?`
        <tr>
            <td class='att'>Name</td>
            <td class='attContent'>${a}</td>
        </tr> 
        `:""}
        ${r?`
        <tr>
            <td class='att'>Betreiber</td>
            <td class='attContent'>${r}</td>
        </tr> 
        `:""}      
        ${s?`
            <tr>
                <td class='att'>Zuständig in RadVIS</td>
                <td class='attContent'>${s}</td>
            </tr> 
        `:""}
        ${n?`
            <tr>
                <td class='att'>Servicestation-Typ</td>
                <td class='attContent'>${n}</td>
            </tr>
        `:""}
        ${d?`
        <tr>
            <td class='att'>Marke</td>
            <td class='attContent'>${d}</td>
        </tr> 
        `:""}
        ${l?`
        <tr>
            <td class='att'>Luftpumpe</td>
            <td class='attContent'>${l}</td>
        </tr> 
        `:""}
        ${i?`
        <tr>
            <td class='att'>Kettenwerkzeug</td>
            <td class='attContent'>${i}</td>
        </tr> 
        `:""}
        ${c?`
        <tr>
            <td class='att'>Werkzeug</td>
            <td class='attContent'>${c}</td>
        </tr> 
        `:""}
        ${o?`
        <tr>
            <td class='att'>Fahrradhalterung</td>
            <td class='attContent'>${o}</td>
        </tr> 
        `:""}
        ${u?`
        <tr>
            <td class='att'>Gebühren</td>
            <td class='attContent'>${u}</td>
        </tr> 
        `:""}
        ${g?`
        <tr>
            <td class='att'>Öffnungszeiten</td>
            <td class='attContent'>${g}</td>
        </tr> 
        `:""}
        ${b?`
        <tr>
            <td class='att'>Beschreibung</td>
            <td class='attContent'>${b}</td>
        </tr> 
        `:""}
        </table>           
    `}export{I as l,D as p,C as s};
