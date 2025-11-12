import{s as d,a as g,l as b,i as _,b as p,c as C,d as y}from"../../addControlLayers-CsG2aLBG.js";import{s as o}from"../../setupLayerInteractions-jdYXsfp0.js";window.PUBLIC_PATH="/karten_test/";const Q=d({format:"geojson",directory:"maps/auswertungen/afzs",file:"Querschnittsdaten",generateId:!0}),B=d({format:"geojson",directory:"maps/auswertungen/afzs",file:"zentraleBahnhoefe",generateId:!0}),n={source:"sourceQuerschnittsdaten",group:"AFZS",type:"line",lineCap:"round"},t="22.10.2025_Querschnitt_Querschnitt",i=[{id:"querschnittsdaten9",label:"über 17.500",filter:[">",["get",t],17500],color:"#070667",lineWidth:10,...n},{id:"querschnittsdaten8",label:"15.000 - 17.500",filter:["all",[">",["get",t],15e3],["<=",["get",t],17500]],color:"#151878",lineWidth:9,...n},{id:"querschnittsdaten7",label:"10.000 - 15.000",filter:["all",[">",["get",t],1e4],["<=",["get",t],15e3]],color:"#232989",lineWidth:8,...n},{id:"querschnittsdaten6",label:"7.500 - 10.000",filter:["all",[">",["get",t],7500],["<=",["get",t],1e4]],color:"#313B9A",lineWidth:7,...n},{id:"querschnittsdaten5",label:"5.000 - 7.500",filter:["all",[">",["get",t],5e3],["<=",["get",t],7500]],color:"#3F4CAB",lineWidth:6,...n},{id:"querschnittsdaten4",label:"3.750 - 5.000",filter:["all",[">",["get",t],3750],["<=",["get",t],5e3]],color:"#4C5EBB",lineWidth:5,...n},{id:"querschnittsdaten3",label:"2.500 - 3.750",filter:["all",[">",["get",t],2500],["<=",["get",t],3750]],color:"#5A6FCC",lineWidth:4,...n},{id:"querschnittsdaten2",label:"1.000 - 2.500",filter:["all",[">",["get",t],1e3],["<=",["get",t],2500]],color:"#6881DD",lineWidth:3,...n},{id:"querschnittsdaten1",label:"unter 1.000",filter:["<",["get",t],1e3],color:"#7692EE",lineWidth:2,...n},{id:"afzs0",label:"Ohne Zählung",filter:["==",["get",t],null],color:"black",lineWidth:2,...n}],c=[{id:"zentraleBahnhoefe",group:"Zentrale Bahnhöfe",label:"Zentrale Bahnhöfe",source:"sourceZentraleBahnhoefe",color:"red",circleRadius:7}];function m(e){const{["22.10.2025_Querschnitt_Von"]:a,["22.10.2025_Querschnitt_Nach"]:r,["22.10.2025_Querschnitt_Querschnitt"]:s,["22.10.2025_Querschnitt_1. HJ 2025"]:h,["22.10.2025_Querschnitt_2.HJ 2024"]:u,["22.10.2025_Querschnitt_1.HJ 2024"]:f}=e;return`
        <table>    
            ${s==null?`
            <tr>
                <td class="attContent"><i>Zähldaten nicht vorhanden</i></td>
            </tr> 
            `:`     
            <tr>
                <td class="att">Von</td>
                <td class="attContent">${a}</td>
            </tr><tr>
                <td class="att">Nach</td>
                <td class="attContent">${r}</td>           
            </tr>
        </table><br>
        <div class="title title2">Zählung</div>
        <table>
            <tr>
                <td class="att">Querschnitt</td>
                <td class="attContent">${s.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2025</td>
                <td class="attContent">${h.toLocaleString()}</td>
            </tr><tr>
                <td class="att">2. Hj. 2024</td>
                <td class="attContent">${u.toLocaleString()}</td>
            </tr><tr>
                <td class="att">1. Hj. 2024</td>
                <td class="attContent">${f.toLocaleString()}</td>
            </tr>   
            `}   
        </table>
    `}function L(e){const{name_2:a}=e;return`
        <table>
            <tr>               
               <th class="title">${a}</th>            
            </tr>       
        </table>
    `}function q(e){const a={collapsed:!1,layers:g(l,"Legende")},r=new b(a);e.addControl(r,"top-right")}let l;window.addEventListener("DOMContentLoaded",()=>{const e=_();p(e,{style:"railway"}),e.on("load",()=>{const a=[{id:"sourceQuerschnittsdaten",source:Q},{id:"sourceZentraleBahnhoefe",source:B}];a.forEach(r=>C(e,r)),l=[...c,...i],l.forEach(r=>y(e,r)),q(e),e.moveLayer("zentraleBahnhoefe"),o(e,i,m,a),o(e,c,L)})});
