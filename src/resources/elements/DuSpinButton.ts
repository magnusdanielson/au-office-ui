import { customElement, inject, noView } from 'aurelia-framework';
import { SpinButton, ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ISpinButtonProps = <ISpinButtonProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.min = <any>{};
reactprops.defaultValue  = <any>{};
reactprops.max = <any>{};
reactprops.title = <any>{};
reactprops.step = <any>{};
reactprops.iconProps  = <any>{};
reactprops.labelPosition  = <any>{};
reactprops.onValidate = () => {};
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

@noView()
@inject(Element)
@customElement('du-spin-button')
export class DuSpinButton extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(SpinButton, reactprops);
  }
}

addProperties(DuSpinButton, reactprops);