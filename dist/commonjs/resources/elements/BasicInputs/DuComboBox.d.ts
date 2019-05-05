import { IComboBoxProps, IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuComboBox extends AuReactStateWrapper implements IComboBoxProps {
    constructor(element: any);
    hidden: boolean;
    options: IComboBoxOption[];
    attached(): void;
}
