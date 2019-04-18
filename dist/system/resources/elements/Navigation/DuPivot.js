System.register(["aurelia-framework", "office-ui-fabric-react/lib/Pivot", "../../wrapper/ReactWrapper", "react", "react-dom"], function (exports_1, context_1) {
    "use strict";
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
    var aurelia_framework_1, Pivot_1, ReactWrapper_1, React, ReactDom, reactprops, DuPivot;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Pivot_1_1) {
                Pivot_1 = Pivot_1_1;
            },
            function (ReactWrapper_1_1) {
                ReactWrapper_1 = ReactWrapper_1_1;
            },
            function (React_1) {
                React = React_1;
            },
            function (ReactDom_1) {
                ReactDom = ReactDom_1;
            }
        ],
        execute: function () {
            reactprops = {};
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
            DuPivot = /** @class */ (function (_super) {
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
                    this.reactComponent = reactElement;
                    ReactDom.render(reactElement, this.container);
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
            }(ReactWrapper_1.ReactWrapper));
            exports_1("DuPivot", DuPivot);
            ReactWrapper_1.addProperties(DuPivot, reactprops);
        }
    };
});
