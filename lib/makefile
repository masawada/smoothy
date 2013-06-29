# source files
INPUT = main.js view.js view.log.js view.assert.js log.js assert.js assertions.js test.js boot.js

# output file name
NAME = smoothy

# output files
COMBINE = $(NAME).js
MINIFY = $(NAME).min.js

COMPRESS = $(MINIFY)

all : $(COMPRESS)

$(COMBINE) : $(INPUT)
	cat $^ > $@

$(COMPRESS) : $(COMBINE)
	java -jar /usr/bin/compiler.jar --js=$< --js_output_file=$@

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
