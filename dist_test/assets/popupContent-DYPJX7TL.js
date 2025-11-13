import{s as k}from"./addControlLayers-GormjcAr.js";import{p as x}from"./popupImages-BVNlJ7JA.js";const M=k({format:"mbtiles",file:"count_bicycle"}),u={source:"sourceCountBicycle",sourceLayer:"countBicycle",group:"Fahrradzählstellen"},z=[{id:"countBicycle1",label:"bis 100 Tsd.",filter:["<=",["get","2024_ALL"],1e5],color:"#ffe600",...u},{id:"countBicycle2",label:"100 - 500 Tsd.",filter:["all",[">",["get","2024_ALL"],1e5],["<=",["get","2024_ALL"],5e5]],color:"#f6b500",...u},{id:"countBicycle3",label:"500 Tsd. - 1 Mio.",filter:["all",[">",["get","2024_ALL"],5e5],["<=",["get","2024_ALL"],1e6]],color:"#e78300",...u},{id:"countBicycle4",label:"1 - 2 Mio.",filter:["all",[">",["get","2024_ALL"],1e6],["<=",["get","2024_ALL"],2e6]],color:"#d25000",...u},{id:"countBicycle5",label:"über 2 Mio.",filter:[">",["get","2024_ALL"],2e6],color:"#b70101",...u}];function v(e){const n=document.getElementById("canvas-"+e.counter_site_id),t=n.getContext("2d"),r=2013,d=2024;let c=0;for(let l=r;l<=d;l++)c<e[`${l}_ALL`]&&(c=e[`${l}_ALL`]);const o=n.height,L=n.width,g=15,b=4,s=o-g,_=1.5,$=o-g-_,h=L/13,y=(s-12)/c;if(e.ALL!=0&&e.ALL!=null){t.beginPath(),t.moveTo(1.5,0),t.lineWidth=_,t.lineTo(1.5,s),t.lineTo(L,s),t.stroke();for(let l=r,f=0;l<=d;l++,f++){const m=`${l}_ALL`,a=e[m],B=e[`${d}_ALL`];let p;B>=1e6?p=(a/1e6).toFixed(1):p=(a/1e3).toFixed(0);const F=p.toString().replace(".",","),T="'"+`${l}`.toString().substring(2,5);let i;switch(!0){case a<=1e5:i="#ffe600";break;case(a>1e5&&a<=5e5):i="#f6b500";break;case(a>5e5&&a<=1e6):i="#e78300";break;case(a>1e6&&a<=2e6):i="#d25000";break;case a>2e6:i="#b70101";break}t.fillStyle=i;const A=3+f+f*h;t.fillRect(A,$,h,-e[m]*y),t.font="11px, Arial",t.fillStyle="black",t.textAlign="center";const C=A+h/2;a!=0&&t.fillText(F,C,s-b-e[m]*y),t.fillText(T,C,o)}}else n.remove()}function H(e){const{domain_name:n,counter_site:t,counter_site_id:r,iso_timestamp:d,["2024_ALL"]:c,ALL:o}=e,g=new Date(d).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});let b;c>=1e6?b="Mio.":b="Tsd.";const s=`
        <table id="popupContentTableCountBicycle">
            <tr>
                ${n=="Stadt Freiburg"?x("Stadt Freiburg im Breisgau"):x(n)}
                <th class="title">${t}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Zählstellen-ID</td>
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Erstzählung</td>
                <td class="attContent">${g}</td>
            </tr>            
        </table>
        ${!o||c<1e3?"":`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in ${b})</td>
            </tr>
        </table><table>
            <tr>
                ${o==0?'<td><i class="attContent">keine Zähldaten</i></td>':""}
        </table>
        
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${r}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>
            <tr>
        </table>
        `}
    `;return c>=1e3&&setTimeout(()=>{v(e)},0),s}export{z as l,H as p,M as s};
