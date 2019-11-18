'use strict';

/**
 * @param {Egg.Application} app - egg application。。
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.post('/send', controller.send.index);
  io.of('/').route('chat', app.io.controllers.chat);
};
