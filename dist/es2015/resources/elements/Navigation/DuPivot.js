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
import { AuReactNoStateWrapper, addPropertiesNoState } from '@dunite/au-react-wrapper';
import * as React from 'react';
import * as ReactDom from 'react-dom';
var reactprops = {};
reactprops.className = {};
reactprops.defaultSelectedIndex = {};
reactprops.defaultSelectedKey = {};
//@ts-ignore
reactprops.getTabId = function (itemKey, index) { return ''; };
reactprops.headersOnly = {};
reactprops.linkFormat = {};
reactprops.linkSize = {};
reactprops.onLinkClick = function () { };
reactprops.selectedKey = {};
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
        // this is bound to Aurelia class
        this.container = this.element.querySelector('.au-react-root');
        if (this.container == null) {
            this.container = document.createElement('span');
            this.container.setAttribute('class', 'au-react-root');
            this.element.appendChild(this.container);
        }
        var a = this.createState(reactprops);
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
        // TODO below <any> might be a bug
        this.reactComponent = ReactDom.render(reactElement, this.container);
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
}(AuReactNoStateWrapper));
export { DuPivot };
addPropertiesNoState(DuPivot, reactprops);
