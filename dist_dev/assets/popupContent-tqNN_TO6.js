import{u as r,t as G}from"./timeStamps-DV8Kc6Rw.js";import{k as u}from"./addControlLayers-DdHOxOpH.js";import{p as c}from"./popupImages-CL540eOO.js";const d=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],k=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],C=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],F=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];r();const H={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},K={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},N={subGroup:"Free-Floating-Fahrzeuge",source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles"};function o({id:n,layerGroup:t,layerFilter:e}){return[{id:`sharing${n}_VehiclesOutdatedRealtimeData`,label:"Echzeitdaten älter 30 Minuten",filter:["all",["==",["get","form_factor"],e],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...N,...t},{id:`sharing${n}_VehiclesRealtimeData`,label:"Fahrzeug verfügbar",filter:["all",["==",["get","form_factor"],e],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","realtime_data_outdated"],null]]],color:"#91FFFF",...N,...t}]}const X=o(r()),Y=o(r({formFactor:"car"})),Z=o(r({formFactor:"bicycle"})),tt=o(r({formFactor:"scooter"})),et=o(r({formFactor:"cargo_bicycle"})),at=o(r({formFactor:"moped"})),h={subGroup:"Stationen",source:"sourceSharingStations",sourceLayer:"sharing_stations"};function l({id:n,layerGroup:t,layerFilter:e}){return[{id:`sharing${n}_StationsNoRealtimeData`,label:"Echtzeitdaten nicht vorhanden",filter:["all",d,[">=",["get",`num_${e}s_available`],0]],color:"#615fdf",...h,...t},{id:`sharing${n}_StationsOutdatedRealtimeData`,label:"Echtzeitdaten älter 30 Minuten",filter:["all",["!",d],[">=",["get",`num_${e}s_available`],0],["any",["==",["get","is_virtual_station"],!1],["!",["has","is_virtual_station"]]],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",...h,...t},{id:`sharing${n}_StationsOccupied`,label:"Fahrzeuge verfügbar",filter:["all",["!",d],[">",["get",`num_${e}s_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#fffb05",...h,...t},{id:`sharing${n}_StationsFree`,label:"Fahrzeuge nicht verfügbar",filter:["all",["!",d],["==",["get",`num_${e}s_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#ffb805",...h,...t}]}const nt=l(r()),rt=l(r({formFactor:"car"})),it=l(r({formFactor:"bicycle"})),st=l(r({formFactor:"scooter"})),ot=l(r({formFactor:"cargo_bicycle"})),lt=l(r({formFactor:"moped"}));async function Q(n){return fetch(`https://${u}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(e)}).catch(t=>console.error("Fehler:",t))}async function P(n){return fetch(`https://${u}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(e)}).catch(t=>console.error("Fehler:",t))}function ct(n){const{feed_id:t,station_id:e,vehicle_id:i,name:V,capacity:R,is_virtual_station:z,num_cars_available:T,num_bicycles_available:O,num_scooters_standing_available:j,num_cargo_bicycles_available:E,num_mopeds_available:I,propulsion_type:s,current_fuel_percent:g,current_range_meters:M,max_range_meters:B,rental_uris_web:_,rental_uris_ios:b,rental_uris_android:m,last_reported:f,realtime_data_outdated:D}=n;let p,$;f&&({date:p,time:$}=G(f));const q=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],A=c(t);let S="";q.forEach(function(a){t.match(a)&&(S+=c(a))});let y="";for(const a in k)t==k[a]&&(y+=k[a]);let L="",w="";for(const a in C)t==C[a]&&(L+=`station_id == '${C[a]}'`);for(const a in F)t==F[a]&&(w+=`vehicle_id == '${F[a]}'`);return setTimeout(()=>{const a=document.getElementById("placeholderStation");a&&Q(e).then(v=>{a.setAttribute("href",v)});const x=document.getElementById("placeholderVehicle");x&&P(i).then(v=>{x.setAttribute("href",v)})},0),`
    <table>
      <tr>
        ${t=="velospot_ch"||t=="publibike_ch"?c("velospot_publibike"):t.match("herrenberg")?c("Stadt Herrenberg"):`<th>${S||A}</th>`}
        <th class="title">${t}</th>
      </tr>
    </table><br><table>
      ${V?`
      <tr>
        <td class="att">Name</td>
        <td class="attContent">${V}</td>
      </tr>
      `:""}
      ${i?`
      <tr>
        <td class="att">Fahrzeug-ID</td>
        <td class="attContent attContentSharingIds">${i}</td>
      </tr>
      `:""}
      ${e?`
      <tr>
        <td class="att">Stations-ID</td>
        <td class="attContent attContentSharingIds">${e}</td>
      </tr>
      `:""}
      ${R?`
      <tr>
        <td class="att">Kapazität</td>
        <td class="attContent">${parseInt(R)}</td>
      </tr>
      `:""}
      ${i?"":`
      <tr>
        <td class="att">Verfügbare Fahrzeuge</td>
        ${t==y?'<td class="attContent"><i>Echtzeitdaten nicht vorhanden</i></td>':D==!0&&(z==!1||!z)?'<td class="attContent"><i>Echtzeitdaten älter 30 Minuten</i></td>':`<td class="attContent">${T??O??j??E??I}</td>`}
      </tr>
      `}
      <tr>
        ${s?'<td class="att">Antriebsart</td>':""}
        ${s=="electric"?'<td class="attContent">elektrisch</td>':""}
        ${s=="electric_assist"?'<td class="attContent">elektrische Unterstützung</td>':""}
        ${s=="human"?'<td class="attContent">ohne Elektrifizierung</td>':""}
      </tr>
      ${g?`
      <tr>
        <td class="att">Aktueller Ladestand</td>
        ${t=="nextbike_eh"||t=="nextbike_ch"?`<td class="attContent">${(g*1).toFixed(0)}%</td>`:`<td class="attContent">${(g*100).toFixed(0)}%</td>`}
      </tr>
      `:""}
      ${!M||s=="human"?"":`
      <tr>
        <td class="att">Aktuelle Reichweite</td>
        ${`<td class="attContent">${(M/1e3).toFixed(0)}km</td>`}
      </tr>
      `}      
      ${!B||s=="human"?"":`
      <tr>
        <td class="att">Max. Reichweite</td>
        ${`<td class="attContent">${(B/1e3).toFixed(0)}km</td>`}
      </tr>
      `}
      <tr>
      ${!_&&!m&&!b?"":'<td class="att">Buchung</td>'}
        <td class="attContent">
        ${[_?`<a href="${_}" target="_blank">Web</a>`:"",m==null?"":`<a href="${m}" target="_blank">Android</a>`,b?`<a href="${b}" target="_blank">IOS</a>`:""].filter(Boolean).join(", ")}
        </td>
      </tr>
      ${!f||t==y?"":`
      <tr>
        <td class="att">Stand Echtzeitdaten</td>
        ${D?`<td class="attContent outDated">${p}, ${$}</td>`:`<td class="attContent">${p}, ${$}</td>`}
      </tr>
      `}
    </table><table>
      <tr>
        ${e?`<td class="attContentLink"><a href="https://${u}.mobidata-bw.de/sharing/gbfs/${t}/station_status" target="_blank">&#10149 GBFS-Feed<a></td>`:""}
        ${i?`<td class="attContentLink"><a href="https://${u}.mobidata-bw.de/sharing/gbfs/${t}/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>`:""}
        ${!e||L?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>'}
        ${!i||w?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>'}
      </tr>
    </table>
  `}export{H as a,X as b,tt as c,st as d,rt as e,Y as f,Z as g,it as h,et as i,ot as j,at as k,nt as l,lt as m,ct as p,K as s};
