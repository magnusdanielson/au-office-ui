import { customElement, inject } from 'aurelia-framework';
import { Breadcrumb, IBreadcrumbProps  } from 'office-ui-fabric-react/lib/Breadcrumb';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IBreadcrumbProps = <IBreadcrumbProps>{};
reactprops.items = <any>{};
reactprops.className = <any>{};
reactprops.dividerAs = <any>{};
reactprops.maxDisplayedItems = <any>{};
reactprops.onReduceData = <any>onlyAureliaBound;
reactprops.overflowIndex = <any>{};



@inject(Element)
@customElement('du-breadcrumb')
export class DuBreadcrumb extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Breadcrumb, this.createState(reactprops));
  }
}

addPropertiesState(DuBreadcrumb, reactprops);