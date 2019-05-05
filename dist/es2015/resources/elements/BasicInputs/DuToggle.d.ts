import { IToggleProps } from 'office-ui-fabric-react/lib/Toggle';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuToggle extends AuReactStateWrapper implements IToggleProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
