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

