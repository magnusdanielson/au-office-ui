import { IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { ReactWrapper } from '../wrapper/ReactWrapper';
export declare class DuPivot extends ReactWrapper {
    container: HTMLElement | null;
    constructor(element: any);
    pivotChildren: any[];
    items: IPivotItemProps[];
    render(): void;
    renderReact(reactprops: any): void;
}
