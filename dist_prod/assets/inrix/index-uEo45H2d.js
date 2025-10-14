import{s as g,a as b,l as x,i as X,b as f,c as N,d as P}from"../addControlLayers-DfXe2HhN.js";import{p as h}from"../popups-DLguoyzS.js";window.PUBLIC_PATH="/karten/";const w=g("pmtiles","maps/inrix","Germany_Baden_Wurttemberg"),B={group:"INRIX",type:"line",lineWidth:["interpolate",["linear"],["zoom"],6,1,12,2]},F=[{id:"inrix",label:"Straßenabschnitte",source:"sourceInrix",sourceLayer:"inrix",color:"#C4001F",...B}];function G(t){const{OID:s,XDSegID:a,PreviousXD:r,NextXDSegI:e,FRC:n,RoadNumber:o,RoadName:l,LinearID:c,Country:i,State:$,County:C,District:u,PostalCode:p,Miles:D,Lanes:y,SlipRoad:m,SpecialRoa:I,RoadList:L,Bearing:R,XDGroup:S}=t;return`
        <table>
            ${s==""?"":`
            <tr>
                <td class="att">OID</td>
                <td class="attContent">${s}</td>               
            </tr>
            `}
           ${a==""?"":`
            <tr>
                <td class="att">XDSegID</td>
                <td class="attContent">${a}</td>               
            </tr>
            `}
            ${r==""?"":`
            <tr>
                <td class="att">PreviousXD</td>
                <td class="attContent">${r}</td>               
            </tr>
            `}
            ${e==""?"":`
            <tr>
                <td class="att">NextXDSegI</td>
                <td class="attContent">${e}</td>               
            </tr>
            `}
            ${n==""?"":`
            <tr>
                <td class="att">FRC</td>
                <td class="attContent">${n}</td>               
            </tr>
            `}
            ${o==""?"":`
            <tr>
                <td class="att">RoadNumber</td>
                <td class="attContent">${o}</td>               
            </tr>
            `}
            ${l==""?"":`
            <tr>
                <td class="att">RoadName</td>
                <td class="attContent">${l}</td>               
            </tr>
            `}
            ${c==""?"":`
            <tr>
                <td class="att">LinearID</td>
                <td class="attContent">${c}</td>               
            </tr>
            `}
            ${i==""?"":`
            <tr>
                <td class="att">Country</td>
                <td class="attContent">${i}</td>               
            </tr>
            `}
            ${$==""?"":`
            <tr>
                <td class="att">State</td>
                <td class="attContent">${$}</td>               
            </tr>
            `}
            ${C==""?"":`
            <tr>
                <td class="att">County</td>
                <td class="attContent">${C}</td>               
            </tr>
            `}
            ${u==""?"":`
            <tr>
                <td class="att">District</td>
                <td class="attContent">${u}</td>               
            </tr>
            `}
            ${p==""?"":`
            <tr>
                <td class="att">PostalCode</td>
                <td class="attContent">${p}</td>               
            </tr>
            `}
            ${D==""?"":`
            <tr>
                <td class="att">Miles</td>
                <td class="attContent">${D}</td>               
            </tr>
            `}
            ${y==""?"":`
            <tr>
                <td class="att">Lanes</td>
                <td class="attContent">${y}</td>               
            </tr>
            `}
            ${m==""?"":`
            <tr>
                <td class="att">SlipRoad</td>
                <td class="attContent">${m}</td>               
            </tr>
            `}
            ${I==""?"":`
            <tr>
                <td class="att">SpecialRoa</td>
                <td class="attContent">${I}</td>               
            </tr>
            `}
            ${L==""?"":`
            <tr>
                <td class="att">RoadList</td>
                <td class="attContent">${L}</td>               
            </tr>
            `}
            ${R==""?"":`
            <tr>
                <td class="att">Bearing</td>
                <td class="attContent">${R}</td>               
            </tr>
            `}
            ${S==""?"":`
            <tr>
                <td class="att">XDGroup</td>
                <td class="attContent">${S}</td>               
            </tr>
            `}
        </table>
    `}function M(t){const s={collapsed:!1,layers:b(d,"Legende")},a=new x(s);t.addControl(a,"top-right")}let d;window.addEventListener("DOMContentLoaded",()=>{const t=X();f(t),t.on("load",()=>{[{id:"sourceInrix",source:w}].forEach(a=>N(t,a)),d=F,d.forEach(a=>P(t,a)),M(t),h(t,d,G)})});
