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
var SpinButton_1 = require("office-ui-fabric-react/lib/SpinButton");
var ReactWrapper_1 = require("../wrapper/ReactWrapper");
var reactprops = {};
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.value = {};
reactprops.min = {};
reactprops.defaultValue = {};
reactprops.max = {};
reactprops.title = {};
reactprops.step = {};
reactprops.iconProps = {};
reactprops.labelPosition = {};
reactprops.onValidate = function () { };
//@ts-ignore
reactprops.onIncrement = function (_this, value) {
    var _value = parseFloat(_this['value']);
    if (_value + _this['step'] <= _this['max']) {
        _this['value'] = (_value + _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
    }
};
//@ts-ignore
reactprops.onDecrement = function (_this, value) {
    var _value = parseFloat(_this['value']);
    if (_value - _this['step'] >= _this['min']) {
        _this['value'] = (_value - _this['step']).toFixed(typeof _this['precision'] == 'undefined' ? 0 : _this['precision']);
    }
};
reactprops.precision = {};
var DuSpinButton = /** @class */ (function (_super) {
    __extends(DuSpinButton, _super);
    function DuSpinButton(element) {
        return _super.call(this, element) || this;
    }
    DuSpinButton.prototype.render = function () {
        ReactWrapper_1.renderReact.bind(this)(SpinButton_1.SpinButton, reactprops);
    };
    DuSpinButton = __decorate([
        aurelia_framework_1.noView(),
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-spin-button')
    ], DuSpinButton);
    return DuSpinButton;
}(ReactWrapper_1.ReactWrapper));
exports.DuSpinButton = DuSpinButton;
ReactWrapper_1.addProperties(DuSpinButton, reactprops);
