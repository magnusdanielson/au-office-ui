import { IDropdownProps, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuDropdown extends AuReactStateWrapper implements IDropdownProps {
    constructor(element: any);
    hidden: boolean;
    options: IDropdownOption[];
    attached(): void;
}
