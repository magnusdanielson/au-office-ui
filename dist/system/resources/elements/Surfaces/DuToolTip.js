System.register(["aurelia-framework", "office-ui-fabric-react/lib/Tooltip", "@dunite/au-react-wrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, Tooltip_1, au_react_wrapper_1, reactprops, DuToolTip;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Tooltip_1_1) {
                Tooltip_1 = Tooltip_1_1;
            },
            function (au_react_wrapper_1_1) {
                au_react_wrapper_1 = au_react_wrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
            reactprops.calloutProps = {};
            reactprops.content = {};
            reactprops.delay = {};
            reactprops.directionalHint = {};
            reactprops.maxWidth = {};
            reactprops.onRenderContent = au_react_wrapper_1.onlyAureliaBound;
            reactprops.targetElement = {};
            reactprops.hidden = {};
            DuToolTip = /** @class */ (function (_super) {
                __extends(DuToolTip, _super);
                function DuToolTip(element) {
                    var _this = _super.call(this, element) || this;
                    _this.hiddenIsHidden = true;
                    _this.hiddenName = 'hidden';
                    return _this;
                }
                DuToolTip.prototype.attached = function () {
                    this.renderReact(Tooltip_1.Tooltip, this.createState(reactprops));
                };
                DuToolTip = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-tool-tip')
                ], DuToolTip);
                return DuToolTip;
            }(au_react_wrapper_1.AuReactStateWrapper));
            exports_1("DuToolTip", DuToolTip);
            au_react_wrapper_1.addPropertiesState(DuToolTip, reactprops);
        }
    };
});
