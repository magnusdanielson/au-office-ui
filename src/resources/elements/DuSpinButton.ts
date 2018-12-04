import { customElement, inject, noView } from 'aurelia-framework';
import { SpinButton, ISpinButtonProps } from 'office-ui-fabric-react/lib/SpinButton';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ISpinButtonProps = <ISpinButtonProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.label = <any>{};
reactprops.value = <any>{};
reactprops.min = <any>{};
reactprops.max = <any>{};
reactprops.title = <any>{};
reactprops.step = <any>{};
reactprops.onValidate = () => {};
reactprops.onIncrement = () => {};
reactprops.onDecrement = () => {};
reactprops.precision = <any>{};

@noView()
@inject(Element)
@customElement('du-spin-button')
export class DuSpinButton extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(SpinButton, reactprops);
  }
}

addProperties(DuSpinButton, reactprops);