// pages/login/login.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    currentTab: '登录',
    tabs: ['登录', '注册'],
    isPassword: true,
    checked: true,
    getCaptchaTitle: '获取验证码',
    sendCaptchaStatus: false,
    sendCaptchaTime: 60,
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

  loginSubmit: function(e){
    let regex = /[0-9]{11}$/;
    //手机号码必须11位，号码必须是数字
    if (regex.test(e.detail.value.user) === false){
      wx.showToast({
        title: '手机号码或者密码输入不正确，请重新填写，如忘记密码，请重新设置。',
        icon: 'none',
        duration: 2000
      })
      return;
    }

    console.log("登录成功");
  },
  registerSubmit: function (e) {
    let _this = this;
    if (this.data.checked === false) {
    let regex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    //密码长度大于6小于12，且密码必须包含数字字母
    if (!regex.test(e.detail.value.password)) {
      wx.showToast({
        title: '输入的密码不符合规则，请重新输入。',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    //没有勾选“隐私政策”，显示提示语“请勾选同意埃森哲隐私政策”
    if (this.data.checked === false){
      wx.showToast({
        title: '请勾选同意埃森哲隐私政策。',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    //再次输入的密码与之前的密码不匹配时
    if (e.detail.value.password !== e.detail.value.repassword){
      wx.showToast({
        title: '再次输入的密码不正确，请重新输入。',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    //显示提示语“注册成功”，用户点击“确定”按钮，界面跳转到登录界面
    wx.showModal({
      title: '提示',
      content: '注册成功',
      success(res) {
        _this.setData({
          currentTab: '登录'
        })
        if (res.confirm) {
          _this.setData({
            currentTab: '登录'
          })
        } 
      }
    })}
  },
  showPassword: function (e) {
    let isPassword = !this.data.isPassword;
    this.setData({
      isPassword
    })
  },
  checkboxChange: function (e) {
    let checked;
    if (e.detail.value == '') {
      checked = false;
    } else {
      checked = true;
    }
    this.setData({
      checked
    })
  },
  forgetPassword: function (e) {
    console.log("忘记密码");
  },
  //点击“获取验证码”后，界面显示剩余60m秒时间，每60秒后，按钮显示“获取验证码”。
  getVerificationCode: function (e) {
    if(this.data.sendCaptchaStatus){
      return ;
    }
    this.setData({
      sendCaptchaStatus : true
    });
    const start = setInterval(() => {
      if (this.data.sendCaptchaTime >= 0) {
        this.setData({
          getCaptchaTitle:  this.data.sendCaptchaTime + '秒后可重发',
          sendCaptchaTime:this.data.sendCaptchaTime-1
        })
      } else {
        clearInterval(start);
        this.setData({
          getCaptchaTitle:'重新发送',
          sendCaptchaStatus:false,
          sendCaptchaTime:60,
        })
      }
    }, 1000);

  },
  readPrivacyPolicy: function (e) {
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