// boot.js

window.onload = function(){
  Smoothy.out = document.getElementById('tests');
  var tests = Smoothy.tests, i, l = tests.length;

  var smoothy = {};
  smoothy.log = Smoothy.log;
  smoothy.assert = Smoothy.assert;

  for(i=0;i<l;i++){
    tests[i].call(window, smoothy);
  }
};

