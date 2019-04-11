import { customElement, inject } from 'aurelia-framework';
import { Breadcrumb, IBreadcrumbProps  } from 'office-ui-fabric-react/lib/Breadcrumb';
import { defaultActionEvent } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IBreadcrumbProps = <IBreadcrumbProps>{};
reactprops.items = <any>{};
reactprops.className = <any>{};
reactprops.dividerAs = <any>{};
reactprops.maxDisplayedItems = <any>{};
reactprops.onReduceData = <any>defaultActionEvent;
reactprops.overflowIndex = <any>{};



@inject(Element)
@customElement('du-breadcrumb')
export class DuBreadcrumb extends  DuReactWrapperBaseClass {

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

addProperties(DuBreadcrumb, reactprops);