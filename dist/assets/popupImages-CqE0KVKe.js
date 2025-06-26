import{n as t}from"./addControlLayers-DinexDBh.js";function n(o){const s=`${t}img/popup/${o}`;return`
    <th>
      <img
        src="${s}.svg"
        alt="Logo von ${o}"
        class="image"
        style="visibility:hidden"
        onload="this.style.visibility='visible'"
        onerror="
          this.onerror = null;
          this.src = '${s}.png';
          this.alt = 'Logo von ${o}'
        "
      />
    </th>
  `}export{n as p};
