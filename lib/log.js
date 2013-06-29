// log.js

Smoothy.log = function Class(text){
  if(!(this instanceof Class)){ return new Class(text); }

  // init
  this.initialize(text);
};

Smoothy.log.prototype = (function(){
  var proto = {};

  proto.initialize = function(text){
    var view = Smoothy.View.Log();
    this.view = view;
    this.text = this.view.text;

    view.text(text);
  };

  return proto;
}());

