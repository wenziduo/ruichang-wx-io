/**
 * Created by bear on 2018/2/12.
 */
'use strict';
const PREFIX = 'room'; // 定义房间号

module.exports = app => {
  return async (ctx, next) => {
    const { app, socket, logger, helper } = ctx;
    const id = socket.id;
    const nsp = app.io.of('/');
    const query = socket.handshake.query;

    // 用户信息
    const { room, userId } = query; // 获取socket链接传过来的参数
    const rooms = [ room ];

    console.log(room, userId);

    const tick = (id, msg) => {
      logger.debug('#tick', id, msg);
      // 踢出用户前发送消息
      socket.emit(id, helper.parseMsg('deny', msg));
      // 调用 adapter 方法踢出用户，客户端触发 disconnect 事件
      nsp.adapter.remoteDisconnect(id, true, err => {
        logger.error(err);
      });
    };
    // 检查房间是否存在，不存在则踢出用户
    // 备注：此处 app.redis 与插件无关，可用其他存储代替

    const hasRoom = await app.redis.get(`${PREFIX}:${room}`);
    console.log(hasRoom, `${PREFIX}:${room}`);

    // if (!hasRoom) {
    //   tick(id, {
    //     type: 'deleted',
    //     message: 'deleted, room has been deleted.',
    //   });
    //   return;
    // }

    // 用户加入
    logger.debug('#join', room);
    socket.join(room);

    // 在线列表
    nsp.adapter.clients(rooms, (err, clients) => {
      console.log('clients', clients);
      // 更新在线用户列表
      nsp.to(room).emit('online', {
        clients,
        action: 'join',
        target: 'participator',
        message: `User(${id}) joined.`,
      });
      console.log(123, clients);
    });
    // socket.emit('connect', 'packet received!');

    await next();
    console.log('disconnect!');
  };
};
