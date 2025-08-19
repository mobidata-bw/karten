import{u as n,t as Q}from"./timeStamps-Ch2e562Y.js";import{k as b}from"./addControlLayers-DPvUbLjD.js";import{p as u}from"./popupImages-vWwTjVB0.js";const g=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],C=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],V=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],R=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];let{layerFilter:s}=n();const K={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},X={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},T={subGroup:"Free-Floating-Fahrzeuge",source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles"};function l({id:a,layerGroup:t,layerFilter:r}){return[{id:`sharing${a}_VehiclesOutdatedRealtimeData`,label:"Echzeitdaten älter 30 Minuten",filter:["all",["==",["get","form_factor"],r],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...T,...t},{id:`sharing${a}_VehiclesRealtimeData`,label:"Fahrzeug verfügbar",filter:["all",["==",["get","form_factor"],r],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","realtime_data_outdated"],null]]],color:"#91FFFF",...T,...t}]}const Y=l(n()),Z=l(n({formFactor:"car"})),tt=l(n({formFactor:"bicycle"})),et=l(n({formFactor:"scooter"})),at=l(n({formFactor:"cargo_bicycle"})),nt=l(n({formFactor:"moped"}));s=="scooter"?s="scooters_standing":s=`${s}s`;const _={subGroup:"Stationen",source:"sourceSharingStations",sourceLayer:"sharing_stations"};function c({id:a,layerGroup:t}){return[{id:`sharing${a}_StationsNoRealtimeData`,label:"Echtzeitdaten nicht vorhanden",filter:["all",g,[">=",["get",`num_${s}_available`],0]],color:"#615fdf",..._,...t},{id:`sharing${a}_StationsOutdatedRealtimeData`,label:"Echtzeitdaten älter 30 Minuten",filter:["all",["!",g],[">=",["get",`num_${s}_available`],0],["any",["==",["get","is_virtual_station"],!1],["!",["has","is_virtual_station"]]],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",..._,...t},{id:`sharing${a}_StationsOccupied`,label:"Fahrzeuge verfügbar",filter:["all",["!",g],[">",["get",`num_${s}_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#fffb05",..._,...t},{id:`sharing${a}_StationsFree`,label:"Fahrzeuge nicht verfügbar",filter:["all",["!",g],["==",["get",`num_${s}_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#ffb805",..._,...t}]}const rt=c(n()),it=c(n({formFactor:"car"})),st=c(n({formFactor:"bicycle"})),ot=c(n({formFactor:"scooter"})),lt=c(n({formFactor:"cargo_bicycle"})),ct=c(n({formFactor:"moped"}));async function P(a){return fetch(`https://${b}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query station {
              station(id: "${a}") {
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const r=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(r)}).catch(t=>console.error("Fehler:",t))}async function U(a){return fetch(`https://${b}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
            query vehicle {             
              vehicle(id: "${a}") {
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const r=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(r)}).catch(t=>console.error("Fehler:",t))}function dt(a){const{feed_id:t,station_id:r,vehicle_id:i,name:z,capacity:M,is_virtual_station:$,num_cars_available:O,num_bicycles_available:j,num_scooters_standing_available:E,num_cargo_bicycles_available:I,num_mopeds_available:q,propulsion_type:o,current_fuel_percent:m,current_range_meters:D,max_range_meters:B,rental_uris_web:h,rental_uris_ios:f,rental_uris_android:d,last_reported:p,realtime_data_outdated:L}=a;let y,S;p&&({date:y,time:S}=Q(p));const A=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],G=u(t);let v="";A.forEach(function(e){t.match(e)&&(v+=u(e))});let k="";for(const e in C)t==C[e]&&(k+=C[e]);let w="",x="";for(const e in V)t==V[e]&&(w+=`station_id == '${V[e]}'`);for(const e in R)t==R[e]&&(x+=`vehicle_id == '${R[e]}'`);return setTimeout(()=>{const e=document.getElementById("placeholderStation");e&&P(r).then(F=>{e.setAttribute("href",F)});const N=document.getElementById("placeholderVehicle");N&&U(i).then(F=>{N.setAttribute("href",F)})},0),"<table>                <tr>"+(t=="velospot_ch"||t=="publibike_ch"?u("velospot_publibike"):t.match("herrenberg")?u("Stadt Herrenberg"):"<th>"+(v||G)+"</th>")+'<th class="title">'+t+"</th></tr>    </table><br><table>"+(z?'<tr>      <td class="att">Name</td>      <td class="attContent">'+z+"</td>    </tr>":"")+(i?'<tr>        <td class="att">Fahrzeug-ID</td>        <td class="attContent attContentSharingIds">'+i+"</td>      </tr>":"")+(r?'<tr>        <td class="att">Stations-ID</td>        <td class="attContent attContentSharingIds">'+r+"</td>      </tr>":"")+(M?'<tr>      <td class="att">Kapazität</td>      <td class="attContent">'+parseInt(M)+"</td>    </tr>":"")+(i?"":'<tr>    <td class="att">Verfügbare Fahrzeuge</td>'+(t==k?'<td class="attContent"><i>Echtzeitdaten nicht vorhanden</i></td>':L==!0&&($==!1||!$)?'<td class="attContent"><i>Echtzeitdaten älter 30 Minuten</i></td>':'<td class="attContent">'+(O??j??E??I??q)+"</td>")+"</tr>")+"<tr>"+(o?'<td class="att">Antriebsart</td>':"")+(o=="electric"?'<td class="attContent">elektrisch</td>':"")+(o=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':"")+(o=="human"?'<td class="attContent">ohne Elektrifizierung</td>':"")+"</tr>"+(m?'<tr>      <td class="att">Aktueller Ladestand</td>'+(t=="nextbike_eh"||t=="nextbike_ch"?'<td class="attContent">'+(m*1).toFixed(0)+"%</td>":'<td class="attContent">'+(m*100).toFixed(0)+"%</td>")+"</tr>":"")+(!D||o=="human"?"":'<tr>      <td class="att">Aktuelle Reichweite</td>      <td class="attContent">'+(D/1e3).toFixed(0)+"km</td>    </tr>")+(!B||o=="human"?"":'<tr>      <td class="att">Max. Reichweite</td>      <td class="attContent">'+(B/1e3).toFixed(0)+"km</td>    </tr>")+"<tr>"+(!h&&!d&&!f?"":'<td class="att">Buchung</td>')+('<td class="attContent">'+(h?'<a href="'+h+'" target="_blank">Web</a>':"")+((!h||!d?"":", ")+(d==null?"":'<a href="'+d+'" target="_blank">Android</a>'))+((d?", ":"")+(f?'<a href="'+f+'" target="_blank">IOS</a>':""))+"</td>")+(!p||t==k?"":'<tr>        <td class="att">Stand Echtzeitdaten</td>'+(L?'<td class="attContent outDated">'+y+", "+S:'<td class="attContent">'+y+", "+S+"</td>")+"</tr>")+"</tr>            </table><table>                <tr>"+(r?'<td class="attContentLink"><a href="https://'+b+".mobidata-bw.de/sharing/gbfs/"+t+'/station_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(i?'<td class="attContentLink"><a href="https://'+b+".mobidata-bw.de/sharing/gbfs/"+t+'/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>':"")+(!r||w?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>')+(!i||x?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>')+"</tr>            </table>"}export{K as a,Y as b,et as c,ot as d,it as e,Z as f,tt as g,st as h,at as i,lt as j,nt as k,rt as l,ct as m,dt as p,X as s};
