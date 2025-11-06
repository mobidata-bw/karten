import{s as k,a as b,l as f,i as y,b as S,c as z,d as P}from"../../addControlLayers-dPVqcd6v.js";import{p as L}from"../../popupImages-DsnHgIyd.js";import{s as c}from"../../setupLayerInteractions-CCnmftay.js";window.PUBLIC_PATH="/karten_test/";const m=k({format:"geojson",directory:"maps/map-as-a-service/parken_friedrichshafen",file:"friedrichshafen_inventory",generateId:!0}),$=k({format:"geojson",directory:"maps/map-as-a-service/parken_friedrichshafen",file:"taxistaende"}),e={type:"line",source:"sourceParking",lineWidth:["interpolate",["linear"],["zoom"],14,4,20,6]},h=[{id:"parkingOnStreet1",label:"Parken mit Parkscheibe/Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Parken mit Parkscheibe/Bewohnerparken"],...e,color:"#00f080"},{id:"parkingOnStreet2",label:"Parken mit Parkscheibe",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Parken mit Parkscheibe"],...e,color:"#9016af"},{id:"parkingOnStreet3",label:"Behindertenparkplätze",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Behindertenparkplätze"],...e,color:"yellow"},{id:"parkingOnStreet4",label:"Gebührenpflichtiges Parken/Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenpflichtiges Parken/Bewohnerparken"],...e,color:"orange"},{id:"parkingOnStreet5",label:"Bewohnerparken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Bewohnerparken"],...e,color:"blue"},{id:"parkingOnStreet6",label:"Gebührenpflichtiges Parken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenpflichtiges Parken"],...e,color:"red"},{id:"parkingOnStreet7",label:"Gebührenfreies Parken",subGroup:"Straßenparkplätze",filter:["==",["get","Layer1"],"Gebührenfreies Parken "],...e,color:"green"}],u=[{id:"parkingOther1",label:"Ladezone",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Ladezone"],...e,color:"grey",visibility:"none"},{id:"parkingOther2",label:"Feuerwehrzufahrt",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Feuerwehrzufahrt"],...e,color:"grey",visibility:"none"},{id:"parkingOther3",label:"Fahrradparkplatz/E-Scooter",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Fahrradparkplatz/E-Scooter"],...e,color:"grey",visibility:"none"},{id:"parkingOther4",label:"Fahrradparkplatz",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Fahrradparkplatz"],...e,color:"grey",visibility:"none"},{id:"parkingOther5",label:"E-Parkplatz",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"E-Parkplatz"],...e,color:"grey",visibility:"none"},{id:"parkingOther6",label:"Carsharing",subGroup:"Sonstige Straßenparkplätze",filter:["==",["get","Layer2"],"Carsharing"],...e,color:"grey",visibility:"none"}],g=[{id:"taxi1",label:"Taxistände",subGroup:"Taxistände",source:"sourceTaxi",color:"yellow",visibility:"none"}];function C(t){const{Layer1:n,Layer2:a,Parkwinkel:r,length:i,Straßenseite:l,Zahlungszeitraum:s,Höchstparkdauer:p,Details:d}=t;return`
        <table>
            <tr>
                ${L("Stadt Friedrichshafen")}
                ${a==null?`<th class="title">${n}</th>`:`<th class="title">${a}</th>`}
            </tr>
        </table><br><table>
            <tr>
                ${r==null||r=="no_parking"?"":'<td class="att">Geschätzte Anzahl</td>'}
                ${r=="perpendicular"?`<td class="attContent">${Math.round(i/2.5)}</td>`:""}
                ${r=="parallel"?`<td class="attContent">${Math.round(i/5)}</td>`:""}
                ${r=="diagonal"?`<td class="attContent">${Math.round(i/3)}</td>`:""}
            </tr><tr>
                ${r==null||r=="no_parking"?"":'<td class="att">Parkwinkel</td>'}
                ${r=="perpendicular"?'<td class="attContent">quer</td>':""}
                ${r=="parallel"?'<td class="attContent">längs</td>':""} 
                ${r=="diagonal"?'<td class="attContent">schräg</td>':""}                     
            </tr><tr>
                ${l==null?"":'<td class="att">Straßenseite</td>'}
                ${l=="right"?"":'<td class="attContent">rechts</td>'}
                ${l=="left"?"":'<td class="attContent">links</td>'}
            </tr>
                ${s==null?"":`
                <tr>
                    <td class="att">Zahlungszeitraum</td>
                    <td class="attContent">${s}</td>
                </tr>
                `}
                ${p==null?"":`
                <tr>
                    <td class="att">Höchstparkdauer</td>
                    <td class="attContent">${p}</td>
                </tr>
                `}
                ${d==null?"":`
                <tr>
                    <td class="att">Details</td>
                    <td class="attContent">${d}</td>
                </tr>
                `}
            </table>
        `}function G(){return`
        <table>
            <tr>
                <th class="title">Taxistand</th>
            </tr>
        </table>
    `}function w(t){const n={collapsed:!1,layers:b(o,"Legende")},a=new f(n);t.addControl(a,"top-right")}let o;window.addEventListener("DOMContentLoaded",()=>{const t=y({configZoom:window.innerWidth<577?12.5:14.5,configCenter:[9.479215,47.655577],configMinZoom:12,configShape:"shapeFriedrichshafen"});S(t),t.on("load",()=>{const n=[{id:"sourceParking",source:m},{id:"sourceTaxi",source:$}];n.forEach(a=>z(t,a)),o=[...h,...u,...g],o.forEach(a=>P(t,a)),w(t),c(t,[...h,...u],C,n),c(t,g,G)})});
