import{s as c,a as g,l as h,i as f,b,c as p,d as u}from"../../addControlLayers-BbF6k2Fl.js";import{s as m}from"../../setupLayerInteractions-DdG2LeDu.js";window.PUBLIC_PATH="/karten/";const G=c({format:"geojson",directory:"maps/map-as-a-service/anfahrtskarte",file:"nvbw"}),S=c({format:"geojson",directory:"maps/map-as-a-service/anfahrtskarte",file:"touren"}),y=[{id:"nvbw",type:"fill",source:"sourceNvbw",color:"#006eaf",fillOutlineColor:"black"}],r={type:"line",source:"sourceTouren",lineWidth:["interpolate",["linear"],["zoom"],14,3,20,5]},T=[{id:"guides1",label:"Bad Cannstatt > König-Karl-Brücke > Rosensteinpark",group:"Touren mit Guides",color:"green",filter:["==",["get","Guide"],"Christoph Wastian"],...r},{id:"guides2",label:"Westbahnhof > Reinsburgstr. > Theo > Hbf.",group:"Touren mit Guides",color:"red",filter:["==",["get","Guide"],"Monika Burkard"],...r},{id:"guides3",label:"S-West, Hölderlinplatz - Eberhardstr. > Schlossgarten",group:"Touren mit Guides",color:"orange",filter:["==",["get","Guide"],"Paul Antoine Hillaert"],...r},{id:"guides4",label:"S-West Bebelstr. > Theo > Hbf > Milaneo",group:"Touren mit Guides",color:"green",filter:["==",["get","Guide"],"Katharina Bitterle"],...r},{id:"guides5",label:"S-Vaihingen > Hauptradroute 1 > S-Süd > Schlossgarten",group:"Touren mit Guides",color:"blue",filter:["==",["get","Guide"],"Alexander Migl (ab Vaihingen), Malte Höfner (ab S-Süd)"],...r}],C=[{id:"ohneGuides1",label:"Heusteigviertel > Schlossgarten > Rosensteinpark",group:"Touren ohne Guides",color:"#e41a1c",visibility:"none",filter:["==",["get","name"],"Fahrt am Morgen"],...r},{id:"ohneGuides2",label:"S-West > Killesberg > Feuerbacher Tal > Pragsattel",group:"Touren ohne Guides",color:"#377eb8",visibility:"none",filter:["==",["get","name"],"Stuttgart-West -> Stuttgart-Nord (1)"],...r},{id:"ohneGuides3",label:"S-Ost > Rosensteinpark > Posthof",group:"Touren ohne Guides",color:"#4daf4a",visibility:"none",filter:["==",["get","name"],"Stuttgart-Ost -> Stuttgart-Nord (2,9 km)"],...r},{id:"ohneGuides4",label:"S-West > Katharinenhospital > Milaneo (und zurück)",group:"Touren ohne Guides",color:"#984ea3",visibility:"none",filter:["==",["get","name"],"Stuttgart-West (8,3 km)"],...r},{id:"ohneGuides5",label:"S-West > Panoramastr. > Milaneo",group:"Touren ohne Guides",color:"#ff7f00",visibility:"none",filter:["==",["get","name"],"Stuttgart-West -> Stuttgart-Nord (2)"],...r}];function k(e){const{Tour:o,name:t,Guide:n,Streckenlänge:s,Fahrzeit:i,Treffpunkt:l,Höhenmeter:d}=e;return`
        <table>
            <tr>
                <th class="title">${o}</th>
            </tr>
        </table><br><table>
            ${t?`
            <tr>
                <td class="att">Name</td>
                <td class="attContent">${t}</td>
            </tr>
            `:""}
            ${n?`
            <tr>
                <td class="att">Guide</td>
                <td class="attContent">${n}</td>
            </tr>
            `:""}
            ${s?`
            <tr>
                <td class="att">Streckenlänge</td>
                <td class="attContent">${s}</td>
            </tr>
            `:""}
            ${i?`
            <tr>
                <td class="att">Fahrzeit</td>
                <td class="attContent">${i}</td>
            </tr>
            `:""}
            ${l?`
            <tr>
                <td class="att">Treffpunkt</td>
                <td class="attContent">${l}</td>
            </tr>
            `:""}
            ${d?`
            <tr>
                <td class="att">Höhenmeter</td>
                <td class="attContent">${d}</td>
            </tr>
            `:""}
        </table>
    `}function v(e){const o={collapsed:!1,layers:g(a,"Legende")},t=new h(o);t._exclusiveAllGroups=!0,e.addControl(t,"top-right")}let a;window.addEventListener("DOMContentLoaded",()=>{const e=f({configZoom:window.innerWidth<577?12.5:14.5,configCenter:[9.193717,48.795933],configMinZoom:12,configShape:"shapeStuttgart"});b(e,{style:"bicycle"}),e.on("load",()=>{[{id:"sourceNvbw",source:G},{id:"sourceTouren",source:S}].forEach(t=>p(e,t)),a=[...T,...C],a.forEach(t=>u(e,t)),y.forEach(t=>u(e,t)),v(e),m(e,a,k)})});
