import { IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuDialog extends AuReactStateWrapper implements IDialogProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
