import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('warehouse-panel functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('warehouse-panel main page shows up', function() {
  F('title').text('warehouse-panel', 'Title is set');
});
