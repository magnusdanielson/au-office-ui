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
var GroupedList_1 = require("office-ui-fabric-react/lib/GroupedList");
var DuReactWrapperBaseClass_1 = require("../../wrapper/DuReactWrapperBaseClass");
var Utilities_1 = require("../../wrapper/Utilities");
var ReactWrapper_1 = require("../../wrapper/ReactWrapper");
var reactprops = {};
reactprops.items = {};
reactprops.onRenderCell = ReactWrapper_1.onlyAureliaBound;
reactprops.className = {};
reactprops.compact = {};
reactprops.getGroupHeight = {};
reactprops.groupProps = {};
reactprops.groups = {};
reactprops.listProps = {};
reactprops.onGroupExpandStateChanged = ReactWrapper_1.onlyAureliaBound;
reactprops.onShouldVirtualize = ReactWrapper_1.onlyAureliaBound;
reactprops.selection = {};
reactprops.selectionMode = {};
reactprops.usePageCache = {};
reactprops.key = {};
var DuGroupedList = /** @class */ (function (_super) {
    __extends(DuGroupedList, _super);
    function DuGroupedList(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuGroupedList.prototype.toggleCollapseAll = function (allCollapsed) {
        return this.reactComponent.toggleCollapseAll(allCollapsed);
    };
    DuGroupedList.prototype.forceUpdate = function () {
        this.reactComponent.forceUpdate();
    };
    DuGroupedList.prototype.attached = function () {
        this.renderReact(GroupedList_1.GroupedList, this.createState(reactprops));
    };
    DuGroupedList = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-grouped-list')
        //@ts-ignore Due to onRenderCell
    ], DuGroupedList);
    return DuGroupedList;
}(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
exports.DuGroupedList = DuGroupedList;
Utilities_1.addProperties(DuGroupedList, reactprops);
