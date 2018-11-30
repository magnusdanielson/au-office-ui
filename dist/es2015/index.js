//export * from './test-plugin';
//export * from './test-plugin-configuration';
export * from './resources/index';
import { PLATFORM } from 'aurelia-pal';
export function configure(aurelia) {
    aurelia.globalResources([
        PLATFORM.moduleName('./resources/elements/DuColorPicker'),
        PLATFORM.moduleName('./resources/elements/DuDatePicker'),
        PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
        PLATFORM.moduleName('./resources/elements/DuMessageBar'),
        PLATFORM.moduleName('./resources/elements/DuToggle'),
    ]);
}
