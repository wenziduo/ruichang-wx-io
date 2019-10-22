'use strict';

const crypto = require('crypto');
const moment = require('moment');

/**
 *
 * @type {{foo(*)}}
 */
module.exports = {
  // this就是ctx对象
  // 加密token
  crypto(content) {
    let token1 = 'caiwenduo'; // 加密的密钥；
    const buf = crypto.randomBytes(16);
    token1 = buf.toString('hex'); // 密钥加密；
    // console.log('生成的token(用于加密的密钥):' + token1);
    const SecrectKey = token1; // 秘钥；
    const Signture = crypto.createHmac('sha1', SecrectKey); // 定义加密方式
    Signture.update(content);
    const miwen = Signture.digest().toString('base64'); // 生成的密文后将再次作为明文再通过pbkdf2算法迭代加密；
    // console.log('加密的结果f：' + miwen);
    return miwen;
  },
  // 加密
  cryptoStr(str) {
    const cipher = crypto.createCipher('aes128', 'apshop147852');
    let encrypted = cipher.update(str, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  },
  // 解密
  decryptoStr(str) {
    const decipher = crypto.createDecipher('aes128', 'apshop147852');
    let decrypted = decipher.update(str, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  },
  // 时间控件
  moment(option) {
    return moment(option);
  },
  // 过滤cookie的url
  passUrl: [ '/login', '/register', '/loginOut' ],
  // cookie和redis过期时间(毫秒)
  maxAge: 3 * 24 * 60 * 60 * 1000,
  // 手动异步
  sleep(timer) {
    return new Promise(resolve => {
      setTimeout(resolve, timer);
    });
  },
  // 订单生成规则
  getOrders() {
    return moment().format('YYYYMMDDHHmmss');
  },
  parseMsg(action, payload = {}, metadata = {}) {
    const meta = Object.assign(
      {},
      {
        timestamp: Date.now(),
      },
      metadata
    );

    return {
      meta,
      data: {
        action,
        payload,
      },
    };
  },
};
