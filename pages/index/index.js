//index.js
//获取应用实例
const app = getApp()
const AV = require('../../libs/av-core-min.js'); 

Page({
  data: {
    username: '',
    password: '',
  },
  
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },

  toregiste(){
    wx.navigateTo({
      url: '../register/register?username='+this.data.username,
    })
  },

  // register() {
  //   const {
  //     username,
  //     password,
  //   } = this.data;
  //   const user = new AV.User();
  //   if (username) user.set({username});
  //   if (password) user.set({password});
  //   user.save().then(() => {
  //     wx.showToast({
  //       title: '注册成功',
  //       icon: 'success',
  //     });
  //   }).catch(error => {
  //     wx.showToast({
  //       title:error.message,
  //       icon:'none'
  //     })
  //   });
  // },
  login() {
    const {
      username,
      password,
    } = this.data;
    AV.User.logIn(username, password).then(function (loginedUser) {
      wx.redirectTo({
        url: '../message/message?message=' + "Hello world!",
      });
      wx.showToast({
        title: '登录成功',
        icon: 'success',
      })
      // 登录成功，跳转到message页面
    }, function (error) {
      alert(JSON.stringify(error));
    });
  },
})
