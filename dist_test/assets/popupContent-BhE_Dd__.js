import{k as h}from"./addControlLayers-DKa7FfIs.js";import{t as G}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-BT-6NwEU.js";const P={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},L={subGroup:"Free-Floating-Fahrzeuge",source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles"},W={OUTDATED_REALTIME_DATA:{label:"Echzeitdaten älter 30 Minuten",filter:e=>["all",["==",["get","form_factor"],e],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...L},REALTIME_DATA:{label:"Fahrzeug verfügbar",filter:e=>["all",["==",["get","form_factor"],e],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","realtime_data_outdated"],null]]],color:"#91FFFF",...L}},J={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],d={subGroup:"Stationen",source:"sourceSharingStations",sourceLayer:"sharing_stations"},K={NO_REALTIME_DATA:{label:"Echtzeitdaten nicht vorhanden",filter:e=>["all",c,[">=",["get",`num_${e}_available`],0]],color:"#615fdf",...d},OUTDATED_REALTIME_DATA:{label:"Echtzeitdaten älter 30 Minuten",filter:e=>["all",["!",c],[">=",["get",`num_${e}_available`],0],["any",["==",["get","is_virtual_station"],!1],["!",["has","is_virtual_station"]]],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...d},FREE:{label:"Fahrzeuge verfügbar",filter:e=>["all",["!",c],[">",["get",`num_${e}_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#fffb05",...d},OCCUPIED:{label:"Keine Fahrzeuge",filter:e=>["all",["!",c],["==",["get",`num_${e}_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#ffb805",...d}},v=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],k=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],S=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];async function $(e){return fetch(`https://${h}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}async function j(e){return fetch(`https://${h}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}function H(e){const{feed_id:t,station_id:n,vehicle_id:r,name:C,capacity:F,is_virtual_station:T,num_cars_available:I,num_bicycles_available:V,num_scooters_standing_available:w,num_cargo_bicycles_available:x,num_mopeds_available:N,propulsion_type:i,current_fuel_percent:u,current_range_meters:A,max_range_meters:E,rental_uris_web:s,rental_uris_ios:g,rental_uris_android:l,last_reported:_,realtime_data_outdated:R}=e;let b,p;_&&({date:b,time:p}=G(_));const O=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],B=o(t);let m="";O.forEach(function(a){t.match(a)&&(m+=o(a))});let f="";for(const a in v)t==v[a]&&(f+=v[a]);let D="",z="";for(const a in k)t==k[a]&&(D+=`station_id == '${k[a]}'`);for(const a in S)t==S[a]&&(z+=`vehicle_id == '${S[a]}'`);return setTimeout(()=>{const a=document.getElementById("placeholderStation");a&&$(n).then(y=>{a.setAttribute("href",y)});const M=document.getElementById("placeholderVehicle");M&&j(r).then(y=>{M.setAttribute("href",y)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(m||B)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(C?'<tr>      <td class="att">Name</td>      <td class="attContent">'+C+"</td>    </tr>":"")+(r?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+r+"</td>      </tr>":"")+(n?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+n+"</td>      </tr>":"")+(F?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(F)+"</td>    </tr>":"")+(r?"":'<tr>    <td class="att">Verfügbare Fahrzeuge</td>'+(t==f?'<td class="attContent"><i>Echtzeitdaten nicht vorhanden</i></td>':R==!0&&(T==!1||!T)?'<td class="attContent"><i>Echtzeitdaten älter 30 Minuten</i></td>':'<td class="attContent">'+(I??V??w??x??N)+"</td>")+"</tr>")+"<tr>"+(i?'<td class="att">Antriebsart</td>':"")+(i=="electric"?'<td class="attContent">elektrisch</td>':"")+(i=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(i=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(u?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(u*1).toFixed(0)+"%</td>":'<td class="attContent">'+(u*100).toFixed(0)+"%</td>")+"</tr>":"")+(!A||i=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(A/1e3).toFixed(0)+"km</td>    </tr>")+(!E||i=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(E/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!l&&!g?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!l?"":", ")+(l==null?"":'<a href="'+l+'" target="_blank">Android</a>'))+((l?", ":"")+(g?'<a href="'+g+'" target="_blank">IOS</a>':""))+"</td>")+(!_||t==f?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(R?'<td class="attContent outDated">'+b+", "+p:'<td class="attContent">'+b+", "+p+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(n?'<td class="attContentLink"><a href="https://'+h+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(r?'<td class="attContentLink"><a href="https://'+h+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!n||D?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!r||z?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{J as a,W as b,K as c,H as p,P as s};
