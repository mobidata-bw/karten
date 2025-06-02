export function popupImages(fileName) {
  const path = `/karten_vite/img/popup/${fileName}`;
  return `
    <th>
      <img
        src="${path}.svg"
        alt="Logo von ${fileName}"
        class="image"
        style="visibility:hidden"
        onload="this.style.visibility='visible'"
        onerror="
          this.onerror = null;
          this.src = '${path}.png';
          this.alt = 'Logo von ${fileName}'
        "
      />
    </th>
  `;
}
