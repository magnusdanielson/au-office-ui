import { customElement, inject } from 'aurelia-framework';
import { ComboBox, IComboBoxProps, IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IComboBoxProps = <IComboBoxProps>{};
reactprops.buttonIconProps = <any>{};
reactprops.caretDownButtonStyles = <any>{};
reactprops.comboBoxOptionStyles = <any>{};
reactprops.dropdownMaxWidth = <any>{};
reactprops.keytipProps = <any>{};
reactprops.onItemClick = onlyAureliaBound;
reactprops.isButtonAriaHidden = <any>{};
reactprops.onPendingValueChanged = onlyAureliaBound;
reactprops.onScrollToItem = onlyAureliaBound;
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.options = <any>{};
reactprops.onChange = onlyAureliaBound;
reactprops.defaultSelectedKey = <any>{};
reactprops.selectedKey = <any>{};
reactprops.onMenuOpen = onlyAureliaBound;
reactprops.onMenuDismissed = onlyAureliaBound;
reactprops.onResolveOptions = <any>onlyAureliaBound;
reactprops.allowFreeform = <any>{};
reactprops.autoComplete = <any>{};
reactprops.text = <any>{};
reactprops.scrollSelectedToTop = <any>{};
reactprops.dropdownWidth = <any>{};
reactprops.useComboBoxAsMenuWidth = <any>{};
reactprops.multiSelect = <any>{};
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;


@inject(Element)
@customElement('du-combo-box')
export class DuComboBox extends  DuReactWrapperBaseClass implements IComboBoxProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  options: IComboBoxOption[];

  attached() {
    this.renderReact(ComboBox, this.createState(reactprops));
  }
}

addProperties(DuComboBox, reactprops);