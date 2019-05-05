import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuActionButton extends AuReactStateWrapper implements IButtonProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
