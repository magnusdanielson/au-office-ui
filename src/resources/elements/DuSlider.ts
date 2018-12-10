import { customElement, inject, noView } from 'aurelia-framework';
import { Slider, ISliderProps } from 'office-ui-fabric-react/lib/Slider';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ISliderProps = <ISliderProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.defaultValue = <any>{};
reactprops.min = <any>{};
reactprops.max = <any>{};
reactprops.showValue = <any>{};
reactprops.step = <any>{};
reactprops.onChange = () => {};
reactprops.vertical = <any>{};

@noView()
@inject(Element)
@customElement('du-slider')
export class DuSlider extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Slider, reactprops);
  }
}

addProperties(DuSlider, reactprops);