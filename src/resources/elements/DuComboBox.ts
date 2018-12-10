import { customElement, inject, noView } from 'aurelia-framework';
import { ComboBox, IComboBoxProps } from 'office-ui-fabric-react/lib/ComboBox';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IComboBoxProps = <IComboBoxProps>{};
reactprops.disabled = <any>{};
reactprops.options = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.options = <any>{};
reactprops.onChanged = () => {};
reactprops.defaultSelectedKey = <any>{};
reactprops.selectedKey = <any>{};
reactprops.onMenuOpen = () => {};
reactprops.onMenuDismissed = () => {};
reactprops.onResolveOptions = (): any => {};
reactprops.allowFreeform = <any>{};
reactprops.autoComplete = <any>{};
reactprops.text = <any>{};
reactprops.scrollSelectedToTop = <any>{};
reactprops.dropdownWidth = <any>{};
reactprops.useComboBoxAsMenuWidth = <any>{};
reactprops.multiSelect = <any>{};
reactprops.onFocus = () => {};
reactprops.onBlur = () => {};




@noView()
@inject(Element)
@customElement('du-combo-box')
export class DuComboBox extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(ComboBox, reactprops);
  }
}

addProperties(DuComboBox, reactprops);