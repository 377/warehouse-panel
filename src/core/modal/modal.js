import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './modal.less!';
import template from './modal.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the core-modal component'
    }
  }
});

export default Component.extend({
  tag: 'core-modal',
  viewModel: ViewModel,
  template
});