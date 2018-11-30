System.register(["./resources/index", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var aurelia_pal_1;
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuColorPicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDatePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuMessageBar'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuToggle'),
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
            function (index_1_1) {
                exportStar_1(index_1_1);
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
        }
    };
});
