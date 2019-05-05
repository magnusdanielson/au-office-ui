import { customElement, inject } from 'aurelia-framework';
import { Spinner, ISpinnerProps } from 'office-ui-fabric-react/lib/Spinner';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ISpinnerProps = <ISpinnerProps>{};
reactprops.className = <any>{};
reactprops.size = <any>{};
reactprops.label = <any>{};
reactprops.labelPosition = <any>{};


@inject(Element)
@customElement('du-spinner')
export class DuSpinner extends  AuReactStateWrapper implements ISpinnerProps {

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

addPropertiesState(DuSpinner, reactprops);