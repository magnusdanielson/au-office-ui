import { customElement, inject } from 'aurelia-framework';
import { ColorPicker, IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';
import { IColor } from 'office-ui-fabric-react/lib/utilities/color/interfaces';

let reactprops: IColorPickerProps = <IColorPickerProps>{};
reactprops.alphaLabel = <any>{};
reactprops.alphaSliderHidden = <any>{};
reactprops.blueLabel = <any>{};
reactprops.color = <any>{};
reactprops.greenLabel = <any>{};
reactprops.hexLabel = <any>{};
reactprops.onChange = <any> function (that: any, _event: any, newValue: IColor)
{
  that['color'] = newValue.str; 
};
reactprops.redLabel = <any>{};


@inject(Element)
@customElement('du-color-picker')
export class DuColorPicker extends  AuReactStateWrapper implements IColorPickerProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  color: string | IColor;

  attached() {

    this.renderReact(ColorPicker, this.createState(reactprops));
  }
}

addPropertiesState(DuColorPicker, reactprops);