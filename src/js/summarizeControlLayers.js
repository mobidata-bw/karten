export function summarizeControlLayers(map) {

    const groupLabels = document.querySelectorAll('label.mgl-layerControlGroupHeading');

    function updateGroup(label) {
        const group = label.parentElement;
        const groupLayers = group.querySelectorAll('div.checkbox');

        // Boolean: is at least one layer visible?
        const anyVisible = Array.from(groupLayers).some(groupLayer => {
            const id = groupLayer.querySelector('input[type="checkbox"]').id;
            return map.getLayoutProperty(id, 'visibility') == 'visible';
        });

        // If Boolean is false and not layer is visible, set display to 'none'
        groupLayers.forEach(groupLayer => {
            groupLayer.style.display = anyVisible ? '' : 'none'
        });
    };

    let styledataTimer; // current 'waiting time'
    map.on('styledata', () => {
        clearTimeout(styledataTimer); // interrupts updateGroup() process if new styledata is fired; prevents stuttering of layer control behavior
        styledataTimer = setTimeout(() => {
            groupLabels.forEach(updateGroup);
        }, 60);
    });

};