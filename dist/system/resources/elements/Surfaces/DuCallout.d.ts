import { ICalloutProps } from 'office-ui-fabric-react/lib/Callout';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuCallout extends AuReactStateWrapper implements ICalloutProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
