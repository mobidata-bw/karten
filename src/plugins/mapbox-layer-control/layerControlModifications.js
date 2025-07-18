import { layerControlGrouped } from "./layerControlGrouped.js";

/**
 * Build this._groupSettings per instance:
 * { groupName: { excludeOtherGroups: bool, exclusiveWithinGroup: bool, excludeGroups: null|[...] } }
 */
layerControlGrouped.prototype._initGroupSettings = function() {
  if (this._groupSettings) return;
  this._groupSettings = {};
  this._layers.forEach(l => {
    const g = l.group || "Operational Layers";
    if (!this._groupSettings[g]) {
      this._groupSettings[g] = {
        excludeOtherGroups: false,
        exclusiveWithinGroup: false,
        excludeGroups: null
      };
    }
  });
  this._layers.forEach(l => {
    const s = this._groupSettings[l.group || "Operational Layers"];
    if (l.exclusiveWithinGroup) s.exclusiveWithinGroup = true;
    if (Array.isArray(l.excludeGroups)) s.excludeGroups = l.excludeGroups.slice();
  });
  if (this._exclusiveAllGroups === true) {
    Object.keys(this._groupSettings)
      .forEach(g => this._groupSettings[g].excludeOtherGroups = true);
  } else if (Array.isArray(this._exclusiveGroupsList)) {
    this._exclusiveGroupsList.forEach(g => {
      if (this._groupSettings[g]) this._groupSettings[g].excludeOtherGroups = true;
    });
  }
};

/**
 * On each click of a layer checkbox or group header:
 * 1. Ensure _groupSettings is built.
 * 2. If clicking a group header (data-layergroup):
 *    – Delay native toggle, then exclude other groups per settings.
 * 3. If clicking a layer checkbox or its label:
 *    a) Exclude entire groups per excludeOtherGroups/excludeGroups.
 *    b) Exclude sibling layers with same data-subgroup if exclusiveWithinGroup=true.
 * 4. Immediately strip any query string the plugin added.
 * 5. Let the original plugin handle visibility/children/folder toggles, etc.
 */
export function exclusiveLayerGroup(e) {
  this._initGroupSettings();

  // 2) Group header clicked?
  if (e.target.dataset.layergroup) {
    const gn = e.target.dataset.layergroup,
          gs = this._groupSettings[gn] || {};
    setTimeout(() => {
      if (gs.excludeOtherGroups || Array.isArray(gs.excludeGroups)) {
        const toExclude = gs.excludeOtherGroups
          ? Object.keys(this._groupSettings).filter(g => g !== gn)
          : gs.excludeGroups.slice();
        document.querySelectorAll("input[data-map-layer]").forEach(inp => {
          if (inp.dataset.group && toExclude.includes(inp.dataset.group) && inp.checked) {
            inp.click();
          }
        });
      }
      // 4) Strip query string if present, show active layers no more in url
      setTimeout(() => {
        const { pathname, hash } = window.location;
        history.replaceState(null, "", pathname + hash);
      }, 0);
    }, 0);
    return;
  }

  // 3) Layer checkbox or label clicked?
  let gn = null, sgn = null, act = false;
  if (e.target.dataset.mapLayer) {
    gn  = e.target.dataset.group    || null;
    sgn = e.target.dataset.subgroup || null;
    act = e.target.checked;
  } else if (e.target.tagName === "LABEL" && e.target.htmlFor) {
    const inp = document.getElementById(e.target.htmlFor);
    if (inp && inp.dataset.mapLayer) {
      gn  = inp.dataset.group    || null;
      sgn = inp.dataset.subgroup || null;
      act = inp.checked;
    }
  }
  if (gn && act) {
    const gs = this._groupSettings[gn] || {};

    // 3.a) Exclude entire groups if configured
    if (gs.excludeOtherGroups || Array.isArray(gs.excludeGroups)) {
      const toExclude = gs.excludeOtherGroups
        ? Object.keys(this._groupSettings).filter(g => g !== gn)
        : gs.excludeGroups.slice();
      document.querySelectorAll("input[data-map-layer]").forEach(inp => {
        if (inp.dataset.group && toExclude.includes(inp.dataset.group) && inp.checked) {
          inp.click();
        }
      });
    }

    // 3.b) Exclude siblings in same subGroup if configured
    if (gs.exclusiveWithinGroup && sgn) {
      document.querySelectorAll(`input[data-map-layer][data-subgroup="${sgn}"]`).forEach(inp => {
        const clickedId = (e.target.dataset.mapLayer)
          ? e.target.id
          : e.target.htmlFor;
        if (inp.id !== clickedId && inp.checked) {
          inp.click();
        }
      });
    }

    // 4) Strip query string if present
    setTimeout(() => {
      const { pathname, hash } = window.location;
      history.replaceState(null, "", pathname + hash);
    }, 0);
  }
}

export default { exclusiveLayerGroup };