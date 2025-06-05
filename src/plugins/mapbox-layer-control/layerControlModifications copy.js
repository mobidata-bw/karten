import * as domHelper from "./lib/domHelpers.js";
import * as mglHelper from "./lib/mglHelpers.js";

 
export function exclusiveLayerGroup(e) {
  // If the click is on a group header (identified by the data attribute "data-layergroup"),
  // we delay the execution so that the original code (which toggles all children) runs first.
  if (e.target.dataset.layergroup) {
    setTimeout(() => {
      // Retrieve the group name from the data attribute of the clicked element.
      const groupName = e.target.dataset.layergroup;
      // Find all child toggle elements within the same parent that are marked with "data-master-layer".
      const childToggles = e.target.parentElement.querySelectorAll("[data-master-layer]");
      // Check if all child toggles are activated (i.e., checked).
      // If they are, then we consider the entire group as active.
      if (domHelper.GetAllChecked(childToggles)) {
        // Retrieve all elements that are toggles for map layers.
        const allToggles = document.querySelectorAll("[data-map-layer]");
        // For each toggle, if it belongs to a different group and is currently active,
        // simulate a click to deactivate it.
        allToggles.forEach(input => {
          if (input.dataset.group && input.dataset.group !== groupName && input.checked) {
            input.click();
          }
        });
      }
    }, 0); // Delay execution to let the original toggle logic complete.
    // Exit the function early as the group header logic is complete.
    return;
  }

  // For individual layer toggles:
  let groupName = null;
  // Check if the clicked element is a map layer toggle and has a group defined.
  if (e.target.dataset.mapLayer && e.target.dataset.group) {
    groupName = e.target.dataset.group;
  } 
  // Alternatively, if the clicked element is a label and it's associated with an input,
  // retrieve the group information from the associated input.
  else if (e.target.tagName === "LABEL" && e.target.htmlFor) {
    const associatedInput = document.getElementById(e.target.htmlFor);
    if (associatedInput && associatedInput.dataset.group) {
      groupName = associatedInput.dataset.group;
    }
  }
  // Determine whether this is an activation (turning on) action.
  let activating = false;
  if (e.target.dataset.mapLayer) {
    if (e.target.checked) {
      activating = true;
    }
  }
  // If an individual layer toggle is being activated and it belongs to a group,
  // then deactivate all toggles from other groups.
  if (groupName && activating) {
    const allToggles = document.querySelectorAll("[data-map-layer]");
    allToggles.forEach(input => {
      if (input.dataset.group && input.dataset.group !== groupName && input.checked) {
        input.click();
      }
    });
  }

  // Continue with the original event processing logic:

  // If the clicked element is a layer control button, remove the "collapsed" class.
  if (e.target.dataset.layerControl) {
    e.target.classList.remove("collapsed");
    return;
  }
  // If the clicked element is a checkbox container, simulate a click on its first child element,
  // which is likely the actual checkbox.
  if (e.target.className === "checkbox") {
    e.target.children[0].click();
    return;
  }
  // If the clicked element is a map layer toggle:
  if (e.target.dataset.mapLayer) {
    // Set the visibility of the map layer based on whether it is checked.
    mglHelper.SetLayerVisibility(this._map, e.target.checked, e.target.id);
    // If the toggle has children layers (indicated by "data-children"),
    // then find all elements that are children (marked with "data-parent") and simulate a click on them.
    if (e.target.dataset.children) {
      const children = document.querySelectorAll("[data-parent]");
      for (let i = 0; i < children.length; i++) {
        if (children[i].dataset.parent === e.target.id) {
          children[i].click();
        }
      }
    }
    return;
  }
  // If the clicked element is a directory toggle (for expanding/collapsing a section):
  if (e.target.dataset.directoryToggle) {
    // Toggle the collapsed state of the header based on the visibility of the third child element.
    if (e.target.parentElement.children[2].style.display != "none") {
      e.target.parentElement.children[0].className = "collapsed";
    } else {
      e.target.parentElement.children[0].className = "";
    }
    // Toggle the display of children elements using a helper function.
    domHelper.ToggleChildren(e.target.parentElement, 2);
    // After a delay, check if the toggled element is in the viewport. If not, adjust the location hash to scroll it into view.
    setTimeout(function () {
      if (!isScrolledIntoView(e.target.parentElement)) {
        window.location.hash = e.target.id;
      }
    }, 410);
    // Resize the map after a short delay to ensure the layout adjusts correctly.
    setTimeout(() => {
      this._map.resize();
    }, 450);
    return;
  }
  
  // Helper function: Checks if an element is fully visible in the viewport.
  function isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
  
  // If the container has a "_collapsed" flag set, attach mouse enter and leave event listeners.
  // These listeners will remove or add the "collapsed" class to expand/collapse the container.
  if (this._collapsed) {
    this._div.addEventListener("mouseenter", function (e) {
      setTimeout(function () {
        e.target.classList.remove("collapsed");
      }, 0);
      return;
    });
    this._div.addEventListener("mouseleave", function (e) {
      e.target.classList.add("collapsed");
      return;
    });
  }
}