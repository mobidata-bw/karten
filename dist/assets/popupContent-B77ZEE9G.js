import{k as d}from"./addControlLayers-ByBRpLxY.js";import{t as V}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-BxbbOIBs.js";const G={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},Q={source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles",label:"Free-Floating-Fahrzeug",filter:e=>["==",["get","form_factor"],e],color:"#91FFFF"},U={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],P={NO_REALTIME_DATA:{label:"Station ohne Echtzeitdaten",color:"#615fdf",filter:e=>["all",c,[">=",["get",`num_${e}_available`],0]]},OUTDATED_REALTIME_DATA:{label:"Station mit veralteten Echtzeitdaten",filter:e=>["all",["!",c],["!",["has","num_scooters_standing_available"]],["==",["get","realtime_data_outdated"],!0],[">=",["get",`num_${e}_available`],0]],color:"#cacaca"},FREE:{label:"Station mit freien Fahrzeugen",filter:e=>["all",["!",c],[">",["get",`num_${e}_available`],0],["any",["has","num_scooters_standing_available"],["all",["!",["has","num_scooters_standing_available"]],["==",["get","realtime_data_outdated"],!1]]]],color:"#fffb05"},OCCUPIED:{label:"Station ohne freie Fahrzeuge",filter:e=>["all",["!",c],["==",["get",`num_${e}_available`],0],["any",["has","num_scooters_standing_available"],["all",["!",["has","num_scooters_standing_available"]],["==",["get","realtime_data_outdated"],!1]]]],color:"#ffb805"}},v=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],y=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],k=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];async function O(e){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}async function B(e){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}function W(e){const{feed_id:t,station_id:n,vehicle_id:i,name:S,capacity:C,num_cars_available:A,num_bicycles_available:E,num_scooters_standing_available:L,num_cargo_bicycles_available:M,num_mopeds_available:w,propulsion_type:l,current_fuel_percent:h,current_range_meters:F,max_range_meters:R,rental_uris_web:s,rental_uris_ios:u,rental_uris_android:r,last_reported:_,realtime_data_outdated:x}=e;let g,b;_&&({date:g,time:b}=V(_));const I=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],N=o(t);let m="";I.forEach(function(a){t.match(a)&&(m+=o(a))});let p="";for(const a in v)t==v[a]&&(p+=v[a]);let T="",z="";for(const a in y)t==y[a]&&(T+=`station_id == '${y[a]}'`);for(const a in k)t==k[a]&&(z+=`vehicle_id == '${k[a]}'`);return setTimeout(()=>{const a=document.getElementById("placeholderStation");a&&O(n).then(f=>{a.setAttribute("href",f)});const D=document.getElementById("placeholderVehicle");D&&B(i).then(f=>{D.setAttribute("href",f)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(m||N)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(S?'<tr>      <td class="att">Name</td>      <td class="attContent">'+S+"</td>    </tr>":"")+(i?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+i+"</td>      </tr>":"")+(n?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+n+"</td>      </tr>":"")+(C?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(C)+"</td>    </tr>":"")+(i?"":'<tr>    <td class="att">Verfügbare Fahrzeuge</td>'+(t==p?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':'<td class="attContent">'+(A??E??L??M??w)+"</td>")+"</tr>")+"<tr>"+(l?'<td class="att">Antriebsart</td>':"")+(l=="electric"?'<td class="attContent">elektrisch</td>':"")+(l=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(l=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(h?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(h*1).toFixed(0)+"%</td>":'<td class="attContent">'+(h*100).toFixed(0)+"%</td>")+"</tr>":"")+(!F||l=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(F/1e3).toFixed(0)+"km</td>    </tr>")+(!R||l=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(R/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!r&&!u?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!r?"":", ")+(r==null?"":'<a href="'+r+'" target="_blank">Android</a>'))+((r?", ":"")+(u?'<a href="'+u+'" target="_blank">IOS</a>':""))+"</td>")+(!_||t==p?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(x?'<td class="attContent outDated">'+g+", "+b:'<td class="attContent">'+g+", "+b+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(n?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(i?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!n||T?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!i||z?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{U as a,Q as b,P as c,W as p,G as s};
