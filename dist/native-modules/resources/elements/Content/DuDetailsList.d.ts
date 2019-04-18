import { IDetailsListProps } from 'office-ui-fabric-react/lib/DetailsList';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { ScrollToMode } from 'office-ui-fabric-react/lib/List';
export declare class DuDetailsList extends DuReactWrapperBaseClass implements IDetailsListProps {
    constructor(element: any);
    hidden: boolean;
    items: any[];
    scrollToIndex(index: number): void;
    forceUpdate(): void;
    focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    attached(): void;
    getStartItemIndexInView(): any;
}
