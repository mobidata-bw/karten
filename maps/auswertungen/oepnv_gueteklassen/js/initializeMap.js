export const shapeRegierungsbezirke = {
    'type': 'geojson',
    'data': '/karten_geojsons/maps/auswertungen/oepnv_gueteklassen/regierungsbezirke.geojson'
};

export const lineShapeRegierungsbezirke = {
    'id': 'lineShapeRegierungsbezirke',
    'type': 'line',
    'source': 'shapeRegierungsbezirke',
    'paint': {
        'line-color': 'black',
        'line-width': 1
    }
};