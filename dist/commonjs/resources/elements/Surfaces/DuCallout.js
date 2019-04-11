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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var ReactWrapper_1 = require("../../wrapper/ReactWrapper");
var DuReactWrapperBaseClass_1 = require("../../wrapper/DuReactWrapperBaseClass");
var Utilities_1 = require("../../wrapper/Utilities");
// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
var reactprops = {};
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
reactprops.hideOverflow = {};
reactprops.hidden = {};
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
var DuCallout = /** @class */ (function (_super) {
    __extends(DuCallout, _super);
    function DuCallout(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuCallout.prototype.attached = function () {
        this.renderReact(Callout_1.Callout, this.createState(reactprops));
    };
    DuCallout = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-callout')
    ], DuCallout);
    return DuCallout;
}(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
exports.DuCallout = DuCallout;
Utilities_1.addProperties(DuCallout, reactprops);
