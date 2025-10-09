import{s as c,j as l,a as d,l as i,i as b,b as p,c as m,d as u}from"../../addControlLayers-DkKEqnNS.js";import{p as h}from"../../popups-BDlfsaYT.js";window.PUBLIC_PATH="/karten_test/";const w=c("maps/ipl/webcam","webcam"),C=[{id:"webcam",group:"Webcam-Bilder",label:"Standorte",source:"sourceWebcam",color:"white"}];function f(t){const{strasse:e,bezeichnung:a,blickrichtung:o,kamera_nr:r,bild:n}=t;return`
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
    `}function g(t){const e={collapsed:!1,layers:d(s,"Legende")},a=new i(e);t.addControl(a,"top-right")}let s;window.addEventListener("DOMContentLoaded",()=>{const t=b();p(t),t.on("load",()=>{[{id:"sourceWebcam",source:w}].forEach(a=>m(t,a)),s=C,s.forEach(a=>u(t,a)),g(t),h(t,s,f)})});
