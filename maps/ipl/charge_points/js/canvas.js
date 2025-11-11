export function popupCanvas(features) {


    const canvas = document.querySelector('#canvas-' + features.id);

    if (canvas) {

        const ctx = canvas.getContext('2d');

        const availableCount = features.chargepoint_available_count;
        const occupiedCount = features.chargepoint_charging_count + features.chargepoint_reserved_count;
        const inoperativeOutOfOrderCount = features.chargepoint_inoperative_count + features.chargepoint_outoforder_count;

        const chargepoints = [
            availableCount,
            occupiedCount,
            inoperativeOutOfOrderCount,
            features.chargepoint_unknown_count,
            features.chargepoint_static_count
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
            const colors = ['#059b02', '#ed0000', '#ffcc00', '#cacaca', '#615fdf'];
            const labels = ['frei', 'belegt', 'nicht nutzbar', 'unbekannt', 'statisch'];

            ctx.fillStyle = colors[chargepoint];

            // context fill
            ctx.fillRect(
                3 + chargepoint * barWidth + (1 * chargepoint),
                barHeight,
                barWidth,
                -chargepoints[chargepoint] * scaleFactor
            );
            ctx.font = '11px, Arial';
            ctx.fillStyle = 'black';

            let position;

            switch (true) {
                case chargepoint == 0:
                    ctx.fillText(labels[chargepoint], 24, canvasHeight - 2);
                    switch (true) {
                        case availableCount.toString().length == 3:
                            position = 23;
                            break;
                        case availableCount.toString().length == 1:
                            position = 28;
                            break;
                    }
                    ctx.fillText(chargepoints[chargepoint], position, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                    break;
                case chargepoint == 1:
                    ctx.fillText(chargepoints[chargepoint], 87, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                    ctx.fillText(labels[chargepoint], 76, canvasHeight - 2);
                    break;
                case chargepoint == 2:
                    ctx.fillText(chargepoints[chargepoint], 146, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                    ctx.fillText(labels[chargepoint], 120, canvasHeight - 2);
                    break;
                case chargepoint == 3:
                    ctx.fillText(chargepoints[chargepoint], 205, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                    ctx.fillText(labels[chargepoint], 183, canvasHeight - 2);
                    break;
                case chargepoint == 4:
                    ctx.fillText(chargepoints[chargepoint], 264, (diagramHeight - labellingCountsMargin) - (chargepoints[chargepoint] * scaleFactor));
                    ctx.fillText(labels[chargepoint], 250, canvasHeight - 2);
                    break;
            };
        }

    }

};
