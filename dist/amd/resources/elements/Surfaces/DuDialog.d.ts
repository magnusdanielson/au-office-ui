import { IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuDialog extends DuReactWrapperBaseClass implements IDialogProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
