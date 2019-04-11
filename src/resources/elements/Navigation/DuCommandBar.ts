import { customElement, inject } from 'aurelia-framework';
import { CommandBar, ICommandBarProps  } from 'office-ui-fabric-react/lib/CommandBar';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ICommandBarProps = <ICommandBarProps>{};
reactprops.items = <any>{};
reactprops.overflowItems = <any>{};
reactprops.farItems = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.className = <any>{};


@inject(Element)
@customElement('du-command-bar')
export class DuCommandBar extends  DuReactWrapperBaseClass {

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

addProperties(DuCommandBar, reactprops);