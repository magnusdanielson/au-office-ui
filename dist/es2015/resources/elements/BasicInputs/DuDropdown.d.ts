import { IDropdownProps, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuDropdown extends DuReactWrapperBaseClass implements IDropdownProps {
    constructor(element: any);
    hidden: boolean;
    options: IDropdownOption[];
    attached(): void;
}
