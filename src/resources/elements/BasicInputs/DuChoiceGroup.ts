import { customElement, inject } from 'aurelia-framework';
import { ChoiceGroup, IChoiceGroupProps } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IChoiceGroupProps = <IChoiceGroupProps>{};
reactprops.ariaLabelledBy = <any>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.onChange = (_this: any, onChangeTuple: any) => { _this['value'] = onChangeTuple[1]; };
reactprops.options = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.defaultSelectedKey = <any>{};
reactprops.selectedKey = <any>{};
reactprops.value = <any>{};



@inject(Element)
@customElement('du-choice-group')
export class DuChoiceGroup extends  DuReactWrapperBaseClass implements IChoiceGroupProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(ChoiceGroup, this.createState(reactprops));
  }
}

addProperties(DuChoiceGroup, reactprops);