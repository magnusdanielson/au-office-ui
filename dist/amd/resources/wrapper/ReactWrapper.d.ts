import { Logger } from 'aurelia-logging';
import { IDuReactWrapper } from './IDuReactWrapper';
export declare abstract class ReactWrapper implements IDuReactWrapper {
    element: HTMLElement;
    reactComponent: any;
    parent: any;
    log: Logger;
    constructor(element: any);
    abstract render(): any;
    bind(bindingContext: any): void;
    unbind(): void;
    createState(reactprops: any): any;
}
export declare function defaultActionEvent(): void;
export declare function defaultOnChangeEvent(): void;
export declare function onlyAureliaBound(): void;
export declare function addProperties(aureliaClass: any, reactprops: any): void;
