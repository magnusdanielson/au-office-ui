"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_plugin_configuration_1 = require("./test-plugin-configuration");
function configure(frameworkConfig, callback) {
    var config = new test_plugin_configuration_1.MyTestPluginConfiguration();
    if (callback instanceof Function) {
        callback(config);
    }
    config.apply(frameworkConfig.container);
}
exports.configure = configure;
