import{a as f,l as g,i as C,b as k,c as z,d as $}from"../../addControlLayers-DpI8AOJ_.js";import{s as L}from"../../setFilePath-CKvzmloB.js";import{p as P}from"../../popupImages-BqgrDCos.js";import{p as j}from"../../popups-D19OfOkG.js";window.PUBLIC_PATH="/karten_dev/";const v=L("pmtiles","maps/auswertungen/transparenzportale","transparenzportale"),r={source:"sourceTransparenzportale",sourceLayer:"transparenzportale",group:"Transparenzportale",type:"fill"},y=[{id:"transparenzportale_Land",label:"Nationale Portale",filter:["==",["get","region"],"Land"],color:"#7dc4204d",...r},{id:"transparenzportale_Bundesland",label:"MobiData BW®",filter:["==",["get","region"],"Bundesland"],color:"#0c79bc",...r},{id:"transparenzportale_Verkehrsverbund",label:"Verbundsportale",filter:["==",["get","region"],"Verkehrsverbund"],color:"#d7a4a4",...r},{id:"transparenzportale_Kommune",label:"Kommunale Portale",filter:["==",["get","region"],"Kommune"],color:"#ffc300",...r}];function B(t){const{name:e,portal:a,ÖPNV:o,Sharing:s,Parken:l,Radverkehr:d,Laden:i,Barrierefreiheit:c,Baustellen:p,Verkehrszeichen:u,Verkehrskameras:h,Autoverkehr:b,url:m}=t;return`
        <table>
            <tr>
                ${P({"Baden-Württemberg":"MobiDataBW",Deutschland:"Mobilithek",Frankreich:"transport.data.gouv.fr",Österreich:"data.gv.at",Schweiz:"Open-Data-Plattform Schweiz"}[e]??e)}
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
            ${h=="ja"?'<tr><td class="attContent">Verkehrskameras</td></tr>':""}
            ${b=="ja"?'<tr><td class="attContent">Autoverkehr</td></tr>':""}
        </table><table>
            <tr>
                <td class="attContentLink"><a href="${m}" target="_blank">&#10149 zum Portal</a></td>
            </tr>
        </table>
    `}function V(t){const e={collapsed:!1,layers:f(n,"Legende")},a=new g(e);t.addControl(a,"top-right")}let n;window.addEventListener("DOMContentLoaded",()=>{const t=C();k(t),t.on("load",()=>{[{id:"sourceTransparenzportale",source:v}].forEach(a=>z(t,a)),n=y,n.forEach(a=>$(t,a)),V(t),j(t,n,B)})});
