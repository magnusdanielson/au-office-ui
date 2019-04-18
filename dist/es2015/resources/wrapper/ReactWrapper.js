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
    ReactWrapper.prototype.bind = function (bindingContext) {
        if (bindingContext !== null) {
            this.parent = bindingContext;
        }
        this.render();
    };
    ReactWrapper.prototype.unbind = function () {
        ReactDom.unmountComponentAtNode(this.element);
    };
    ReactWrapper.prototype.createState = function (reactprops) {
        var _this = this;
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
                    var funcNames = [
                        'defaultOnChangeEvent',
                        'defaultActionEvent',
                        'onlyAureliaBound'
                    ];
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
        return a;
    };
    return ReactWrapper;
}());
export { ReactWrapper };
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
        this.element.appendChild(this.container);
    }
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    var a = {};
    var _loop_2 = function (i) {
        var renderPropName = reactpropNames[i];
        if (typeof reactprops[renderPropName] === 'function') {
            //this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
            // function is aurelia bound, make sure to call it
            //this.log.debug('typeof this[renderPropName] = ' + typeof this[renderPropName] );
            if (typeof this_2[renderPropName] === 'function') {
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
                var funcNames = [
                    'defaultOnChangeEvent',
                    'defaultActionEvent',
                    'onlyAureliaBound'
                ];
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
            if (typeof this_2[renderPropName] !== 'undefined') {
                //this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
                a[renderPropName] = this_2[renderPropName];
            }
        }
    };
    var this_2 = this;
    for (var i = 0; i < reactpropNames.length; i++) {
        _loop_2(i);
    }
    var reactElement = React.createElement(reactClass, a);
    this.reactComponent = reactElement;
    ReactDom.render(reactElement, this.container);
}
