Smoothy.test(function(t){
  t.log('log test');
  t.assert('assert nan string ok').nan('string');
  t.assert('assert nan 6 fail').nan(6);
  t.assert('assert not nan 6 ok').not().nan(6);
  t.assert('assert not nan str fail').not().nan('string');
});

