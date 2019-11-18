'use strict';

const Controller = require('egg').Controller;

class SendController extends Controller {
  async index() {
    const { app, ctx } = this;
    // console.log('app', app.io.controller.send());
    const nsp = app.io.of('/');
    nsp.emit('send', '发送数据成功');
    // this.socket.emit('res', "Hi! I've got your message: ");
    ctx.body = {};
  }
}

module.exports = SendController;
