import{p as t}from"./addControlLayers-BNYwWbh1.js";function r(o){const s=`${t}img/popup/${o}`;return`
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
  `}export{r as p};
