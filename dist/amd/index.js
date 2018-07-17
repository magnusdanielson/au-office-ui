define(["require", "exports", "./test-plugin", "./test-plugin-configuration", "./resources/index"], function (require, exports, test_plugin_1, test_plugin_configuration_1, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(test_plugin_1);
    __export(test_plugin_configuration_1);
    __export(index_1);
    function configure(aurelia) {
        aurelia.globalResources([
            './resources/elements/OfficeButton/office-button',
            './resources/elements/OfficeButton/buttonTypeViewEngineHooks'
        ]);
    }
    exports.configure = configure;
});
