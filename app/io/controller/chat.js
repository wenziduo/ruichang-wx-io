'use strict';

// app/io/controller/chat.js
// 将收到的消息发送给客户端
module.exports = app => {
  return function* () {
    console.log('666666666666666666666666666666666');
    // const self = this;
    const message = this.args[0];
    console.log('args', this.args);
    console.log('chat 控制器打印', message);
    this.socket.emit('res', `Hi! I've got your message: ${message}`);
    console.log('this.socket.adapter', this.socket.id);
  };
};
