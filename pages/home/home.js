// pages/tasks/tasks.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setTabBarItem({
      "index": 0,
      "text": "关于埃森哲",
      "iconPath": "asset/ac_guide.png",
      "selectedIconPath": "asset/ac_guide.png",
      "badge": "22"
    })
    wx.setTabBarItem({
      "index": 1,
      "text": "面试",
      "iconPath": "asset/ac_guide.png",
      "selectedIconPath": "asset/ac_guide.png"
    })
    wx.setTabBarItem({
      "index": 2,
      "text": "我的",
      "iconPath": "asset/ac_guide.png",
      "selectedIconPath": "asset/ac_guide.png"
    })
    wx.showTabBar()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})