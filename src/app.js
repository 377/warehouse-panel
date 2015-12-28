import AppMap from "can-ssr/app-map";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = AppMap.extend({
  define: {
    message: {
      value: 'Hello Jensilainen!',
      serialize: false
    },
    title: {
      value: 'warehouse-panel',
      serialize: false
    }
  }
});

export default AppViewModel;