import { layerControlGrouped } from "./layerControlGrouped.js";
import { exclusiveLayerGroup } from "./layerControlModifications.js";

(function() {
  const origOnAdd = layerControlGrouped.prototype.onAdd;
  layerControlGrouped.prototype.onAdd = function(map) {
    // 1) Build original control (legend + inputs)
    const container = origOnAdd.call(this, map);

    // 2) For each layer object, find <input#layer.id[data-map-layer]>
    //    and set data-subgroup from layer.subGroup
    this._layers.forEach(layer => {
      const inp = container.querySelector(`input#${CSS.escape(layer.id)}[data-map-layer]`);
      if (inp && typeof layer.subGroup === "string" && layer.subGroup) {
        inp.dataset.subgroup = layer.subGroup;
      }
    });

    // 3) Attach click listener: let original run first, then exclusiveLayerGroup
    container.addEventListener("click", e => {
      setTimeout(() => exclusiveLayerGroup.call(this, e), 0);
    }, false);

    return container;
  };
})();