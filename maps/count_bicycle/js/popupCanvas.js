export function popupCanvas(feature) {

    const canvas = document.getElementById('canvas-' + feature.counter_site_id);
    const ctx = canvas.getContext('2d');

    const startYear = 2013;
    const endYear = 2024;

    /* BAR SCALING ACCORDING TO HIGHEST VALUE */
    let maxValue = 0;
    for (let year = startYear; year <= endYear; year++) {
        if (maxValue < feature[`${year}_ALL`]) {
            maxValue = feature[`${year}_ALL`];
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
    const barWidth = canvasWidth / 13; // number of columns
    const labellingCountsScaleFactor = 12;
    const scaleFactor = (diagramHeight - labellingCountsScaleFactor) / maxValue // bar scaling       

    if (feature.ALL != 0 && feature.ALL != undefined) {

        ctx.beginPath();
        ctx.moveTo(1.5, 0);
        ctx.lineWidth = diagramLineWidth;
        ctx.lineTo(1.5, diagramHeight);
        ctx.lineTo(canvasWidth, diagramHeight); // from 1|0 to 200/80
        ctx.stroke();

        for (let year = startYear, i = 0; year <= endYear; year++, i++) {

            const countsAttributYear = `${year}_ALL`;
            const counts = feature[countsAttributYear];
            const countsEndYear = feature[`${endYear}_ALL`];
            let intcountsAttributeValue;
            if (countsEndYear >= 1000000) {
                intcountsAttributeValue = (counts / 1000000).toFixed(1);
            } else {
                intcountsAttributeValue = (counts / 1000).toFixed(0);
            }
            const strcountsAttributeValue = intcountsAttributeValue.toString().replace('.', ',');

            const intYearExtract = `${year}`;
            const strYearExtract = intYearExtract.toString();
            const strYearExtractShortForm = "'" + strYearExtract.substring(2, 5);

            /* BAR COLORS */
            let barColor;

            switch (true) {
                case counts <= 100000:
                    barColor = '#ffe600';
                    break;
                case counts > 100000 && counts <= 500000:
                    barColor = '#f6b500';
                    break;
                case counts > 500000 && counts <= 1000000:
                    barColor = '#e78300';
                    break;
                case counts > 1000000 && counts <= 2000000:
                    barColor = '#d25000';
                    break;
                case counts > 2000000:
                    barColor = '#b70101';
                    break;
            };

            ctx.fillStyle = barColor;

            /* GET X-COORDINATE WHERE EACH BAR BEGINS */
            const barX = (3 + i) + i * barWidth;

            /* FILL RECT */
            ctx.fillRect(barX, barHeight, barWidth, -feature[countsAttributYear] * scaleFactor);

            /* FILL TEXT */
            ctx.font = '11px, Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';

            const centerX = barX + barWidth / 2;

            if (counts != 0) ctx.fillText(strcountsAttributeValue, centerX, (diagramHeight - labellingCountsMargin) - (feature[countsAttributYear] * scaleFactor));

            ctx.fillText(strYearExtractShortForm, centerX, canvasHeight);

        }
    }
    else {
        canvas.remove();
    }

};