import { iplPath } from '../../../utils/paths.js';
import { timeStamps } from '../../timeStamps.js';
import { popupImages } from "../../popupImages.js";
import { sharingNoRealtimeDataPopups, sharingNoGraphQlStations, sharingNoGraphQlVehicles } from './sharingFilters.js';
import { graphQlStation, graphQlVehicle } from './popupGraphQl.js';


export function popupContent(features) {
  // console.log(features)

  /* INITIALIZE VARIABLES */
  const {
    feed_id,
    station_id,
    vehicle_id,
    name,
    capacity,
    num_cars_available,
    num_bicycles_available,
    num_scooters_standing_available,
    num_cargo_bicycles_available,
    num_mopeds_available,
    propulsion_type,
    current_fuel_percent,
    current_range_meters,
    max_range_meters,
    rental_uris_web,
    rental_uris_ios,
    rental_uris_android,
    last_reported,
    realtime_data_outdated
  } = features;

  let date, time;

  if (last_reported) {
    ({ date, time } = timeStamps(last_reported));
  };


  /* LOGOS */
  const logoMultiple = [
    'nextbike',
    'callabike',
    'pickebike',
    'donkey',
    'dott',
    'voi',
    'bolt',
    'lime',
    'bird',
    'zeus',
    'zeo',
    'stadtmobil'
  ];

  const logoUnique = popupImages(feed_id);

  let logo = '';

  logoMultiple.forEach(function (logoMultiple) {
    if (feed_id.match(logoMultiple)) {
      logo += popupImages(logoMultiple);
    }
  });

  /* NO REALTIME DATA */
  let noRealtimeData = '';

  for (const i in sharingNoRealtimeDataPopups) {
    if (feed_id == sharingNoRealtimeDataPopups[i]) {
      noRealtimeData += sharingNoRealtimeDataPopups[i];
    }
  }

  /* GraphQL */
  let noGraphQlStations = '', noGraphQlVehicles = '';

  for (const j in sharingNoGraphQlStations) {
    if (feed_id == sharingNoGraphQlStations[j]) {
      noGraphQlStations += `station_id == '${sharingNoGraphQlStations[j]}'`;
    }
  }
  for (const k in sharingNoGraphQlVehicles) {
    if (feed_id == sharingNoGraphQlVehicles[k]) {
      noGraphQlVehicles += `vehicle_id == '${sharingNoGraphQlVehicles[k]}'`;
    }
  }

  /* GRAPHQL URL */
  setTimeout(() => {
    const placeholderStation = document.getElementById('placeholderStation');
    if (placeholderStation) {
      graphQlStation(station_id).then(url => {
        placeholderStation.setAttribute('href', url);
      })
    }
    const placeholderVehicle = document.getElementById('placeholderVehicle');
    if (placeholderVehicle) {
      graphQlVehicle(vehicle_id).then(url => {
        placeholderVehicle.setAttribute('href', url);
      })
    }
  }, 0);


  /* POPUP CONTENT */
  return '<table>\
                <tr>'+
    ((feed_id == 'velospot_ch' || feed_id == 'publibike_ch') ? popupImages('velospot_publibike') :
      ((feed_id.match('herrenberg')) ? popupImages('Stadt Herrenberg') :
        ('<th>' + (logo ? logo : logoUnique) + '</th>'))) +
    '<th class="title">' + feed_id + '</th>' +
    '</tr>\
    </table><br><table>' +
    (!name ? '' : (
      '<tr>\
      <td class="att">Name</td>\
      <td class="attContent">' + name + '</td>\
    </tr>'
    )) +
    (!vehicle_id ? '' : (
      '<tr>\
        <td class="att">Fahrzeug-ID</td>\
        <td class="attContent attContentSharingIds">' + vehicle_id + '</td>\
      </tr>'
    )) +
    (!station_id ? '' : (
      '<tr>\
        <td class="att">Stations-ID</td>\
        <td class="attContent attContentSharingIds">' + station_id + '</td>\
      </tr>'
    )) +
    (!capacity ? '' : (
      '<tr>\
      <td class="att">Kapazität</td>\
      <td class="attContent">' + parseInt(capacity) + '</td>\
    </tr>'
    )) +
    (vehicle_id ? '' : (
      '<tr>\
    <td class="att">Verfügbare Fahrzeuge</td>' +
      ((feed_id == noRealtimeData) ?
        ('<td class="attContent"><i>keine Echtzeitdaten</i></td>') :
        ('<td class="attContent">' + (num_cars_available ?? num_bicycles_available ?? num_scooters_standing_available ?? num_cargo_bicycles_available ?? num_mopeds_available) + '</td>')) +
      '</tr>'
    )) +
    '<tr>' +
    (!propulsion_type ? '' : ('<td class="att">Antriebsart</td>')) +
    ((propulsion_type == 'electric') ? ('<td class="attContent">elektrisch</td>') : '') +
    ((propulsion_type == 'electric_assist') ? ('<td class="attContent">elektrische Unterstützung</td>') : '') +
    ((propulsion_type == 'human') ? ('<td class="attContent">ohne Elektrifizierung</td>') : '') +
    '</tr>' +
    (!current_fuel_percent ? '' : (
      '<tr>\
      <td class="att">Aktueller Ladestand</td>'+
      ((feed_id == 'nextbike_eh' || feed_id == 'nextbike_ch') ?
        ('<td class="attContent">' + (current_fuel_percent * 1).toFixed(0) + '%' + '</td>') :
        ('<td class="attContent">' + (current_fuel_percent * 100).toFixed(0) + '%' + '</td>')) +
      '</tr>'
    )) +
    ((!current_range_meters || propulsion_type == 'human') ? '' : (
      '<tr>\
      <td class="att">Aktuelle Reichweite</td>\
      <td class="attContent">' + (current_range_meters / 1000).toFixed(0) + 'km' + '</td>\
    </tr>'
    )) +
    ((!max_range_meters || propulsion_type == 'human') ? '' : (
      '<tr>\
      <td class="att">Max. Reichweite</td>\
      <td class="attContent">' + (max_range_meters / 1000).toFixed(0) + 'km' + '</td>\
    </tr>'
    )) +
    '<tr>' +
    ((!rental_uris_web && !rental_uris_android && !rental_uris_ios) ? '' : ('<td class="att">Buchung</td>')) +
    ('<td class="attContent">' +

      (!rental_uris_web ? '' : ('<a href="' + rental_uris_web + '" target="_blank">Web</a>')) +

      (((!rental_uris_web || !rental_uris_android) ? '' : ', ') +
        ((rental_uris_android == null) ? '' : ('<a href="' + rental_uris_android + '" target="_blank">Android</a>'))) +

      ((!rental_uris_android ? '' : ', ') +
        (!rental_uris_ios ? '' : ('<a href="' + rental_uris_ios + '" target="_blank">IOS</a>'))) +

      '</td>') +
    ((!last_reported || feed_id == noRealtimeData) ? '' : (
      '<tr>\
        <td class="att">Stand Echtzeitdaten</td>' +
      (realtime_data_outdated ? ('<td class="attContent outDated">' + date + ', ' + time) : ('<td class="attContent">' + date + ', ' + time + '</td>')) +
      '</tr>'
    )) +
    '</tr>\
            </table><table>\
                <tr>' +
    (!station_id ? '' : ('<td class="attContentLink"><a href="https://' + iplPath + '.mobidata-bw.de/sharing/gbfs/' + feed_id + '/station_status" target="_blank">&#10149 GBFS-Feed<a></td>')) +
    (!vehicle_id ? '' : ('<td class="attContentLink"><a href="https://' + iplPath + '.mobidata-bw.de/sharing/gbfs/' + feed_id + '/free_bike_status" target="_blank">&#10149 GBFS-Feed<a></td>')) +
    ((!station_id || noGraphQlStations) ? '' : (`<td class="attContentLink"><a id="placeholderStation" class="photoMargin" target="_blank">&#10149 Station (GraphQL)</a></td>`)) +
    ((!vehicle_id || noGraphQlVehicles) ? '' : (`<td class="attContentLink"><a id="placeholderVehicle" class="photoMargin" target="_blank">&#10149 Fahrzeug (GraphQL)</a></td>`)) +
    '</tr>\
            </table>';

};


/*(last_reported ? '<td class="attContent outDated">' + date + ', ' + time + */