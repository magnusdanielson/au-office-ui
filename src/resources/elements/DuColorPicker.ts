import { customElement, inject, noView } from 'aurelia-framework';
import { ColorPicker, IColorPickerProps } from 'office-ui-fabric-react/lib/ColorPicker';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IColorPickerProps = <IColorPickerProps>{};
reactprops.alphaLabel = <any>{};
reactprops.alphaSliderHidden = <any>{};
reactprops.blueLabel = <any>{};
reactprops.color = <any>{};
reactprops.greenLabel = <any>{};
reactprops.hexLabel = <any>{};
reactprops.onColorChanged = () => {};
reactprops.redLabel = <any>{};

@noView()
@inject(Element)
@customElement('du-color-picker')
export class DuColorPicker extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {

    renderReact.bind(this)(ColorPicker, reactprops);
  }
}

addProperties(DuColorPicker, reactprops);