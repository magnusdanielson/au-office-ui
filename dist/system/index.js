System.register(["./test-plugin", "./test-plugin-configuration", "./resources/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            './resources/elements/OfficeButton/office-button',
            './resources/elements/OfficeButton/buttonTypeViewEngineHooks'
        ]);
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (test_plugin_1_1) {
                exportStar_1(test_plugin_1_1);
            },
            function (test_plugin_configuration_1_1) {
                exportStar_1(test_plugin_configuration_1_1);
            },
            function (index_1_1) {
                exportStar_1(index_1_1);
            }
        ],
        execute: function () {
        }
    };
});
