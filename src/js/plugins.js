export { geocoding, notifications };

function geocoding(map) {

  L.Control.geocoder({
    position: 'topleft'
  }).addTo(map);

};


function notifications(map) {

  var notification = L.control
    .notifications({
      timeout: 10000,
      position: 'topleft',
      closable: true,
      dismissable: true,
    }).addTo(map);

  //notification.alert('Alert', 'some alert message');
  notification.info('Hinweis', 'An Bundes-, Land- und Kreisstraßen befindliche temporäre Zählstellen werden erst bei höherer Zoomstufe angezeigt.');
  //notification.success('Success', 'some successmessage');
  //notification.warning('Warning', 'some warning message');
  //notification.custom('Custom', 'some <span>custom</span> message'); //HTML works for every notification, not only custom()

};