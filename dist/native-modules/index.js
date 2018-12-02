//export * from './test-plugin';
//export * from './test-plugin-configuration';
export * from './resources/index';
import { PLATFORM } from 'aurelia-pal';
export function configure(aurelia) {
    aurelia.globalResources([
        PLATFORM.moduleName('./resources/elements/DuActionButton'),
        PLATFORM.moduleName('./resources/elements/DuBreadcrumb'),
        PLATFORM.moduleName('./resources/elements/DuCheckbox'),
        PLATFORM.moduleName('./resources/elements/DuChoiceGroup'),
        PLATFORM.moduleName('./resources/elements/DuColorPicker'),
        PLATFORM.moduleName('./resources/elements/DuComboBox'),
        PLATFORM.moduleName('./resources/elements/DuCommandBarButton'),
        PLATFORM.moduleName('./resources/elements/DuCompoundButton'),
        PLATFORM.moduleName('./resources/elements/DuContextualMenu'),
        PLATFORM.moduleName('./resources/elements/DuDatePicker'),
        PLATFORM.moduleName('./resources/elements/DuDefaultButton'),
        PLATFORM.moduleName('./resources/elements/DuDropdown'),
        PLATFORM.moduleName('./resources/elements/DuIconButton'),
        PLATFORM.moduleName('./resources/elements/DuLabel'),
        PLATFORM.moduleName('./resources/elements/DuMessageBar'),
        PLATFORM.moduleName('./resources/elements/DuProgressIndicator'),
        PLATFORM.moduleName('./resources/elements/DuSlider'),
        PLATFORM.moduleName('./resources/elements/DuSpinButton'),
        PLATFORM.moduleName('./resources/elements/DuTextField'),
        PLATFORM.moduleName('./resources/elements/DuToggle'),
        PLATFORM.moduleName('./resources/elements/DuNav')
    ]);
}
