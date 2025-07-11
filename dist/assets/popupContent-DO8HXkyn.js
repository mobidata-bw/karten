import{k as h}from"./addControlLayers-zGzYuezo.js";import{t as B}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-Dq7E4d1E.js";const Q={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},z={subGroup:"Free-Floating-Fahrzeuge",source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles"},P={OUTDATED_REALTIME_DATA:{label:"Echzeitdaten veraltet",filter:e=>["all",["==",["get","form_factor"],e],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...z},REALTIME_DATA:{label:"Fahrzeug verfügbar",filter:e=>["all",["==",["get","form_factor"],e],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","realtime_data_outdated"],null]]],color:"#91FFFF",...z}},W={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],d={subGroup:"Stationen",source:"sourceSharingStations",sourceLayer:"sharing_stations"},J={NO_REALTIME_DATA:{label:"Echtzeitdaten fehlen",filter:e=>["all",c,[">=",["get",`num_${e}_available`],0]],color:"#615fdf",...d},OUTDATED_REALTIME_DATA:{label:"Echtzeitdaten veraltet",filter:e=>["all",["!",c],["!=",["literal",e],"scooters_standing"],["==",["get","realtime_data_outdated"],!0],[">=",["get",`num_${e}_available`],0]],color:"#cacaca",...d},FREE:{label:"Fahrzeuge verfügbar",filter:e=>["all",["!",c],[">",["get",`num_${e}_available`],0],["any",["==",["literal",e],"scooters_standing"],["all",["!=",["literal",e],"scooters_standing"],["==",["get","realtime_data_outdated"],!1]]]],color:"#fffb05",...d},OCCUPIED:{label:"Keine Fahrzeuge",filter:e=>["all",["!",c],["==",["get",`num_${e}_available`],0],["any",["==",["literal",e],"scooters_standing"],["all",["!=",["literal",e],"scooters_standing"],["==",["get","realtime_data_outdated"],!1]]]],color:"#ffb805",...d}},k=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],v=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],S=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];async function G(e){return fetch(`https://${h}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query station {
              station(id: "${e}") {
                id
                name {
                  translation {
                    language
                    value
                  }
                }
                shortName {
                  translation {
                    language
                    value
                  }
                }
                lat
                lon
                region {
                  name
                }
                capacity
                vehicleTypesCapacity {
                  vehicleTypes {
                    id
                    formFactor
                    propulsionType
                    maxRangeMeters
                    name {
                      translation {
                        language
                        value
                      }
                    }
                    returnConstraint
                  }
                  count
                }
                address
                postCode
                rentalMethods
                isValetStation
                isChargingStation
                isVirtualStation
                numVehiclesAvailable
                vehicleTypesAvailable {
                  vehicleType {
                    id
                    formFactor
                    propulsionType
                    maxRangeMeters
                    name {
                      translation {
                        language
                        value
                      }
                    }
                    returnConstraint
                  }
                  count
                }
                numDocksAvailable
                isInstalled
                isRenting
                isReturning
                lastReported
              }
            }
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}async function $(e){return fetch(`https://${h}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query vehicle {             
              vehicle(id: "${e}") {
                id
                lat
                lon
                isReserved
                isDisabled
                vehicleType {
                  id
                  formFactor
                  propulsionType
                  maxRangeMeters
                  name {
                    translation {
                      language
                      value
                    }
                  }
                  returnConstraint
                }
                currentRangeMeters
                currentFuelPercent
              }
            }
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}function K(e){const{feed_id:t,station_id:n,vehicle_id:r,name:C,capacity:F,num_cars_available:L,num_bicycles_available:M,num_scooters_standing_available:I,num_cargo_bicycles_available:V,num_mopeds_available:w,propulsion_type:l,current_fuel_percent:u,current_range_meters:T,max_range_meters:A,rental_uris_web:s,rental_uris_ios:g,rental_uris_android:i,last_reported:_,realtime_data_outdated:x}=e;let b,p;_&&({date:b,time:p}=B(_));const N=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],O=o(t);let f="";N.forEach(function(a){t.match(a)&&(f+=o(a))});let m="";for(const a in k)t==k[a]&&(m+=k[a]);let E="",R="";for(const a in v)t==v[a]&&(E+=`station_id == '${v[a]}'`);for(const a in S)t==S[a]&&(R+=`vehicle_id == '${S[a]}'`);return setTimeout(()=>{const a=document.getElementById("placeholderStation");a&&G(n).then(y=>{a.setAttribute("href",y)});const D=document.getElementById("placeholderVehicle");D&&$(r).then(y=>{D.setAttribute("href",y)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(f||O)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(C?'<tr>      <td class="att">Name</td>      <td class="attContent">'+C+"</td>    </tr>":"")+(r?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+r+"</td>      </tr>":"")+(n?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+n+"</td>      </tr>":"")+(F?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(F)+"</td>    </tr>":"")+(r?"":'<tr>    <td class="att">Verfügbare Fahrzeuge</td>'+(t==m?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':'<td class="attContent">'+(L??M??I??V??w)+"</td>")+"</tr>")+"<tr>"+(l?'<td class="att">Antriebsart</td>':"")+(l=="electric"?'<td class="attContent">elektrisch</td>':"")+(l=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(l=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(u?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(u*1).toFixed(0)+"%</td>":'<td class="attContent">'+(u*100).toFixed(0)+"%</td>")+"</tr>":"")+(!T||l=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(T/1e3).toFixed(0)+"km</td>    </tr>")+(!A||l=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(A/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!i&&!g?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!i?"":", ")+(i==null?"":'<a href="'+i+'" target="_blank">Android</a>'))+((i?", ":"")+(g?'<a href="'+g+'" target="_blank">IOS</a>':""))+"</td>")+(!_||t==m?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(x?'<td class="attContent outDated">'+b+", "+p:'<td class="attContent">'+b+", "+p+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(n?'<td class="attContentLink"><a href="https://'+h+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(r?'<td class="attContentLink"><a href="https://'+h+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!n||E?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!r||R?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{W as a,P as b,J as c,K as p,Q as s};
