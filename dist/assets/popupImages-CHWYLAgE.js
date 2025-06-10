import{t as s}from"./global-BnYcKtCT.js";function r(t){const o=`${s}img/popup/${t}`;return`
    <th>
      <img
        src="${o}.svg"
        alt="Logo von ${t}"
        class="image"
        style="visibility:hidden"
        onload="this.style.visibility='visible'"
        onerror="
          this.onerror = null;
          this.src = '${o}.png';
          this.alt = 'Logo von ${t}'
        "
      />
    </th>
  `}export{r as p};
