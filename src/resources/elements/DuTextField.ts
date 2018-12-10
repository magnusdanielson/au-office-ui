import { customElement, inject, noView } from 'aurelia-framework';
import { TextField, ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ITextFieldProps = <ITextFieldProps>{};
reactprops.disabled = <any>{};
reactprops.multiline = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.resizable = <any>{};
//@ts-ignore
reactprops.onChanged = (_this, newValue) => { _this['value'] = newValue };
reactprops.autoAdjustHeight = <any>{};
reactprops.underlined = <any>{};
reactprops.onNotifyValidationResult = () => {};
reactprops.onGetErrorMessage = () : any => {};
reactprops.borderless = <any>{};
reactprops.autoComplete = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.description = <any>{};
reactprops.prefix = <any>{};
reactprops.suffix = <any>{};
reactprops.defaultValue = <any>{};
reactprops.readOnly = <any>{};
reactprops.errorMessage = <any>{};
reactprops.deferredValidationTime = <any>{};
reactprops.inputClassName = <any>{};
reactprops.mask = <any>{};
reactprops.maskChar = <any>{};
reactprops.maskFormat = <any>{};
reactprops.required = <any>{};
reactprops.placeholder = <any>{};
reactprops.rows = <any>{};
reactprops.iconProps = <any>{};
reactprops.autoAdjustHeight = <any>{};





@noView()
@inject(Element)
@customElement('du-text-field')
export class DuTextField extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(TextField, reactprops);
  }
  attached()
  {
    // Fixing issue with autoAdjustHeight
    //@ts-ignore
    if (this.autoAdjustHeight == true)
    {
    let elements = this.element.getElementsByTagName('textarea');
    if ( elements.length > 0)
    {
      let element  = <HTMLTextAreaElement>elements.item(0);
      element.setAttribute('style', '');
    } 
  }
  }
}

addProperties(DuTextField, reactprops);