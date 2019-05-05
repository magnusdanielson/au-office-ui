import { IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
import { IColor } from 'office-ui-fabric-react/lib/utilities/color/interfaces';
export declare class DuColorPicker extends AuReactStateWrapper implements IColorPickerProps {
    constructor(element: any);
    hidden: boolean;
    color: string | IColor;
    attached(): void;
}
