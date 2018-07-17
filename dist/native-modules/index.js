export * from './test-plugin';
export * from './test-plugin-configuration';
export * from './resources/index';
export function configure(aurelia) {
    aurelia.globalResources([
        './resources/elements/OfficeButton/office-button',
        './resources/elements/OfficeButton/buttonTypeViewEngineHooks'
    ]);
}
