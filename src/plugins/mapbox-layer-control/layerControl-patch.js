import { layerControlGrouped } from "./layerControlGrouped.js";
import { exclusiveLayerGroup } from "./layerControlModifications.js";

(function() {
  const originalOnAdd = layerControlGrouped.prototype.onAdd;

  layerControlGrouped.prototype.onAdd = function(map) {
    const div = originalOnAdd.call(this, map);
    div._pluginInstance = this;

    div.addEventListener(
      "click",
      (e) => {
        setTimeout(() => {
          exclusiveLayerGroup.call(this, e);
        }, 0);
      },
      false
    );

    return div;
  };
})();
