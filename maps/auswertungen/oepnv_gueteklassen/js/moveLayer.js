// let activeLayer;


export function moveLayer(map) {

    const styleLayers = map.getStyle().layers;

    // console.log(styleLayers)

    const lastLayer = styleLayers.find(styleLayer => styleLayer.type == 'fill');

    // const lastLayer = styleLayers
    //     .filter(styleLayer => !styleLayer.id.startsWith('oepnv') && !styleLayer.id.endsWith('Shape'))
    //     .findLast(styleLayer => styleLayer.type == 'fill');

    styleLayers
        .filter(styleLayer => styleLayer.id.startsWith('oepnvGueteklassen'))
        .forEach(styleLayer => {
            if (map.getLayer(styleLayer.id)) {
                map.moveLayer(styleLayer.id, lastLayer.id)
                // activeLayer = styleLayer.id;
            }
        });

    // if (!activeLayer || !map.getLayer(activeLayer)) return;
    // map.moveLayer('oepnvGueteklassen_J', lastLayer.id);

};