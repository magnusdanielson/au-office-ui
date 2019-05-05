System.register(["aurelia-framework", "office-ui-fabric-react/lib/DetailsList", "@dunite/au-react-wrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, DetailsList_1, au_react_wrapper_1, reactprops, DuDetailsList;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (DetailsList_1_1) {
                DetailsList_1 = DetailsList_1_1;
            },
            function (au_react_wrapper_1_1) {
                au_react_wrapper_1 = au_react_wrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
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
            reactprops.onActiveItemChanged = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onColumnHeaderClick = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onColumnHeaderContextMenu = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onColumnResize = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onDidUpdate = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onItemContextMenu = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onItemInvoked = au_react_wrapper_1.onlyAureliaBound;
            reactprops.selection = {};
            reactprops.selectionMode = {};
            reactprops.selectionPreservedOnEmptyClick = {};
            reactprops.items = {};
            DuDetailsList = /** @class */ (function (_super) {
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
            }(au_react_wrapper_1.AuReactStateWrapper));
            exports_1("DuDetailsList", DuDetailsList);
            au_react_wrapper_1.addPropertiesState(DuDetailsList, reactprops);
        }
    };
});
