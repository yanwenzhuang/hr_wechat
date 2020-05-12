// pages/login/login.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '通知',
    tabs: ['通知', '待办'],
    informList:[{
      title:"通知1",
      time: "2020-05-12 13:14",
      content:"1111111111111111111111111111111111111111111111111111111111111111111111"
    }, 
    {
      title: "通知2",
      time: "2020-05-13 14:14",
      content: "22222222222222222222222222222222222222222222222222222222222222222222222"
    },
    {
      title: "通知3",
      time: "2020-05-15 15:14",
      content: "333333333333333333333333333333333333333"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  switchTab: function (e) {
    let currentTab = e.currentTarget.id;
    this.setData({
      currentTab
    });
  },
  informDetail: function(e){
    let detail = e.currentTarget.dataset.detail;
    wx.navigateTo({
      url: 'inform_detail/inform_detail?detail=' + detail.title + '&time=' + detail.time +'&content='+detail.content
    })
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