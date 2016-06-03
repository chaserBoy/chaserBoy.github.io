var guideTpl=require('../tpl/guide.string');
var swiper=require('../lib/swiper-3.3.1.min.js');
document.body.innerHTML+=guideTpl;

// 定义一个视图
SPA.defineView('guide', {
  html: guideTpl,

  // 添加插件
  plugins: ['delegated'],

  // 给元素绑定事件
  bindActions: {
    'goto.index': function () {
      SPA.open('index');
      SPA.util.storage('isVisited', true);
    }
  },

  // 给视图绑定事件
  bindEvents: {
    'beforeShow': function () {
      var guideSwiper = new Swiper('#guide-swiper', {
        loop: false
      });
    }
  }
});
