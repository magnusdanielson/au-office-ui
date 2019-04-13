import {  customElement, inject, bindable } from 'aurelia-framework';
import { Pivot, IPivotProps, IPivotItemProps } from 'office-ui-fabric-react/lib/Pivot';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';

let reactprops: IPivotProps = <IPivotProps>{};
reactprops.className = <any>{};
reactprops.initialSelectedKey = <any>{};
reactprops.initialSelectedIndex = <any>{};
reactprops.onLinkClick = <any>( onlyAureliaBound);
reactprops.selectedKey = <any>{};
reactprops.linkSize = <any>{};
reactprops.linkFormat = <any>{};
reactprops.headersOnly = <any>{};
reactprops.getTabId = <any>( onlyAureliaBound); // (itemKey: string, index: number): string => { return ''; };



@inject(Element)
@customElement('du-pivot')
export class DuPivot extends  DuReactWrapperBaseClass implements IPivotProps {

  container: HTMLElement | null;
  
  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  public pivotChildren: any[] = [];

  @bindable()
  public items: IPivotItemProps[];

  attached() 
  {
    this.renderReact(Pivot, this.createState(reactprops));
    //this.renderReact(reactprops);
  }

  // public renderReact( reactprops: any) {
  //   // this is bound to Aurelia class
  //   this.container = this.element.querySelector('.au-react-root');
  
  //   if (this.container == null) {
  //     this.container = document.createElement('span');
  //     this.container.setAttribute('class', 'au-react-root');
  //     // <span id="${id}" portal="target ${id} ms-Label"><slot></slot></span>
      
  //     //let id = Date.now();
  //     //this.container.setAttribute('id', id);
  //     //this.container.setAttribute('portal', `target #${id} ms-Label`);
  //     //let slot = document.createElement('slot');
  //     //this.container.appendChild(slot);
  //     this.element.appendChild(this.container);

  //     //const content = this.element.querySelector('au-content');
  //     //content.setAttribute('portal', `target #${id} ms-Label`);
  //   }
  
    

  //   var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
  //   var a = {};
  //   for (let i = 0; i < reactpropNames.length; i++) {
  //     let renderPropName = reactpropNames[i];
  //     if (typeof reactprops[renderPropName] === 'function')
  //       {
  //         this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
  //       if (renderPropName.startsWith('on')) {
  //         this.log.debug('on property ' + renderPropName);
  //         a[renderPropName] = (...newValue: any[]) => {
  //           this.log.debug('event called on ' + renderPropName);
  //           if (typeof this[renderPropName] !== 'function')
  //           {
  //             this.log.debug('no Aurelia bound function');              
  //             return reactprops[renderPropName](this, newValue);
  //           }
  //           else
  //           {
  //               this.log.debug('bound function, go aurelia');
  //               return this[renderPropName]( newValue);
  //           }
  //         };
  //       }
  //      } else {
  //       if (typeof this[renderPropName] !== 'undefined') {
  //       this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
  //         a[renderPropName] = this[renderPropName];
  //       }
  //     }
  //     }

  //     for (let i = 0; i < this.items.length; i++)
  //     {
  //       // Adding required key if missing
  //       //@ts-ignore
  //       if ( typeof this.items[i].key == 'undefined')
  //       {
  //         //@ts-ignore
  //         this.items[i].key = 'k' + i;
  //       }
  //       let t = React.createElement(PivotItem, this.items[i], React.createElement('div', {className: 'du' + this.items[i].itemKey } ));
  //       this.pivotChildren.push( t );
  //     };

  //   const reactElement = React.createElement(Pivot, a, this.pivotChildren);
  //   this.reactComponent = reactElement;
  //   ReactDom.render(reactElement, this.container);
  // }
}

addProperties(DuPivot, reactprops);