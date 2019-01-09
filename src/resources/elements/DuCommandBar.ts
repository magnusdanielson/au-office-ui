import { customElement, inject, noView } from 'aurelia-framework';
import { CommandBar, ICommandBarProps  } from 'office-ui-fabric-react/lib/CommandBar';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ICommandBarProps = <ICommandBarProps>{};
reactprops.items = <any>{};
reactprops.overflowItems = <any>{};
reactprops.farItems = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.className = <any>{};

@noView()
@inject(Element)
@customElement('du-command-bar')
export class DuCommandBar extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(CommandBar, reactprops);
  }
}

addProperties(DuCommandBar, reactprops);