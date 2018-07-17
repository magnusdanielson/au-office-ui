System.register(["./test-plugin-configuration"], function (exports_1, context_1) {
    "use strict";
    var test_plugin_configuration_1;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfig, callback) {
        var config = new test_plugin_configuration_1.MyTestPluginConfiguration();
        if (callback instanceof Function) {
            callback(config);
        }
        config.apply(frameworkConfig.container);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (test_plugin_configuration_1_1) {
                test_plugin_configuration_1 = test_plugin_configuration_1_1;
            }
        ],
        execute: function () {
        }
    };
});
