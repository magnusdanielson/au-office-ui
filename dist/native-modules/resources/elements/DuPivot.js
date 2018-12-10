var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, inject, noView, bindable } from 'aurelia-framework';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
//import { Label } from 'office-ui-fabric-react/lib/Label';
import { addProperties, ReactWrapper } from '../wrapper/ReactWrapper';
import * as React from 'react';
import * as ReactDom from 'react-dom';
var reactprops = {};
reactprops.className = {};
reactprops.initialSelectedKey = {};
reactprops.initialSelectedIndex = {};
reactprops.onLinkClick = function () { };
reactprops.selectedKey = {};
reactprops.linkSize = {};
reactprops.linkFormat = {};
reactprops.headersOnly = {};
//@ts-ignore
reactprops.getTabId = function (itemKey, index) { return ''; };
var DuPivot = /** @class */ (function (_super) {
    __extends(DuPivot, _super);
    function DuPivot(element) {
        var _this = _super.call(this, element) || this;
        _this.pivotChildren = [];
        return _this;
    }
    DuPivot.prototype.render = function () {
        this.renderReact(reactprops);
    };
    DuPivot.prototype.renderReact = function (reactprops) {
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
                            return reactprops[renderPropName](_this, newValue);
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
        for (var i = 0; i < this.items.length; i++) {
            // Adding required key if missing
            //@ts-ignore
            if (typeof this.items[i].key == 'undefined') {
                //@ts-ignore
                this.items[i].key = 'k' + i;
            }
            var t = React.createElement(PivotItem, this.items[i], React.createElement('div', { className: 'du' + this.items[i].itemKey }));
            this.pivotChildren.push(t);
        }
        ;
        var reactElement = React.createElement(Pivot, a, this.pivotChildren);
        this.reactComponent = reactElement;
        ReactDom.render(reactElement, this.container);
    };
    __decorate([
        bindable()
    ], DuPivot.prototype, "items", void 0);
    DuPivot = __decorate([
        noView(),
        inject(Element),
        customElement('du-pivot')
    ], DuPivot);
    return DuPivot;
}(ReactWrapper));
export { DuPivot };
addProperties(DuPivot, reactprops);
