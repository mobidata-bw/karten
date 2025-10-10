import{s as b,a as f,l as y,i as S,b as z,c as P,d as L}from"../../addControlLayers-MMhni-RC.js";import{p as $}from"../../popupImages-BHqXxH4m.js";import{p as o}from"../../popups-CyquQWAi.js";window.PUBLIC_PATH="/karten/";const C=b("maps/map-as-a-service/parken_friedrichshafen","friedrichshafen_inventory"),G=b("maps/map-as-a-service/parken_friedrichshafen","taxistaende"),e={type:"line",source:"sourceParking",lineWidth:["interpolate",["linear"],["zoom"],14,4,20,6]},h=[{id:"parkingOnStreet1",label:"Parken mit Parkscheibe/Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Parken mit Parkscheibe/Bewohnerparken"],...e,color:"#00f080"},{id:"parkingOnStreet2",label:"Parken mit Parkscheibe",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Parken mit Parkscheibe"],...e,color:"#9016af"},{id:"parkingOnStreet3",label:"Behindertenparkplätze",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Behindertenparkplätze"],...e,color:"yellow"},{id:"parkingOnStreet4",label:"Gebührenpflichtiges Parken/Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenpflichtiges Parken/Bewohnerparken"],...e,color:"orange"},{id:"parkingOnStreet5",label:"Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Bewohnerparken"],...e,color:"blue"},{id:"parkingOnStreet6",label:"Gebührenpflichtiges Parken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenpflichtiges Parken"],...e,color:"red"},{id:"parkingOnStreet7",label:"Gebührenfreies Parken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenfreies Parken "],...e,color:"green"}],u=[{id:"parkingOther1",label:"Ladezone",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Ladezone"],...e,color:"grey",visibility:"none"},{id:"parkingOther2",label:"Feuerwehrzufahrt",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Feuerwehrzufahrt"],...e,color:"grey",visibility:"none"},{id:"parkingOther3",label:"Fahrradparkplatz/E-Scooter",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Fahrradparkplatz/E-Scooter"],...e,color:"grey",visibility:"none"},{id:"parkingOther4",label:"Fahrradparkplatz",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Fahrradparkplatz"],...e,color:"grey",visibility:"none"},{id:"parkingOther5",label:"E-Parkplatz",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"E-Parkplatz"],...e,color:"grey",visibility:"none"},{id:"parkingOther6",label:"Carsharing",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Carsharing"],...e,color:"grey",visibility:"none"}],k=[{id:"taxi1",label:"Taxistände",subGroup:"Taxistände",source:"sourceTaxi",color:"yellow",visibility:"none"}];function g(t){const{Layer1:n,Layer2:a,Parkwinkel:r,length:l,Straßenseite:i,Zahlungszeitraum:p,Höchstparkdauer:d,Details:c}=t;return`
        <table>
            <tr>
                ${$("Stadt Friedrichshafen")}
                ${a==null?`<th class="title">${n}</th>`:`<th class="title">${a}</th>`}
            </tr>
        </table><br><table>
            <tr>
                ${r==null||r=="no_parking"?"":'<td class="att">Geschätzte Anzahl</td>'}
                ${r=="perpendicular"?`<td class="attContent">${Math.round(l/2.5)}</td>`:""}
                ${r=="parallel"?`<td class="attContent">${Math.round(l/5)}</td>`:""}
                ${r=="diagonal"?`<td class="attContent">${Math.round(l/3)}</td>`:""}
            </tr><tr>
                ${r==null||r=="no_parking"?"":'<td class="att">Parkwinkel</td>'}
                ${r=="perpendicular"?'<td class="attContent">quer</td>':""}
                ${r=="parallel"?'<td class="attContent">längs</td>':""} 
                ${r=="diagonal"?'<td class="attContent">schräg</td>':""}                     
            </tr><tr>
                ${i==null?"":'<td class="att">Straßenseite</td>'}
                ${i=="right"?"":'<td class="attContent">rechts</td>'}
                ${i=="left"?"":'<td class="attContent">links</td>'}
            </tr>
                ${p==null?"":`
                <tr>
                    <td class="att">Zahlungszeitraum</td>
                    <td class="attContent">${p}</td>
                </tr>
                `}
                ${d==null?"":`
                <tr>
                    <td class="att">Höchstparkdauer</td>
                    <td class="attContent">${d}</td>
                </tr>
                `}
                ${c==null?"":`
                <tr>
                    <td class="att">Details</td>
                    <td class="attContent">${c}</td>
                </tr>
                `}
            </table>
        `}function m(){return`
        <table>
            <tr>
                <th class="title">Taxistand</th>
            </tr>
        </table>
    `}function w(t){const n={collapsed:!1,layers:f(s,"Legende")},a=new y(n);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=S({configZoom:window.innerWidth<577?12.5:14.5,configCenter:[9.479215,47.655577],configMinZoom:12,configShape:"shapeFriedrichshafen"});z(t),t.on("load",()=>{[{id:"sourceParking",source:C},{id:"sourceTaxi",source:G}].forEach(a=>P(t,a)),s=[...h,...u,...k],s.forEach(a=>L(t,a)),w(t),o(t,h,g),o(t,u,g),o(t,k,m)})});
