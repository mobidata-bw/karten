import{s as F}from"./addControlLayers-XyfUgBW8.js";import{p as y}from"./popupImages-U0rohztD.js";const D=F("maps/count_bicycle","fahrradzaehler_tageswerten_gesamt"),g={source:"sourceCountBicycle",group:"Fahrradzählstellen"},k=[{id:"countBicycle1",label:"bis 100 Tsd.",filter:["<=",["get","2024_ALL"],1e5],color:"#ffe600",...g},{id:"countBicycle2",label:"100 - 500 Tsd.",filter:["all",[">",["get","2024_ALL"],1e5],["<=",["get","2024_ALL"],5e5]],color:"#f6b500",...g},{id:"countBicycle3",label:"500 Tsd. - 1 Mio.",filter:["all",[">",["get","2024_ALL"],5e5],["<=",["get","2024_ALL"],1e6]],color:"#e78300",...g},{id:"countBicycle4",label:"1 - 2 Mio.",filter:["all",[">",["get","2024_ALL"],1e6],["<=",["get","2024_ALL"],2e6]],color:"#d25000",...g},{id:"countBicycle5",label:"über 2 Mio.",filter:[">",["get","2024_ALL"],2e6],color:"#b70101",...g}];function T(e){const n=document.getElementById("canvas-"+e.counter_site_id),t=n.getContext("2d"),d=2013,b=2024;let o=0;for(let l=d;l<=b;l++)o<e[`${l}_ALL`]&&(o=e[`${l}_ALL`]);const c=n.height,f=n.width,h=15,u=4,r=c-h,p=1.5,C=c-h-p,L=f/13,A=(r-12)/o;if(e.ALL!=0&&e.ALL!=null){t.beginPath(),t.moveTo(1.5,0),t.lineWidth=p,t.lineTo(1.5,r),t.lineTo(f,r),t.stroke();for(let l=d,s=0;l<=b;l++,s++){const m=`${l}_ALL`,a=e[m],x=e[`${b}_ALL`];let _;x>=1e6?_=(a/1e6).toFixed(1):_=(a/1e3).toFixed(0);const $=_.toString().replace(".",","),B="'"+`${l}`.toString().substring(2,5);let i;a<=1e5?i="#ffe600":a>1e5&&a<=5e5?i="#f6b500":a>5e5&&a<=1e6?i="#e78300":a>1e6&&a<=2e6?i="#d25000":a>2e6?i="#b70101":i="#cacaca",t.fillStyle=i,t.fillRect(3+s+s*L,C,L,-e[m]*A),t.font="11px, Arial",t.fillStyle="black",a!=0&&t.fillText($,8+s*1+s*L,r-u-e[m]*A),t.fillText(B,8+s*1+s*L,c)}}else n.remove()}function z(e){const{domain_name:n,counter_site:t,counter_site_id:d,iso_timestamp:b,["2024_ALL"]:o,ALL:c}=e,h=new Date(b).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});let u;o>=1e6?u="Mio.":u="Tsd.";const r=`
        <table id="popupContentTableCountBicycle">
            <tr>
                ${n=="Stadt Freiburg"?y("Stadt Freiburg im Breisgau"):y(n)}
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
                <td class="attContent">${h}</td>
            </tr>            
        </table>
        ${!c||o<1e3?"":`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in ${u})</td>
            </tr>
        </table><table>
            <tr>
                ${c==0?'<td><i class="attContent">keine Zähldaten</i></td>':""}
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
    `;return o>=1e3&&setTimeout(()=>{T(e)},0),r}export{k as l,z as p,D as s};
