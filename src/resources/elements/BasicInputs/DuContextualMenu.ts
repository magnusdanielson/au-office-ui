import { customElement, inject } from 'aurelia-framework';
import { ContextualMenu, IContextualMenuProps, IContextualMenuItem  } from 'office-ui-fabric-react/lib/ContextualMenu';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IContextualMenuProps = <IContextualMenuProps>{};
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
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onItemClick = <any>onlyAureliaBound;
reactprops.onMenuDismissed = <any>onlyAureliaBound;
reactprops.onMenuOpened = <any>onlyAureliaBound;
reactprops.alignTargetEdge = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.delayUpdateFocusOnHover = <any>{};
reactprops.directionalHint = <any>{};
reactprops.directionalHintFixed = <any>{};
reactprops.directionalHintForRTL = <any>{};
reactprops.doNotLayer = <any>{};
reactprops.focusZoneProps = <any>{};
reactprops.gapSpace = <any>{};
reactprops.labelElementId = <any>{};
reactprops.shouldFocusOnContainer = <any>{};
reactprops.shouldFocusOnMount = <any>{};
reactprops.subMenuHoverDelay = <any>{};
reactprops.target = <any>{};
reactprops.useTargetAsMinWidth = <any>{};
reactprops.useTargetWidth = <any>{};


@inject(Element)
@customElement('du-contextual-menu')
export class DuContextualMenu extends  AuReactStateWrapper implements IContextualMenuProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  items: IContextualMenuItem[];

  attached() {
    this.renderReact(ContextualMenu, this.createState(reactprops));
  }
}

addPropertiesState(DuContextualMenu, reactprops);