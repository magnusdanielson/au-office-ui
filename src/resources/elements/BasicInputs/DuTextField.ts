import { customElement, inject } from 'aurelia-framework';
import { TextField, ITextFieldProps, ITextField } from 'office-ui-fabric-react/lib/TextField';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { addProperties } from '../../wrapper/Utilities';
import { DuReactWrapperNoChildren } from '../../wrapper/DuReactWrapperNoChildren';

let reactprops: ITextFieldProps & ITextField = {} as ITextFieldProps & ITextField;
reactprops.ariaLabel = <any>{};
reactprops.onBeforeChange = onlyAureliaBound;
reactprops.validateOnFocusIn = <any>{};
reactprops.validateOnFocusOut = <any>{};
reactprops.validateOnLoad = <any>{};
reactprops.disabled = <any>{};
reactprops.multiline = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.resizable = <any>{};
reactprops.onChange = (_this, newValue) => { _this['value'] = newValue };
reactprops.autoAdjustHeight = <any>{};
reactprops.underlined = <any>{};
reactprops.onNotifyValidationResult = onlyAureliaBound;
reactprops.onGetErrorMessage = <any>onlyAureliaBound;
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


@inject(Element)
@customElement('du-text-field')
export class DuTextField extends  DuReactWrapperNoChildren implements ITextFieldProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(TextField, this.createState(reactprops));
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