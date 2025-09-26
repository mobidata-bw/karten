.PHONY: \
  karten \
  karten-test \
  karten-% \
  karten-ipl-% \
  karten-auswertungen-% \
  karten-map-as-a-service-%

build:
	npm run build
	npm run build:test
	git add .
	git commit

karten:
	cp -r dist_prod karten
	cd karten && mv maps/* .
	rm -rf karten/maps	
	sudo rm -rf /var/www/html/daten/public/karten	
	sudo mv karten /var/www/html/daten/public
	sudo rm -rf /var/www/html/daten/public/karten/map-as-a-service/data_center
	sudo cp -r ../data_center /var/www/html/daten/public/karten/map-as-a-service

karten-test:
	cp -r dist_test karten_test
	cd karten_test && mv maps/* .
	rm -rf karten_test/maps
	sudo rm -rf /var/www/html/daten/public/karten_test
	sudo mv karten_test /var/www/html/daten/public

karten-dev:
	cp -r dist_dev karten_dev
	cd karten_dev && mv maps/* .
	rm -rf karten_dev/maps	
	sudo rm -rf /var/www/html/daten/public/karten_dev
	sudo mv karten_dev /var/www/html/daten/public

karten-%:
	sudo rm -rf /var/www/html/daten/public/karten_vite/$*
	sudo cp -r dist_prod/maps/$* /var/www/html/daten/public/karten_vite/$*

karten-ipl-%:
	sudo rm -rf /var/www/html/daten/public/karten_vite/ipl/$*
	sudo cp -r dist_prod/maps/ipl/$* /var/www/html/daten/public/karten_vite/ipl/$*

karten-auswertungen-%:
	sudo rm -rf /var/www/html/daten/public/karten_vite/auswertungen/$*
	sudo cp -r dist_prod/maps/auswertungen/$* /var/www/html/daten/public/karten_vite/auswertungen/$*

karten-map-as-a-service-%:
	sudo rm -rf /var/www/html/daten/public/karten_vite/map-as-a-service/$*
	sudo cp -r dist_prod/maps/map-as-a-service/$* /var/www/html/daten/public/karten_vite/map-as-a-service/$*