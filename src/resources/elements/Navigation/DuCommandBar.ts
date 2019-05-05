import { customElement, inject } from 'aurelia-framework';
import { CommandBar, ICommandBarProps  } from 'office-ui-fabric-react/lib/CommandBar';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ICommandBarProps = <ICommandBarProps>{};
reactprops.items = <any>{};
reactprops.overflowItems = <any>{};
reactprops.farItems = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.className = <any>{};


@inject(Element)
@customElement('du-command-bar')
export class DuCommandBar extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(CommandBar, this.createState(reactprops));
  }
}

addPropertiesState(DuCommandBar, reactprops);