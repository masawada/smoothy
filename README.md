# Smoothy.js - A (Cheap) Testing Framework on Firefox OS

## Installing
* clone this repository into your project.
  * `cd /path/to/project && clone https://github.com/masawada/smoothy.git`
* on Firefox OS Simulator, click 'Add Directory' and select `smoothy/manifest.webapp`

## Usage
* edit `js/test.js`
* assertion methods are in `lib/assertions.js`
  * equal(arg1, arg2) // check ===
  * nan(arg) // check nan
  * type(arg, type) // check type
  * nil(arg) // check null

## Adding Assertion Methods
Edit `lib/assertions.js`. To combine and minify source files, You can use [Google Closure Compiler](https://developers.google.com/closure/compiler/). Place `compiler.jar` in `/usr/bin/` and execute `make` in `/path/to/project/smoothy/lib`.

