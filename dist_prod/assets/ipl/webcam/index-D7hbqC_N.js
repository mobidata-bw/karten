import{s as c,j as l,a as d,l as i,i as b,b as m,c as u,d as p}from"../../addControlLayers-DKHA6mON.js";window.PUBLIC_PATH="/karten/";const h=c({format:"geojson",directory:"maps/ipl/webcam",file:"webcam"}),C=[{id:"webcam",group:"Webcam-Bilder",label:"Standorte",source:"sourceWebcam",color:"grey"}];function g(t){const{strasse:e,bezeichnung:a,blickrichtung:r,kamera_nr:o,bild:n}=t;return`
        <table>
            <tr>              
                <th class='title'>${o}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class='att'>Straße</td>
                <td class='attContent'>${e}</td>
            </tr><tr>
                <td class='att'>Standort</td>
                <td class='attContent'>${a}</td>
            </tr><tr>
                    <td class='att'>Richtung</td>
                    <td class='attContent'>${r}</td>
            </tr>        
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${l}.mobidata-bw.de/webcam/overview/${n}.jpg" target="_blank">&#10149 Webcam-Bild<a></td>
            </tr>
        </table>    
    `}function w(t){const e={collapsed:!1,layers:d(s,"Legende")},a=new i(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=b();m(t),t.on("load",()=>{[{id:"sourceWebcam",source:h}].forEach(a=>u(t,a)),s=C,s.forEach(a=>p(t,a)),w(t),setupLayerInteractions(t,s,g)})});
