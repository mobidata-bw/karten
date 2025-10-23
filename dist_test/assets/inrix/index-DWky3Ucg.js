import{s as f,a as g,l as b,i as x,b as X,c as N,d as P}from"../addControlLayers-Dtjlugl7.js";import{p as h}from"../popups-g8VnNlv9.js";window.PUBLIC_PATH="/karten_test/";const w=f({format:"mbtiles",file:"inrix"}),F={group:"INRIX",type:"line",lineWidth:["interpolate",["linear"],["zoom"],6,1,12,2]},M=[{id:"inrix",label:"Straßenabschnitte",source:"sourceInrix",sourceLayer:"inrix",color:"#C4001F",...F}];function v(t){const{OID:s,XDSegID:a,PreviousXD:r,NextXDSegI:e,FRC:o,RoadNumber:n,RoadName:l,LinearID:c,Country:i,State:$,County:C,District:u,PostalCode:p,Miles:D,Lanes:y,SlipRoad:I,SpecialRoa:L,RoadList:m,Bearing:R,XDGroup:S}=t;return`
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
            ${o==""?"":`
            <tr>
                <td class="att">FRC</td>
                <td class="attContent">${o}</td>               
            </tr>
            `}
            ${n==""?"":`
            <tr>
                <td class="att">RoadNumber</td>
                <td class="attContent">${n}</td>               
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
            ${I==""?"":`
            <tr>
                <td class="att">SlipRoad</td>
                <td class="attContent">${I}</td>               
            </tr>
            `}
            ${L==""?"":`
            <tr>
                <td class="att">SpecialRoa</td>
                <td class="attContent">${L}</td>               
            </tr>
            `}
            ${m==""?"":`
            <tr>
                <td class="att">RoadList</td>
                <td class="attContent">${m}</td>               
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
    `}function z(t){const s={collapsed:!1,layers:g(d,"Legende")},a=new b(s);t.addControl(a,"top-right")}let d;window.addEventListener("DOMContentLoaded",()=>{const t=x();X(t),t.on("load",()=>{[{id:"sourceInrix",source:w}].forEach(a=>N(t,a)),d=M,d.forEach(a=>P(t,a)),z(t),h(t,d,v)})});
