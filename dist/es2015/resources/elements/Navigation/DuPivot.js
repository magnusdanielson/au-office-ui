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
import { customElement, inject, bindable } from 'aurelia-framework';
import { Pivot } from 'office-ui-fabric-react/lib/Pivot';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
var reactprops = {};
reactprops.className = {};
reactprops.initialSelectedKey = {};
reactprops.initialSelectedIndex = {};
reactprops.onLinkClick = function () { };
reactprops.selectedKey = {};
reactprops.linkSize = {};
reactprops.linkFormat = {};
reactprops.headersOnly = {};
//@ts-ignore
reactprops.getTabId = function (itemKey, index) { return ''; };
var DuPivot = /** @class */ (function (_super) {
    __extends(DuPivot, _super);
    function DuPivot(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.pivotChildren = [];
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuPivot.prototype.attached = function () {
        this.renderReact(Pivot, this.createState(reactprops));
        //this.renderReact(reactprops);
    };
    __decorate([
        bindable()
    ], DuPivot.prototype, "items", void 0);
    DuPivot = __decorate([
        inject(Element),
        customElement('du-pivot')
    ], DuPivot);
    return DuPivot;
}(DuReactWrapperBaseClass));
export { DuPivot };
addProperties(DuPivot, reactprops);
