//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env: '<%=env%>', // 前往云控制台获取环境id
      traceUser: true
    });
  },
  globalData: {
    blog: {}
  }
})