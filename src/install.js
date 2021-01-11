'use strict';

import components from "@/components/autoload";

// 定义 install 方法
const install = function (Vue, options) {
  if (install.installed) return;
  install.installed = true;

  if(options) Vue.prototype.$swiperOptions = options;

  // 遍历并注册全局组件
  Object.keys(components).map(key => {
    Vue.component(components[key].name, components[key])
  });
};

if (typeof window !== 'undefined' && window['Vue']) {
  install(window['Vue'])
}

export default {
  install,
  ...components
}
