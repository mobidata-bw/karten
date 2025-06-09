import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContent(feature) {

    /* INITIALIZE VARIABLES */ 
    const {
        name,
        portal,
        ÖPNV,
        Sharing,
        Parken,
        Radverkehr,
        Laden,
        Barrierefreiheit,
        Baustellen,
        Verkehrszeichen,
        Verkehrskameras,
        Autoverkehr,
        url
    } = feature;  
    
    /* POPUP CONTENT */        
    return '<table>\
                <tr>' + 
                    ((name == 'Baden-Württemberg') ? popupImages('MobiDataBW') : 
                    (name == 'Deutschland') ? popupImages('Mobilithek') :
                    (name == 'Frankreich') ? popupImages('transport.data.gouv.fr') :
                    (name == 'Österreich') ? popupImages('data.gv.at') : 
                    (name == 'Schweiz') ? popupImages('Open-Data-Plattform Schweiz') :               
                    popupImages(name)) +
                '</tr>\
            </table><br><table>\
                <tr>\
                    <td class="att">Portal</td>\
                    <td class="attContent">' + portal + '</td>\
                </tr><tr>\
                    <td class="att">Zuständigkeit</td>\
                    <td class="attContent">' + name + '</td>\
                </tr>\
            </table><br><table>\
                <tr>\
                    <td class="title title2">Datenangebot</td>\
                </tr>' + 
                    ((ÖPNV == 'ja') ? ('<td class="attContent">ÖPNV</td>') : '') +
                '</tr><tr>'+                  
                    ((Sharing == 'ja') ? ('<td class="attContent">Sharing</td>') : '') +
                '</tr><tr>'+        
                    ((Parken == 'ja') ? ('<td class="attContent">Parken</td>') : '') +
                '</tr><tr>'+        
                    ((Radverkehr == 'ja') ? ('<td class="attContent">Radverkehr</td>') : '') +
                '</tr><tr>'+                           
                    ((Laden == 'ja') ? ('<td class="attContent">Laden</td>') : '') +
                '</tr><tr>'+        
                    ((Barrierefreiheit == 'ja') ? ('<td class="attContent">Barrierefreiheit</td>') : '') +
                '</tr><tr>'+        
                    ((Baustellen == 'ja') ? ('<td class="attContent">Baustellen</td>') : '') +
                '</tr><tr>'+        
                    ((Verkehrszeichen == 'ja') ? ('<td class="attContent">Verkehrszeichen</td>') : '') +
                '</tr><tr>'+        
                    ((Verkehrskameras == 'ja') ? ('<td class="attContent">Verkehrskameras</td>') : '') +
                '</tr><tr>'+        
                    ((Autoverkehr == 'ja') ? ('<td class="attContent">Autoverkehr</td>') : '') +
                '</tr>\
            </table><table>\
                <tr>\
                   <td class="attContentLink"><a href="' + url + '" target="_blank">&#10149 zum Portal</a></td>\
                </tr>\
            </table>';
};