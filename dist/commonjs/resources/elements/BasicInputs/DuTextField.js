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
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
var reactprops = {};
reactprops.ariaLabel = {};
reactprops.autoAdjustHeight = {};
reactprops.autoComplete = {};
reactprops.borderless = {};
reactprops.className = {};
reactprops.defaultValue = {};
reactprops.deferredValidationTime = {};
reactprops.description = {};
reactprops.disabled = {};
reactprops.errorMessage = {};
reactprops.iconProps = {};
reactprops.inputClassName = {};
reactprops.label = {};
reactprops.mask = {};
reactprops.maskChar = {};
reactprops.maskFormat = {};
reactprops.multiline = {};
reactprops.onBeforeChange = au_react_wrapper_1.onlyAureliaBound;
reactprops.onChange = function (that, _event, newValue) {
    that['value'] = newValue;
};
reactprops.onNotifyValidationResult = au_react_wrapper_1.onlyAureliaBound;
reactprops.onGetErrorMessage = au_react_wrapper_1.onlyAureliaBound;
reactprops.prefix = {};
reactprops.readOnly = {};
reactprops.resizable = {};
reactprops.underlined = {};
reactprops.validateOnFocusIn = {};
reactprops.validateOnFocusOut = {};
reactprops.validateOnLoad = {};
reactprops.value = {};
// HTML attributes
reactprops.required = {};
reactprops.placeholder = {};
var DuTextField = /** @class */ (function (_super) {
    __extends(DuTextField, _super);
    function DuTextField(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuTextField.prototype.attached = function () {
        this.renderReact(TextField_1.TextField, this.createState(reactprops));
        // Fixing issue with autoAdjustHeight
        //@ts-ignore
        if (this.autoAdjustHeight == true) {
            var elements = this.element.getElementsByTagName('textarea');
            if (elements.length > 0) {
                var element = elements.item(0);
                element.setAttribute('style', '');
            }
        }
    };
    DuTextField.prototype.blur = function () {
        this.reactComponent.blur();
    };
    DuTextField.prototype.focus = function () {
        this.reactComponent.focus();
    };
    DuTextField.prototype.select = function () {
        this.reactComponent.select();
    };
    DuTextField.prototype.selectionEnd = function () {
        return this.reactComponent.selectionEnd();
    };
    DuTextField.prototype.selectionStart = function () {
        return this.reactComponent.selectionStart();
    };
    DuTextField.prototype.setSelectionEnd = function (value) {
        this.reactComponent.setSelectionEnd(value);
    };
    DuTextField.prototype.setSelectionRange = function (start, end) {
        this.reactComponent.setSelectionRange(start, end);
    };
    DuTextField.prototype.setSelectionStart = function (value) {
        this.reactComponent.setSelectionStart(value);
    };
    DuTextField = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-text-field')
    ], DuTextField);
    return DuTextField;
}(au_react_wrapper_1.AuReactStateWrapperNoChildren));
exports.DuTextField = DuTextField;
au_react_wrapper_1.addPropertiesState(DuTextField, reactprops);
