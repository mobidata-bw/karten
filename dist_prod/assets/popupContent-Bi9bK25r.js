import{s as F}from"./addControlLayers-BdCcY69e.js";import{p as A}from"./popupImages-ZUvzB4LB.js";const D=F({format:"mbtiles",file:"count_bicycle"}),g={source:"sourceCountBicycle",sourceLayer:"countBicycle",group:"Fahrradzählstellen"},k=[{id:"countBicycle1",label:"bis 100 Tsd.",filter:["<=",["get","2024_ALL"],1e5],color:"#ffe600",...g},{id:"countBicycle2",label:"100 - 500 Tsd.",filter:["all",[">",["get","2024_ALL"],1e5],["<=",["get","2024_ALL"],5e5]],color:"#f6b500",...g},{id:"countBicycle3",label:"500 Tsd. - 1 Mio.",filter:["all",[">",["get","2024_ALL"],5e5],["<=",["get","2024_ALL"],1e6]],color:"#e78300",...g},{id:"countBicycle4",label:"1 - 2 Mio.",filter:["all",[">",["get","2024_ALL"],1e6],["<=",["get","2024_ALL"],2e6]],color:"#d25000",...g},{id:"countBicycle5",label:"über 2 Mio.",filter:[">",["get","2024_ALL"],2e6],color:"#b70101",...g}];function T(e){const n=document.getElementById("canvas-"+e.counter_site_id),t=n.getContext("2d"),d=2013,b=2024;let i=0;for(let l=d;l<=b;l++)i<e[`${l}_ALL`]&&(i=e[`${l}_ALL`]);const s=n.height,f=n.width,L=15,u=4,r=s-L,_=1.5,C=s-L-_,h=f/13,y=(r-12)/i;if(e.ALL!=0&&e.ALL!=null){t.beginPath(),t.moveTo(1.5,0),t.lineWidth=_,t.lineTo(1.5,r),t.lineTo(f,r),t.stroke();for(let l=d,o=0;l<=b;l++,o++){const m=`${l}_ALL`,a=e[m],x=e[`${b}_ALL`];let p;x>=1e6?p=(a/1e6).toFixed(1):p=(a/1e3).toFixed(0);const $=p.toString().replace(".",","),B="'"+`${l}`.toString().substring(2,5);let c;a<=1e5?c="#ffe600":a>1e5&&a<=5e5?c="#f6b500":a>5e5&&a<=1e6?c="#e78300":a>1e6&&a<=2e6?c="#d25000":a>2e6?c="#b70101":c="#cacaca",t.fillStyle=c,t.fillRect(3+o+o*h,C,h,-e[m]*y),t.font="11px, Arial",t.fillStyle="black",a!=0&&t.fillText($,8+o*1+o*h,r-u-e[m]*y),t.fillText(B,8+o*1+o*h,s)}}else n.remove()}function M(e){const{domain_name:n,counter_site:t,counter_site_id:d,iso_timestamp:b,["2024_ALL"]:i,ALL:s}=e,L=new Date(b).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});let u;i>=1e6?u="Mio.":u="Tsd.";const r=`
        <table id="popupContentTableCountBicycle">
            <tr>
                ${n=="Stadt Freiburg"?A("Stadt Freiburg im Breisgau"):A(n)}
                <th class="title">${t}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Zählstellen-ID</td>
                <td class="attContent">${d}</td>
            </tr><tr>
                <td class="att">Erstzählung</td>
                <td class="attContent">${L}</td>
            </tr>            
        </table>
        ${!s||i<1e3?"":`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in ${u})</td>
            </tr>
        </table><table>
            <tr>
                ${s==0?'<td><i class="attContent">keine Zähldaten</i></td>':""}
        </table>
        
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${d}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>
            <tr>
        </table>
        `}
    `;return i>=1e3&&setTimeout(()=>{T(e)},0),r}export{k as l,M as p,D as s};
