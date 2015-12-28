import QUnit from 'steal-qunit';
import { ViewModel } from './item';

// ViewModel unit tests
QUnit.module('warehouse-panel/order/item');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the order-item component');
});
