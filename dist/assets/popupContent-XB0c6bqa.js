import{p as d}from"./addControlLayers-jnf1nty0.js";import{t as I}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-DUuaIQn4.js";const j={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},q={source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles",label:"Free-Floating-Fahrzeuge",filter:n=>["==",["get","form_factor"],n],color:"#91FFFF"},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],B={NO_REALTIME_DATA:{label:"Station ohne Echtzeitdaten",filter:c,color:"#615fdf"},OUTDATED_REALTIME_DATA:{label:"Station mit veralteten Echtzeitdaten",filter:["all",["!",c],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca"},FREE:{label:"Station mit freien Fahrzeugen",filter:["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],[">",["get","num_vehicles_available"],0]],color:"#fffb05"},OCCUPIED:{label:"Station ohne freie Fahrzeuge",filter:["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],["==",["get","num_vehicles_available"],0]],color:"#ffb805"}},y=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],v=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],C=["regiorad_stuttgart","callabike","callabike_ice","pickebike_basel","carvelo2go_ch"];async function N(n){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query station {
              station(id: "${n}") {
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}async function V(n){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query vehicle {             
              vehicle(id: "${n}") {
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}function G(n){const{feed_id:t,station_id:a,vehicle_id:r,name:S,capacity:F,num_vehicles_available:h,propulsion_type:i,current_fuel_percent:u,current_range_meters:R,max_range_meters:T,rental_uris_web:s,rental_uris_ios:g,rental_uris_android:l,last_reported:_,realtime_data_outdated:D}=n;let b,p;_&&({date:b,time:p}=I(_));const L=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],x=o(t);let m="";L.forEach(function(e){t.match(e)&&(m+=o(e))});let f="";for(const e in y)t==y[e]&&(f+=y[e]);let z="",A="";for(const e in v)t==v[e]&&(z+=`station_id == '${v[e]}'`);for(const e in C)t==C[e]&&(A+=`vehicle_id == '${C[e]}'`);return setTimeout(()=>{const e=document.getElementById("placeholderStation");e&&N(a).then(k=>{e.setAttribute("href",k)});const E=document.getElementById("placeholderVehicle");E&&V(r).then(k=>{E.setAttribute("href",k)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(m||x)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(S?'<tr>      <td class="att">Name</td>      <td class="attContent">'+S+"</td>    </tr>":"")+(r?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+r+"</td>      </tr>":"")+(a?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+a+"</td>      </tr>":"")+(F?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(F)+"</td>    </tr>":"")+(h?'<td class="att">Verfügbare Fahrzeuge</td>':"")+(t==f?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':h?'<td class="attContent">'+h+"</td>":"")+"</tr><tr>"+(i?'<td class="att">Antriebsart</td>':"")+(i=="electric"?'<td class="attContent">elektrisch</td>':"")+(i=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(i=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(u?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(u*1).toFixed(0)+"%</td>":'<td class="attContent">'+(u*100).toFixed(0)+"%</td>")+"</tr>":"")+(!R||i=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(R/1e3).toFixed(0)+"km</td>    </tr>")+(!T||i=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(T/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!l&&!g?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!l?"":", ")+(l==null?"":'<a href="'+l+'" target="_blank">Android</a>'))+((l?", ":"")+(g?'<a href="'+g+'" target="_blank">IOS</a>':""))+"</td>")+(!_||t==f?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(D?'<td class="attContent outDated">'+b+", "+p:'<td class="attContent">'+b+", "+p+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(a?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(r?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!a||z?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!r||A?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{q as a,B as b,G as p,j as s};
