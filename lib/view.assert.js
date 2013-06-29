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

