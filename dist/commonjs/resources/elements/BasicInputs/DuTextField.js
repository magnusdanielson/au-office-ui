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
var ReactWrapper_1 = require("../../wrapper/ReactWrapper");
var Utilities_1 = require("../../wrapper/Utilities");
var DuReactWrapperNoChildren_1 = require("../../wrapper/DuReactWrapperNoChildren");
var reactprops = {};
reactprops.ariaLabel = {};
reactprops.onBeforeChange = ReactWrapper_1.onlyAureliaBound;
reactprops.validateOnFocusIn = {};
reactprops.validateOnFocusOut = {};
reactprops.validateOnLoad = {};
reactprops.disabled = {};
reactprops.multiline = {};
reactprops.className = {};
reactprops.label = {};
reactprops.resizable = {};
reactprops.onChange = function (_this, newValue) { _this['value'] = newValue; };
reactprops.autoAdjustHeight = {};
reactprops.underlined = {};
reactprops.onNotifyValidationResult = ReactWrapper_1.onlyAureliaBound;
reactprops.onGetErrorMessage = ReactWrapper_1.onlyAureliaBound;
reactprops.borderless = {};
reactprops.autoComplete = {};
reactprops.label = {};
reactprops.value = {};
reactprops.description = {};
reactprops.prefix = {};
reactprops.suffix = {};
reactprops.defaultValue = {};
reactprops.readOnly = {};
reactprops.errorMessage = {};
reactprops.deferredValidationTime = {};
reactprops.inputClassName = {};
reactprops.mask = {};
reactprops.maskChar = {};
reactprops.maskFormat = {};
reactprops.required = {};
reactprops.placeholder = {};
reactprops.rows = {};
reactprops.iconProps = {};
var DuTextField = /** @class */ (function (_super) {
    __extends(DuTextField, _super);
    function DuTextField(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
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
    DuTextField = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-text-field')
    ], DuTextField);
    return DuTextField;
}(DuReactWrapperNoChildren_1.DuReactWrapperNoChildren));
exports.DuTextField = DuTextField;
Utilities_1.addProperties(DuTextField, reactprops);