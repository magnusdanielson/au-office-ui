define(["require", "exports", "react", "react-dom", "aurelia-framework", "./Utilities"], function (require, exports, React, ReactDom, aurelia_framework_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReactWrapper = /** @class */ (function () {
        function ReactWrapper(element) {
            this.reactComponent = {};
            this.element = element;
            this.log = aurelia_framework_1.LogManager.getLogger('reacthost');
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
    exports.ReactWrapper = ReactWrapper;
    function defaultActionEvent() { }
    exports.defaultActionEvent = defaultActionEvent;
    function defaultOnChangeEvent() { }
    exports.defaultOnChangeEvent = defaultOnChangeEvent;
    function onlyAureliaBound() { }
    exports.onlyAureliaBound = onlyAureliaBound;
    function addProperties(aureliaClass, reactprops) {
        var reactpropNames = Object.getOwnPropertyNames(reactprops);
        for (var i = 0; i < reactpropNames.length; i++) {
            var renderPropName = reactpropNames[i];
            aurelia_framework_1.bindable({
                name: renderPropName,
                attribute: Utilities_1.camelToKebab(renderPropName),
                changeHandler: 'render',
                defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
            })(aureliaClass);
        }
    }
    exports.addProperties = addProperties;
    function renderReact(reactClass, reactprops) {
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
    exports.renderReact = renderReact;
});
