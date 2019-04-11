import { customElement, inject } from 'aurelia-framework';
import { Dialog, IDialogProps } from 'office-ui-fabric-react/lib/Dialog';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IDialogProps = <IDialogProps>{};
reactprops.dialogContentProps = <any>{};
reactprops.hidden = <any>{};
reactprops.className = <any>{};
reactprops.modalProps = <any>{};
reactprops.onDismiss = <any>{};

@inject(Element)
@customElement('du-dialog')
export class DuDialog  extends DuReactWrapperBaseClass implements IDialogProps
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

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"dialogContentProps" 
//   ,attribute: "dialog-content-props" 
// }) 
//   public dialogContentProps:IDialogContentProps;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"modalProps" 
//   ,attribute: "modal-props" 
// }) 
//   public modalProps:IModalProps;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onDismiss" 
//   ,attribute: "on-dismiss" 
// }) 
//   public onDismiss:any;


//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"hidden" 
//   ,attribute: "hidden" 
// }) 
//   public hidden:boolean;
}


addProperties(DuDialog, reactprops);