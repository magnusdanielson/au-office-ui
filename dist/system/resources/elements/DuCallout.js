System.register(["aurelia-framework", "office-ui-fabric-react/lib/Callout", "../wrapper/ReactWrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, Callout_1, ReactWrapper_1, reactprops, DuCallout;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (Callout_1_1) {
                Callout_1 = Callout_1_1;
            },
            function (ReactWrapper_1_1) {
                ReactWrapper_1 = ReactWrapper_1_1;
            }
        ],
        execute: function () {
            // IMPORTANT
            // any function defined here will be called with _this as first parameter
            // following paramters are from the event
            // _this refers to the DuCheckbox class with all properties added
            reactprops = {};
            reactprops.backgroundColor = {};
            reactprops.beakWidth = {};
            reactprops.className = {};
            reactprops.bounds = {};
            reactprops.calloutMaxHeight = {};
            reactprops.calloutMaxWidth = {};
            reactprops.calloutWidth = {};
            reactprops.coverTarget = {};
            reactprops.directionalHint = {};
            reactprops.directionalHintFixed = {};
            reactprops.doNotLayer = {};
            reactprops.finalHeight = {};
            reactprops.gapSpace = {};
            reactprops.hidden = {};
            reactprops.hideOverflow = {};
            reactprops.isBeakVisible = {};
            reactprops.layerProps = {};
            reactprops.minPagePadding = {};
            reactprops.onDismiss = ReactWrapper_1.onlyAureliaBound;
            reactprops.onLayerMounted = ReactWrapper_1.onlyAureliaBound;
            reactprops.onPositioned = ReactWrapper_1.onlyAureliaBound;
            reactprops.onScroll = ReactWrapper_1.onlyAureliaBound;
            reactprops.preventDismissOnLostFocus = {};
            reactprops.preventDismissOnScroll = {};
            reactprops.setInitialFocus = {};
            reactprops.target = {};
            DuCallout = /** @class */ (function (_super) {
                __extends(DuCallout, _super);
                function DuCallout(element) {
                    return _super.call(this, element) || this;
                }
                DuCallout.prototype.render = function () {
                    ReactWrapper_1.renderReact.bind(this)(Callout_1.Callout, reactprops);
                };
                DuCallout = __decorate([
                    aurelia_framework_1.processContent(function (compiler, resources, node, instruction) {
                        return ReactWrapper_1.elementWrapper(node, '.ms-Callout-main');
                    }),
                    aurelia_framework_1.noView(),
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-callout')
                ], DuCallout);
                return DuCallout;
            }(ReactWrapper_1.ReactWrapper));
            exports_1("DuCallout", DuCallout);
            ReactWrapper_1.addProperties(DuCallout, reactprops);
        }
    };
});
