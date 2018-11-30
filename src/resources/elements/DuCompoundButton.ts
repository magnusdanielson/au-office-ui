import { customElement, inject, noView } from 'aurelia-framework';
import { CompoundButton, IButtonProps  } from 'office-ui-fabric-react/lib/Button';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IButtonProps = <IButtonProps>{};
reactprops.href = <any>{};
reactprops.primary = <any>{};
reactprops.uniqueId = <any>{};
reactprops.disabled = <any>{};
reactprops.checked = <any>{};
reactprops.className = <any>{};
reactprops.text = <any>{};
reactprops.iconProps = <any>{};
reactprops.menuProps = <any>{};
reactprops.split = <any>{};
reactprops.onClick = () => {};
reactprops.secondaryText = <any>{};

@noView()
@inject(Element)
@customElement('du-compound-button')
export class DuCompoundButton extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(CompoundButton, reactprops);
  }
}

addProperties(DuCompoundButton, reactprops);