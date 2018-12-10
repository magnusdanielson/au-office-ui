import { customElement, inject, noView } from 'aurelia-framework';
import { Checkbox, ICheckboxProps } from 'office-ui-fabric-react/lib/Checkbox';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following paramters are from the event
// _this refers to the DuCheckbox class with all properties added
let reactprops: ICheckboxProps = <ICheckboxProps>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.onChange = (_this: any, checked: boolean) => { _this['checked'] = checked; };
reactprops.boxSide = <any>{};
reactprops.onClick = () => {};

@noView()
@inject(Element)
@customElement('du-checkbox')
export class DuCheckbox extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Checkbox, reactprops);
  }
}

addProperties(DuCheckbox, reactprops);