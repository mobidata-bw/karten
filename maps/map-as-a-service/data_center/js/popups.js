import { popupImages } from "../../../../src/js/popupImages.js";

export function popupContent(records) {

    // console.log(records);

    /* INITIALIZE VARIABLES */
    const {
        Identifier,
        Name,
        ['Anzahl Stellplätze']: anzahlStellplaetze,
        ['Adresse - Straße und Nummer']: adresseStrasseNummer,
        ['Adresse - PLZ und Stadt']: adressePlzStadt,
        Ausrichtung,
        Linientyp,
        Verortung,
        ['Letzter Aktualisierungszeitpunkt']: letzterAktualisierungszeitpunkt,
        Parkberechtigte,
        ['Wochentag Beginn']: wochentagBeginn,
        ['Wochentag Ende']: wochentagEnde,
        ['Zeitraum Beginn']: zeitraumBeginn,
        ['Zeitraum Ende']: zeitraumEnde,
        ['Maximale Parkdauer Ende']: maximaleParkdauer,
        Beschreibung,
        ['Dubletten-ID']: dublettenId,
        ['Dublette - Weitere Informationen']: dubletteWeitereInformationen

    } = records;


    /* POPUP CONTENT */
    return '<table>\
                <tr>' +
        popupImages('Stadt Herrenberg') +
        ((Name == '' || Name == undefined) ? '' : ('<th class="title">' + Name + '</th>')) +
        '</tr>\
            </table><br><table>\
                <tr>\
                    <td class="att">ID</td>\
                    <td class="attContent">' + Identifier + '</td>\
               </tr><tr>\
                    <td class="att">Anzahl Stellplätze</td>\
                    <td class="attContent">' + anzahlStellplaetze + '</td>\
                </tr>' +
        ((adresseStrasseNummer == '' && adressePlzStadt == '' || adresseStrasseNummer == undefined && adressePlzStadt == undefined) ? '' : (
            '<tr>\
                    <td class="att">Adresse</td>\
                    <td class="attContent">' + adresseStrasseNummer + ', ' + adressePlzStadt + '</td>\
                </tr>'
        )) +
        ((Ausrichtung == '' || Ausrichtung == undefined) ? '' : (
            '<tr>\
                    <td class="att">Ausrichtung</td>\
                    <td class="attContent">' + Ausrichtung + '</td>\
                </tr>'
        )) +
        ((Linientyp == '' || Linientyp == undefined) ? '' : (
            '<tr>\
                    <td class="att">Linientyp</td>\
                    <td class="attContent">' + Linientyp + '</td>\
                </tr>'
        )) +
        ((Verortung == '' || Verortung == undefined) ? '' : (
            '<tr>\
                    <td class="att">Verortung</td>\
                    <td class="attContent">' + Verortung + '</td>\
                </tr>'
        )) +
        ((letzterAktualisierungszeitpunkt == '') ? '' : (
            '<tr>\
                    <td class="att">Letzter Aktualisierungszeitpunkt</td>\
                    <td class="attContent">' + letzterAktualisierungszeitpunkt + '</td>\
                </tr>'
        )) +
        ((wochentagBeginn == null && wochentagEnde == null && zeitraumBeginn == null && zeitraumEnde == null) ? '' : (
            '<tr>\
                    <td class="att">Zeitraum</td>\
                    <td class="attContent">' + ((wochentagBeginn == null || wochentagEnde == null) ? '' : wochentagBeginn) + ' ' + zeitraumBeginn + ' - ' + ((wochentagBeginn == null || wochentagEnde == null) ? '' : wochentagEnde) + ' ' + zeitraumEnde + '</td>\
                </tr>'
        )) +
        ((Parkberechtigte == '' || Parkberechtigte == undefined) ? '' : (
            '<tr>\
                    <td class="att">Parkberechtigte</td>\
                    <td class="attContent">' + Parkberechtigte + '</td>\
                </tr>'
        )) +
        ((maximaleParkdauer == undefined) ? '' : (
            '<tr>\
                    <td class="att">Maximale Parkdauer</td>\
                    <td class="attContent">' + maximaleParkdauer + '</td>\
                </tr>'
        )) +
        ((Beschreibung == undefined || Beschreibung == '') ? '' : (
            '<tr>\
                    <td class="att">Beschreibung</td>\
                    <td class="attContent">' + Beschreibung + '</td>\
                </tr>'
        )) +
        '</table>' +
        ((dublettenId == '' && dubletteWeitereInformationen == '') ? '' : (
            '<br><table>\
                <div class="title2">Dubletten</div>' +
            ((dublettenId == '') ? '' : (
                '<tr>\
                    <td class="att">ID</td>\
                    <td class="attContent">' + dublettenId + '</td>\
                </tr>'
            )) +
            ((dubletteWeitereInformationen == '') ? '' : (
                '<tr>\
                    <td class="att">Weitere Information</td>\
                    <td class="attContent">' + dubletteWeitereInformationen + '</td>\
                </tr>'
            )) +
            '</table>'
        ));

};