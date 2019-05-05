import { IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { AuReactNoStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuPivot extends AuReactNoStateWrapper {
    container: HTMLElement | null;
    constructor(element: any);
    pivotChildren: any[];
    items: IPivotItemProps[];
    render(): void;
    renderReact(reactprops: any): void;
}
