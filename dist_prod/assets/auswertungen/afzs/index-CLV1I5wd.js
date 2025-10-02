import{s as c,a as f,l as h,i as g,b,c as p,d as z}from"../../addControlLayers-BmUhqY7m.js";import{p as r}from"../../popups-aQvfhhdH.js";window.PUBLIC_PATH="/karten/";const C=c("maps/auswertungen/afzs","stations"),y=c("maps/auswertungen/afzs","afzs"),a={source:"sourceAfzs",group:"AFZS",type:"line",lineCap:"round"},t="18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Querschnitt",o=[{id:"afzs1",label:"unter 1.000",filter:["<",["get",t],1e3],color:"#7692EE",lineWidth:2,...a},{id:"afzs2",label:"1.000 - 2.500",filter:["all",[">",["get",t],1e3],["<=",["get",t],2500]],color:"#6881DD",lineWidth:3,...a},{id:"afzs3",label:"2.500 - 3.750",filter:["all",[">",["get",t],2500],["<=",["get",t],3750]],color:"#5A6FCC",lineWidth:4,...a},{id:"afzs4",label:"3.750 - 5.000",filter:["all",[">",["get",t],3750],["<=",["get",t],5e3]],color:"#4C5EBB",lineWidth:5,...a},{id:"afzs5",label:"5.000 - 7.500",filter:["all",[">",["get",t],5e3],["<=",["get",t],7500]],color:"#3F4CAB",lineWidth:6,...a},{id:"afzs6",label:"7.500 - 10.000",filter:["all",[">",["get",t],7500],["<=",["get",t],1e4]],color:"#313B9A",lineWidth:7,...a},{id:"afzs7",label:"10.000 - 15.000",filter:["all",[">",["get",t],1e4],["<=",["get",t],15e3]],color:"#232989",lineWidth:8,...a},{id:"afzs8",label:"15.000 - 17.500",filter:["all",[">",["get",t],15e3],["<=",["get",t],17500]],color:"#151878",lineWidth:9,...a},{id:"afzs9",label:"über 17.500",filter:[">",["get",t],17500],color:"#070667",lineWidth:10,...a}],i=[{id:"stations",group:"Zentrale Bahnhöfe",label:"Zentrale Bahnhöfe",source:"sourceStations",color:"red",circleRadius:7}];function m(e){const{ID:l,["18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Von"]:s,["18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Nach"]:d,["18.06.2025_Querschnittsbelastungen für neue Juranek-Karte_Querschnitt"]:u}=e;return`
        <table>
            <tr>
                <th class="title">${l}</th>            
            </tr>
        </table><br><table>
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${s}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${d}</td>
            </tr><tr>
                <td class="att">Zählung</td>
                <td class="attContent">${u.toLocaleString()}</td>
            </tr>      
        </table>
    `}function A(e){const{name_2:l}=e;return`
        <table>
            <tr>               
               <th class="title">${l}</th>            
            </tr>       
        </table>
    `}function _(e){const l={collapsed:!1,layers:f(n,"Legende")},s=new h(l);e.addControl(s,"top-right"),e.moveLayer("stations")}let n;window.addEventListener("DOMContentLoaded",()=>{const e=g();b(e,{style:"railway"}),e.on("load",()=>{[{id:"sourceAfzs",source:y},{id:"sourceStations",source:C}].forEach(s=>p(e,s)),n=[...i,...o],n.forEach(s=>z(e,s)),_(e),r(e,i,A),r(e,o,m)})});
