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

proto.type = function(a, b){
  var ta = typeof a;
  this.view.status((this.notFlag)? ta !== b : ta === b);
  return this;
};

proto.nil = function(a){
  this.view.status((this.notFlag)? a !== null : a === null);
  return this;
};

}());

