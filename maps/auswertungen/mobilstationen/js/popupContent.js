export function popupContentOEV(feature) {

    /* INITIALIZE VARIABLES */ 
    const layer = feature.layer;
    const stationId = feature.station_id;
    const stationName = feature.station_name;
      
    /* POPUP CONTENT */        
    return '<table>\
                <tr>' + 
                    ((layer.match('Bus')) ? ('<th class="title">Bushaltestelle</th>') : '') +   
                    ((layer.match('SPNV')) ? ('<th class="title">Bahnhof</th>') : '') +                           
                    ((layer.match('SUBahn')) ? ('<th class="title">Straßen- oder U-Bahn-Haltestelle</th>') : '') +               
                    ((layer.match('Sonderformen')) ? ('<th class="title">Fähranleger</th>') : '') +               
                '</tr>\
            </table><table>\
                <tr>\
                    <td class="att">Name</td>\
                    <td class="attContent">' + stationName + '</td>\
                </tr><tr>\
                    <td class="att">DHID</td>\
                    <td class="attContent">' + stationId + '</td>\
                </tr>\
            </table>';
};

export function popupContentMIV(feature) {

    /* INITIALIZE VARIABLES */ 
    const layer = feature.layer;
    const feedId = feature.feed_id;
    const stationId = feature.station_id;
    const capacity = feature.capacity;
    const chargePointStaticCount = feature.chargepoint_static_count;
    const photoUrl = feature.photo_url;
      
    /* POPUP CONTENT */        
    return '<table>\
                <tr>' +
                    ((layer.match('Parking_Sites_Car')) ? ('<th class="title">Parkplatz</th>') : '') +   
                    ((layer.match('Sharing_Stations_Car')) ? ('<th class="title">Carsharing-Station</th>') : '') +                           
                    ((layer.match('BFRK')) ? ('<th class="title">Taxistellplatz</th>') : '') +               
                    ((layer.match('Charge_Points')) ? ('<th class="title">Ladesäule(n)</th>') : '') +               
                '</tr>\
            </table><table>\
                <tr>' +
                    ((feedId == null) ? '' : ('<td class="att">Feed-ID</td>')) +
                    ((feedId == null) ? '' : ('<td class="attContent">' + feedId + '</td>')) +
                '</tr><tr>' +
                    ((stationId == null) ? '' : ('<td class="att">Stations-ID</td>')) +
                    ((stationId == null) ? '' : ('<td class="attContent">' + stationId + '</td>')) +
                '</tr><tr>' +
                    ((capacity == null) ? '' : ('<td class="att">Anzahl Stellplätze</td>')) +
                    ((capacity == null) ? '' : ('<td class="attContent">' + capacity + '</td>')) +
                '</tr><tr>' +
                    ((chargePointStaticCount == null) ? '' : ('<td class="att">Anzahl Ladepunkte</td>')) +
                    ((chargePointStaticCount == null) ? '' : ('<td class="attContent">' + chargePointStaticCount + '</td>')) +
                '</tr><tr>' +
                    ((photoUrl == null) ? '' : ('<td class="attContentLink"><a href="' + photoUrl + '" target="_blank">&#10149 Foto<a></td>')) +
                '</tr>\
            </table>';
};

export function popupContentFahrrad(feature) {

    /* INITIALIZE VARIABLES */ 
    const layer = feature.layer;
    const feedId = feature.feed_id;
    const stationId = feature.station_id;
    const capacity = feature.capacity;
    const photoUrl = feature.photo_url;
      
    /* POPUP CONTENT */        
    return '<table>\
                <tr>' +
                    ((layer.match('Parking_Sites_Bicycle')) ? ('<th class="title">Fahrradabstellanlage</th>') : '') +   
                    ((layer.match('Sharing_Stations_Bicycle')) ? ('<th class="title">Bikesharing-Station</th>') : '') +        
                    ((layer.match('Sharing_Stations_Cargo_Bicycle')) ? ('<th class="title">Lastenrad-Leihstation</th>') : '') +                       
                '</tr>\
            </table><table>\
                <tr>' +
                    ((feedId == null) ? '' : ('<td class="att">Feed-ID</td>')) +
                    ((feedId == null) ? '' : ('<td class="attContent">' + feedId + '</td>')) +
                '</tr><tr>' +
                    ((stationId == null) ? '' : ('<td class="att">Stations-ID</td>')) +
                    ((stationId == null) ? '' : ('<td class="attContent">' + stationId + '</td>')) +
                '</tr><tr>' +
                    ((capacity == null) ? '' : ('<td class="att">Anzahl Stellplätze</td>')) +
                    ((capacity == null) ? '' : ('<td class="attContent">' + capacity + '</td>')) +
                '</tr><tr>' +
                    ((photoUrl == null) ? '' : ('<td class="attContentLink"><a href="' + photoUrl + '" target="_blank">&#10149 Foto<a></td>')) +
                '</tr>\
            </table>';
};

export function popupContentScooter(feature) {

    /* INITIALIZE VARIABLES */ 
    const layer = feature.layer;
    const stationId = feature.station_id;
    const feedId = feature.feed_id;
    const capacity = feature.capacity;
    const photoUrl = feature.photo_url;
      
    /* POPUP CONTENT */        
    return '<table>\
                <tr>\
                    <th class="title">Scootersharing-Station</th>\
                </tr>\
            </table><table>\
                <tr>' +
                    ((feedId == null) ? '' : ('<td class="att">Feed-ID</td>')) +
                    ((feedId == null) ? '' : ('<td class="attContent">' + feedId + '</td>')) +
                '</tr><tr>' +
                    ((stationId == null) ? '' : ('<td class="att">Stations-ID</td>')) +
                    ((stationId == null) ? '' : ('<td class="attContent">' + stationId + '</td>')) +
                '</tr><tr>' +
                    ((capacity == null) ? '' : ('<td class="att">Anzahl Stellplätze</td>')) +
                    ((capacity == null) ? '' : ('<td class="attContent">' + capacity + '</td>')) +
                '</tr><tr>' +
                    ((photoUrl == null) ? '' : ('<td class="attContentLink"><a href="' + photoUrl + '" target="_blank">&#10149 Foto<a></td>')) +
                '</tr>\
            </table>';
};