import { customElement, inject, noView } from 'aurelia-framework';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops = <any> {};
reactprops.label = <any>{};
reactprops.onText = <any>{};
reactprops.offText = <any>{};
reactprops.checked = <any>{};
reactprops.defaultChecked = <any>{};
reactprops.disabled  = <any>{};
reactprops.onChanged = (that: any, checked: boolean) => { that['checked'] = checked; };
reactprops.className = <any>{};

@noView()
@inject(Element)
@customElement('du-toggle')
export class DuToggle extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {

    
    renderReact.bind(this)(Toggle, reactprops);
  }
}

addProperties(DuToggle, reactprops);