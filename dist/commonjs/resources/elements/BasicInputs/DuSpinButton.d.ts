import { ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuSpinButton extends AuReactStateWrapper implements ISpinButtonProps {
    constructor(element: any);
    hidden: boolean;
    className: string;
    attached(): void;
}
