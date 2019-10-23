'use strict';
module.exports = () => {
  return async (ctx, next) => {
    // ctx.socket.emit('res', 'connected!');
    console.log(66);
    ctx.socket.join('room');
    ctx.socket.on('login', function(res) {
      console.log('login', res);
    });
    // console.log('ctx.socket.adapter', ctx.socket.adapter);
    ctx.socket.adapter.clients([ 'room' ], (err, clients) => {
      console.log('clients', clients);
      // logger.debug('#online_join', clients);
      // // 更新在线用户列表
      // nsp.to(room).emit('online', {
      //   clients,
      //   action: 'join',
      //   target: 'participator',
      //   message: `User(${id}) joined.`,
      // });
    });
    // ctx.socket.on('login', res => {
    //   console.log('login', res);
    // });
    // ctx.socket.disconnect();
    await next();
  };
};
