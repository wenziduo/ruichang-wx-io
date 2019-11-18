'use strict';

const Controller = require('egg').Controller;

class NspController extends Controller {
  async exchange() {
    console.log('exchange');
    console.log('exchange');
    console.log('exchange');
    const { ctx, app } = this;
    const nsp = app.io.of('/');
    nsp.emit('发送数据成功');
  }
}

module.exports = NspController;
