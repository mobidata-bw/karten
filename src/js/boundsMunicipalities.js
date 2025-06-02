export { bounds };

function bounds(map, boundaryBounds) {

  boundaryBounds.on('data:loaded', function () {
    mapBounds();
  });

  function mapBounds() {

    var mapBounds = boundaryBounds.getBounds();
    map.setMaxBounds(mapBounds.pad(1))

  };
};