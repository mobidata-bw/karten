let activeLayer;


export function moveLayer(map) {

    const styleLayers = map.getStyle().layers;

    const lastLayer = styleLayers.find(styleLayer => styleLayer.type == 'fill');

    // const lastLayer = styleLayers
    //     .filter(styleLayer => !styleLayer.id.startsWith('oepnv') && !styleLayer.id.endsWith('Shape'))
    //     .findLast(styleLayer => styleLayer.type == 'fill');

    styleLayers
        .filter(styleLayer => styleLayer.id.startsWith('oepnvGueteklassen'))
        .forEach(styleLayer => {
            if (map.getLayer(styleLayer.id)) {
                if (map.getLayoutProperty(styleLayer.id, 'visibility') == 'visible')
                    activeLayer = styleLayer.id;
            }
        });

    if (!activeLayer || !map.getLayer(activeLayer)) return;
    map.moveLayer(activeLayer, lastLayer.id);

};