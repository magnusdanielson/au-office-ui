"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
//export * from './test-plugin';
//export * from './test-plugin-configuration';
__export(require("./resources/index"));
var aurelia_pal_1 = require("aurelia-pal");
function configure(aurelia) {
    aurelia.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuActionButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuBreadcrumb'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuCheckbox'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuChoiceGroup'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuColorPicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuComboBox'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuCommandBar'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuCommandBarButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuCompactPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuCompoundButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuContextualMenu'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDatePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDropdown'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuIconButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuLabel'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuListPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuMessageBar'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuNav'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuPeoplePicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuPivot'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuProgressIndicator'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuSearch'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuSlider'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuSpinButton'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuTagPicker'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuTextField'),
        aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuToggle')
    ]);
}
exports.configure = configure;
