import { customElement, inject } from 'aurelia-framework';
import { Slider, ISlider, ISliderProps } from 'office-ui-fabric-react/lib/Slider';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ISliderProps & ISlider = {} as ISlider & ISliderProps;
reactprops.value = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.ariaValueText = <any>onlyAureliaBound;

reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.defaultValue = <any>{};
reactprops.min = <any>{};
reactprops.max = <any>{};
reactprops.showValue = <any>{};
reactprops.step = <any>{};
reactprops.onChange = <any>onlyAureliaBound;
reactprops.onChanged = <any>onlyAureliaBound;
reactprops.vertical = <any>{};


@inject(Element)
@customElement('du-slider')
export class DuSlider extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Slider, this.createState(reactprops));
  }
}

addProperties(DuSlider, reactprops);