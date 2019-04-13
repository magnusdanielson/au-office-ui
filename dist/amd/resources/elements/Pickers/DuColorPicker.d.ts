import { IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { IColor } from 'office-ui-fabric-react/lib/utilities/color/interfaces';
export declare class DuColorPicker extends DuReactWrapperBaseClass implements IColorPickerProps {
    constructor(element: any);
    hidden: boolean;
    color: string | IColor;
    attached(): void;
}
