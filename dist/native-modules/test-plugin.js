import { MyTestPluginConfiguration } from './test-plugin-configuration';
export function configure(frameworkConfig, callback) {
    var config = new MyTestPluginConfiguration();
    if (callback instanceof Function) {
        callback(config);
    }
    config.apply(frameworkConfig.container);
}
