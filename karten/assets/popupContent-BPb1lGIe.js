const o={type:"raster",layer:"MobiData-BW:roadworks"},c=[{id:"roadworks",label:"Baustellen",group:"Baustellen",type:"raster",source:"sourceRoadworks",layer:"MobiData-BW:roadworks",style:"mdbw_traffic_roadworks_default"}];function u(l){const{street:e,direction:t,type:a,subtype:d,starttime:s,endtime:r,description:n}=l;return`
        <table>
            <tr>
                ${e==null?"":`<th class="title">${e}</th>`}
            </tr>
        </table><br><table>
            <tr>
                ${t==null?"":'<td class="att">Richtung</td>'}
                ${t=="BOTH_DIRECTIONS"?'<td class="attContent">Beide Richtungen</td>':""}
                ${t=="ONE_DIRECTION"?'<td class="attContent">Eine Richtung</td>':""}
            </tr><tr>
                ${a==null?"":'<td class="att">Einschränkung</td>'}
                ${d=="ROAD_CLOSED_CONSTRUCTION"?'<td class="attContent">Straße gesperrt wegen Bauarbeiten</td>':`
                    ${a=="ROAD_CLOSED"?'<td class="attContent">Straße gesperrt</td>':""}
                    ${a=="CONSTRUCTION"?'<td class="attContent">Bauarbeiten</td>':""}
                `}
            </tr>
            ${s==null?"":`
            <tr>
                <td class="att">Beginn</td>
                <td class="attContent">${s}</td>
            </tr>
            `}
            ${r==null?"":`
            <tr>
                <td class="att">Ende</td>
                <td class="attContent">${r}</td>
            </tr>
            `} 
            ${n==null?"":`
            <tr>
                <td class="att">Beschreibung</td>
                <td class="attContent">${n}</td>
            </tr>
            `}
        </table>
    `}export{c as l,u as p,o as s};
