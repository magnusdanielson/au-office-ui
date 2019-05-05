import { ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { AuReactStateWrapperNoChildren } from '@dunite/au-react-wrapper';
export declare class DuTextField extends AuReactStateWrapperNoChildren implements ITextFieldProps {
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
