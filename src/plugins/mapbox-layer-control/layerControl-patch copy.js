import { layerControlGrouped } from "./layerControlGrouped.js";
import { exclusiveLayerGroup } from "./layerControlModifications.js";

// Monkey-Patch: Override the onAdd method to attach our additional click listener.
(function() {
  const originalOnAdd = layerControlGrouped.prototype.onAdd;

  layerControlGrouped.prototype.onAdd = function(map) {
    // Call the original method.
    const div = originalOnAdd.call(this, map);
    // Store the plugin context in the DOM element.
    div._pluginInstance = this;
    // Attach an additional event listener in the bubble phase,
    // ensuring that the original listener is executed first.
    div.addEventListener("click", (e) => {
      // Using a short setTimeout (0) ensures that the original code
      // (especially for group toggles) has already been executed.
      setTimeout(() => {
        exclusiveLayerGroup.call(this, e);
      }, 0);
    }, false);
    return div;
  };
})();