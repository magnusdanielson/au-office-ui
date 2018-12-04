import { customElement, inject, noView } from 'aurelia-framework';
import { Breadcrumb, IBreadcrumbProps  } from 'office-ui-fabric-react/lib/Breadcrumb';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';

let reactprops: IBreadcrumbProps = <IBreadcrumbProps>{};
reactprops.items = <any>{};
reactprops.className = <any>{};
reactprops.dividerAs = <any>{};
reactprops.maxDisplayedItems = <any>{};
reactprops.onReduceData = <any>defaultActionEvent;
reactprops.overflowIndex = <any>{};


@noView()
@inject(Element)
@customElement('du-breadcrumb')
export class DuBreadcrumb extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Breadcrumb, reactprops);
  }
}

addProperties(DuBreadcrumb, reactprops);