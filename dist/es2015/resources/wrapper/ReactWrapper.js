import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager, bindable, bindingMode } from 'aurelia-framework';
import { camelToKebab } from './Utilities';
var ReactWrapper = /** @class */ (function () {
    function ReactWrapper(element) {
        this.reactComponent = {};
        this.element = element;
        this.log = LogManager.getLogger('reacthost');
    }
    // public defaultOnChangeEvent(propertyName: string, newValue: any)
    // {
    //   //this.log.debug('Default onChange event occurred on property ' + propertyName + ' with value ' + newValue);
    //     let propName = propertyName
    //           .substring(2, propertyName.length - 'Changed'.length)
    //           .toLowerCase();
    //         if (newValue != this[propName]) {
    //           this[propName] = newValue;
    //         }
    //         //this.bind(null,null);
    // }
    // //@ts-ignore
    // public defaultActionEvent(propertyName: string, event: any)
    // {
    //     //this.log.debug('Default event occurred on property ' + propertyName + ' with event ' + event);
    // }
    ReactWrapper.prototype.bind = function (bindingContext) {
        if (bindingContext !== null) {
            this.parent = bindingContext;
        }
        this.render();
    };
    ReactWrapper.prototype.unbind = function () {
        ReactDom.unmountComponentAtNode(this.element);
    };
    return ReactWrapper;
}());
export { ReactWrapper };
// export function onChangeEvent(propertyName: string, newValue: any)
// {
//     //this.log.debug('onChangeEvent occurred on property ' + propertyName + ' with value ' + newValue);
//     if (newValue != this[propertyName]) {
//       this[propertyName] = newValue;
//     }
// }
export function defaultActionEvent() { }
export function defaultOnChangeEvent() { }
export function onlyAureliaBound() { }
export function addProperties(aureliaClass, reactprops) {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    for (var i = 0; i < reactpropNames.length; i++) {
        var renderPropName = reactpropNames[i];
        bindable({
            name: renderPropName,
            attribute: camelToKebab(renderPropName),
            changeHandler: 'render',
            defaultBindingMode: bindingMode.twoWay
        })(aureliaClass);
    }
}
export function renderReact(reactClass, reactprops) {
    var _this = this;
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
    var _loop_1 = function (i) {
        var renderPropName = reactpropNames[i];
        if (typeof reactprops[renderPropName] === 'function') {
            //this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
            // function is aurelia bound, make sure to call it
            //this.log.debug('typeof this[renderPropName] = ' + typeof this[renderPropName] );
            if (typeof this_1[renderPropName] === 'function') {
                a[renderPropName] = function () {
                    var newValue = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        newValue[_i] = arguments[_i];
                    }
                    //this.log.debug('bound function, go aurelia');
                    return _this[renderPropName](newValue);
                };
            }
            else {
                var funcNames = ['defaultOnChangeEvent', 'defaultActionEvent', 'onlyAureliaBound'];
                if (!funcNames.includes(reactprops[renderPropName].name)) {
                    a[renderPropName] = function () {
                        var newValue = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            newValue[_i] = arguments[_i];
                        }
                        //this.log.debug('run func from reactprops');
                        return reactprops[renderPropName](_this, newValue);
                    };
                }
            }
        }
        else {
            if (typeof this_1[renderPropName] !== 'undefined') {
                //this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
                a[renderPropName] = this_1[renderPropName];
            }
        }
    };
    var this_1 = this;
    for (var i = 0; i < reactpropNames.length; i++) {
        _loop_1(i);
    }
    var reactElement = React.createElement(reactClass, a);
    this.reactComponent = reactElement;
    ReactDom.render(reactElement, this.container);
}
export function elementWrapper(node, target) {
    var id = 'du' + Math.round(Math.random() * 10000000000000000);
    node.setAttribute('class', (node.getAttribute('class') == null ? '' : node.getAttribute('class')) + ' ' + id);
    var portalAttribute = 'target: .' + id + ' ' + target;
    if (node.childElementCount == 0) {
        var rootspan = document.createElement('span');
        rootspan.setAttribute('portal', portalAttribute);
        //@ts-ignore
        rootspan.innerText = node.innerText;
        //@ts-ignore
        node.innerText = '';
        node.appendChild(rootspan);
        return true;
    }
    if (node.childElementCount == 1) {
        if (node.firstElementChild) {
            node.firstElementChild.setAttribute('portal', portalAttribute);
        }
    }
    if (node.childElementCount > 1) {
        var rootspan = document.createElement('span');
        rootspan.setAttribute('portal', portalAttribute);
        if (node.parentNode) {
            var nodeCount = node.childElementCount;
            for (var i = nodeCount - 1; i >= 0; i--) {
                rootspan.insertBefore(node.children[i], rootspan.firstChild);
                //node.removeChild(node.children[i]);
            }
            node.parentNode.appendChild(rootspan);
        }
    }
    return true;
}
