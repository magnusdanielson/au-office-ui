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
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.disabled = {};
reactprops.className = {};
reactprops.required = {};
reactprops.placeholder = {};
reactprops.onSearch = function () { };
reactprops.onFocus = function () { };
reactprops.onBlur = function () { };
reactprops.onChange = (function (_this, onChangeTuple) { _this['value'] = onChangeTuple[1]; });
reactprops.disableAnimation = {};
reactprops.onClear = function () { };
reactprops.onEscape = function () { };
reactprops.value = {};
reactprops.defaultValue = {};
reactprops.clearButtonProps = {};
reactprops.underlined = {};
reactprops.iconProps = {};
var DuSearchBox = /** @class */ (function (_super) {
    __extends(DuSearchBox, _super);
    function DuSearchBox(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuSearchBox.prototype.attached = function () {
        this.renderReact(SearchBox_1.SearchBox, this.createState(reactprops));
    };
    DuSearchBox = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-search-box')
    ], DuSearchBox);
    return DuSearchBox;
}(au_react_wrapper_1.AuReactStateWrapperNoChildren));
exports.DuSearchBox = DuSearchBox;
au_react_wrapper_1.addPropertiesState(DuSearchBox, reactprops);
