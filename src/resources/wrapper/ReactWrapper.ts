import * as React from 'react';
import * as ReactDom from 'react-dom';
import { bindable, bindingMode } from 'aurelia-framework';
import { LogManager } from 'aurelia-framework';
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
    
    for (let i = 0; i < reactpropNames.length - 1; i++) {
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
    this.container = this.element.querySelector('.au-react-root');
  
    if (this.container == null) {
      this.container = document.createElement('div');
      this.container.setAttribute('class', 'au-react-root');
      this.element.appendChild(this.container);
    }
  
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
  
    var a = {};
    for (let i = 0; i < reactpropNames.length - 1; i++) {
      let renderPropName = reactpropNames[i];
      if (typeof reactprops[renderPropName] === 'function')
        {
          this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
        if (renderPropName.startsWith('on')) {
          this.log.debug('on property ' + renderPropName);
          a[renderPropName] = newValue => {
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
                reactprops[renderPropName](this, newValue);
              }
            }
            else
            {
                this.log.debug('bound function, go aurelia');
                this[renderPropName].bind(this.parent)(newValue);
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
    
    const reactElement = (<any>React).createElement(reactClass, a);
  
    ReactDom.render(reactElement, this.container);
  }
  