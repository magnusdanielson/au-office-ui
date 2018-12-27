import { customElement, inject, noView } from 'aurelia-framework';
import { ProgressIndicator, IProgressIndicatorProps } from 'office-ui-fabric-react/lib/ProgressIndicator';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IProgressIndicatorProps = <IProgressIndicatorProps>{};
reactprops.className = <any>{};
reactprops.barHeight = <any>{};
reactprops.description = <any>{};
reactprops.label = <any>{};
reactprops.percentComplete = <any>{};
reactprops.progressHidden = <any>{};

@noView()
@inject(Element)
@customElement('du-progress-indicator')
export class DuProgressIndicator extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {

    renderReact.bind(this)(ProgressIndicator, reactprops);
  }
}

addProperties(DuProgressIndicator, reactprops);