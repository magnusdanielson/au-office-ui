import { customElement, inject } from 'aurelia-framework';
import { ProgressIndicator, IProgressIndicatorProps } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IProgressIndicatorProps = <IProgressIndicatorProps>{};
reactprops.className = <any>{};
reactprops.barHeight = <any>{};
reactprops.description = <any>{};
reactprops.label = <any>{};
reactprops.percentComplete = <any>{};
reactprops.progressHidden = <any>{};


@inject(Element)
@customElement('du-progress-indicator')
export class DuProgressIndicator extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(ProgressIndicator, this.createState(reactprops));
  }
}

addPropertiesState(DuProgressIndicator, reactprops);