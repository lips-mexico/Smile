design-system.css:
	sass app/design-system.scss app/design-system.css
	sass app/design-system.scss app/design-system.min.css --no-source-map --style compressed

debug:
	sass app/design-system.scss app/design-system.css --trace --unicodes

test:
	sass app/test/test.scss app/test/result.css --no-source-map --no-trace

clean:
	rm app/design-system.css app/design-system.min.css app/design-system.css.map