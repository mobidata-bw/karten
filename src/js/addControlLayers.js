import { basePath } from '../utils/paths.js';
import { legendCircle, legendLine, legendRectangle } from './controlLayers.js';


export function addControlLayers(layers, directory, groupOrGroups) {
  
  return layers.map(layer => {
    const {
      id,
      label,
      color,
      group,
      subGroup = '',
      type,
      exclusiveWithinGroup,
      symbol: whichSymbol
    } = layer;

    /* SYMBOL */
    let fallbackSymbol;
    if (group === 'Baustellen') {
      fallbackSymbol = `<img class='legendIcon' src='${basePath}img/controlElements/verkehrszeichen.svg'></img>`;
    } else if (group === 'ÖPNV-Linien' || type === 'line') {
      fallbackSymbol = legendLine(color);
    } else if (type === 'fill') {
      fallbackSymbol = legendRectangle(color);
    } else {
      fallbackSymbol = legendCircle(color);
    }
    const legendSymbol = layer.legendColor === 'none'
      ? ''
      : (typeof whichSymbol === 'function'
        ? whichSymbol()
        : fallbackSymbol
      );

    return {
      id,
      name: legendSymbol + label,
      group: groupOrGroups == 'group' ? group : subGroup || group,
      subGroup: subGroup,
      directory,
      exclusiveWithinGroup,
      metadata: {
        lazyLoading: true,
        source: {
          id: layer.source,
          type: "geojson",
          data: layer.url
        }
      }
    };
  })
    .reverse()

};