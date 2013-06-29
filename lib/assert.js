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

