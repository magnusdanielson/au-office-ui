import { IPanelProps } from 'office-ui-fabric-react/lib/Panel';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuPanel extends DuReactWrapperBaseClass implements IPanelProps {
    constructor(element: any);
    isOpen: boolean;
    attached(): void;
}
