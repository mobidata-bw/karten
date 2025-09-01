import{p as m}from"./popupImages-CL540eOO.js";const Y={type:"geojson",data:"/karten_geojsons/maps/count_bicycle/fahrradzaehler_tageswerten_gesamt.geojson"},d={source:"sourceCountBicycle",group:"Fahrradzählstellen"},w=[{id:"countBicycle1",label:"bis 100 Tsd.",filter:["<=",["get","2024_ALL"],1e5],color:"#ffe600",...d},{id:"countBicycle2",label:"100 - 500 Tsd.",filter:["all",[">",["get","2024_ALL"],1e5],["<=",["get","2024_ALL"],5e5]],color:"#f6b500",...d},{id:"countBicycle3",label:"500 Tsd. - 1 Mio.",filter:["all",[">",["get","2024_ALL"],5e5],["<=",["get","2024_ALL"],1e6]],color:"#e78300",...d},{id:"countBicycle4",label:"1 - 2 Mio.",filter:["all",[">",["get","2024_ALL"],1e6],["<=",["get","2024_ALL"],2e6]],color:"#d25000",...d},{id:"countBicycle5",label:"über 2 Mio.",filter:[">",["get","2024_ALL"],2e6],color:"#b70101",...d}];function B(e){const n=document.getElementById("canvas-"+e.counter_site_id),t=n.getContext("2d"),s=2013,i=2024;let r=0;for(let l=s;l<=i;l++)r<e[`${l}_ALL`]&&(r=e[`${l}_ALL`]);const g=n.height,L=n.width,f=15,A=4,b=g-f,p=1.5,y=g-f-p,u=L/13,_=(b-12)/r;if(e.ALL!=0&&e.ALL!=null){t.beginPath(),t.moveTo(1.5,0),t.lineWidth=p,t.lineTo(1.5,b),t.lineTo(L,b),t.stroke();for(let l=s,o=0;l<=i;l++,o++){const h=`${l}_ALL`,a=e[h],C=(a/1e6).toFixed(2).toString().replace(".",","),x="'"+`${l}`.toString().substring(2,5);let c;a<=1e5?c="#ffe600":a>1e5&&a<=5e5?c="#f6b500":a>5e5&&a<=1e6?c="#e78300":a>1e6&&a<=2e6?c="#d25000":a>2e6?c="#b70101":c="#cacaca",t.fillStyle=c,t.fillRect(3+o+o*u,y,u,-e[h]*_),t.font="11px, Arial",t.fillStyle="black",a!=0&&t.fillText(C,5+o*1+o*u,b-A-e[h]*_),t.fillText(x,8+o*1+o*u,g)}}else n.remove()}function k(e){const{domain_name:n,counter_site:t,counter_site_id:s,ALL:i}=e,r=`
        <table id="popupContentTableCountBicycle">
            <tr>
                ${n=="Stadt Freiburg"?m("Stadt Freiburg im Breisgau"):m(n)}
                <th class="title">${t}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Datengeber</td>
                <td class="attContent">${n}</td>
            </tr><tr>
                <td class="att">Zählstellen-ID</td>
                <td class="attContent">${s}</td>
            </tr>
        </table>
        ${i?`
        <br><table>
            <tr>
                <td class="title title2">Jährliche Zähldaten seit 2013 (in Mio.)</td>
            </tr>
        </table><table>
            <tr>
                ${i==0?'<td><i class="attContent">keine Zähldaten</i></td>':""}
        </table>
        `:""}
        <table>
            <tr>
                <td><canvas class="canvasBar" id="canvas-${s}" width="300" height="100" /></td>
            </tr>
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://www.mobidata-bw.de/dataset/eco-counter-fahrradzahler#daten&ressourcen" target="_blank">&#10149 zu den Daten<a></td>
            <tr>
        </table>
    `;return setTimeout(()=>{B(e)},0),r}export{w as l,k as p,Y as s};
