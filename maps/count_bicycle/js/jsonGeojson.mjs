import fs from 'fs';
import path from 'path';

async function jsonToGeojson() {
    try {
        const startYear = 2013;
        const endYear = 2024;
        const geojsonData = {
            type: "FeatureCollection",
            features: []
        };

        // Ein Map-Objekt verwenden, um die Features nach counter_site_id zu gruppieren
        const featureMap = new Map();

        for (let year = startYear; year <= endYear; year++) {
            // Pfad zur jeweiligen Jahresdatei erstellen
            const jsonFilePath = new URL(`./fahrradzaehler_tageswerten_${year}.json`, import.meta.url);

            // Daten aus der JSON-Datei lesen
            const jsonData = await fs.promises.readFile(jsonFilePath, 'utf-8');

            // JSON-Daten in ein JavaScript-Objekt umwandeln
            const parsedData = JSON.parse(jsonData);

            // Features aus der Jahresdatei in das GeoJSON hinzufügen
            parsedData.forEach(feature => {
                const counterId = feature.counter_site_id; // Verwendung von counter_site_id zum Gruppieren
                let totalALL = 0;               

                // Summiere die ALL-Werte
                feature.channels.forEach(channel => {
                    if (channel.direction == "ALL") {
                        totalALL += channel.counts;  // Nur ALL-Werte summieren
                    }
                });

                // Überprüfen, ob das Feature bereits in der Map vorhanden ist
                if (featureMap.has(counterId)) {
                    // Existierendes Feature aktualisieren
                    const existingFeature = featureMap.get(counterId);
                    existingFeature.properties[`${year}_ALL`] = totalALL; // Jahr_ALL aktualisieren
                    existingFeature.properties.ALL += totalALL; // Gesamtsumme aktualisieren
                } else {
                    // Neues Feature erstellen
                    featureMap.set(counterId, {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: [feature.longitude, feature.latitude]
                        },
                        properties: {
                            domain_name: feature.domain_name,
                            counter_site: feature.counter_site,
                            counter_site_id: feature.counter_site_id,
                            iso_timestamp:  feature.channels[0].iso_timestamp,
                            counter_site_photos: feature.counter_site_photos,
                            [`${year}_ALL`]: totalALL,  // Jahr_ALL
                            ALL: totalALL  // Neues Attribut für die Gesamtsumme
                        }
                    });
                }
            });
        }

        // Füge alle Features aus der Map in geojsonData.features ein
        geojsonData.features = Array.from(featureMap.values());

        // GeoJSON in Datei schreiben
        fs.writeFileSync('./fahrradzaehler_tageswerten_gesamt.geojson', JSON.stringify(geojsonData));

        console.log('GeoJSON wurde erfolgreich erstellt und gespeichert.');
    } catch (error) {
        console.error('Fehler beim Lesen oder Schreiben der Datei:', error);
    }
}

jsonToGeojson();
