import{p as A}from"./popupImages-CqKglsTH.js";const Y={type:"geojson",data:"/karten_geojsons/maps/count_bicycle/fahrradzaehler_tageswerten_gesamt.geojson"},u={source:"sourceCountBicycle",group:"Fahrradzählstellen"},w=[{id:"countBicycle1",label:"bis 100 Tsd.",filter:["<=",["get","2024_ALL"],1e5],color:"#ffe600",...u},{id:"countBicycle2",label:"100 - 500 Tsd.",filter:["all",[">",["get","2024_ALL"],1e5],["<=",["get","2024_ALL"],5e5]],color:"#f6b500",...u},{id:"countBicycle3",label:"500 Tsd. - 1 Mio.",filter:["all",[">",["get","2024_ALL"],5e5],["<=",["get","2024_ALL"],1e6]],color:"#e78300",...u},{id:"countBicycle4",label:"1 - 2 Mio.",filter:["all",[">",["get","2024_ALL"],1e6],["<=",["get","2024_ALL"],2e6]],color:"#d25000",...u},{id:"countBicycle5",label:"über 2 Mio.",filter:[">",["get","2024_ALL"],2e6],color:"#b70101",...u}];function F(e){const n=document.getElementById("canvas-"+e.counter_site_id),t=n.getContext("2d"),r=2013,d=2024;let b=0;for(let l=r;l<=d;l++)b<e[`${l}_ALL`]&&(b=e[`${l}_ALL`]);const c=n.height,f=n.width,L=15,g=4,i=c-L,p=1.5,C=c-L-p,h=f/13,y=(i-12)/b;if(e.ALL!=0&&e.ALL!=null){t.beginPath(),t.moveTo(1.5,0),t.lineWidth=p,t.lineTo(1.5,i),t.lineTo(f,i),t.stroke();for(let l=r,o=0;l<=d;l++,o++){const _=`${l}_ALL`,a=e[_],x=e[`${d}_ALL`];let m;x>=1e5?m=(a/1e6).toFixed(2):m=(a/1e3).toFixed(2);const $=m.toString().replace(".",","),B="'"+`${l}`.toString().substring(2,5);let s;a<=1e5?s="#ffe600":a>1e5&&a<=5e5?s="#f6b500":a>5e5&&a<=1e6?s="#e78300":a>1e6&&a<=2e6?s="#d25000":a>2e6?s="#b70101":s="#cacaca",t.fillStyle=s,t.fillRect(3+o+o*h,C,h,-e[_]*y),t.font="11px, Arial",t.fillStyle="black",a!=0&&t.fillText($,5+o*1+o*h,i-g-e[_]*y),t.fillText(B,8+o*1+o*h,c)}}else n.remove()}function k(e){const{domain_name:n,counter_site:t,counter_site_id:r,iso_timestamp:d,["2024_ALL"]:b,ALL:c}=e,L=new Date(d).toLocaleDateString("de-DE",{day:"2-digit",month:"2-digit",year:"numeric"});let g;b>=1e5?g="Mio.":g="Tsd.";const i=`
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
                <td class="attContent">${r}</td>
            </tr><tr>
                <td class="att">Erstzählung</td>
                <td class="attContent">${L}</td>
            </tr>            
        </table>
        ${c?`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in ${g})</td>
            </tr>
        </table><table>
            <tr>
                ${c==0?'<td><i class="attContent">keine Zähldaten</i></td>':""}
        </table>
        `:""}
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${r}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>
            <tr>
        </table>
    `;return setTimeout(()=>{F(e)},0),i}export{w as l,k as p,Y as s};
