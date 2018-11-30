import { customElement, inject, noView } from 'aurelia-framework';
import { ChoiceGroup, IChoiceGroupProps } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IChoiceGroupProps = <IChoiceGroupProps>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.onChange = () => {};
reactprops.options = <any>{};
reactprops.onClick = () => {};
reactprops.defaultSelectedKey = <any>{};
reactprops.selectedKey = <any>{};


@noView()
@inject(Element)
@customElement('du-choice-group')
export class DuChoiceGroup extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(ChoiceGroup, reactprops);
  }
}

addProperties(DuChoiceGroup, reactprops);