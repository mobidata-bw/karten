export function popupCanvas(features) {


const canvas = document.querySelector('#canvas-' + features.id);

    if (canvas) {

       const ctx = canvas.getContext('2d');

        const staticUnknownCount = features.chargepoint_static_count + features.chargepoint_unknown_count;
        const availableCount = features.chargepoint_available_count;
        const chargingCount = features.chargepoint_charging_count;
        const inoperativeOutOfOrderCount = features.chargepoint_inoperative_count + features.chargepoint_outoforder_count;

        const totalCount = staticUnknownCount + availableCount + chargingCount + inoperativeOutOfOrderCount;
     
        const chargepoints = [
            totalCount,
            staticUnknownCount,
            availableCount,
            chargingCount,
            inoperativeOutOfOrderCount
        ];

        //scale bars according to highest value
        let maxValue = 0;
        for (let i in chargepoints) {
            if (maxValue < chargepoints[i]) {
                maxValue = chargepoints[i];
            }
        };

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

        // bars        
        for (let chargepoint in chargepoints) {
            const colors = ['#006eaf', '#ffcc00', '#5ce75c', '#8B0000', '#3a4044'];
            const labels = ['gesamt', 'unbekannt', 'verfügbar', 'belegt', 'nicht nutzbar'];

            ctx.fillStyle = colors[chargepoint];

            // context fill
            ctx.fillRect(
                3 + chargepoint * barWidth + (1 * chargepoint),
                barHeight,
                barWidth,
                -chargepoints[chargepoint] * scaleFactor
            ),
                ctx.font = '11px, Arial';
            ctx.fillStyle = 'black';

            if (chargepoint == 0) {
                ctx.fillText(chargepoints[chargepoint], 28, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                ctx.fillText(labels[chargepoint], 13, canvasHeight - 2);
            }
            else if (chargepoint == 1) {
                ctx.fillText(chargepoints[chargepoint], 87, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                ctx.fillText(labels[chargepoint], 66, canvasHeight - 2);
            }
            else if (chargepoint == 2) {
                ctx.fillText(chargepoints[chargepoint], 146, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                ctx.fillText(labels[chargepoint], 127, canvasHeight - 2);
            }
            else if (chargepoint == 3) {
                ctx.fillText(chargepoints[chargepoint], 205, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                ctx.fillText(labels[chargepoint], 194, canvasHeight - 2);
            }
            else if (chargepoint == 4) {
                ctx.fillText(chargepoints[chargepoint], 264, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                ctx.fillText(labels[chargepoint], 238, canvasHeight - 2);
            };


        }

    }

};
