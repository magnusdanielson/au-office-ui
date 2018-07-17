import { ButtonType, ButtonChecked, ButtonEnabled } from '../office-button-enums';
export declare class OfficeButton {
    type: ButtonType;
    icon: string;
    label: string;
    description: string;
    enabledState: ButtonEnabled;
    checkedState: ButtonChecked;
    onclick: Function;
    readonly css: string;
    buttonclick(): void;
    constructor();
    disposeEvents(): void;
}
