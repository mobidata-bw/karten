import{s as r}from"./addControlLayers-B8v3Vujt.js";const l=r({format:"mbtiles",file:"strassennetz"}),c=r({format:"mbtiles",file:"netzknoten"}),a={source:"sourceStrassennetz",sourceLayer:"strassennetz",type:"line",group:"Straßennetz und Netzknoten",subGroup:"Straßennetz",lineWidth:["interpolate",["linear"],["zoom"],6,2,12,3]},z=[{id:"strassennetz_K",label:"Kreisstraße",color:"#a88f00",filter:["==",["get","StrassenArt"],"K"],...a},{id:"strassennetz_L",label:"Landstraße",color:"#00ff00",filter:["==",["get","StrassenArt"],"L"],...a},{id:"strassennetz_B",label:"Bundesstraße",color:"#0089cd",filter:["==",["get","StrassenArt"],"B"],...a}],d=[{id:"netzknoten",label:"Netzknoten",group:"Straßennetz und Netzknoten",subGroup:"Netzknoten",source:"sourceNetzknoten",sourceLayer:"netzknoten",color:"#e12942",visibility:"none"}];function i(t){const{StrassenName:e,Anfangsnetzknoten:n,Endnetzknoten:s}=t;return`
        <table>
            <tr>
                <th class="title">${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Anfangsnetzknoten</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Endnetzknoten</td>
                <td class="attContent">${s}</td>
            </tr>
        </table>
    `}function u(t){const{NK_Name:e,Netzknoten:n,NKArt:s}=t;return`
        <table>
            <tr>
                <th class="title">${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Netzknoten-ID</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Netzknotenart</td>
                <td class="attContent">${s}</td>
            </tr>
        </table>
        `}export{l as a,z as b,u as c,d as l,i as p,c as s};
