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
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var ReactWrapper_1 = require("../wrapper/ReactWrapper");
var reactprops = {};
reactprops.className = {};
reactprops.isMultiline = {};
reactprops.messageBarType = {};
reactprops.onDismiss = function () { };
reactprops.dismissButtonAriaLabel = {};
reactprops.truncated = {};
reactprops.overflowButtonAriaLabel = {};
reactprops.actions = {};
//@ts-ignore
var DuMessageBar = /** @class */ (function (_super) {
    __extends(DuMessageBar, _super);
    function DuMessageBar(element) {
        return _super.call(this, element) || this;
    }
    DuMessageBar.prototype.render = function () {
        ReactWrapper_1.renderReact.bind(this)(MessageBar_1.MessageBar, reactprops);
    };
    DuMessageBar = __decorate([
        aurelia_framework_1.processContent(function (compiler, resources, node, instruction) {
            console.log('MessageBar wrapper');
            return ReactWrapper_1.elementWrapper(node, '.ms-MessageBar-innerText');
        }),
        aurelia_framework_1.noView(),
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-message-bar')
    ], DuMessageBar);
    return DuMessageBar;
}(ReactWrapper_1.ReactWrapper));
exports.DuMessageBar = DuMessageBar;
ReactWrapper_1.addProperties(DuMessageBar, reactprops);
