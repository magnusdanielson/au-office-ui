import { IDetailsListProps } from 'office-ui-fabric-react/lib/DetailsList';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
import { ScrollToMode } from 'office-ui-fabric-react/lib/List';
export declare class DuDetailsList extends AuReactStateWrapper implements IDetailsListProps {
    constructor(element: any);
    hidden: boolean;
    items: any[];
    scrollToIndex(index: number): void;
    forceUpdate(): void;
    focusIndex(index: number, forceIntoFirstElement?: boolean, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    attached(): void;
    getStartItemIndexInView(): any;
}
