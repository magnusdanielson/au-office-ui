import { customElement, inject } from 'aurelia-framework';
import { Dropdown, IDropdownProps, IDropdownOption  } from 'office-ui-fabric-react/lib/Dropdown';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IDropdownProps = <IDropdownProps>{};
reactprops.placeholder = <any>{};
reactprops.options = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onFocus =  <any>onlyAureliaBound;
reactprops.onBlur =  <any>onlyAureliaBound;
reactprops.onChange =  <any>onlyAureliaBound;
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
reactprops.selectedKey = <any>{};


@inject(Element)
@customElement('du-dropdown')
export class DuDropdown extends  DuReactWrapperBaseClass implements IDropdownProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  options: IDropdownOption[];

  attached() {
    this.renderReact(Dropdown, this.createState(reactprops));
  }
}

addProperties(DuDropdown, reactprops);