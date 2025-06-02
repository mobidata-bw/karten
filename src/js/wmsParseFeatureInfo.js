export { wmsParseFeatureInfo };

function wmsParseFeatureInfo(content, features) {
  features = {};
  var lines = content.split('\n'); // Ausgabe wird aufgespalten anhand der Zeilenumbrüche

  lines.forEach(function (line) {
    var parts = line.split(' = ');  // text/plain-Ausgabe ist beispielhaft so strukturiert: stop_id = de:08425:2713:3:30 stop_code = null ... 

    if (parts.length === 2) { // jedes Wertepaar besthet aus einem Attributenamen und einem Wert
      var attribute = parts[0].trim(); // Attribut = Eintrag bei Index 0, z.B. "stop_id"; trim entfernt Leerzeichen
      var value = parts[1].trim().replace(/(^')|('$)/g, ''); // Wert = Eintrag bei Index 1, z.B. "de:08425:2713:3:30"; trim entfernt Leerzeichen; replace entfernt ' ' und ersetzt durch leere Zeichenkette

      // Wertepaare werden zu leerem features-Objekt hinzugefügt ( var features = {} )     
      features[attribute] = value;
    }
  });
  return features;
};