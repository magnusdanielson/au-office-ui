import { customElement, inject } from 'aurelia-framework';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: INavProps = <INavProps>{};
reactprops.groups = <any>{};
reactprops.initialSelectedKey = <any>{};
reactprops.isOnTop = <any>{};
reactprops.onLinkClick = () => {};
reactprops.onLinkExpandClick = () => {};
reactprops.selectedKey = <any>{};



@inject(Element)
@customElement('du-nav')
export class DuNav extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Nav, this.createState(reactprops));
  }
}

addProperties(DuNav, reactprops);