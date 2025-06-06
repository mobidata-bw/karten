// Dokumentation Attribute: https://www.balm.bund.de/SharedDocs/ExterneLinks/DE/Download/BALM_Dokumentation_Nationales-Datenmodell_Geodaten-Radverkehrsinfrastruktur.pdf?__blob=publicationFile&v=1

export function popupContent(features) {
    // console.log(features)

    /* INITIALIZE VARIABLES */
    const {
        routenname,
        routen_id,
        str_name,
        fuehrung,
        richtung,
        belag,
        laenge,
        licht,
        breite,
        lage,
        b_pflicht,
        bewertung,
        baulast,
        status,
        tempo
    } = features;


    return '<table>\
                <tr>' +
        ((routenname == undefined) ? ('<th class="title"><i>Routenname nicht vorhanden</i></th>') : ('<th class="title">' + routenname + '</th>')) +
        '</tr>\
            </table><br><table>' +
            ((routen_id == undefined) ? '' : (
                '<tr>\
                <td class="att">Routen-ID</td>\
                <td class="attContent">' + routen_id + '</td>\
            </tr>'
            )) +
        ((str_name == undefined) ? '' : (
            '<tr>\
                <td class="att">Straßenname-ID</td>\
                <td class="attContent">' + str_name + '</td>\
            </tr>'
        )) +
        '<tr>' +
        ((fuehrung == undefined) ? '' : ('<td class="att">Führungsform</td>')) +
        ((fuehrung == '100') ? ('<td class="attContent">Radverkehr auf Fahrbahn (Mischverkehr mit KFZ)</td>') : '') +
        ((fuehrung == '101') ? ('<td class="attContent">Fahrradstraße</td>') : '') +
        ((fuehrung == '102') ? ('<td class="attContent">Mehrzweckstreifen</td>') : '') +
        ((fuehrung == '103') ? ('<td class="attContent">Schutzstreifen</td>') : '') +
        ((fuehrung == '104') ? ('<td class="attContent">Radverkehr auf Fahrbahnen mit Straßenbahn</td>') : '') +
        ((fuehrung == '105') ? ('<td class="attContent">Spielstraße</td>') : '') +
        ((fuehrung == '200') ? ('<td class="attContent">Radfahrstreifen</td>') : '') +
        ((fuehrung == '300') ? ('<td class="attContent">baulich angelegte Radwege</td>') : '') +
        ((fuehrung == '301') ? ('<td class="attContent">Einrichtungsradwege</td>') : '') +
        ((fuehrung == '302') ? ('<td class="attContent">Zweirichtungsradwege</td>') : '') +
        ((fuehrung == '400') ? ('<td class="attContent">Führung mit Fußgängerverkehr</td>') : '') +
        ((fuehrung == '401') ? ('<td class="attContent">gemeinsamer Geh- und Radweg (StVO 240)</td>') : '') +
        ((fuehrung == '402') ? ('<td class="attContent">Führung mit Fußgängerverkehr Radfahrer frei (StVO 239)</td>') : '') +
        ((fuehrung == '403') ? ('<td class="attContent">Fußgängerzone</td>') : '') +
        ((fuehrung == '404') ? ('<td class="attContent">Gehweg (Schiebestrecke)</td>') : '') +
        ((fuehrung == '405') ? ('<td class="attContent">Gehweg (Radverkehr frei)</td>') : '') +
        ((fuehrung == '500') ? ('<td class="attContent">sonstige Wege</td>') : '') +
        ((fuehrung == '501') ? ('<td class="attContent">Wirtschaftsweg</td>') : '') +
        ((fuehrung == '502') ? ('<td class="attContent">Forstweg</td>') : '') +
        ((fuehrung == '503') ? ('<td class="attContent">Feldweg</td>') : '') +
        ((fuehrung == '504') ? ('<td class="attContent">Deichweg</td>') : '') +
        ((fuehrung == '505') ? ('<td class="attContent">Betriebsweg an Bundeswasserstraßen</td>') : '') +
        ((fuehrung == '506') ? ('<td class="attContent">Treppe</td>') : '') +
        ((fuehrung == '600') ? ('<td class="attContent">maschinenbetriebene Verbindungen</td>') : '') +
        ((fuehrung == '601') ? ('<td class="attContent">Fähre</td>') : '') +
        ((fuehrung == '602') ? ('<td class="attContent">Schienen- bzw. Seilbahnbetrieb</td>') : '') +
        ((fuehrung == '900') ? ('<td class="attContent">unbekannt</td>') : '') +
        '</tr><tr>' +
        ((richtung == undefined) ? '' : ('<td class="att">Fahrtrichtung</td>')) +
        ((richtung == '1') ? ('<td class="attContent">beide Richtungen</td>') : '') +
        ((richtung == '2') ? ('<td class="attContent">in Geometrierichtung</td>') : '') +
        ((richtung == '3') ? ('<td class="attContent">gegen Geometrierichtung</td>') : '') +
        ((richtung == '9') ? ('<td class="attContent">unbekannt</td>') : '') +
        '</tr><tr>' +
        ((belag == undefined) ? '' : ('<td class="att">Oberflächenart</td>')) +
        ((belag == '100') ? ('<td class="attContent">befestigte Oberfläche</td>') : '') +
        ((belag == '110') ? ('<td class="attContent">Deckschicht aus Asphalt</td>') : '') +
        ((belag == '120') ? ('<td class="attContent">Deckschicht aus Beton</td>') : '') +
        ((belag == '130') ? ('<td class="attContent">Pflaster</td>') : '') +
        ((belag == '131') ? ('<td class="attContent">Betonpflaster</td>') : '') +
        ((belag == '132') ? ('<td class="attContent">Kopf-/Natursteinpflaster</td>') : '') +
        ((belag == '140') ? ('<td class="attContent">Platten</td>') : '') +
        ((belag == '141') ? ('<td class="attContent">Betonplatten</td>') : '') +
        ((belag == '142') ? ('<td class="attContent">Natursteinplatten</td>') : '') +
        ((belag == '143') ? ('<td class="attContent">sonstige Platten</td>') : '') +
        ((belag == '200') ? ('<td class="attContent">wassergebundener Belag</td>') : '') +
        ((belag == '201') ? ('<td class="attContent">feiner Splittbelag</td>') : '') +
        ((belag == '202') ? ('<td class="attContent">grober Schotter</td>') : '') +
        ((belag == '300') ? ('<td class="attContent">ungebundener/naturnaher Belag</td>') : '') +
        ((belag == '400') ? ('<td class="attContent">Holz</td>') : '') +
        ((belag == '500') ? ('<td class="attContent">Metall</td>') : '') +
        ((belag == '900') ? ('<td class="attContent">unbekannt</td>') : '') +
        '</tr>' +
        ((laenge == undefined) ? '' : (
            '<tr>\
            <td class="att">Länge-ID</td>\
            <td class="attContent">' + laenge + 'm' + '</td>\
        </tr>'
        )) +
        '<tr>' +
        ((licht == undefined) ? '' : ('<td class="att">Beleuchtung</td>')) +
        ((licht == '0') ? ('<td class="attContent">unbeleuchtet</td>') : '') +
        ((licht == '1') ? ('<td class="attContent">beleuchtet</td>') : '') +
        ((licht == '2') ? ('<td class="attContent">Retroreflektierende Randmarkierung</td>') : '') +
        '</tr>' +
        ((breite == undefined) ? '' : (
            '<tr>\
            <td class="att">Breite</td>\
            <td class="attContent">' + breite + 'cm' + '</td>\
        </tr>'
        )) +
        '<tr>' +
        ((lage == undefined) ? '' : ('<td class="att">Ortslage</td>')) +
        ((lage == '1') ? ('<td class="attContent">innerorts</td>') : '') +
        ((lage == '2') ? ('<td class="attContent">außerorts</td>') : '') +
        '</tr>' +
        ((b_pflicht == undefined) ? '' : (
            '<tr>\
            <td class="att">Benutzungspflicht</td>\
            <td class="attContent">' + b_pflicht + '</td>\
        </tr>'
        )) +
        '<tr>' +
        ((bewertung == undefined) ? '' : ('<td class="att">Bewertung</td>')) +
        ((bewertung == '1') ? ('<td class="attContent">neuwertig / sehr guter Zustand</td>') : '') +
        ((bewertung == '2') ? ('<td class="attContent">guter Zustand</td>') : '') +
        ((bewertung == '3') ? ('<td class="attContent">mittlerer Zustand</td>') : '') +
        ((bewertung == '4') ? ('<td class="attContent">unzureichender Zustand / Anlass zur Beobachtung/Analyse</td>') : '') +
        ((bewertung == '5') ? ('<td class="attContent">unbefahrbar</td>') : '') +
        ((bewertung == '9') ? ('<td class="attContent">nicht bewertet</td>') : '') +
        '</tr><tr>' +
        ((baulast == undefined) ? '' : ('<td class="att">Zuständgkeit</td>')) +
        ((baulast == '1') ? ('<td class="attContent">Bund</td>') : '') +
        ((baulast == '2') ? ('<td class="attContent">Land</td>') : '') +
        ((baulast == '3') ? ('<td class="attContent">Kreis</td>') : '') +
        ((baulast == '4') ? ('<td class="attContent">Gemeinde</td>') : '') +
        ((baulast == '5') ? ('<td class="attContent">Dritte</td>') : '') +
        ((baulast == '9') ? ('<td class="attContent">unbekannt</td>') : '') +
        '</tr><tr>' +
        ((status == undefined) ? '' : ('<td class="att">Status</td>')) +
        ((status == '10') ? ('<td class="attContent">befahrbar</td>') : '') +
        ((status == '20') ? ('<td class="attContent">in Bau</td>') : '') +
        ((status == '30') ? ('<td class="attContent">in Planung</td>') : '') +
        ((status == '40') ? ('<td class="attContent">gesperrt</td>') : '') +
        ((status == '41') ? ('<td class="attContent">dauerhaft gesperrt</td>') : '') +
        ((status == '42') ? ('<td class="attContent">saisonal gesperrt</td>') : '') +
        ((status == '43') ? ('<td class="attContent">gesperrt mit Enddatum</td>') : '') +
        '</tr>' +
        ((tempo == undefined) ? '' : (
            '<tr>\
            <td class="att">Geschwindigkeit</td>\
            <td class="attContent">' + tempo + 'km/h' + '</td>\
        </tr>'
        )) +
        '</table><table>\
                <tr>\
                    <td class="attContentLink"><a href="https://www.balm.bund.de/SharedDocs/ExterneLinks/DE/Download/BALM_Dokumentation_Nationales-Datenmodell_Geodaten-Radverkehrsinfrastruktur.pdf?__blob=publicationFile&v=1" target="_blank">&#10149 zur Datenschema-Dokumentation<a></td>\
                </tr>\
            </table>';
};