//
// Smoothy.js
// A (Cheap) Testing Framework on Firefox OS
// Copyright (c) 2013 Masayoshi Wada <developer@andantesoftware.com>
//

// main.js
var Smoothy = {};

// view.js

Smoothy.View = {};

// view.log.js

Smoothy.View.Log = function Class(){
  if(!(this instanceof Class)){ return new Class(); }

  // initialize
  this.initialize();
};

Smoothy.View.Log.prototype = (function(){
  var proto = {};

  proto.initialize = function(out){
    var li = document.createElement('li');
    li.className = 'log';

    var p = document.createElement('p');
    p.className = 'text';

    li.appendChild(p);

    this.liNode = li;
    this.pNode = p;
    Smoothy.out.appendChild(this.liNode);
  };

  proto.text = function(text){
    this.pNode.textContent = text;
  };

  return proto;
}());

// view.assert.js

Smoothy.View.Assert = function Class(){
  if(!(this instanceof Class)){ return new Class(); } 

  // initialize
  this.initialize();
};

Smoothy.View.Assert.prototype = (function(){
  var proto = {};

  proto.initialize = function(){
    var li = document.createElement('li');
    this.liNode = li;
    li.className = 'test';

    var div = document.createElement('div');
    div.className = 'container';

    var p = document.createElement('p');
    this.pNode = p;
    p.className = 'description';
    this.description('Untitled');

    var span = document.createElement('span');
    this.spanNode = span;
    this.status(null);

    div.appendChild(p);
    li.appendChild(div);
    li.appendChild(span);
    Smoothy.out.appendChild(li);
  };

  proto.description = function(text){
    this.pNode.textContent = text;
  };

  proto.status = function(status){
    if(status === true){
      this.spanNode.textContent = 'OK';
      this.spanNode.className = 'status ok';
    }else if(status === false){
      this.spanNode.textContent = 'Failed';
      this.spanNode.className = 'status failed';
    }else{
      this.spanNode.textContent = 'Testing...';
      this.spanNode.className = 'status testing';
    }
  };

  return proto;
}());

// log.js

Smoothy.Log = function Class(text){
  if(!(this instanceof Class)){ return new Class(text); }

  // init
  this.initialize(text);
};

Smoothy.Log.prototype = (function(){
  var proto = {};

  proto.initialize = function(text){
    var view = Smoothy.View.Log();
    this.view = view;
    this.text = this.view.text;

    view.text(text);
  };

  return proto;
}());

// assert.js

Smoothy.Assert = function Class(text){
  if(!(this instanceof Class)){ return new Class(text); }

  // init
  this.initialize(text);
};

Smoothy.Assert.prototype = (function(){
  var proto = {};

  proto.initialize = function(text){
    var view = Smoothy.View.Assert();
    this.view = view;
    this.description = this.view.description;
    this.notFlag = false;

    if(text){
      view.description(text);
    }
  };

  return proto;
}());

// assert.conditions.js

(function(){
var proto = Smoothy.Assert.prototype;

proto.not = function(){
  this.notFlag = (this.notFlag)? false : true;
  return this;
};

proto.equal = function(a,b){
  this.view.status((this.notFlag)? a !== b : a === b);
  return this;
};

proto.nan = function(a){
  this.view.status((this.notFlag)? !isNaN(a) : isNaN(a));
  return this;
};

}());
// test.js

Smoothy.tests = [];

Smoothy.test = function(test){
  Smoothy.tests.push(test);
};

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

