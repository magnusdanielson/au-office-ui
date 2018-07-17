System.register(["./base-service", "./special-service", "./standard-service", "./elements/OfficeButton/DefaultButton/office-button", "./elements/OfficeButton/buttonTypeViewEngineHooks", "./elements/OfficeButton/office-button-enums"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (base_service_1_1) {
                exportStar_1(base_service_1_1);
            },
            function (special_service_1_1) {
                exportStar_1(special_service_1_1);
            },
            function (standard_service_1_1) {
                exportStar_1(standard_service_1_1);
            },
            function (office_button_1_1) {
                exportStar_1(office_button_1_1);
            },
            function (buttonTypeViewEngineHooks_1_1) {
                exportStar_1(buttonTypeViewEngineHooks_1_1);
            },
            function (office_button_enums_1_1) {
                exportStar_1(office_button_enums_1_1);
            }
        ],
        execute: function () {
        }
    };
});
