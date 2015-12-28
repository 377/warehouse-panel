import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './login.less!';
import template from './login.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the user-login component'
    }
  }
});

export default Component.extend({
  tag: 'user-login',
  viewModel: ViewModel,
  template
});