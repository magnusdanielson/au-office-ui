import {  customElement, inject, noView, bindable } from 'aurelia-framework';
import { Pivot, PivotItem, IPivotProps, IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { AuReactNoStateWrapper, addPropertiesNoState, onlyAureliaBound } from '@dunite/au-react-wrapper';
import * as React from 'react';
import * as ReactDom from 'react-dom';

let reactprops: IPivotProps = <IPivotProps>{};
reactprops.className = <any>{};
reactprops.defaultSelectedIndex = <any>{};
reactprops.defaultSelectedKey = <any>{};
//@ts-ignore
reactprops.getTabId = onlyAureliaBound;
reactprops.headersOnly = <any>{};
reactprops.linkFormat = <any>{};
reactprops.linkSize = <any>{};
reactprops.onLinkClick = onlyAureliaBound;
reactprops.selectedKey = <any>{};

@noView()
@inject(Element)
@customElement('du-pivot')
export class DuPivot extends AuReactNoStateWrapper {

  container: HTMLElement | null;
  
  constructor(element) {
    super(element);
  }

  public pivotChildren: any[] = [];

  @bindable()
  public items: IPivotItemProps[];

  public render() {
    this.renderReact(reactprops);
  }

  public renderReact( reactprops: any) {
    // this is bound to Aurelia class
    this.container = this.element.querySelector('.au-react-root');
  
    if (this.container == null) {
      this.container = document.createElement('span');
      this.container.setAttribute('class', 'au-react-root');
      this.element.appendChild(this.container);
    }

    var a = this.createState(reactprops);
    
      for (let i = 0; i < this.items.length; i++)
      {
        // Adding required key if missing
        //@ts-ignore
        if ( typeof this.items[i].key == 'undefined')
        {
          //@ts-ignore
          this.items[i].key = 'k' + i;
        }
        let t = React.createElement(PivotItem, this.items[i], React.createElement('div', {className: 'du' + this.items[i].itemKey } ));
        this.pivotChildren.push( t );
      };

    const reactElement = React.createElement(Pivot, a, this.pivotChildren);
    // TODO below <any> might be a bug
    this.reactComponent = <any> ReactDom.render(reactElement, this.container);
  }
}

addPropertiesNoState(DuPivot, reactprops);