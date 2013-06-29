Smoothy.test(function(t){
  t.log('equal?');
  t.assert('str, str ok').equal('str','str');
  t.assert('num, num ok').equal(0, 0);
  t.assert('str0, num0 fail').equal('0',0);
  t.assert('1, true fail').equal(1, true);
  t.log('NaN?');
  t.assert('assert nan str ok').nan('string');
  t.assert('assert nan 6 fail').nan(6);
  t.assert('assert not nan 6 ok').not().nan(6);
  t.assert('assert not nan str fail').not().nan('string');
  t.log('type');
  t.assert('string ok').type('str','string');
  t.assert('string fail').not().type('str','string');
  t.assert('number ok').type(0, 'number');
  t.assert('object ok').type({}, 'object');
  t.assert('function ok').type(function(){}, 'function');
  t.log('null');
  t.assert('null ok').nil(null);
  t.assert('str fail').nil('str');
  t.assert('undefined fail').nil(undefined);
});

