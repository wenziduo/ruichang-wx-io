'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { io } = app
  io.of('/').route('chat', app.io.controllers.chat)
}
