/*******************************************
 * layerControlModifications.js
 *
 * - Keine einzige Zeile im Original-Plugin
 *   (layerControlGrouped.js) wurde angefasst.
 * - Alle neuen Flags (Gruppen­ausschluss, exklusive Layer)
 *   werden hier reinpackt.
 *******************************************/

import * as mglHelper from "./lib/mglHelpers.js";
import { layerControlGrouped } from "./layerControlGrouped.js";

/**
 * Baut in this._groupSettings pro Gruppe die inneren Flags auf:
 *   {
 *     excludeOtherGroups: Boolean,      // ob diese Gruppe per-default andere ausschalten soll
 *     exclusiveWithinGroup: Boolean,    // ob Layer IN dieser Gruppe sich gegenseitig ausschließen
 *     excludeGroups: null | [String…]    // optionale Liste von Gruppen, die (nur) ausgeschaltet werden, wenn man in diese Gruppe klickt
 *   }
 *
 * Zusätzlich prüft _initGroupSettings jetzt auf zwei neue Instance-Propertys:
 *   - this._exclusiveAllGroups       (Boolean)
 *   - this._exclusiveGroupsList      (Array von Group-Namen)
 *
 * Wenn _exclusiveAllGroups === true, wird für **jede** Gruppe excludeOtherGroups = true gesetzt.
 * Wenn _exclusiveGroupsList = ["Gruppe A","Gruppe B"], dann wird nur für diese beiden Gruppen
 *    excludeOtherGroups = true gesetzt (gegenseitiger Ausschluss innerhalb der Liste).
 */
layerControlGrouped.prototype._initGroupSettings = function() {
  // Nur einmal aufbauen
  if (this._groupSettings) return;

  this._groupSettings = {};

  // 1) Alle Layer durchlaufen und alle Gruppennamen sammeln
  this._layers.forEach(layer => {
    if (!layer.group) {
      layer.group = "Operational Layers";
    }
    if (!this._groupSettings[layer.group]) {
      this._groupSettings[layer.group] = {
        excludeOtherGroups: false,
        exclusiveWithinGroup: false,
        excludeGroups: null
      };
    }
  });

  // 2) Aus den Layer-Objekten per-layer Flags ziehen
  this._layers.forEach(layer => {
    const grp = layer.group;
    const settings = this._groupSettings[grp];

    if (layer.exclusiveWithinGroup) {
      settings.exclusiveWithinGroup = true;
    }
    if (Array.isArray(layer.excludeGroups)) {
      settings.excludeGroups = layer.excludeGroups.slice();
    }
    // ⚠️ Achtung: layer.excludeOtherGroups wird **jetzt ignoriert**,
    // weil wir das global steuern wollen (siehe weiter unten).
    // Wenn du noch vereinzelt per-Layer ausschließen möchtest, kannst du natürlich:
    //   if (layer.excludeOtherGroups) settings.excludeOtherGroups = true;
    // aber in der aktuellen Spezifikation wird empfohlen, ausschließlich über
    //   layerControl._exclusiveAllGroups oder layerControl._exclusiveGroupsList
    // zu arbeiten, um das Plugin möglichst unberührt zu lassen.
  });

  // 3) Jetzt prüfen wir, ob auf Instanz-Ebene ein globaler Ausschluss gewünscht ist:
  //    a) this._exclusiveAllGroups === true → alle Gruppen wechselseitig exkludieren
  //    b) this._exclusiveGroupsList = [ "Gruppe A", "Gruppe B", … ] → nur diese untereinander exkludieren
  if (this._exclusiveAllGroups === true) {
    // Setze für jede Gruppe excludeOtherGroups = true
    Object.keys(this._groupSettings).forEach(gName => {
      this._groupSettings[gName].excludeOtherGroups = true;
    });
  }
  else if (Array.isArray(this._exclusiveGroupsList)) {
    // Nur die Gruppen in dieser Liste bekommen excludeOtherGroups = true
    const liste = this._exclusiveGroupsList.slice();
    liste.forEach(gName => {
      if (this._groupSettings[gName]) {
        this._groupSettings[gName].excludeOtherGroups = true;
      }
    });
  }

  // 4) Falls Nutzer versehentlich beide Flags gesetzt hat,
  //    _exclusiveAllGroups hat Vorrang vor _exclusiveGroupsList, weil es genereller ist.
  //    (wir haben oben bereits abgefragt: if (_exclusiveAllGroups) … else if (_exclusiveGroupsList) …)

  // _groupSettings ist jetzt vollständig – enthält:
  //   • für jede Gruppe, ob sie (global) andere auschließen soll,
  //   • ob innerhalb der Gruppe Layers sich gegenseitig ausschließen,
  //   • und ggf. eine spezifische Liste von Gruppen, die ausgeschlossen werden sollen.
};

