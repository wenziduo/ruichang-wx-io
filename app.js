'use strict'

/**
 *  全局定义
 * @param app
 */

class AppBootHook {
  constructor(app) {
    this.app = app
    app.root_path = __dirname
  }

  configWillLoad() {
    // console.log('app - configWillLoad');
    // Ready to call configDidLoad,
    // Config, plugin files are referred,
    // this is the last chance to modify the config.
  }

  configDidLoad() {}

  async didLoad() {}

  async willReady() {
    // console.log('app - willReady');
    // All plugins have started, can do some thing before app ready
  }

  async didReady() {
    // console.log('app - didReady');
    // Worker is ready, can do some things
    // don't need to block the app boot.
  }

  async serverDidReady() {
    // console.log('app - serverDidReady');
    // Server is listening.
    // const configs = await this.app.context.model.Config.findAll({ where: { systemName: 'Apshop' } });
    // const systemConfig = {};
    // for (const config of configs) {
    //   if (!systemConfig[config.configName]) {
    //     systemConfig[config.configName] = {};
    //   }
    //   systemConfig[config.configName][config.keyWord] = config.configValue;
    // }
    // systemConfig.shop = await this.app.context.model.Shop.findByPk(1, { raw: true });
    // this.app.locals = systemConfig;
  }

  async beforeClose() {
    // console.log('app - beforeClose');
    // Do some thing before app close.
  }
}

module.exports = AppBootHook
