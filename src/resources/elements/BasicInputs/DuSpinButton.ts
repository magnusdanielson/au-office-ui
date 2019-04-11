import { customElement, inject } from 'aurelia-framework';
import { SpinButton, ISpinButton, ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ISpinButtonProps & ISpinButton = {} as ISpinButton & ISpinButtonProps;
reactprops.focus = onlyAureliaBound;
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.min = <any>{};
reactprops.defaultValue  = <any>{};
reactprops.max = <any>{};
reactprops.title = <any>{};
reactprops.step = <any>{};
reactprops.iconProps = <any>{};
reactprops.labelPosition  = <any>{};
reactprops.onValidate = onlyAureliaBound;
reactprops.ariaLabel = <any>{};
reactprops.ariaPositionInSet = <any>{};
reactprops.ariaSetSize = <any>{};
reactprops.ariaValueNow = <any>{};
reactprops.ariaValueText = <any>{};
reactprops.decrementButtonAriaLabel = <any>{};
reactprops.decrementButtonIcon = <any>{};
reactprops.downArrowButtonStyles = <any>{};
reactprops.iconProps = <any>{};
reactprops.incrementButtonAriaLabel = <any>{};
reactprops.incrementButtonIcon = <any>{};
reactprops.keytipProps = <any>{};
reactprops.onBlur = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
//@ts-ignore
reactprops.onIncrement = (_this: any, value: string) => 
{
  let _value = parseFloat(_this['value']);

  if (_value + _this['step'] <= _this['max'] ) 
  {
  _this['value'] = (_value  +  _this['step']).toFixed( typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
}
};
//@ts-ignore
reactprops.onDecrement = (_this: any, value: string) =>
{
  let _value = parseFloat(_this['value']);
  if (_value - _this['step'] >= _this['min'] ) 
  {
  _this['value'] =  (_value - _this['step']).toFixed( typeof _this['precision'] == 'undefined' ? 0 : _this['precision']); 
}
};
reactprops.precision = <any>{};


@inject(Element)
@customElement('du-spin-button')
export class DuSpinButton extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(SpinButton, this.createState(reactprops));
  }
}

addProperties(DuSpinButton, reactprops);