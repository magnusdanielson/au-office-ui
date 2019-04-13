System.register(["./resources/index", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var aurelia_pal_1;
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuActionButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuCommandBarButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuCheckbox'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuChoiceGroup'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuComboBox'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuCompoundButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuContextualMenu'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuDefaultButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuDropdown'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuIconButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuLabel'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuSlider'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuSpinButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuTextField'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/BasicInputs/DuToggle'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Navigation/DuBreadcrumb'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Navigation/DuCommandBar'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Navigation/DuNav'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Navigation/DuPivot'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Navigation/DuSearch'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuColorPicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuCompactPeoplePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuDatePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuListPeoplePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuNormalPeoplePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Pickers/DuTagPicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/ProgressValidation/DuMessageBar'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/ProgressValidation/DuProgressIndicator'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/ProgressValidation/DuSpinner'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuCallout'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDialog'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCard'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCardActions'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCardActivity'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCardLocation'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCardPreview'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDocumentCardTitle'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDialog'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuDialogFooter'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/Surfaces/DuPanel')
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
