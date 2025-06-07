import maplibregl from 'maplibre-gl';

export function popups(map, layers, popupContent, popupCanvas) {
    layers.forEach((layer) => {

        map.on('click', layer.id, (e) => {

            // console.log(e.features);
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


        map.on('mouseenter', layer.id, () => {
            map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', layer.id, () => {
            map.getCanvas().style.cursor = '';
        });

    });
}
