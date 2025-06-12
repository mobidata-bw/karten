.PHONY: karten

karten:
	cp -r dist karten
	cd karten && mv maps/* .
	rm -rf karten/maps
	mv karten karten_vite
	sudo rm -rf /var/www/html/daten/public/karten_vite
	sudo mv karten_vite /var/www/html/daten/public

karten-test:
	cp -r dist karten_test
	cd karten_test && mv maps/* .
	rm -rf karten_test/maps
	mv karten_test karten_test_vite
	sudo rm -rf /var/www/html/daten/public/karten_test_vite
	sudo mv karten_test_vite /var/www/html/daten/public

karten-%:
	sudo rm -rf /var/www/html/daten/public/karten/$*
	sudo mv dist/maps/$* /var/www/html/daten/public/karten