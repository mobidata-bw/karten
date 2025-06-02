import { basePath } from '../utils/paths.js';
import { legendCircle, legendLine, legendRectangle } from './controlLayers.js';

export function addControlLayers(layers, directory, groupOrGroups) {

  return layers.map(layer => {
    const { id, label, color, group, subGroup = '' } = layer; //layer.id, layer.label, ...

    const roadworks = `<img class='legendIcon' src='${basePath}img/controlElements/verkehrszeichen.svg'></img>`;

    const symbol =
      layer.group == 'Baustellen' ? roadworks : (
        (layer.group == 'ÖPNV-Linien' || layer.type == 'line') ? legendLine(color) :
          (layer.type == 'fill' ? legendRectangle(color) :
            legendCircle(color)));

    return {
      id,
      name: symbol + label,
      group: groupOrGroups == 'group' ? group : subGroup,
      directory
    };
  })
    .reverse()

};