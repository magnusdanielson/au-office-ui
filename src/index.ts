export * from './test-plugin';
export * from './test-plugin-configuration';
export * from './resources/index';
export * from './resources/elements/OfficeButton/office-button';
export * from './resources/elements/OfficeButton/buttonTypeViewEngineHooks';
export * from './resources/elements/OfficeButton/office-button-enums';

import {FrameworkConfiguration} from 'aurelia-framework';
export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        './resources/elements/OfficeButton/office-button',
        './resources/elements/OfficeButton/buttonTypeViewEngineHooks'

    ]);
}