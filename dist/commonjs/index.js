"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./test-plugin"));
__export(require("./test-plugin-configuration"));
__export(require("./resources/index"));
__export(require("./resources/elements/OfficeButton/DefaultButton/office-button"));
__export(require("./resources/elements/OfficeButton/buttonTypeViewEngineHooks"));
__export(require("./resources/elements/OfficeButton/office-button-enums"));
//export * from './interfaces';
__export(require("@uifabric/styling"));
function configure(aurelia) {
    aurelia.globalResources([
        'resources/elements/OfficeButton/DefaultButton/office-button',
        'resources/elements/OfficeButton/buttonTypeViewEngineHooks'
    ]);
}
exports.configure = configure;
