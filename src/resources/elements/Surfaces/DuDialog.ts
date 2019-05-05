import { customElement, inject } from 'aurelia-framework';
import { Dialog, IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IDialogProps = <IDialogProps>{};
reactprops.dialogContentProps = <any>{};
reactprops.hidden = <any>{};
reactprops.className = <any>{};
reactprops.modalProps = <any>{};
reactprops.onDismiss = <any>{};

@inject(Element)
@customElement('du-dialog')
export class DuDialog  extends AuReactStateWrapper implements IDialogProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(Dialog, this.createState(reactprops));
  }
}


addPropertiesState(DuDialog, reactprops);