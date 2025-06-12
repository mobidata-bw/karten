.PHONY: \
  karten \
  karten-test \
  karten-% \
  karten-ipl-% \
  karten-auswertungen-% \
  karten-map-as-a-service-%

karten:
	cp -r dist karten
	cd karten && mv maps/* .
	rm -rf karten/maps
	#mv karten karten_vite
	sudo rm -rf /var/www/html/daten/public/karten/assets
	sudo rm -rf /var/www/html/daten/public/karten/data
	sudo rm -rf /var/www/html/daten/public/karten/img
	sudo rm -rf /var/www/html/daten/public/karten/ipl
	sudo rm -rf /var/www/html/daten/public/karten/auswertungen
	sudo rm -rf /var/www/html/daten/public/karten/map-as-a-service/transparenzportale
	sudo rm -rf /var/www/html/daten/public/karten/map-as-a-service/oepnv_gueteklassen
	sudo mv karten /var/www/html/daten/public

karten-test:
	cp -r dist karten_test
	cd karten_test && mv maps/* .
	rm -rf karten_test/maps
	mv karten_test karten_test
	sudo rm -rf /var/www/html/daten/public/karten_test
	sudo mv karten_test /var/www/html/daten/public

karten-%:
	sudo rm -rf /var/www/html/daten/public/karten/$*
	sudo cp -r dist/maps/$* /var/www/html/daten/public/karten/$*

karten-ipl-%:
	sudo rm -rf /var/www/html/daten/public/karten/ipl/$*
	sudo cp -r dist/maps/ipl/$* /var/www/html/daten/public/karten/ipl/$*

karten-auswertungen-%:
	sudo rm -rf /var/www/html/daten/public/karten/auswertungen/$*
	sudo cp -r dist/maps/auswertungen/$* /var/www/html/daten/public/karten/auswertungen/$*

karten-map-as-a-service-%:
	sudo rm -rf /var/www/html/daten/public/karten/map-as-a-service/$*
	sudo cp -r dist/maps/map-as-a-service/$* /var/www/html/daten/public/karten/map-as-a-service/$*