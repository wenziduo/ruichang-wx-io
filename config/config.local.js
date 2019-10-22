/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const localConfig = {
    cluster: {
      listen: {
        path: '',
        port: 7005,
        hostname: '0.0.0.0',
      },
    },
    // redis 配置
    redis: {
      client: {
        port: 6379, // Redis port
        host: '47.98.50.170', // Redis host
        password: 'caiwenduo1993',
        db: 0,
      },
    },
    // socket
    io: {
      namespace: {
        '/': {
          connectionMiddleware: [ 'connection', 'auth' ],
          packetMiddleware: [ 'filter' ],
        },
      },
      // cluster 模式下，通过 redis 实现数据共享
      redis: {
        host: '47.98.50.170',
        port: 6379,
        password: 'caiwenduo1993',
        db: 0,
      },
    },
  };
  return {
    ...localConfig,
  };
};
