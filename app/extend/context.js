'use strict';

/**
 *
 * @type {{foo(*)}}
 */
module.exports = {
  success(data) {
    this.body = {
      success: true,
      msg: '请求成功',
      data,
    };
  },
  error(msg = '请求失败', status) {
    this.body = {
      success: false,
      msg,
      status,
    };
  },
  systemError() {
    this.body = {
      success: false,
      msg: '系统内部错误',
    };
  },
  dbError() {
    this.body = {
      success: false,
      msg: '数据库错误',
    };
  },
  async delay(time = 200) {
    return await new Promise(resolve => { setTimeout(resolve, time); });
  },
  // 用户信息
  async getUserInfo() {
    const { app } = this;
    const userInfo = await app.redis.get('app-token');
    return JSON.parse(userInfo);
  },
  // 公共数据
  async getLayoutData() {
    const { cookies, app } = this;
    const userInfo = JSON.parse(await app.redis.get(cookies.get('app-token')));
    const data = {
      userInfo,
      navList: [{
        title: '首页',
        url: '/home',
        index: 0,
      }, {
        title: '发现',
        url: '/find',
        index: 1,
      }, {
        title: '话题',
        url: '/topic',
        index: 2,
      }],
    };
    return data;
  },
};
