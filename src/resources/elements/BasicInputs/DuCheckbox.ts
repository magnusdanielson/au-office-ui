import { customElement, inject } from 'aurelia-framework';
import { Checkbox, ICheckbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: ICheckboxProps & ICheckbox = {} as ICheckboxProps & ICheckbox;
reactprops.disabled = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.ariaLabelledBy = <any>{};
reactprops.ariaPositionInSet = <any>{};
reactprops.ariaSetSize = <any>{};
reactprops.checkmarkIconProps = <any>{};
reactprops.defaultChecked = <any>{};
reactprops.keytipProps = <any>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.onChange = (_this: any, checked: boolean) => { _this['checked'] = checked; };
reactprops.boxSide = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.focus = onlyAureliaBound;


@inject(Element)
@customElement('du-checkbox')
export class DuCheckbox extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Checkbox, this.createState(reactprops));
  }
}

addProperties(DuCheckbox, reactprops);