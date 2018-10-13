System.register(["./test-plugin", "./test-plugin-configuration", "./resources/index", "./resources/elements/OfficeButton/DefaultButton/office-button", "./resources/elements/OfficeButton/buttonTypeViewEngineHooks", "./resources/elements/OfficeButton/office-button-enums", "@uifabric/styling"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            'resources/elements/OfficeButton/DefaultButton/office-button',
            'resources/elements/OfficeButton/buttonTypeViewEngineHooks'
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
            },
            function (office_button_1_1) {
                exportStar_1(office_button_1_1);
            },
            function (buttonTypeViewEngineHooks_1_1) {
                exportStar_1(buttonTypeViewEngineHooks_1_1);
            },
            function (office_button_enums_1_1) {
                exportStar_1(office_button_enums_1_1);
            },
            function (styling_1_1) {
                exportStar_1(styling_1_1);
            }
        ],
        execute: function () {
        }
    };
});
