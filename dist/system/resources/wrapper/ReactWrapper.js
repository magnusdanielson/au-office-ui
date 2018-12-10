System.register(["react", "react-dom", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var React, ReactDom, aurelia_framework_1, ReactWrapper;
    var __moduleName = context_1 && context_1.id;
    function onChangeEvent(propertyName, newValue) {
        this.log.debug('onChangeEvent occurred on property ' + propertyName + ' with value ' + newValue);
        if (newValue != this[propertyName]) {
            this[propertyName] = newValue;
        }
    }
    exports_1("onChangeEvent", onChangeEvent);
    function camelToKebab(str) {
        // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
        //@ts-ignore
        return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
            return before.toLowerCase() + "-" + after.toLowerCase();
        }).toLowerCase();
    }
    exports_1("camelToKebab", camelToKebab);
    function defaultActionEvent() { }
    exports_1("defaultActionEvent", defaultActionEvent);
    function defaultOnChangeEvent() { }
    exports_1("defaultOnChangeEvent", defaultOnChangeEvent);
    function addProperties(aureliaClass, reactprops) {
        var reactpropNames = Object.getOwnPropertyNames(reactprops);
        for (var i = 0; i < reactpropNames.length; i++) {
            var renderPropName = reactpropNames[i];
            aurelia_framework_1.bindable({
                name: renderPropName,
                attribute: camelToKebab(renderPropName),
                changeHandler: 'render',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            })(aureliaClass);
        }
    }
    exports_1("addProperties", addProperties);
    function renderReact(reactClass, reactprops) {
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
                this_1.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
                if (renderPropName.startsWith('on')) {
                    this_1.log.debug('on property ' + renderPropName);
                    a[renderPropName] = function () {
                        var newValue = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            newValue[_i] = arguments[_i];
                        }
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
                                return reactprops[renderPropName](_this, newValue);
                            }
                        }
                        else {
                            _this.log.debug('bound function, go aurelia');
                            return _this[renderPropName](newValue);
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
        // const reactElement = React.createElement(reactClass, a
        //   , React.createElement('span', {type: 'innerHTML', value: 'And here is a child'}));
        var reactElement = React.createElement(reactClass, a);
        this.reactComponent = reactElement;
        ReactDom.render(reactElement, this.container);
    }
    exports_1("renderReact", renderReact);
    function elementWrapper(node, target) {
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
                    //console.log(node.children[i]);
                    rootspan.insertBefore(node.children[i], rootspan.firstChild);
                    //node.removeChild(node.children[i]);
                }
                node.parentNode.appendChild(rootspan);
            }
        }
        return true;
    }
    exports_1("elementWrapper", elementWrapper);
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactDom_1) {
                ReactDom = ReactDom_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            ReactWrapper = /** @class */ (function () {
                function ReactWrapper(element) {
                    this.reactComponent = {};
                    this.element = element;
                    this.log = aurelia_framework_1.LogManager.getLogger('reacthost');
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
            exports_1("ReactWrapper", ReactWrapper);
        }
    };
});
