import{a as m,l as f,i as k,b as C,c as z,d as $}from"../../addControlLayers-C4CIdj9Z.js";import{p as j}from"../../popupImages-BVuzBbt9.js";import{p as L}from"../../popups-CWAOagCD.js";window.PUBLIC_PATH="/karten/";const P={type:"geojson",data:"/karten_geojsons/maps/auswertungen/transparenzportale/transparenzportale.geojson"},r={source:"sourceTransparenzportale",group:"Transparenzportale",type:"fill"},y=[{id:"transparenzportale_Land",label:"Nationale Portale",filter:["==",["get","region"],"Land"],color:"#7dc4204d",...r},{id:"transparenzportale_Bundesland",label:"MobiData BW®",filter:["==",["get","region"],"Bundesland"],color:"#0c79bc",...r},{id:"transparenzportale_Verkehrsverbund",label:"Verbundsportale",filter:["==",["get","region"],"Verkehrsverbund"],color:"#d7a4a4",...r},{id:"transparenzportale_Kommune",label:"Kommunale Portale",filter:["==",["get","region"],"Kommune"],color:"#ffc300",...r}];function B(t){const{name:e,portal:a,ÖPNV:o,Sharing:s,Parken:l,Radverkehr:d,Laden:i,Barrierefreiheit:c,Baustellen:p,Verkehrszeichen:u,Verkehrskameras:b,Autoverkehr:h,url:g}=t;return`
        <table>
            <tr>
                ${j({"Baden-Württemberg":"MobiDataBW",Deutschland:"Mobilithek",Frankreich:"transport.data.gouv.fr",Österreich:"data.gv.at",Schweiz:"Open-Data-Plattform Schweiz"}[e]??e)}
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Portal</td>
                <td class="attContent">${a}</td>
            </tr>
            <tr>
                <td class="att">Zuständigkeit</td>
                <td class="attContent">${e}</td>
            </tr>
        </table><br><table>
            <tr>
              <td class="title title2">Datenangebot</td>
            </tr>
            ${o=="ja"?'<tr><td class="attContent">ÖPNV</td></tr>':""}
            ${s=="ja"?'<tr><td class="attContent">Sharing</td></tr>':""}
            ${l=="ja"?'<tr><td class="attContent">Parken</td></tr>':""}
            ${d=="ja"?'<tr><td class="attContent">Radverkehr</td></tr>':""}
            ${i=="ja"?'<tr><td class="attContent">Laden</td></tr>':""}
            ${c=="ja"?'<tr><td class="attContent">Barrierefreiheit</td></tr>':""}
            ${p=="ja"?'<tr><td class="attContent">Baustellen</td></tr>':""}
            ${u=="ja"?'<tr><td class="attContent">Verkehrszeichen</td></tr>':""}
            ${b=="ja"?'<tr><td class="attContent">Verkehrskameras</td></tr>':""}
            ${h=="ja"?'<tr><td class="attContent">Autoverkehr</td></tr>':""}
        </table><table>
            <tr>
                <td class="attContentLink"><a href="${g}" target="_blank">&#10149 zum Portal</a></td>
            </tr>
        </table>
    `}function v(t){const e={collapsed:!1,layers:m(n,"Legende")},a=new f(e);t.addControl(a,"top-right")}let n;window.addEventListener("DOMContentLoaded",()=>{const t=k();C(t),t.on("load",()=>{[{id:"sourceTransparenzportale",source:P}].forEach(a=>z(t,a)),n=y,n.forEach(a=>$(t,a)),v(t),L(t,n,B)})});
