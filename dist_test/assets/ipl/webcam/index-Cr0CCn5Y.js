import{s as c,j as l,a as d,l as i,i as b,b as m,c as p,d as u}from"../../addControlLayers-D5roa0l2.js";import{p as h}from"../../popups-CV_HI68r.js";window.PUBLIC_PATH="/karten_test/";const C=c("maps/ipl/webcam","webcam"),w=[{id:"webcam",group:"Webcam-Bilder",label:"Standorte",source:"sourceWebcam",color:"black"}];function g(t){const{strasse:e,bezeichnung:a,blickrichtung:o,kamera_nr:r,bild:n}=t;return`
        <table>
            <tr>              
                <th class='title'>${e}</th>
            </tr>
        </table><br><table>
            <tr>
                <td class='att'>Kamera-Nummer</td>
                <td class='attContent'>${r}</td>
            </tr><tr>
                <td class='att'>Bezeichnung</td>
                <td class='attContent'>${a}</td>
            </tr><tr>
                    <td class='att'>Blickrichtung</td>
                    <td class='attContent'>${o}</td>
            </tr>        
        </table><table>
            <tr>
                <td class="attContentLink"><a href="https://${l}.mobidata-bw.de/webcam/overview/${n}.jpg" target="_blank">&#10149 Webcam-Bild<a></td>
            </tr>
        </table>    
    `}function f(t){const e={collapsed:!1,layers:d(s,"Legende")},a=new i(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=b();m(t),t.on("load",()=>{[{id:"sourceWebcam",source:C}].forEach(a=>p(t,a)),s=w,s.forEach(a=>u(t,a)),f(t),h(t,s,g)})});
