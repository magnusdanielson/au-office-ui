import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager, bindable, bindingMode } from 'aurelia-framework';
import { Logger } from 'aurelia-logging';


export abstract class ReactWrapper {
    public element: HTMLElement;
    public reactComponent = {};
  
    public parent: any;

    public log: Logger;

    constructor(element) {
      this.element = element;
      this.log = LogManager.getLogger('reacthost');
    }
  
    public abstract render();
  
    public defaultOnChangeEvent(propertyName: string, newValue: any)
    {
      this.log.debug('Default onChange event occurred on property ' + propertyName + ' with value ' + newValue);
        let propName = propertyName
              .substring(2, propertyName.length - 'Changed'.length)
              .toLowerCase();
            if (newValue != this[propName]) {
              this[propName] = newValue;
            }
            //this.bind(null,null);
    }
  
    public defaultActionEvent(propertyName: string, event: any)
    {
        this.log.debug('Default event occurred on property ' + propertyName + ' with event ' + event);
    }

    public bind(bindingContext) {
        if ( bindingContext !== null)
        {
            this.parent = bindingContext;
        }
        this.render();
    }

    public unbind() {
      ReactDom.unmountComponentAtNode(this.element);
    }

    
  
}

export function onChangeEvent(propertyName: string, newValue: any)
{
    this.log.debug('onChangeEvent occurred on property ' + propertyName + ' with value ' + newValue);
    if (newValue != this[propertyName]) {
      this[propertyName] = newValue;
    }
}



export function camelToKebab(str) {
    // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
    //@ts-ignore
    return str.replace(/([a-zA-Z])([A-Z][a-z])/g, (match, before, after) => {
        return `${before.toLowerCase()}-${after.toLowerCase()}`;
    }).toLowerCase();
}

export function defaultActionEvent(){}

export function defaultOnChangeEvent(){}


export function addProperties(aureliaClass: any, reactprops: any) {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      bindable({
        name: renderPropName,
        attribute: camelToKebab(renderPropName),
        changeHandler: 'render',
        defaultBindingMode: bindingMode.twoWay
      })(aureliaClass);
    }
  }
  
  
  export function renderReact(reactClass: any, reactprops: any) {
    // this is bound to Aurelia class
    this.container = this.element.querySelector('.au-react-root');
  
    if (this.container == null) {
      this.container = document.createElement('span');
      this.container.setAttribute('class', 'au-react-root');
      // <span id="${id}" portal="target ${id} ms-Label"><slot></slot></span>
      
      //let id = Date.now();
      //this.container.setAttribute('id', id);
      //this.container.setAttribute('portal', `target #${id} ms-Label`);
      //let slot = document.createElement('slot');
      //this.container.appendChild(slot);
      this.element.appendChild(this.container);

      //const content = this.element.querySelector('au-content');
      //content.setAttribute('portal', `target #${id} ms-Label`);
    }
  
    

    var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
    var a = {};
    for (let i = 0; i < reactpropNames.length; i++) {
      let renderPropName = reactpropNames[i];
      if (typeof reactprops[renderPropName] === 'function')
        {
          this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
        if (renderPropName.startsWith('on')) {
          this.log.debug('on property ' + renderPropName);
          a[renderPropName] = (...newValue: any[]) => {
            this.log.debug('event called on ' + renderPropName);
            if (typeof this[renderPropName] !== 'function')
            {
              this.log.debug('no Aurelia bound function');              
              if ( reactprops[renderPropName].name === 'defaultOnChangeEvent' )
              {
                this.defaultOnChangeEvent(renderPropName, newValue);
              }
              else if ( reactprops[renderPropName].name === 'defaultActionEvent' )
              {
                this.defaultActionEvent(renderPropName, newValue);
              }
              else
              {
                this.log.debug('run func from reactprops');
                return reactprops[renderPropName](this, newValue);
              }
            }
            else
            {
                this.log.debug('bound function, go aurelia');
                return this[renderPropName]( newValue);
            }
          };
        }
       } else {
        if (typeof this[renderPropName] !== 'undefined') {
        this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
          a[renderPropName] = this[renderPropName];
        }
      }
      }
    
    // const reactElement = React.createElement(reactClass, a
    //   , React.createElement('span', {type: 'innerHTML', value: 'And here is a child'}));
    
    const reactElement = React.createElement(reactClass, a);
    this.reactComponent = reactElement;
    ReactDom.render(reactElement, this.container);
  }
  
  export function elementWrapper(node: Element, target: string)
  {
    let id = 'du' + Math.round( Math.random() * 10000000000000000);
    node.setAttribute('class', (node.getAttribute('class') == null ? '' :  node.getAttribute('class')) + ' ' + id);
    
    let portalAttribute =  'target: .' + id + ' ' + target;
    if (node.childElementCount == 0)
  {
    let rootspan = document.createElement('span');
    rootspan.setAttribute('portal', portalAttribute);
    //@ts-ignore
    rootspan.innerText = node.innerText;
    //@ts-ignore
    node.innerText  = '';
    node.appendChild(rootspan);
    return true;
  }
  if (node.childElementCount == 1)
  {
    if (node.firstElementChild)
    {
      node.firstElementChild.setAttribute('portal', portalAttribute)
    }
  }

  if (node.childElementCount > 1)
  {
    let rootspan = document.createElement('span');
    rootspan.setAttribute('portal', portalAttribute);
    if (node.parentNode)
    {

      let nodeCount = node.childElementCount;
      for ( let i = nodeCount - 1 ; i >= 0 ; i--)
      {
        //console.log(node.children[i]);
        rootspan.insertBefore(node.children[i], rootspan.firstChild);
        //node.removeChild(node.children[i]);
      }
      node.parentNode.appendChild(rootspan);
  }
  }
  return true;
  }