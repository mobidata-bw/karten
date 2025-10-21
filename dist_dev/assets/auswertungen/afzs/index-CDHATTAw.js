import{s as d,a as g,l as b,i as p,b as C,c as z,d as y}from"../../addControlLayers-PtuRffpj.js";import{p as r}from"../../popups-C572D-0i.js";window.PUBLIC_PATH="/karten_dev/";const L=d({format:"mbtiles",file:"stations"}),_=d({format:"mbtiles",file:"afzs"}),a={source:"sourceAfzs",sourceLayer:"afzs",group:"AFZS",type:"line",lineCap:"round"},t="Querschnitt",i=[{id:"afzs9",label:"über 17.500",filter:[">",["get",t],17500],color:"#070667",lineWidth:10,...a},{id:"afzs8",label:"15.000 - 17.500",filter:["all",[">",["get",t],15e3],["<=",["get",t],17500]],color:"#151878",lineWidth:9,...a},{id:"afzs7",label:"10.000 - 15.000",filter:["all",[">",["get",t],1e4],["<=",["get",t],15e3]],color:"#232989",lineWidth:8,...a},{id:"afzs6",label:"7.500 - 10.000",filter:["all",[">",["get",t],7500],["<=",["get",t],1e4]],color:"#313B9A",lineWidth:7,...a},{id:"afzs5",label:"5.000 - 7.500",filter:["all",[">",["get",t],5e3],["<=",["get",t],7500]],color:"#3F4CAB",lineWidth:6,...a},{id:"afzs4",label:"3.750 - 5.000",filter:["all",[">",["get",t],3750],["<=",["get",t],5e3]],color:"#4C5EBB",lineWidth:5,...a},{id:"afzs3",label:"2.500 - 3.750",filter:["all",[">",["get",t],2500],["<=",["get",t],3750]],color:"#5A6FCC",lineWidth:4,...a},{id:"afzs2",label:"1.000 - 2.500",filter:["all",[">",["get",t],1e3],["<=",["get",t],2500]],color:"#6881DD",lineWidth:3,...a},{id:"afzs1",label:"unter 1.000",filter:["<",["get",t],1e3],color:"#7692EE",lineWidth:2,...a},{id:"afzs0",label:"Ohne Zählung",filter:["==",["get",t],null],color:"black",lineWidth:2,...a}],c=[{id:"stations",group:"Zentrale Bahnhöfe",label:"Zentrale Bahnhöfe",source:"sourceStations",sourceLayer:"stations",color:"red",circleRadius:7}];function m(e){const{Von:s,Nach:l,Querschnitt:o,["2025_HJ_1"]:f,["2024_HJ_2"]:u,["2024_HJ_1"]:h}=e;return`
        <table>    
            ${o==null?`
            <tr>
                <td class="attContent"><i>Zähldaten nicht vorhanden</i></td>
            </tr> 
            `:`     
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${l}</td>           
            </tr>
        </table><br>
        <div class="title title2">Zählung</div>
        <table>
            <tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${o.toLocaleString()}</td>
            </tr><tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${o.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2025</td>
                <td class="attContent">${f.toLocaleString()}</td>
            </tr><tr>
                <td class="att">2. Hj. 2024</td>
                <td class="attContent">${u.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2024</td>
                <td class="attContent">${h.toLocaleString()}</td>
            </tr>   
            `}   
        </table>
    `}function S(e){const{name_2:s}=e;return`
        <table>
            <tr>               
               <th class="title">${s}</th>            
            </tr>       
        </table>
    `}function A(e){const s={collapsed:!1,layers:g(n,"Legende")},l=new b(s);e.addControl(l,"top-right")}let n;window.addEventListener("DOMContentLoaded",()=>{const e=p();C(e,{style:"railway"}),e.on("load",()=>{[{id:"sourceAfzs",source:_},{id:"sourceStations",source:L}].forEach(l=>z(e,l)),n=[...c,...i],n.forEach(l=>y(e,l)),A(e),e.moveLayer("stations"),r(e,c,S),r(e,i,m)})});
