import { popupImages } from '../../../../src/js/popupImages.js';


export function popupContentOnStreet(feature) {

    /* INITIALIZE VARIABLES */ 
    const {
        Layer1,
        Layer2,
        Parkwinkel,
        length,
        Straßenseite,
        Zahlungszeitraum,
        Höchstparkdauer,
        Details

    } = feature;

    /* POPUP CONTENT */   
    return '<table>\
                <tr>' + 
                    popupImages('Stadt Friedrichshafen') +
                    ((Layer2 == null) ? ('<th class="title">' + Layer1 + '</th>') : ('<th class="title">' + Layer2 + '</th>')) +
                '</tr>\
            </table><br><table>\
                <tr>' + 
                    ((Parkwinkel == null || Parkwinkel == 'no_parking') ? '' :('<td class="att">Geschätzte Anzahl</td>')) + 
                    ((Parkwinkel == 'perpendicular') ? ('<td class="attContent">' + Math.round(length / 2.5) + '</td>') : '') +
                    ((Parkwinkel == 'parallel') ? ('<td class="attContent">' + Math.round(length / 5) + '</td>') : '') +
                    ((Parkwinkel == 'diagonal') ? ('<td class="attContent">' + Math.round(length / 3) + '</td>') : '') +
                '</tr><tr>' +
                    ((Parkwinkel == null || Parkwinkel == 'no_parking') ? '' : ('<td class="att">Parkwinkel</td>')) +
                    ((Parkwinkel == 'perpendicular') ? ('<td class="attContent">quer</td>') : '') + 
                    ((Parkwinkel == 'parallel') ? ('<td class="attContent">längs</td>') : '') +  
                    ((Parkwinkel == 'diagonal') ? ('<td class="attContent">schräg</td>') : '') +                      
                '</tr><tr>' +
                    ((Straßenseite == null) ? '' : ('<td class="att">Straßenseite</td>')) +
                    ((Straßenseite == 'right') ? '' : ('<td class="attContent">rechts</td>')) + 
                    ((Straßenseite == 'left') ? '' : ('<td class="attContent">links</td>')) + 
                '</tr><tr>' +
                    ((Zahlungszeitraum == null) ? '' : ('<td class="att">Zahlungszeitraum</td>')) +
                    ((Zahlungszeitraum == null) ? '' : ('<td class="attContent">' + Zahlungszeitraum + '</td>')) + 
                '</tr><tr>' +
                    ((Höchstparkdauer == null) ? '' : ('<td class="att">Höchstparkdauer</td>')) +
                    ((Höchstparkdauer == null) ? '' : ('<td class="attContent">' + Höchstparkdauer + '</td>')) + 
                '</tr><tr>' +
                    ((Details == null) ? '' : ('<td class="att">Details</td>')) +
                    ((Details == null) ? '' : ('<td class="attContent">' + Details + '</td>')) + 
                '</tr>\
            </table>';
};

export function popupContentTaxis() {
       
    return '<table>\
                <tr>\
                    <th class="title">Taxistand</th>\
                </tr>\
            </table>'
 };

// function popupContentTableParkingMachine(feature) {

//     /* INITIALIZE VARIABLES */ 
//     const streetName = feature.streetname;
//     const streetSide = feature.street_side;
 
//     /* POPUP CONTENT */          
//     return '<table>\
//                 <tr>\
//                     <th class="title">' + streetName + '</th>\
//                 </tr>\
//             </table><br><table>\
//                 <tr>\
//                     <td class="att">street_side</td>\
//                     <td class="attContent">' + streetSide + '</td>\
//                 </tr>\
//              </table>';
//  };

//  function popupContentTableOffStreet(feature) {

//     /* INITIALIZE VARIABLES */ 
//     const streetName = feature.streetname;
//     const streetSide = feature.street_side; 
//     /* POPUP CONTENT */    
       
//     return '<table>\
//                 <tr>\
//                     <th class="title">' + feature.name + '</th>\
//                 </tr>\
//             </table><br><table>\
//                 <tr>\
//                     <td class="att">capacity</td>\
//                     <td class="attContent">' + feature.capacity + '</td>\
//                 </tr><tr>\
//                     <td class="att">description</td>\
//                     <td class="attContent">' + feature.description + '</td>\
//                 </tr>\
//             </table>';
//  };

//  function popupContentTableEVChargingStation(feature) {
       
//     return '<table>\
//                 <tr>\
//                     <th class="title">' + feature.streetname + '</th>\
//                 </tr>\
//             </table><br><table>\
//                 <tr>\
//                     <td class="att">street_side</td>\
//                     <td class="attContent">' + feature.street_side + '</td>\
//                 </tr><tr>\
//                     <td class="att">source</td>\
//                     <td class="attContent">' + feature.source + '</td>\
//                  </tr><tr>\
//                     <td class="att">comment</td>\
//                     <td class="attContent">' + feature.comment + '</td>\
//                 </tr>\
//             </table>';
//  };