// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:'登录',
    tabs:['登录','注册'],
    isPassword: true,
    checked: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  switchTab: function(e){
    let currentTab = e.currentTarget.id;
    this.setData({
      currentTab
    });
  },
  loginSubmit: function(e){
    let regex = /^\d+$/g;
    let format = !regex.test(e.detail.value.user);
    if (e.detail.value.user.length !== 11 || format ){
      wx.showToast({
        title: '手机号码或者密码输入不正确，请重新填写，如忘记密码，请重新设置。',
        icon: 'none',
        duration: 2000
      })
      return;
    }
   
    console.log("登录成功");
  },
  registerSubmit: function(e){
    let _this = this;
    if (this.data.checked === false){
      wx.showToast({
        title: '请勾选同意埃森哲隐私政策。',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    wx.showModal({
      title: '提示',
      content: '注册成功',
      success(res) {
        _this.setData({
          currentTab:'登录'
        })
      }
    })
  },
  showPassword: function(e){
    let isPassword = !this.data.isPassword;
    this.setData({
      isPassword
    })
  },
  checkboxChange: function(e){
    let checked;
    if(e.detail.value == ''){
      checked = false;
    }else{
      checked = true;
    }
  this.setData({
    checked
  })
  },
  forgetPassword: function(e){
    console.log("忘记密码");
  },
  getVerificationCode: function(e){
    console.log("获取验证码");
  },
  readPrivacyPolicy: function(e){
    console.log("阅读公司隐私政策");
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