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
var Nav_1 = require("office-ui-fabric-react/lib/Nav");
var ReactWrapper_1 = require("../wrapper/ReactWrapper");
var reactprops = {};
reactprops.groups = {};
reactprops.initialSelectedKey = {};
reactprops.isOnTop = {};
reactprops.onLinkClick = function () { };
reactprops.onLinkExpandClick = function () { };
reactprops.selectedKey = {};
var DuNav = /** @class */ (function (_super) {
    __extends(DuNav, _super);
    function DuNav(element) {
        return _super.call(this, element) || this;
    }
    DuNav.prototype.render = function () {
        ReactWrapper_1.renderReact.bind(this)(Nav_1.Nav, reactprops);
    };
    DuNav = __decorate([
        aurelia_framework_1.noView(),
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-nav')
    ], DuNav);
    return DuNav;
}(ReactWrapper_1.ReactWrapper));
exports.DuNav = DuNav;
ReactWrapper_1.addProperties(DuNav, reactprops);