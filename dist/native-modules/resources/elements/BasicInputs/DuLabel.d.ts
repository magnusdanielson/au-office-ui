import { ILabelProps } from 'office-ui-fabric-react/lib/Label';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuLabel extends AuReactStateWrapper implements ILabelProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
