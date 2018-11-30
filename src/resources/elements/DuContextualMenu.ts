import { customElement, inject, noView } from 'aurelia-framework';
import { ContextualMenu, IContextualMenuProps  } from 'office-ui-fabric-react/lib/ContextualMenu';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';

let reactprops: IContextualMenuProps = <IContextualMenuProps>{};
reactprops.arrowDirection = <any>{};
reactprops.beakWidth = <any>{};
reactprops.bounds = <any>{};
reactprops.calloutProps = <any>{};
reactprops.className = <any>{};
reactprops.coverTarget = <any>{};
reactprops.gapSpace = <any>{};
reactprops.hidden = <any>{};
reactprops.isBeakVisible = <any>{};
reactprops.isSubMenu = <any>{};
reactprops.items = <any>{};
reactprops.onDismiss = <any>defaultActionEvent;
reactprops.onItemClick = <any>defaultActionEvent;
reactprops.onMenuDismissed = <any>defaultActionEvent;
reactprops.onMenuOpened = <any>defaultActionEvent;

@noView()
@inject(Element)
@customElement('du-contextual-menu')
export class DuContextualMenu extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(ContextualMenu, reactprops);
  }
}

addProperties(DuContextualMenu, reactprops);