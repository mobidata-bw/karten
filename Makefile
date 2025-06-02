.PHONY: karten

karten:
	cp -r dist karten
	cd karten && mv maps/* .
	rm -rf karten/maps
	mv karten karten_vite
	sudo rm -rf /var/www/html/daten/public/karten_vite
	sudo mv karten_vite /var/www/html/daten/public