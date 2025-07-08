import{k as d}from"./addControlLayers-ByBRpLxY.js";import{t as w}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-BxbbOIBs.js";const B={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},$={source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles",label:"Free-Floating-Fahrzeuge",filter:e=>["==",["get","form_factor"],e],color:"#91FFFF"},j={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},c=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],q={NO_REALTIME_DATA:{label:"Station ohne Echtzeitdaten",color:"#615fdf",filter:e=>["all",c,[">=",["get",`num_${e}_available`],0]]},OUTDATED_REALTIME_DATA:{label:"Station mit veralteten Echtzeitdaten",filter:e=>["all",["!",c],["==",["get","realtime_data_outdated"],!0],[">=",["get",`num_${e}_available`],0]],color:"#cacaca"},FREE:{label:"Station mit freien Fahrzeugen",filter:e=>["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],[">",["get",`num_${e}_available`],0]],color:"#fffb05"},OCCUPIED:{label:"Station ohne freie Fahrzeuge",filter:e=>["all",["!",c],["any",["!",["has","realtime_data_outdated"]],["==",["get","realtime_data_outdated"],!1]],["==",["get",`num_${e}_available`],0]],color:"#ffb805"}},y=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],v=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],S=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];async function x(e){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}async function I(e){return fetch(`https://${d}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const n=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(n)}).catch(t=>console.error("Fehler:",t))}function G(e){const{feed_id:t,station_id:n,vehicle_id:i,name:C,capacity:F,num_vehicles_available:h,propulsion_type:r,current_fuel_percent:u,current_range_meters:R,max_range_meters:T,rental_uris_web:s,rental_uris_ios:g,rental_uris_android:l,last_reported:_,realtime_data_outdated:E}=e;let b,p;_&&({date:b,time:p}=w(_));const L=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],M=o(t);let m="";L.forEach(function(a){t.match(a)&&(m+=o(a))});let f="";for(const a in y)t==y[a]&&(f+=y[a]);let z="",D="";for(const a in v)t==v[a]&&(z+=`station_id == '${v[a]}'`);for(const a in S)t==S[a]&&(D+=`vehicle_id == '${S[a]}'`);return setTimeout(()=>{const a=document.getElementById("placeholderStation");a&&x(n).then(k=>{a.setAttribute("href",k)});const A=document.getElementById("placeholderVehicle");A&&I(i).then(k=>{A.setAttribute("href",k)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(m||M)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(C?'<tr>      <td class="att">Name</td>      <td class="attContent">'+C+"</td>    </tr>":"")+(i?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+i+"</td>      </tr>":"")+(n?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+n+"</td>      </tr>":"")+(F?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(F)+"</td>    </tr>":"")+(h?'<td class="att">Verfügbare Fahrzeuge</td>':"")+(t==f?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':h?'<td class="attContent">'+h+"</td>":"")+"</tr><tr>"+(r?'<td class="att">Antriebsart</td>':"")+(r=="electric"?'<td class="attContent">elektrisch</td>':"")+(r=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(r=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(u?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(u*1).toFixed(0)+"%</td>":'<td class="attContent">'+(u*100).toFixed(0)+"%</td>")+"</tr>":"")+(!R||r=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(R/1e3).toFixed(0)+"km</td>    </tr>")+(!T||r=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(T/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!s&&!l&&!g?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(s?'<a href="'+s+'" target="_blank">Web</a>':"")+((!s||!l?"":", ")+(l==null?"":'<a href="'+l+'" target="_blank">Android</a>'))+((l?", ":"")+(g?'<a href="'+g+'" target="_blank">IOS</a>':""))+"</td>")+(!_||t==f?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(E?'<td class="attContent outDated">'+b+", "+p:'<td class="attContent">'+b+", "+p+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(n?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(i?'<td class="attContentLink"><a href="https://'+d+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!n||z?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!i||D?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{j as a,$ as b,q as c,G as p,B as s};
