import { customElement, inject } from 'aurelia-framework';
import { Label, ILabelProps } from 'office-ui-fabric-react/lib/Label';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ILabelProps = <ILabelProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.htmlFor = <any>{};


@inject(Element)
@customElement('du-label')
export class DuLabel extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  //public id = Date.now();

  attached() {
    this.renderReact(Label, this.createState(reactprops));
  }
}

addProperties(DuLabel, reactprops);