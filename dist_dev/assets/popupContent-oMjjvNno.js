import{p as y}from"./popupImages-0K_rmlav.js";const m={layer:"MobiData-BW:bicycle_service_points",style:"MobiData-BW:mdbw_bicycle_service_points",bounds:[7.2,47.5,10.4,49.6]},t={source:"sourceBicycleServicePoints",sourceLayer:"bicycle_service_points",group:"Radservicepunkte",subGroup:"Datengeber"},D=[{id:"konstanz",label:"Stadt Konstanz",filter:["==",["get","Datengeber"],"Stadt Konstanz"],color:"#00ff00",...t},{id:"freiburg",label:"Stadt Freiburg im Breisgau",filter:["==",["get","Datengeber"],"Stadt Freiburg im Breisgau"],color:"black",...t},{id:"adac",label:"ADAC",filter:["==",["get","Datengeber"],"ADAC"],color:"#ffd000",...t},{id:"TFIS",label:"Touristisches Freizeitinformationssystem",filter:["==",["get","Datengeber"],"Touristisches Freizeitinformationssystem"],color:"#cacaca",...t},{id:"radvis",label:"RadVIS",filter:["==",["get","Datengeber"],"RadVIS"],color:"#e6007d",...t},{id:"radkultur",label:"RadKULTUR",filter:["==",["get","Datengeber"],"RadKULTUR"],color:"#0d46a0ff",...t}];function S(f){const{ID:p,["Externe ID"]:e,Name:a,Betreiber:s,["Zuständig in RadVIS"]:r,["Servicestation-Typ"]:n,Marke:d,Luftpumpe:i,Kettenwerkzeug:c,Werkzeug:l,Fahrradhalterung:o,Gebühren:u,Öffnungszeiten:b,Beschreibung:g,Datengeber:$}=f;return`
        ${$=="Touristisches Freizeitinformationssystem"?"":`
        <table>            
            <tr>
                ${y($)}               
            </tr>           
        </table><br>
        `}
        <table>          
            <tr>
                <td class='att'>ID</td>
                <td class='attContent'>${p}</td>
            </tr> 
             ${e?`
            <tr>
                <td class='att'>Externe ID</td>
                <td class='attContent'>${e}</td>
            </tr> 
            `:""}          
            ${a?`
            <tr>
                <td class='att'>Name</td>
                <td class='attContent'>${a}</td>
            </tr> 
            `:""}            
            ${s?`
            <tr>
                <td class='att'>Betreiber</td>
                <td class='attContent'>${s}</td>
            </tr> 
            `:""}      
            ${r?`
                <tr>
                    <td class='att'>Zuständig in RadVIS</td>
                    <td class='attContent'>${r}</td>
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
            ${l?`
            <tr>
                <td class='att'>Werkzeug</td>
                <td class='attContent'>${l}</td>
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
            ${b?`
            <tr>
                <td class='att'>Öffnungszeiten</td>
                <td class='attContent'>${b}</td>
            </tr> 
            `:""}
            ${g?`
            <tr>
                <td class='att'>Beschreibung</td>
                <td class='attContent'>${g}</td>
            </tr> 
            `:""}
        </table>           
    `}export{D as l,S as p,m as s};
