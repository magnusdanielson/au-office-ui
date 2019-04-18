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
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var DuReactWrapperBaseClass_1 = require("../../wrapper/DuReactWrapperBaseClass");
var Utilities_1 = require("../../wrapper/Utilities");
var ReactWrapper_1 = require("../../wrapper/ReactWrapper");
var reactprops = {};
reactprops.checkButtonAriaLabel = {};
reactprops.checkboxCellClassName = {};
reactprops.checkboxVisibility = {};
reactprops.className = {};
reactprops.columnReorderOptions = {};
reactprops.columns = {};
reactprops.compact = {};
reactprops.constrainMode = {};
reactprops.disableSelectionZone = {};
//reactprops.enterModalSelectionOnTouch = <any>{};
reactprops.groupProps = {};
reactprops.groups = {};
reactprops.indentWidth = {};
reactprops.initialFocusedIndex = {};
reactprops.isHeaderVisible = {};
reactprops.layoutMode = {};
reactprops.listProps = {};
reactprops.minimumPixelsForDrag = {};
reactprops.onActiveItemChanged = ReactWrapper_1.onlyAureliaBound;
reactprops.onColumnHeaderClick = ReactWrapper_1.onlyAureliaBound;
reactprops.onColumnHeaderContextMenu = ReactWrapper_1.onlyAureliaBound;
reactprops.onColumnResize = ReactWrapper_1.onlyAureliaBound;
reactprops.onDidUpdate = ReactWrapper_1.onlyAureliaBound;
reactprops.onItemContextMenu = ReactWrapper_1.onlyAureliaBound;
reactprops.onItemInvoked = ReactWrapper_1.onlyAureliaBound;
reactprops.selection = {};
reactprops.selectionMode = {};
reactprops.selectionPreservedOnEmptyClick = {};
reactprops.items = {};
var DuDetailsList = /** @class */ (function (_super) {
    __extends(DuDetailsList, _super);
    function DuDetailsList(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuDetailsList.prototype.scrollToIndex = function (index) {
        this.reactComponent.forceUpdate(index);
    };
    DuDetailsList.prototype.forceUpdate = function () {
        this.reactComponent.forceUpdate();
    };
    DuDetailsList.prototype.focusIndex = function (index, forceIntoFirstElement, measureItem, scrollToMode) {
        this.reactComponent.focusIndex(index, forceIntoFirstElement, measureItem, scrollToMode);
    };
    DuDetailsList.prototype.attached = function () {
        this.renderReact(DetailsList_1.DetailsList, this.createState(reactprops));
    };
    DuDetailsList.prototype.getStartItemIndexInView = function () {
        return this.reactComponent.getStartItemIndexInView();
    };
    DuDetailsList = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-details-list')
    ], DuDetailsList);
    return DuDetailsList;
}(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
exports.DuDetailsList = DuDetailsList;
Utilities_1.addProperties(DuDetailsList, reactprops);
