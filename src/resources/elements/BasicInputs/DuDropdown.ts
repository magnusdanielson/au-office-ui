import { customElement, inject } from 'aurelia-framework';
import { Dropdown, IDropdownProps  } from 'office-ui-fabric-react/lib/Dropdown';
import { defaultActionEvent } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IDropdownProps = <IDropdownProps>{};
reactprops.placeholder = <any>{};
reactprops.options = <any>{};
reactprops.onDismiss = <any>defaultActionEvent;
reactprops.onFocus =  <any>defaultActionEvent;
reactprops.onBlur =  <any>defaultActionEvent;
reactprops.onChange =  <any>defaultActionEvent;
reactprops.dropdownWidth = <any>{};
reactprops.responsiveMode = <any>{};
reactprops.multiSelect = <any>{};
reactprops.notifyOnReselect = <any>{};
reactprops.defaultSelectedKeys = <any>{};
reactprops.selectedKeys = <any>{};
reactprops.multiSelectDelimiter = <any>{};
reactprops.keytipProps = <any>{};
reactprops.disabled = <any>{};
reactprops.errorMessage = <any>{};
reactprops.required  = <any>{};


@inject(Element)
@customElement('du-dropdown')
export class DuDropdown extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Dropdown, this.createState(reactprops));
  }
}

addProperties(DuDropdown, reactprops);