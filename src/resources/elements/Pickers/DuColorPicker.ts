import { customElement, inject } from 'aurelia-framework';
import { ColorPicker, IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IColorPickerProps = <IColorPickerProps>{};
reactprops.alphaLabel = <any>{};
reactprops.alphaSliderHidden = <any>{};
reactprops.blueLabel = <any>{};
reactprops.color = <any>{};
reactprops.greenLabel = <any>{};
reactprops.hexLabel = <any>{};
reactprops.onColorChanged = () => {};
reactprops.redLabel = <any>{};


@inject(Element)
@customElement('du-color-picker')
export class DuColorPicker extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(ColorPicker, this.createState(reactprops));
  }
}

addProperties(DuColorPicker, reactprops);