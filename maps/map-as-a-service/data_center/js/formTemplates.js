const parkApiCarOnStreet = `

<div id="divForm">		

                <div><img id="formLogo" src="/img/MobiDataBW.svg"></a><img></div>

								<form id="form">


                <h2>Eingabemaske Straßen-Parkplätze</h2>

									
				<label for="parkingObject" class="mandatoryField">Parkobjekt*</label><br>
				<p>Angabe, ob Parkstreifen oder Einzelparkplatz erfasst werden sollen.</strong></p>
				<select id="parkingObject" name="Parkobjekt" required>
					<option value="" selected></option>
					<option value="Parkstreifen">Parkstreifen</option>
					<option value="Einzelparkplatz">Einzelparkplatz</option>
				</select>

				<label for="selectRecords">Daten aktualisieren</label><br>
				<p>Bereits erfasste Objekte können über die Auswahl des Namens ins Formular geladen werden und über die
					Schaltfläche <strong>Aktualisieren</strong> am Ende Formulars in der Datenbank aktualisiert werden.
				</p>
				<select id="divSelectRecords"></select>	

				
				<div id="divDatenmodell"></div>	

				<div id="divName"></div>	
				<div id="divId"></div>			
				<div id="divGeoJson"></div>
				<div id="divLongitudeLatitude"></div>				
				<div id="divAddress"></div>
				<div id="divCapacity"></div>
				<div id="divOrientation"></div>
				<div id="divLineType"></div>
				<div id="divParkingType"></div>		
				<div id="divStaticDataUpdatedAt"></div>		
				<div id="divParkingAudience"></div>	
				<div id="divWeekday"></div>			
				<div id="divHours"></div>
				<div id="divMaxStay"></div>				
				<div id="divDescription"></div>	

				<div id="divDubletten"></div>	
				<div id="divDuplicateId"></div>		
				<div id="divDuplicateAdditionalInformation"></div>	

				</form>

				</div>

			`;

			document.addEventListener('DOMContentLoaded', () => {
				// 1) EXISTIERENDEN Container holen – NICHT neu anlegen
				const container = document.getElementById('divForm');
				if (!container) {
				  console.error('Element mit id="divForm" nicht gefunden!');
				  return;
				}
			  
				// 2) Formular-HTML hineinsetzen
				container.innerHTML = parkApiCarOnStreet;

			});