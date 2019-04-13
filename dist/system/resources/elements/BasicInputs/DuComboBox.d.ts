import { IComboBoxProps, IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuComboBox extends DuReactWrapperBaseClass implements IComboBoxProps {
    constructor(element: any);
    hidden: boolean;
    options: IComboBoxOption[];
    attached(): void;
}
