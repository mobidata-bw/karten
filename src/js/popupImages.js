import { basePath } from '../utils/paths.js';


export function popupImages(fileName) {
  const path = `${basePath}img/popup/${fileName}`;
  return `
    <th>
      <img
        src="${path}.svg"
        alt="Logo von ${fileName}"
        class="image"
        style="visibility:hidden"
        onload="this.style.visibility='visible'"
        onerror="         
          if (this.src.endsWith('.svg')) {
            this.onerror = function() {             
              this.onerror = null;
              this.src = '${path}.jpg';
            };
            this.src = '${path}.png';
          }         
          else if (this.src.endsWith('.png')) {
            this.onerror = null;
            this.src = '${path}.jpg';
          }
        "
      />
    </th>
  `;
};