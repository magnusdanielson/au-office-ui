import { IGroupedListProps } from 'office-ui-fabric-react/lib/GroupedList';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuGroupedList extends DuReactWrapperBaseClass implements IGroupedListProps {
    constructor(element: any);
    hidden: boolean;
    items: any[];
    toggleCollapseAll(allCollapsed: boolean): any;
    forceUpdate(): void;
    attached(): void;
}
