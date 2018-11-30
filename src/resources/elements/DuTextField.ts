import { customElement, inject, noView } from 'aurelia-framework';
import { TextField, ITextFieldProps } from 'office-ui-fabric-react/lib/TextField';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ITextFieldProps = <ITextFieldProps>{};
reactprops.disabled = <any>{};
reactprops.multiline = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.resizable = <any>{};
reactprops.onChange = () => {};
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
}

addProperties(DuTextField, reactprops);