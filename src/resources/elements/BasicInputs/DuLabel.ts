import { customElement, inject } from 'aurelia-framework';
import { Label, ILabelProps } from 'office-ui-fabric-react/lib/Label';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: ILabelProps = <ILabelProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.htmlFor = <any>{};


@inject(Element)
@customElement('du-label')
export class DuLabel extends  AuReactStateWrapper implements ILabelProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Label, this.createState(reactprops));
  }
}

addPropertiesState(DuLabel, reactprops);