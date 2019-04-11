import { Logger } from 'aurelia-logging';
export declare abstract class ReactWrapper {
    element: HTMLElement;
    reactComponent: {};
    parent: any;
    log: Logger;
    constructor(element: any);
    abstract render(): any;
    defaultOnChangeEvent(propertyName: string, newValue: any): void;
    defaultActionEvent(propertyName: string, event: any): void;
    bind(bindingContext: any): void;
    unbind(): void;
}
export declare function onChangeEvent(propertyName: string, newValue: any): void;
export declare function defaultActionEvent(): void;
export declare function defaultOnChangeEvent(): void;
export declare function onlyAureliaBound(): void;
export declare function addProperties(aureliaClass: any, reactprops: any): void;
export declare function renderReact(reactClass: any, reactprops: any): void;
export declare function elementWrapper(node: Element, target: string): boolean;
