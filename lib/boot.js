// boot.js

window.onload = function(){
  Smoothy.out = document.getElementById('tests');
  var tests = Smoothy.tests, i, l = tests.length;

  var smoothy = {};
  smoothy.log = Smoothy.Log;
  smoothy.assert = Smoothy.Assert;

  for(i=0;i<l;i++){
    tests[i].call(window, smoothy);
  }
};

