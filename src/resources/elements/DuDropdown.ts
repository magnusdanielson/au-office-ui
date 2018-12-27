import { customElement, inject, noView } from 'aurelia-framework';
import { Dropdown, IDropdownProps  } from 'office-ui-fabric-react/lib/Dropdown';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';

let reactprops: IDropdownProps = <IDropdownProps>{};
reactprops.placeholder = <any>{};
reactprops.options = <any>{};
reactprops.onDismiss = <any>defaultActionEvent;
reactprops.onFocus =  <any>defaultActionEvent;
reactprops.onBlur =  <any>defaultActionEvent;
reactprops.onChanged =  <any>defaultActionEvent;
reactprops.dropdownWidth = <any>{};
reactprops.responsiveMode = <any>{};
reactprops.multiSelect = <any>{};
reactprops.defaultSelectedKey = <any>{};
reactprops.defaultSelectedKeys = <any>{};
reactprops.selectedKeys = <any>{};
reactprops.selectedKey = <any>{};
reactprops.multiSelectDelimiter = <any>{};
reactprops.keytipProps = <any>{};
reactprops.disabled = <any>{};
reactprops.errorMessage = <any>{};
reactprops.required  = <any>{};

@noView()
@inject(Element)
@customElement('du-dropdown')
export class DuDropdown extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Dropdown, reactprops);
  }
}

addProperties(DuDropdown, reactprops);