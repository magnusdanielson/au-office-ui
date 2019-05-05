import { customElement, inject } from 'aurelia-framework';
import { Slider, ISliderProps } from 'office-ui-fabric-react/lib/Slider';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ISliderProps = {} as ISliderProps;
reactprops.value = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.ariaValueText = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.defaultValue = <any>{};
reactprops.disabled = <any>{};
reactprops.label = <any>{};
reactprops.max = <any>{};
reactprops.min = <any>{};
reactprops.onChange = <any>onlyAureliaBound;
reactprops.onChanged = <any>onlyAureliaBound;
reactprops.showValue = <any>{};
reactprops.step = <any>{};
reactprops.value = <any>{};
reactprops.vertical = <any>{};
reactprops.valueFormat = <any>onlyAureliaBound;
reactprops.vertical  = <any>{};

@inject(Element)
@customElement('du-slider')
export class DuSlider extends  AuReactStateWrapper implements ISliderProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  className: string;

  attached() {
    this.renderReact(Slider, this.createState(reactprops));
  }
}

addPropertiesState(DuSlider, reactprops);