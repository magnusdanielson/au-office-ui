import { IGroupedListProps } from 'office-ui-fabric-react/lib/GroupedList';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuGroupedList extends AuReactStateWrapper implements IGroupedListProps {
    constructor(element: any);
    hidden: boolean;
    items: any[];
    toggleCollapseAll(allCollapsed: boolean): any;
    forceUpdate(): void;
    attached(): void;
}
