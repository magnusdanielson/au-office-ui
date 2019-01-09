import { customElement, inject, noView } from 'aurelia-framework';
import { Spinner, ISpinnerProps } from 'office-ui-fabric-react/lib/Spinner';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ISpinnerProps = <ISpinnerProps>{};
reactprops.className = <any>{};
reactprops.size = <any>{};
reactprops.label = <any>{};
reactprops.labelPosition = <any>{};

@noView()
@inject(Element)
@customElement('du-spinner')
export class DuSpinner extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {

    renderReact.bind(this)(Spinner, reactprops);
  }
}

addProperties(DuSpinner, reactprops);