import{s as c,k as l,a as d,l as i,i as b,b as m,c as p,d as u}from"../../addControlLayers-BdCcY69e.js";import{s as h}from"../../setupLayerInteractions-BnLOBWbE.js";window.PUBLIC_PATH="/karten/";const C=c({format:"geojson",directory:"maps/ipl/webcam",file:"webcam"}),f=[{id:"webcam",group:"Webcam-Bilder",label:"Standorte",source:"sourceWebcam",color:"grey"}];function g(t){const{strasse:e,bezeichnung:a,blickrichtung:r,kamera_nr:o,bild:n}=t;return`
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
    `}function w(t){const e={collapsed:!1,layers:d(s,"Legende")},a=new i(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=b();m(t),t.on("load",()=>{[{id:"sourceWebcam",source:C}].forEach(a=>p(t,a)),s=f,s.forEach(a=>u(t,a)),w(t),h(t,s,g)})});
