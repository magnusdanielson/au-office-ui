import { ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuCheckbox extends AuReactStateWrapper implements ICheckboxProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
