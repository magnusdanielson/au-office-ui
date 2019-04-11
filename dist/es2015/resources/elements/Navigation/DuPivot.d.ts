import { IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuPivot extends DuReactWrapperBaseClass {
    container: HTMLElement | null;
    constructor(element: any);
    hidden: boolean;
    pivotChildren: any[];
    items: IPivotItemProps[];
    attached(): void;
}
