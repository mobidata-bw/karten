import{s as c,j as l,a as d,l as i,i as b,b as p,c as m,d as u}from"../../addControlLayers-BbjHMMCy.js";import{p as h}from"../../popups-RbKY9FbN.js";window.PUBLIC_PATH="/karten_dev/";const C=c({format:"geojson",directory:"maps/ipl/webcam",file:"webcam"}),f=[{id:"webcam",group:"Webcam-Bilder",label:"Standorte",source:"sourceWebcam",color:"grey"}];function g(t){const{strasse:e,bezeichnung:a,blickrichtung:o,kamera_nr:r,bild:n}=t;return`
        <table>
            <tr>              
                <th class='title'>${r}</th>
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
                    <td class='attContent'>${o}</td>
            </tr>        
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${l}.mobidata-bw.de/webcam/overview/${n}.jpg" target="_blank">&#10149 Webcam-Bild<a></td>
            </tr>
        </table>    
    `}function w(t){const e={collapsed:!1,layers:d(s,"Legende")},a=new i(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=b();p(t),t.on("load",()=>{[{id:"sourceWebcam",source:C}].forEach(a=>m(t,a)),s=f,s.forEach(a=>u(t,a)),w(t),h(t,s,g)})});
