import * as React from 'react';
import * as ReactDom from 'react-dom';
import { LogManager, bindable, bindingMode } from 'aurelia-framework';
var ReactWrapper = /** @class */ (function () {
    function ReactWrapper(element) {
        this.reactComponent = {};
        this.element = element;
        this.log = LogManager.getLogger('reacthost');
    }
    ReactWrapper.prototype.defaultOnChangeEvent = function (propertyName, newValue) {
        this.log.debug('Default onChange event occurred on property ' + propertyName + ' with value ' + newValue);
        var propName = propertyName
            .substring(2, propertyName.length - 'Changed'.length)
            .toLowerCase();
        if (newValue != this[propName]) {
            this[propName] = newValue;
        }
        //this.bind(null,null);
    };
    ReactWrapper.prototype.defaultActionEvent = function (propertyName, event) {
        this.log.debug('Default event occurred on property ' + propertyName + ' with event ' + event);
    };
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
export function onChangeEvent(propertyName, newValue) {
    this.log.debug('onChangeEvent occurred on property ' + propertyName + ' with value ' + newValue);
    if (newValue != this[propertyName]) {
        this[propertyName] = newValue;
    }
}
export function camelToKebab(str) {
    // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
    //@ts-ignore
    return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
        return before.toLowerCase() + "-" + after.toLowerCase();
    }).toLowerCase();
}
export function defaultActionEvent() { }
export function defaultOnChangeEvent() { }
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
    this.container = this.element.querySelector('.au-react-root');
    if (this.container == null) {
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'au-react-root');
        this.element.appendChild(this.container);
    }
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    var a = {};
    var _loop_1 = function (i) {
        var renderPropName = reactpropNames[i];
        if (typeof reactprops[renderPropName] === 'function') {
            this_1.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
            if (renderPropName.startsWith('on')) {
                this_1.log.debug('on property ' + renderPropName);
                a[renderPropName] = function (newValue) {
                    _this.log.debug('event called on ' + renderPropName);
                    if (typeof _this[renderPropName] !== 'function') {
                        _this.log.debug('no Aurelia bound function');
                        if (reactprops[renderPropName].name === 'defaultOnChangeEvent') {
                            _this.defaultOnChangeEvent(renderPropName, newValue);
                        }
                        else if (reactprops[renderPropName].name === 'defaultActionEvent') {
                            _this.defaultActionEvent(renderPropName, newValue);
                        }
                        else {
                            _this.log.debug('run func from reactprops');
                            reactprops[renderPropName](_this, newValue);
                        }
                    }
                    else {
                        _this.log.debug('bound function, go aurelia');
                        _this[renderPropName].bind(_this.parent)(newValue);
                    }
                };
            }
        }
        else {
            if (typeof this_1[renderPropName] !== 'undefined') {
                this_1.log.debug('adding ' + renderPropName + ' with value ' + this_1[renderPropName]);
                a[renderPropName] = this_1[renderPropName];
            }
        }
    };
    var this_1 = this;
    for (var i = 0; i < reactpropNames.length; i++) {
        _loop_1(i);
    }
    var reactElement = React.createElement(reactClass, a);
    ReactDom.render(reactElement, this.container);
}
