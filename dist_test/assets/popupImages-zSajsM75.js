import{p as t}from"./addControlLayers-DkKEqnNS.js";function o(i){const s=`${t}img/popup/${i}`;return`
    <th>
      <img
        src="${s}.svg"
        alt="Logo von ${i}"
        class="image"
        style="visibility:hidden"
        onload="this.style.visibility='visible'"
        onerror="         
          if (this.src.endsWith('.svg')) {
            this.onerror = function() {             
              this.onerror = null;
              this.src = '${s}.jpg';
            };
            this.src = '${s}.png';
          }         
          else if (this.src.endsWith('.png')) {
            this.onerror = null;
            this.src = '${s}.jpg';
          }
        "
      />
    </th>
  `}export{o as p};
