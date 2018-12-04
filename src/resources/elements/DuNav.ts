import { customElement, inject, noView } from 'aurelia-framework';
import { Nav, INavProps } from 'office-ui-fabric-react/lib/Nav';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: INavProps = <INavProps>{};
reactprops.groups = <any>{};
reactprops.initialSelectedKey = <any>{};
reactprops.isOnTop = <any>{};
reactprops.onLinkClick = () => {};
reactprops.onLinkExpandClick = () => {};
reactprops.selectedKey = <any>{};


@noView()
@inject(Element)
@customElement('du-nav')
export class DuNav extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Nav, reactprops);
  }
}

addProperties(DuNav, reactprops);