import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './item.less!';
import template from './item.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the order-item component'
    }
  }
});

export default Component.extend({
  tag: 'order-item',
  viewModel: ViewModel,
  template
});