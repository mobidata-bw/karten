export function popupCanvas(features) {

    const capacity = features.capacity;
    const realtimeCapacity = features.realtime_capacity;
    const realtimeFreeCapacity = features.realtime_free_capacity;

    if ((realtimeFreeCapacity && capacity) && (capacity != 0 || realtimeCapacity != 0)) {
        const anchor = document.getElementById("anchor-" + features.id);

        if (anchor) {
            // Erzeuge einen eindeutigen Canvas: ID "canvas-[feature.id]"
            const canvasHtml = '<td rowspan="7"><canvas class="canvasPie" id="canvas-' + features.id + '" width="110" height="96"></canvas></td>';
            anchor.outerHTML = canvasHtml;

            const canvas = document.getElementById("canvas-" + features.id);
            // if (!canvas) return;
            const ctx = canvas.getContext("2d");

            const finalCapacity = realtimeCapacity ? realtimeCapacity : capacity;
            const freeShare = realtimeFreeCapacity / finalCapacity;
            const occupiedShare = (finalCapacity - realtimeFreeCapacity) / finalCapacity;

            const freeShareLabel = (freeShare * 100).toFixed(0) + '%';
            const occupiedShareLabel = (occupiedShare * 100).toFixed(0) + '%';
            const oneStateShareLabel = (freeShare * 100).toFixed(0) + '%';

            let freeShareFactor = freeShare * 2;
            let occupiedShareFactor = (1 - freeShare) * 2;

            const colors = ['#059b02', '#ed0000'];
            const labels = [freeShareLabel, occupiedShareLabel];
            const angles = [Math.PI * freeShareFactor, Math.PI * occupiedShareFactor];
            const offset = 1;

            // Start: Winkel oben (12 Uhr)
            let beginAngle = -Math.PI / 2;
            let endAngle = beginAngle;

            // Textpositionierung
            const centerX = canvas.width / 2 - 10;
            const centerY = canvas.height / 2 + 7;
            const radius = 40;

            // Zeichne die Segmente
            for (let i = 0; i < angles.length; i++) {
                beginAngle = endAngle;
                endAngle = endAngle + angles[i];
                const medianAngle = (beginAngle + endAngle) / 2;

                const offsetX = Math.cos(medianAngle) * offset;
                const offsetY = Math.sin(medianAngle) * offset;

                ctx.beginPath();
                ctx.fillStyle = colors[i % colors.length];
                ctx.moveTo(centerX + offsetX, centerY + offsetY);
                ctx.arc(centerX + offsetX, centerY + offsetY, radius, beginAngle, endAngle);
                ctx.lineTo(centerX + offsetX, centerY + offsetY);
                ctx.fill();

                if (occupiedShareFactor !== 2 && occupiedShareFactor !== 0) {
                    ctx.strokeStyle = "white";
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }

                let textX = centerX + Math.cos(medianAngle) * (radius - 18);
                let textY = centerY + Math.sin(medianAngle) * (radius - 18);

                ctx.fillStyle = "white";
                ctx.font = "bold 11px Arial";
                ctx.textAlign = "center";

                if (finalCapacity === realtimeFreeCapacity || realtimeFreeCapacity === 0) {
                    ctx.fillText(oneStateShareLabel, centerX, centerY);
                } else {
                    if ((freeShare < 0.15 && i === 0) || (occupiedShare < 0.15 && i === 1)) {
                        ctx.fillStyle = "black";
                        textX = centerX + Math.cos(medianAngle) * (radius + 5);
                        textY = centerY + Math.sin(medianAngle) * (radius + 5);
                    }
                    ctx.fillText(labels[i], textX, textY);
                }
            }
        }
    }

};