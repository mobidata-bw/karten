import{k as c}from"./addControlLayers-ByBRpLxY.js";import{t as N}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-BxbbOIBs.js";const B={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},D={source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles",label:"Free-Floating-Fahrzeuge",filter:n=>["==",["get","form_factor"],n],color:"#91FFFF"},k=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],y=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],C=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];async function I(n){return fetch(`https://${c}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}async function M(n){return fetch(`https://${c}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}function O(n){const{feed_id:t,station_id:a,vehicle_id:r,name:v,capacity:S,num_vehicles_available:d,propulsion_type:s,current_fuel_percent:h,current_range_meters:F,max_range_meters:R,rental_uris_web:l,rental_uris_ios:u,rental_uris_android:i,last_reported:p,realtime_data_outdated:V}=n;let g,b;p&&({date:g,time:b}=N(p));const L=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],w=o(t);let _="";L.forEach(function(e){t.match(e)&&(_+=o(e))});let m="";for(const e in k)t==k[e]&&(m+=k[e]);let x="",z="";for(const e in y)t==y[e]&&(x+=`station_id == '${y[e]}'`);for(const e in C)t==C[e]&&(z+=`vehicle_id == '${C[e]}'`);return setTimeout(()=>{const e=document.getElementById("placeholderStation");e&&I(a).then(f=>{e.setAttribute("href",f)});const T=document.getElementById("placeholderVehicle");T&&M(r).then(f=>{T.setAttribute("href",f)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(_||w)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(v?'<tr>      <td class="att">Name</td>      <td class="attContent">'+v+"</td>    </tr>":"")+(r?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+r+"</td>      </tr>":"")+(a?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+a+"</td>      </tr>":"")+(S?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(S)+"</td>    </tr>":"")+(d?'<td class="att">Verfügbare Fahrzeuge</td>':"")+(t==m?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':d?'<td class="attContent">'+d+"</td>":"")+"</tr><tr>"+(s?'<td class="att">Antriebsart</td>':"")+(s=="electric"?'<td class="attContent">elektrisch</td>':"")+(s=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(s=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(h?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(h*1).toFixed(0)+"%</td>":'<td class="attContent">'+(h*100).toFixed(0)+"%</td>")+"</tr>":"")+(!F||s=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(F/1e3).toFixed(0)+"km</td>    </tr>")+(!R||s=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(R/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!l&&!i&&!u?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(l?'<a href="'+l+'" target="_blank">Web</a>':"")+((!l||!i?"":", ")+(i==null?"":'<a href="'+i+'" target="_blank">Android</a>'))+((i?", ":"")+(u?'<a href="'+u+'" target="_blank">IOS</a>':""))+"</td>")+(!p||t==m?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(V?'<td class="attContent outDated">'+g+", "+b:'<td class="attContent">'+g+", "+b+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(a?'<td class="attContentLink"><a href="https://'+c+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(r?'<td class="attContentLink"><a href="https://'+c+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!a||x?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!r||z?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{D as a,O as p,B as s};
