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
import { customElement, inject } from 'aurelia-framework';
import { DetailsList } from 'office-ui-fabric-react/lib/DetailsList';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
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
reactprops.onActiveItemChanged = onlyAureliaBound;
reactprops.onColumnHeaderClick = onlyAureliaBound;
reactprops.onColumnHeaderContextMenu = onlyAureliaBound;
reactprops.onColumnResize = onlyAureliaBound;
reactprops.onDidUpdate = onlyAureliaBound;
reactprops.onItemContextMenu = onlyAureliaBound;
reactprops.onItemInvoked = onlyAureliaBound;
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
        this.renderReact(DetailsList, this.createState(reactprops));
    };
    DuDetailsList.prototype.getStartItemIndexInView = function () {
        return this.reactComponent.getStartItemIndexInView();
    };
    DuDetailsList = __decorate([
        inject(Element),
        customElement('du-details-list')
    ], DuDetailsList);
    return DuDetailsList;
}(DuReactWrapperBaseClass));
export { DuDetailsList };
addProperties(DuDetailsList, reactprops);
