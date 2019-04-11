import { customElement, inject } from 'aurelia-framework';
import { Spinner, ISpinnerProps } from 'office-ui-fabric-react/lib/Spinner';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ISpinnerProps = <ISpinnerProps>{};
reactprops.className = <any>{};
reactprops.size = <any>{};
reactprops.label = <any>{};
reactprops.labelPosition = <any>{};


@inject(Element)
@customElement('du-spinner')
export class DuSpinner extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(Spinner, this.createState(reactprops));
  }
}

addProperties(DuSpinner, reactprops);