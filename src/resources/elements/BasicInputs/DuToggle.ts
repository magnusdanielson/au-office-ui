import { customElement, inject } from 'aurelia-framework';
import { Toggle, IToggleProps } from 'office-ui-fabric-react/lib/Toggle';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IToggleProps = {} as IToggleProps;
reactprops.ariaLabel = <any>{}; 
reactprops.label = <any>{};
reactprops.onText = <any>{};
reactprops.offText = <any>{};
reactprops.checked = <any>{};
reactprops.defaultChecked = <any>{};
reactprops.disabled  = <any>{};
reactprops.onChange = (_this, onChangeTuple: any) => { _this['checked'] = onChangeTuple[1]; };
reactprops.className = <any>{};
reactprops.keytipProps  = <any>{};


@inject(Element)
@customElement('du-toggle')
export class DuToggle extends  DuReactWrapperBaseClass implements IToggleProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    
    this.renderReact(Toggle, this.createState(reactprops));
  }
}

addProperties(DuToggle, reactprops);