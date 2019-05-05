import { customElement, inject } from 'aurelia-framework';
import { Panel, IPanelProps } from 'office-ui-fabric-react/lib/Panel';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

var reactprops: IPanelProps = {};
reactprops.isOpen = <any>{};
reactprops.onDismiss = <any>{};
reactprops.headerText = <any>{};
reactprops.type = <any>{};

@inject(Element)
@customElement('du-panel')
export class DuPanel extends AuReactStateWrapper implements IPanelProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = false;
    this.hiddenName = 'isOpen';
  }

  isOpen: boolean;

  attached()
  {
    this.renderReact(Panel, this.createState(reactprops));
  }

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"isOpen" 
//   ,attribute: "is-open" 
// }) 
//   public isOpen:boolean = false;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"type" 
//   ,attribute: "type" 
// }) 
//   public type:PanelType;

//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"onDismiss" 
//   ,attribute: "on-dismiss" 
// }) 
//   public onDismiss:any;


//   @bindable({ defaultBindingMode: bindingMode.twoWay  ,name:"headerText" 
//   ,attribute: "header-text" 
// }) 
//   public headerText:string;
}

addPropertiesState(DuPanel, reactprops);