/**
 * Wird bei jedem Klick auf eine Layer-Checkbox oder einen Gruppen-Header ausgeführt.
 * 
 * Ablauf:
 *   1) this._initGroupSettings() stellt sicher, dass this._groupSettings da ist.
 *   2) Klick auf Gruppen-Header (data-layergroup)? → schalte ggf. andere Gruppen aus.
 *   3) Klick auf Layer-Checkbox (data-map-layer)? → wenn in dieser Gruppe 
 *        • excludeOtherGroups = true   → schalte andere Gruppen aus
 *        • excludeGroups = [ … ]       → schalte nur diese aufgelisteten Gruppen aus
 *        • exclusiveWithinGroup = true → schalte Geschwister-Layer in derselben Gruppe aus
 *   4) Anschließend läuft das originale Verhalten (SetLayerVisibility, Kinder, DirectoryToggle etc.)
 */
export function exclusiveLayerGroup(e) {
  // 1️⃣ Einmal pro Instanz: _groupSettings initialisieren
  this._initGroupSettings();

  // 2️⃣ Klick auf Gruppen-Header?
  if (e.target.dataset.layergroup) {
    const groupName = e.target.dataset.layergroup;
    const groupSetting = this._groupSettings[groupName] || {};

    // Standard-Group-Toggle wird vom Original-Plugin ausgeführt.
    // Wir koppeln uns per setTimeout an, damit wir erst NACH dem Standard-Toggle
    // die Ausschlusslogik ausführen:
    setTimeout(() => {
      // a) Globaler/Gruppen-Flag: OtherGroups ausschalten?
      if (groupSetting.excludeOtherGroups || Array.isArray(groupSetting.excludeGroups)) {
        // Entscheide, welche Gruppen wir ausschalten:
        let groupsToExclude = [];

        if (groupSetting.excludeOtherGroups) {
          groupsToExclude = Object.keys(this._groupSettings).filter(g => g !== groupName);
        }
        if (Array.isArray(groupSetting.excludeGroups)) {
          groupsToExclude = groupSetting.excludeGroups.slice();
        }

        // Alle Layer-Checkboxen aus den auszuschaltenden Gruppen "unclicken"
        const allToggles = document.querySelectorAll("[data-map-layer]");
        allToggles.forEach(input => {
          if (
            input.dataset.group &&
            groupsToExclude.includes(input.dataset.group) &&
            input.checked
          ) {
            input.click();
          }
        });
      }
    }, 0);

    // Keine weitere Weiterverarbeitung hier; Original-Plugin regelt das Ein-/Ausblenden aller Gruppen-Layer.
    return;
  }

  // 3️⃣ Klick auf einzelne Layer-Checkbox oder Label?
  let groupName = null;
  let activating = false;

  // (A) Wenn direkt das <input data-map-layer> angeklickt wurde
  if (e.target.dataset.mapLayer) {
    groupName = e.target.dataset.group || null;
    activating = e.target.checked;
  }
  // (B) Oder wenn das zugehörige <label> angeklickt wurde
  else if (e.target.tagName === "LABEL" && e.target.htmlFor) {
    const associatedInput = document.getElementById(e.target.htmlFor);
    if (associatedInput && associatedInput.dataset.mapLayer) {
      groupName = associatedInput.dataset.group || null;
      activating = associatedInput.checked;
    }
  }

  if (groupName && activating) {
    const groupSetting = this._groupSettings[groupName] || {};

    // a) Gruppen-Ausschluss (Global oder spez. Liste)?
    if (groupSetting.excludeOtherGroups || Array.isArray(groupSetting.excludeGroups)) {
      let groupsToExclude = [];

      if (groupSetting.excludeOtherGroups) {
        // Alle anderen Gruppen außer groupName
        groupsToExclude = Object.keys(this._groupSettings).filter(g => g !== groupName);
      }
      if (Array.isArray(groupSetting.excludeGroups)) {
        // Nur die in excludeGroups gelisteten
        groupsToExclude = groupSetting.excludeGroups.slice();
      }

      const allToggles = document.querySelectorAll("[data-map-layer]");
      allToggles.forEach(input => {
        if (
          input.dataset.group &&
          groupsToExclude.includes(input.dataset.group) &&
          input.checked
        ) {
          input.click();
        }
      });
    }

    // b) Innerhalb-der-Gruppe-Ausschluss?
    if (groupSetting.exclusiveWithinGroup) {
      const siblings = document.querySelectorAll(
        `[data-map-layer][data-group="${groupName}"]`
      );
      siblings.forEach(input => {
        // deactivate all siblings except the one we just clicked
        const clickedId = e.target.dataset.mapLayer ? e.target.id : e.target.htmlFor;
        if (input.id !== clickedId && input.checked) {
          input.click();
        }
      });
    }
  }

  // 4️⃣ Anschließend lässt das Original-Plugin seine Standard-Logik weiterlaufen
  //     (SetLayerVisibility, Kinder-Layer, Directory-Toggle, Zoom-Checks usw.).
  //     Wir greifen hier **nicht** per e.preventDefault() ein, sondern
  //     überlassen dem Original alles Weitere.
}


/***************************************************
 * Export (falls du es modulbasiert importieren willst)
 ***************************************************/
export default {
  exclusiveLayerGroup
};
