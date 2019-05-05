import { customElement, inject } from 'aurelia-framework';
import { CommandBarButton, IButtonProps  } from 'office-ui-fabric-react/lib/Button';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IButtonProps = <IButtonProps>{};
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
@customElement('du-command-bar-button')
export class DuCommandBarButton extends  AuReactStateWrapper implements IButtonProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(CommandBarButton, this.createState(reactprops));
  }
}

addPropertiesState(DuCommandBarButton, reactprops);