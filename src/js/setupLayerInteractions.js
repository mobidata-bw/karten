import maplibregl from 'maplibre-gl';


export function setupLayerInteractions(map, layers, popupContent, sources) {


  layers.forEach((layer) => {

    let hoveredStateId = null;

    // ==============================
    // POPUP
    // ==============================   
    map.on('click', layer.id, (e) => {

      const feature = e.features[0];
      const geometry = feature.geometry;
      let coordinates;

      if (geometry.type === 'Point') {
        coordinates = geometry.coordinates;
      } else {
        coordinates = [e.lngLat.lng, e.lngLat.lat];
      }

      const properties = feature.properties;

      new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(popupContent(properties))
        .addTo(map);

    });


    // ==============================
    // CURSOR BEHAVIOR
    // ==============================   
    map.on('mouseenter', layer.id, () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', layer.id, () => {
      map.getCanvas().style.cursor = '';
    });


    // ==============================
    // HIGHLIGHT SELECTED FEATURE
    // ==============================   

    // When the user moves their mouse over the state-fill layer, we'll update the
    // feature state for the feature under the mouse.
    map.on('mousemove', layer.id, (e) => {

      const feature = e.features[0];
      const geometryType = feature.layer.type;

      if (geometryType == 'line') {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            sources.forEach(source => {
              const isVector = (source.source.type == 'vector' || !source.source.type) ? { sourceLayer: layer.sourceLayer } : {};
              map.setFeatureState(
                { source: source.id, ...isVector, id: hoveredStateId },
                { hover: false }
              )
            })
          }
          hoveredStateId = feature.id;
          sources.forEach(source => {
            const isVector = (source.source.type == 'vector' || !source.source.type) ? { sourceLayer: layer.sourceLayer } : {};
            map.setFeatureState(
              { source: source.id, ...isVector, id: hoveredStateId },
              { hover: true }
            )
          })
        }
      };
    });

    // When the mouse leaves the state-fill layer, update the feature state of the
    // previously hovered feature.
    map.on('mouseleave', layer.id, () => {
      if (hoveredStateId) {
        sources.forEach(source => {
          const isVector = (source.source.type == 'vector' || !source.source.type) ? { sourceLayer: layer.sourceLayer } : {};
          map.setFeatureState(
            { source: source.id, ...isVector, id: hoveredStateId },
            { hover: false }
          );
        });
      };
      hoveredStateId = null;
    });

  });

};