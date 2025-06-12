import{t as x}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-VrZ8VehN.js";const M={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},O={source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles",label:"Free-Floating-Fahrzeuge",filter:n=>["==",["get","form_factor"],n],color:"#91FFFF"},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],j={NO_REALTIME_DATA:{label:"Station ohne Echtzeitdaten",filter:c,color:"#615fdf"},OUTDATED_REALTIME_DATA:{label:"Station mit veralteten Echtzeitdaten",filter:["all",["!",c],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca"},FREE:{label:"Station mit freien Fahrzeugen",filter:["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],[">",["get","num_vehicles_available"],0]],color:"#fffb05"},OCCUPIED:{label:"Station ohne freie Fahrzeuge",filter:["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],["==",["get","num_vehicles_available"],0]],color:"#ffb805"}},k=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],y=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],v=["regiorad_stuttgart","callabike","callabike_ice","pickebike_basel","carvelo2go_ch"];async function I(n){return fetch("https://api.mobidata-bw.de/sharing/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}async function N(n){return fetch("https://api.mobidata-bw.de/sharing/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}function q(n){const{feed_id:t,station_id:a,vehicle_id:i,name:C,capacity:S,num_vehicles_available:d,propulsion_type:r,current_fuel_percent:h,current_range_meters:F,max_range_meters:R,rental_uris_web:s,rental_uris_ios:u,rental_uris_android:l,last_reported:g,realtime_data_outdated:E}=n;let _,b;g&&({date:_,time:b}=x(g));const D=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],L=o(t);let p="";D.forEach(function(e){t.match(e)&&(p+=o(e))});let m="";for(const e in k)t==k[e]&&(m+=k[e]);let T="",z="";for(const e in y)t==y[e]&&(T+=`station_id == '${y[e]}'`);for(const e in v)t==v[e]&&(z+=`vehicle_id == '${v[e]}'`);return setTimeout(()=>{const e=document.getElementById("placeholderStation");e&&I(a).then(f=>{e.setAttribute("href",f)});const A=document.getElementById("placeholderVehicle");A&&N(i).then(f=>{A.setAttribute("href",f)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(p||L)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(C?'<tr>      <td class="att">Name</td>      <td class="attContent">'+C+"</td>    </tr>":"")+(i?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+i+"</td>      </tr>":"")+(a?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+a+"</td>      </tr>":"")+(S?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(S)+"</td>    </tr>":"")+(d?'<td class="att">Verfügbare Fahrzeuge</td>':"")+(t==m?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':d?'<td class="attContent">'+d+"</td>":"")+"</tr><tr>"+(r?'<td class="att">Antriebsart</td>':"")+(r=="electric"?'<td class="attContent">elektrisch</td>':"")+(r=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(r=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(h?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(h*1).toFixed(0)+"%</td>":'<td class="attContent">'+(h*100).toFixed(0)+"%</td>")+"</tr>":"")+(!F||r=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(F/1e3).toFixed(0)+"km</td>    </tr>")+(!R||r=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(R/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!l&&!u?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!l?"":", ")+(l==null?"":'<a href="'+l+'" target="_blank">Android</a>'))+((l?", ":"")+(u?'<a href="'+u+'" target="_blank">IOS</a>':""))+"</td>")+(!g||t==m?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(E?'<td class="attContent outDated">'+_+", "+b:'<td class="attContent">'+_+", "+b+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(a?'<td class="attContentLink"><a href="https://api.mobidata-bw.de/sharing/gbfs/'+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(i?'<td class="attContentLink"><a href="https://api.mobidata-bw.de/sharing/gbfs/'+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!a||T?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!i||z?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{O as a,j as b,q as p,M as s};
