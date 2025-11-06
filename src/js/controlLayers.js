export function legendCircle(color) {
    return `<svg width='10' height='11'>
                <circle r='4' cx='5' cy='5' class='legendCircle' fill='${color}' />
            </svg>`;
};

export function legendRectangle(color) {
    return `<svg width='11' height='11'>
                <rect class='legendRectangle' fill='${color}' />
            </svg>`;
};

export function legendLine(color) {
    return `<svg width='12' height='5'>
                <line x1='1' y1='2' x2='12' y2='2' class='legendLine' stroke='${color}' />
            </svg>`;
};

export function legendDoubleLine(color1, color2) {
    return `<svg width='12' height='9'>
                <line x1='1' y1='2' x2='12' y2='2' class='legendLine' stroke='${color1}' />
                <line x1='1' y1='6' x2='12' y2='6' class='legendLine' stroke='${color2}' />
            </svg>`;
};

export function legendTripleLine(color1, color2, color3) {
    return `<svg width='12' height='16'>
                <line x1='1' y1='3' x2='12' y2='3' class='legendLine' stroke='${color1}' />
                <line x1='1' y1='7' x2='12' y2='7' class='legendLine' stroke='${color2}' />
                <line x1='1' y1='11' x2='12' y2='11' class='legendLine' stroke='${color3}' />
            </svg>`;
};

export function legendQuadrupleLine(color1, color2, color3, color4) {
    return `<svg width='12' height='17'>
                <line x1='1' y1='2' x2='12' y2='2' class='legendLine' stroke='${color1}' />
                <line x1='1' y1='6' x2='12' y2='6' class='legendLine' stroke='${color2}' />
                <line x1='1' y1='10' x2='12' y2='10' class='legendLine' stroke='${color3}' />
                <line x1='1' y1='14' x2='12' y2='14' class='legendLine' stroke='${color4}' />
            </svg>`;
};

export function legendQuintupleLine(color1, color2, color3, color4, color5) {
    return `<svg width='12' height='17'>
                <line x1='1' y1='2' x2='12' y2='2' class='legendLine' stroke='${color1}' />
                <line x1='1' y1='5' x2='12' y2='5' class='legendLine' stroke='${color2}' />
                <line x1='1' y1='8' x2='12' y2='8' class='legendLine' stroke='${color3}' />
                <line x1='1' y1='11' x2='12' y2='11' class='legendLine' stroke='${color4}' />
                <line x1='1' y1='14' x2='12' y2='14' class='legendLine' stroke='${color5}' />
            </svg>`;
};