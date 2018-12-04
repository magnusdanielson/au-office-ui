System.register(["./elements/DuColorPicker", "./elements/DuDatePicker", "./elements/DuDefaultButton", "./elements/DuMessageBar", "./elements/DuToggle", "./wrapper/ReactWrapper"], function (exports_1, context_1) {
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
            function (DuColorPicker_1_1) {
                exportStar_1(DuColorPicker_1_1);
            },
            function (DuDatePicker_1_1) {
                exportStar_1(DuDatePicker_1_1);
            },
            function (DuDefaultButton_1_1) {
                exportStar_1(DuDefaultButton_1_1);
            },
            function (DuMessageBar_1_1) {
                exportStar_1(DuMessageBar_1_1);
            },
            function (DuToggle_1_1) {
                exportStar_1(DuToggle_1_1);
            },
            function (ReactWrapper_1_1) {
                exportStar_1(ReactWrapper_1_1);
            }
        ],
        execute: function () {
        }
    };
});
