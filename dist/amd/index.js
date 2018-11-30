define(["require", "exports", "./resources/index", "aurelia-pal"], function (require, exports, index_1, aurelia_pal_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    //export * from './test-plugin';
    //export * from './test-plugin-configuration';
    __export(index_1);
    function configure(aurelia) {
        aurelia.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuColorPicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDatePicker'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuMessageBar'),
            aurelia_pal_1.PLATFORM.moduleName('./resources/elements/DuToggle'),
        ]);
    }
    exports.configure = configure;
});
