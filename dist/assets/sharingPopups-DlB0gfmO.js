import{t as w}from"./timeStamps-0NhGikBN.js";import{p as o}from"./popupImages-Cawi32GC.js";import"./paths-kVD327XS.js";const f=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],k=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],y=["regiorad_stuttgart","callabike","callabike_ice","pickebike_basel","carvelo2go_ch"];async function I(i){return fetch("https://api.mobidata-bw.de/sharing/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query station {
              station(id: "${i}") {
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}async function V(i){return fetch("https://api.mobidata-bw.de/sharing/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query vehicle {             
              vehicle(id: "${i}") {
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}function O(i){const{feed_id:t,station_id:a,vehicle_id:n,name:C,capacity:v,num_vehicles_available:c,propulsion_type:r,current_fuel_percent:d,current_range_meters:S,max_range_meters:F,rental_uris_web:l,rental_uris_ios:h,rental_uris_android:s,last_reported:u,realtime_data_outdated:z}=i;let p,b;u&&({date:p,time:b}=w(u));const L=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],N=o(t);let g="";L.forEach(function(e){t.match(e)&&(g+=o(e))});let _="";for(const e in f)t==f[e]&&(_+=f[e]);let R="",x="";for(const e in k)t==k[e]&&(R+=`station_id == '${k[e]}'`);for(const e in y)t==y[e]&&(x+=`vehicle_id == '${y[e]}'`);return setTimeout(()=>{const e=document.getElementById("placeholderStation");e&&I(a).then(m=>{e.setAttribute("href",m)});const T=document.getElementById("placeholderVehicle");T&&V(n).then(m=>{T.setAttribute("href",m)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?o("velospot_publibike"):t.match("herrenberg")?o("Stadt Herrenberg"):"<th>"+(g||N)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(C?'<tr>      <td class="att">Name</td>      <td class="attContent">'+C+"</td>    </tr>":"")+(n?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+n+"</td>      </tr>":"")+(a?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+a+"</td>      </tr>":"")+(v?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(v)+"</td>    </tr>":"")+(c?'<td class="att">Verfügbare Fahrzeuge</td>':"")+(t==_?'<td class="attContent"><i>keine Echtzeitdaten</i></td>':c?'<td class="attContent">'+c+"</td>":"")+"</tr><tr>"+(r?'<td class="att">Antriebsart</td>':"")+(r=="electric"?'<td class="attContent">elektrisch</td>':"")+(r=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(r=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(d?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(d*1).toFixed(0)+"%</td>":'<td class="attContent">'+(d*100).toFixed(0)+"%</td>")+"</tr>":"")+(!S||r=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(S/1e3).toFixed(0)+"km</td>    </tr>")+(!F||r=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(F/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!l&&!s&&!h?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(l?'<a href="'+l+'" target="_blank">Web</a>':"")+((!l||!s?"":", ")+(s==null?"":'<a href="'+s+'" target="_blank">Android</a>'))+((s?", ":"")+(h?'<a href="'+h+'" target="_blank">IOS</a>':""))+"</td>")+(!u||t==_?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(z?'<td class="attContent outDated">'+p+", "+b:'<td class="attContent">'+p+", "+b+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(a?'<td class="attContentLink"><a href="https://api.mobidata-bw.de/sharing/gbfs/'+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(n?'<td class="attContentLink"><a href="https://api.mobidata-bw.de/sharing/gbfs/'+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!a||R?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!n||x?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{O as popupContent};
