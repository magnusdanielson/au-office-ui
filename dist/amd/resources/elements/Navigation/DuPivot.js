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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Pivot", "@dunite/au-react-wrapper", "react", "react-dom"], function (require, exports, aurelia_framework_1, Pivot_1, au_react_wrapper_1, React, ReactDom) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactprops = {};
    reactprops.className = {};
    reactprops.defaultSelectedIndex = {};
    reactprops.defaultSelectedKey = {};
    //@ts-ignore
    reactprops.getTabId = au_react_wrapper_1.onlyAureliaBound;
    reactprops.headersOnly = {};
    reactprops.linkFormat = {};
    reactprops.linkSize = {};
    reactprops.onLinkClick = au_react_wrapper_1.onlyAureliaBound;
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
                var t = React.createElement(Pivot_1.PivotItem, this.items[i], React.createElement('div', { className: 'du' + this.items[i].itemKey }));
                this.pivotChildren.push(t);
            }
            ;
            var reactElement = React.createElement(Pivot_1.Pivot, a, this.pivotChildren);
            // TODO below <any> might be a bug
            this.reactComponent = ReactDom.render(reactElement, this.container);
        };
        __decorate([
            aurelia_framework_1.bindable()
        ], DuPivot.prototype, "items", void 0);
        DuPivot = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-pivot')
        ], DuPivot);
        return DuPivot;
    }(au_react_wrapper_1.AuReactNoStateWrapper));
    exports.DuPivot = DuPivot;
    au_react_wrapper_1.addPropertiesNoState(DuPivot, reactprops);
});
