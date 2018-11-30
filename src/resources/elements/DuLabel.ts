import { customElement, inject, noView } from 'aurelia-framework';
import { Label, ILabelProps } from 'office-ui-fabric-react/lib/Label';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ILabelProps = <ILabelProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};

@noView()
@inject(Element)
@customElement('du-label')
export class DuLabel extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Label, reactprops);
  }
}

addProperties(DuLabel, reactprops);