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
  const config = (exports = {
    keys: appInfo.name + '_1566829784915_1051',
    cluster: {
      listen: {
        path: '',
        port: 7004,
        hostname: '0.0.0.0',
      },
    },
    security: {
      csrf: {
        enable: false,
        queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        bodyName: '_csrf', // 通过 body 传递 CSRF token 的默认字段为 _csrf
      },
    },
  });

  return {
    ...config,
  };
};
