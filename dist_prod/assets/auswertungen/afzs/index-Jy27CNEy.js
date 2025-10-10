import{s as c,a as h,l as p,i as b,b as z,c as C,d as y}from"../../addControlLayers-oFVf9ecf.js";import{p as n}from"../../popups-Da-3PA5A.js";window.PUBLIC_PATH="/karten/";const _=c("maps/auswertungen/afzs","stations"),L=c("maps/auswertungen/afzs","afzs"),a={source:"sourceAfzs",group:"AFZS",type:"line",lineCap:"round"},t="Querschnitt",r=[{id:"afzs1",label:"unter 1.000",filter:["<",["get",t],1e3],color:"#7692EE",lineWidth:2,...a},{id:"afzs2",label:"1.000 - 2.500",filter:["all",[">",["get",t],1e3],["<=",["get",t],2500]],color:"#6881DD",lineWidth:3,...a},{id:"afzs3",label:"2.500 - 3.750",filter:["all",[">",["get",t],2500],["<=",["get",t],3750]],color:"#5A6FCC",lineWidth:4,...a},{id:"afzs4",label:"3.750 - 5.000",filter:["all",[">",["get",t],3750],["<=",["get",t],5e3]],color:"#4C5EBB",lineWidth:5,...a},{id:"afzs5",label:"5.000 - 7.500",filter:["all",[">",["get",t],5e3],["<=",["get",t],7500]],color:"#3F4CAB",lineWidth:6,...a},{id:"afzs6",label:"7.500 - 10.000",filter:["all",[">",["get",t],7500],["<=",["get",t],1e4]],color:"#313B9A",lineWidth:7,...a},{id:"afzs7",label:"10.000 - 15.000",filter:["all",[">",["get",t],1e4],["<=",["get",t],15e3]],color:"#232989",lineWidth:8,...a},{id:"afzs8",label:"15.000 - 17.500",filter:["all",[">",["get",t],15e3],["<=",["get",t],17500]],color:"#151878",lineWidth:9,...a},{id:"afzs9",label:"über 17.500",filter:[">",["get",t],17500],color:"#070667",lineWidth:10,...a}],i=[{id:"stations",group:"Zentrale Bahnhöfe",label:"Zentrale Bahnhöfe",source:"sourceStations",color:"red",circleRadius:7}];function S(e){const{Von:l,Nach:s,Querschnitt:d,["2025_HJ_1"]:u,["2024_HJ_2"]:f,["2024_HJ_1"]:g}=e;return`
        <table>          
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${l}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${s}</td>           
            </tr>
        </table><br>
        <div class="title title2">Zählung</div>
        <table>
            <tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${d.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2025</td>
                <td class="attContent">${u.toLocaleString()}</td>
            </tr><tr>
                <td class="att">2. Hj. 2024</td>
                <td class="attContent">${f.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2024</td>
                <td class="attContent">${g.toLocaleString()}</td>
            </tr>      
        </table>
    `}function m(e){const{name_2:l}=e;return`
        <table>
            <tr>               
               <th class="title">${l}</th>            
            </tr>       
        </table>
    `}function A(e){const l={collapsed:!1,layers:h(o,"Legende")},s=new p(l);e.addControl(s,"top-right")}let o;window.addEventListener("DOMContentLoaded",()=>{const e=b();z(e,{style:"railway"}),e.on("load",()=>{[{id:"sourceAfzs",source:L},{id:"sourceStations",source:_}].forEach(s=>C(e,s)),o=[...i,...r],o.forEach(s=>y(e,s)),A(e),e.moveLayer("stations"),n(e,i,m),n(e,r,S)})});
