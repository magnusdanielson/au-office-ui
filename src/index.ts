export * from './test-plugin';
export * from './test-plugin-configuration';
export * from './resources/index';
export * from './resources/elements/OfficeButton/DefaultButton/office-button';
export * from './resources/elements/OfficeButton/buttonTypeViewEngineHooks';
export * from './resources/elements/OfficeButton/office-button-enums';
//export * from './interfaces';
export * from '@uifabric/styling';

import {FrameworkConfiguration} from 'aurelia-framework';
export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        'resources/elements/OfficeButton/DefaultButton/office-button',
        'resources/elements/OfficeButton/buttonTypeViewEngineHooks'

    ]);
}