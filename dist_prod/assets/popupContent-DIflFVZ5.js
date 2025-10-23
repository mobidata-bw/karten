import{u as i,t as G}from"./timeStamps-CJ2Ek9ou.js";import{j as u}from"./addControlLayers-B8v3Vujt.js";import{p as c}from"./popupImages-C83DM7eO.js";const d=["any",["==",["get","feed_id"],"oekostadt_renningen"],["==",["get","feed_id"],"gruene-flotte_freiburg"],["==",["get","feed_id"],"swu2go"],["==",["get","feed_id"],"conficars_ulm"],["==",["get","feed_id"],"naturenergie_sharing"],["==",["get","feed_id"],"coono"],["match",["slice",["get","feed_id"],0,10],"stadtmobil",!0,!1],["match",["slice",["get","feed_id"],0,8],"teilauto",!0,!1]],k=["stadtmobil_stuttgart","stadtmobil_karlsruhe","stadtmobil_suedbaden","stadtmobil_rhein-neckar","teilauto_neckar-alb","teilauto_biberach","oekostadt_renningen","gruene-flotte_freiburg","swu2go","conficars_ulm","naturenergie_sharing","coono"],C=["regiorad_stuttgart","callabike","callabike_ice","zeo_bruchsal","publibike_ch","velospot_ch","share_birrer_ch","zem_ch","edrivecarsharing_ch","mulhouse","nancy","mobility_ch"],F=["regiorad_stuttgart","callabike","callabike_ice","carvelo2go_ch"];i();const H={layer:"MobiData-BW:sharing_vehicles",style:"MobiData-BW:mdbw_sharing_vehicles_default",bounds:[4,45.8,13.5,54.6]},K={layer:"MobiData-BW:sharing_stations",style:"MobiData-BW:mdbw_sharing_stations_default",bounds:[4,45.8,13.5,54.6]},N={subGroup:"Free-Floating-Fahrzeuge",source:"sourceSharingVehicles",sourceLayer:"sharing_vehicles"};function o({id:e,layerGroup:t,layerFilter:a}){return[{id:`sharing${e}_VehiclesOutdatedRealtimeData`,label:"Echzeitdaten älter 30 Minuten",filter:["all",["==",["get","form_factor"],a],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",scope:["car","bicycle","scooter","cargo_bicycle","moped"],...N,...t},{id:`sharing${e}_VehiclesRealtimeData`,label:"Fahrzeug verfügbar",filter:["all",["==",["get","form_factor"],a],["any",["==",["get","realtime_data_outdated"],!1],["==",["get","realtime_data_outdated"],null]]],color:"#91FFFF",scope:["car","bicycle","scooter","cargo_bicycle","moped"],...N,...t}]}const X=o(i()),Y=o(i({formFactor:"car"})).filter(e=>e.scope.includes("car")),Z=o(i({formFactor:"bicycle"})).filter(e=>e.scope.includes("bicycle")),tt=o(i({formFactor:"scooter"})).filter(e=>e.scope.includes("scooter")),et=o(i({formFactor:"cargo_bicycle"})).filter(e=>e.scope.includes("cargo_bicycle")),at=o(i({formFactor:"moped"})).filter(e=>e.scope.includes("moped")),h={subGroup:"Stationen",source:"sourceSharingStations",sourceLayer:"sharing_stations"};function l({id:e,layerGroup:t,layerFilter:a}){return[{id:`sharing${e}_StationsNoRealtimeData`,label:"Echtzeitdaten nicht vorhanden",filter:["all",d,[">=",["get",`num_${a}s_available`],0]],color:"#615fdf",scope:["car","cargo_bicycle"],...h,...t},{id:`sharing${e}_StationsOutdatedRealtimeData`,label:"Echtzeitdaten älter 30 Minuten",filter:["all",["!",d],[">=",["get",`num_${a}s_available`],0],["any",["==",["get","is_virtual_station"],!1],["!",["has","is_virtual_station"]]],["==",["get","realtime_data_outdated"],!0]],color:"#cacaca",scope:["car","bicycle","cargo_bicycle","moped"],...h,...t},{id:`sharing${e}_StationsOccupied`,label:"Fahrzeuge verfügbar",filter:["all",["!",d],[">",["get",`num_${a}s_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#fffb05",scope:["car","bicycle","scooter","cargo_bicycle","moped"],...h,...t},{id:`sharing${e}_StationsFree`,label:"Fahrzeuge nicht verfügbar",filter:["all",["!",d],["==",["get",`num_${a}s_available`],0],["==",["get","realtime_data_outdated"],!1]],color:"#ffb805",scope:["car","bicycle","scooter","cargo_bicycle","moped"],...h,...t}]}const rt=l(i()),it=l(i({formFactor:"car"})).filter(e=>e.scope.includes("car")),nt=l(i({formFactor:"bicycle"})).filter(e=>e.scope.includes("bicycle")),st=l(i({formFactor:"scooter"})).filter(e=>e.scope.includes("scooter")),ot=l(i({formFactor:"cargo_bicycle"})).filter(e=>e.scope.includes("cargo_bicycle")),lt=l(i({formFactor:"moped"})).filter(e=>e.scope.includes("moped"));async function Q(e){return fetch(`https://${u}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
          `,operationName:"station",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}async function P(e){return fetch(`https://${u}.mobidata-bw.de/sharing/graphql`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:`
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
            `,operationName:"vehicle",path:"/graphql"})}).then(t=>t.json()).then(t=>{const a=new Blob([JSON.stringify(t,null,2)],{type:"application/json"});return URL.createObjectURL(a)}).catch(t=>console.error("Fehler:",t))}function ct(e){const{feed_id:t,station_id:a,vehicle_id:n,name:V,capacity:R,is_virtual_station:z,num_cars_available:T,num_bicycles_available:j,num_scooters_available:O,num_cargo_bicycles_available:E,num_mopeds_available:I,propulsion_type:s,current_fuel_percent:g,current_range_meters:M,max_range_meters:B,rental_uris_web:_,rental_uris_ios:b,rental_uris_android:p,last_reported:m,realtime_data_outdated:D}=e;let f,y;m&&({date:f,time:y}=G(m));const q=["nextbike","callabike","pickebike","donkey","dott","voi","bolt","lime","bird","zeus","zeo","stadtmobil"],A=c(t);let $="";q.forEach(function(r){t.match(r)&&($+=c(r))});let S="";for(const r in k)t==k[r]&&(S+=k[r]);let L="",w="";for(const r in C)t==C[r]&&(L+=`station_id == '${C[r]}'`);for(const r in F)t==F[r]&&(w+=`vehicle_id == '${F[r]}'`);return setTimeout(()=>{const r=document.getElementById("placeholderStation");r&&Q(a).then(v=>{r.setAttribute("href",v)});const x=document.getElementById("placeholderVehicle");x&&P(n).then(v=>{x.setAttribute("href",v)})},0),`
    <table>
      <tr>
        ${t=="velospot_ch"||t=="publibike_ch"?c("velospot_publibike"):t.match("herrenberg")?c("Stadt Herrenberg"):`<th>${$||A}</th>`}
        <th class="title">${t}</th>
      </tr>
    </table><br><table>
      ${V?`
      <tr>
        <td class="att">Name</td>
        <td class="attContent">${V}</td>
      </tr>
      `:""}
      ${n?`
      <tr>
        <td class="att">Fahrzeug-ID</td>
        <td class="attContent attContentSharingIds">${n}</td>
      </tr>
      `:""}
      ${a?`
      <tr>
        <td class="att">Stations-ID</td>
        <td class="attContent attContentSharingIds">${a}</td>
      </tr>
      `:""}
      ${R?`
      <tr>
        <td class="att">Kapazität</td>
        <td class="attContent">${parseInt(R)}</td>
      </tr>
      `:""}
      ${n?"":`
      <tr>
        <td class="att">Verfügbare Fahrzeuge</td>
        ${t==S?'<td class="attContent"><i>Echtzeitdaten nicht vorhanden</i></td>':D==!0&&(z==!1||!z)?'<td class="attContent"><i>Echtzeitdaten älter 30 Minuten</i></td>':`<td class="attContent">${T??j??O??E??I}</td>`}
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
      ${!_&&!p&&!b?"":'<td class="att">Buchung</td>'}
        <td class="attContent">
        ${[_?`<a href="${_}" target="_blank">Web</a>`:"",p==null?"":`<a href="${p}" target="_blank">Android</a>`,b?`<a href="${b}" target="_blank">IOS</a>`:""].filter(Boolean).join(", ")}
        </td>
      </tr>
      ${!m||t==S?"":`
      <tr>
        <td class="att">Stand Echtzeitdaten</td>
        ${D?`<td class="attContent outDated">${f}, ${y}</td>`:`<td class="attContent">${f}, ${y}</td>`}
      </tr>
      `}
    </table><table>
      <tr>
        ${a?`<td class="attContentLink"><a href="https://${u}.mobidata-bw.de/sharing/gbfs/${t}/station_status" target="_blank">&#10149 GBFS-Feed<a></td>`:""}
        ${n?`<td class="attContentLink"><a href="https://${u}.mobidata-bw.de/sharing/gbfs/${t}/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>`:""}
        ${!a||L?"":'<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>'}
        ${!n||w?"":'<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>'}
      </tr>
    </table>
  `}export{H as a,rt as b,Y as c,it as d,Z as e,nt as f,tt as g,st as h,et as i,ot as j,at as k,X as l,lt as m,ct as p,K as s};
