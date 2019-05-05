import { customElement, inject } from 'aurelia-framework';
import { ActionButton, IButtonProps  } from 'office-ui-fabric-react/lib/Button';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IButtonProps = <IButtonProps>{};
reactprops.allowDisabledFocus = <any>{};
reactprops.ariaDescription = <any>{};
reactprops.ariaHidden = <any>{};
reactprops.ariaLabel = <any>{};
reactprops.keytipProps = <any>{};
reactprops.menuIconProps = <any>{};
reactprops.menuTriggerKeyCode = <any>{};
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onMenuClick = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.onAfterMenuDismiss = onlyAureliaBound;
reactprops.persistMenu = <any>{};
reactprops.primaryDisabled = <any>{};
reactprops.splitButtonAriaLabel = <any>{};
reactprops.toggle = <any>{};
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
reactprops.onClick = onlyAureliaBound;
reactprops.secondaryText = <any>{};


@inject(Element)
@customElement('du-action-button')
export class DuActionButton extends AuReactStateWrapper implements IButtonProps
{

  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(ActionButton, this.createState(reactprops));
  }
}

addPropertiesState(DuActionButton, reactprops);