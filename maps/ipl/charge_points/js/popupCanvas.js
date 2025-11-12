export function popupCanvas(features) {


    const canvas = document.querySelector('#canvas-' + features.id);

    if (canvas) {

        const ctx = canvas.getContext('2d');

        /* INITIALIZE VARIABLES */
        const chargepoints = [
            features.chargepoint_available_count, // frei
            features.chargepoint_charging_count + features.chargepoint_reserved_count, // belegt
            features.chargepoint_inoperative_count + features.chargepoint_outoforder_count, // nicht nutzbar
            features.chargepoint_unknown_count, // unbekannt
            features.chargepoint_static_count // ohne Echtzeit
        ];

        /* BAR SCALING ACCORDING TO HIGHEST VALUE */
        let maxValue = 0;
        for (let i in chargepoints) {
            if (maxValue < chargepoints[i]) {
                maxValue = chargepoints[i];
            }
        };

        /* GENERAL SETTING */
        const canvasHeight = canvas.height; // canvas height, stems from popups.js 
        const canvasWidth = canvas.width; // canvas width, stems from popups.js                   
        const labellingHeight = 15; // space for column titles
        const labellingCountsMargin = 4; // the smaller the number, the lower the number's positions     
        const diagramHeight = canvasHeight - labellingHeight; // diagram uses the canvas extent minus 15
        const diagramLineWidth = 1.5; // width of diagram line
        const barHeight = canvasHeight - labellingHeight - diagramLineWidth; // the lower the number, the higher the bar's starting point
        const barWidth = canvasWidth / 5.2; // number of columns
        const labellingCountsScaleFactor = 12;
        const scaleFactor = (diagramHeight - labellingCountsScaleFactor) / maxValue // bar scaling       

        ctx.beginPath();
        ctx.moveTo(1.5, 0);
        ctx.lineWidth = diagramLineWidth;
        ctx.lineTo(1.5, diagramHeight);
        ctx.lineTo(canvasWidth, diagramHeight); // from 1|0 to 200/80
        ctx.stroke();

        for (let chargepoint in chargepoints) {

            /* SET COLORS AND LABELS */
            const colors = ['#059b02', '#ed0000', '#ffcc00', '#cacaca', '#615fdf'];
            const labels = ['frei', 'belegt', 'nicht nutzbar', 'unbekannt', 'ohne Echtzeit'];

            ctx.fillStyle = colors[chargepoint];

            /* GET X-COORDINATE WHERE EACH BAR BEGINS */
            const barX = 3 + chargepoint * barWidth + (1 * chargepoint);

            /* FILL RECT */
            ctx.fillRect(barX, barHeight, barWidth, -chargepoints[chargepoint] * scaleFactor);

            /* FILL TEXT */
            ctx.font = '11px, Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';

            const centerX = barX + barWidth / 2;

            ctx.fillText(chargepoints[chargepoint], centerX, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
            ctx.fillText(labels[chargepoint], centerX, canvasHeight - 2);

        }

    }

};
