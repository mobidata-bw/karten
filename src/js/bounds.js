export { bounds };

function bounds (map, boundaryBounds) {

  boundaryBounds.on('data:loaded', function () {
  mapBounds();
});

function mapBounds() {

  var mapBounds = boundaryBounds.getBounds();

  var northLatitude = mapBounds.getNorth();
  var southLatitude = mapBounds.getSouth();
  var eastLatitude = mapBounds.getEast();
  var westLatitude = mapBounds.getWest();

  var northernBounds = 5.3;
  var southernBounds = 2;
  var easternWestern = 5;

  var setMapBounds = map.setMaxBounds([
    [southLatitude - southernBounds, westLatitude - easternWestern],
    [northLatitude + northernBounds, eastLatitude + easternWestern],
  ]);
};
};