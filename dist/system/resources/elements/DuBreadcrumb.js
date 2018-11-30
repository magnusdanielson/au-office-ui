System.register(["aurelia-framework", "office-ui-fabric-react/lib/Breadcrumb", "../wrapper/ReactWrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, Breadcrumb_1, ReactWrapper_1, reactprops, DuBreadcrumb;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Breadcrumb_1_1) {
                Breadcrumb_1 = Breadcrumb_1_1;
            },
            function (ReactWrapper_1_1) {
                ReactWrapper_1 = ReactWrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
            reactprops.items = {};
            reactprops.className = {};
            reactprops.dividerAs = {};
            reactprops.maxDisplayedItems = {};
            reactprops.onReduceData = ReactWrapper_1.defaultActionEvent;
            reactprops.overflowIndex = {};
            DuBreadcrumb = /** @class */ (function (_super) {
                __extends(DuBreadcrumb, _super);
                function DuBreadcrumb(element) {
                    return _super.call(this, element) || this;
                }
                DuBreadcrumb.prototype.render = function () {
                    ReactWrapper_1.renderReact.bind(this)(Breadcrumb_1.Breadcrumb, reactprops);
                };
                DuBreadcrumb = __decorate([
                    aurelia_framework_1.noView(),
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-breadcrumb')
                ], DuBreadcrumb);
                return DuBreadcrumb;
            }(ReactWrapper_1.ReactWrapper));
            exports_1("DuBreadcrumb", DuBreadcrumb);
            ReactWrapper_1.addProperties(DuBreadcrumb, reactprops);
        }
    };
});
