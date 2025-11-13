import{s as c}from"./addControlLayers-GormjcAr.js";const b=c({format:"mbtiles",file:"count_car"}),t={source:"sourceCountCar",sourceLayer:"countCar",group:"Straßenverkehrszählung"},g=[{id:"countCarTemporary",label:"Temporäre Zählstellen",filter:["case",["<",["zoom"],10],["all",["==",["get","zstart"],"TM"],["==",["get","klasse"],"A"]],["==",["get","zstart"],"TM"]],color:"#7D97DD",...t},{id:"countCarPermanent",label:"Dauerzählstellen",filter:["case",["<",["zoom"],10],["all",["==",["get","zstart"],"DZ"],["==",["get","klasse"],"A"]],["==",["get","zstart"],"DZ"]],color:"#FF5050",...t},{id:"countCarManual",label:"Manuelle Zählstellen",filter:["case",["<",["zoom"],10],["all",["==",["get","zstart"],"MZ"],["==",["get","klasse"],"A"]],["==",["get","zstart"],"MZ"]],color:"#fffb05",...t}];function h(n){const{klasse:u,nummer:o,svznr:e,RI:a,RII:s,DTV2023:r,DTVSV:l,zstart:d}=n;return`
        <table>
            <tr>
                <th class="title">${o}</th>
            </tr>
        </table><br><table>
            ${e==null?"":`
            <tr>
                <td class="att">Zählstellen-Nr.</td>
                <td class="attContent">${e}</td>
            </tr>
            `} 
            ${a==null?"":`
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${a}</td>
            </tr>
            `}
            ${s==null?"":`
            <tr>
                <td class="att">Nach</td>
                <td class="attContent">${s}</td>
            </tr>
            `}
            ${r==null?"":`
            <tr>
                <td class="att">DTV KFZ</td>
                <td class="attContent">${r.toLocaleString()}</td>
            </tr>
            `}
            ${l==null?"":`
            <tr>
                <td class="att">DTV SV</td>
                <td class="attContent">${l.toLocaleString()}</td>
            </tr>
            `}
            <tr>
                <td class="att">Ergebnis aus Jahr</td>
                <td class="attContent">2023</td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/endergebnisse_strassenverkehrszaehlung#daten&ressourcen" target="_blank">&#10149 Endergebnisse der SVZ</a></td>
            </tr>
            ${d=="DZ"?`
            <tr>
                <td class="attContentLink"><a href="https://mobidata-bw.de/dataset/ergebnisse_ganglinien_dauerzaehlstellen#daten&ressourcen" target="_blank">&#10149 Ergebnisse der Dauerzählstellen</a></td>
            </tr><tr>
                <td class="attContentLink"><a href="https://mobidata-bw.de/dataset/stundenwerte_dauerzaehlstellen#daten&ressourcen" target="_blank">&#10149 Stundenwerte der Dauerzählstellen</a></td>
            </tr>
            `:""}
        </table>
    `}export{g as l,h as p,b as s};
