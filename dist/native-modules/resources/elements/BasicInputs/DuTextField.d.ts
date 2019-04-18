import { ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { DuReactWrapperNoChildren } from '../../wrapper/DuReactWrapperNoChildren';
export declare class DuTextField extends DuReactWrapperNoChildren implements ITextFieldProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
    blur(): void;
    focus(): void;
    select(): void;
    selectionEnd(): any;
    selectionStart(): any;
    setSelectionEnd(value: number): void;
    setSelectionRange(start: number, end: number): void;
    setSelectionStart(value: number): void;
}
