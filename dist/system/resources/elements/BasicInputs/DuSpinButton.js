System.register(["aurelia-framework", "office-ui-fabric-react/lib/SpinButton", "@dunite/au-react-wrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, SpinButton_1, au_react_wrapper_1, reactprops, DuSpinButton;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (SpinButton_1_1) {
                SpinButton_1 = SpinButton_1_1;
            },
            function (au_react_wrapper_1_1) {
                au_react_wrapper_1 = au_react_wrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
            reactprops.focus = au_react_wrapper_1.onlyAureliaBound;
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
            reactprops.onValidate = au_react_wrapper_1.onlyAureliaBound;
            reactprops.ariaLabel = {};
            reactprops.ariaPositionInSet = {};
            reactprops.ariaSetSize = {};
            reactprops.ariaValueNow = {};
            reactprops.ariaValueText = {};
            reactprops.decrementButtonAriaLabel = {};
            reactprops.decrementButtonIcon = {};
            reactprops.downArrowButtonStyles = {};
            reactprops.iconProps = {};
            reactprops.incrementButtonAriaLabel = {};
            reactprops.incrementButtonIcon = {};
            reactprops.keytipProps = {};
            reactprops.onBlur = au_react_wrapper_1.onlyAureliaBound;
            reactprops.onFocus = au_react_wrapper_1.onlyAureliaBound;
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
            DuSpinButton = /** @class */ (function (_super) {
                __extends(DuSpinButton, _super);
                function DuSpinButton(element) {
                    var _this_1 = _super.call(this, element) || this;
                    _this_1.hidden = false;
                    _this_1.hiddenIsHidden = true;
                    _this_1.hiddenName = 'hidden';
                    return _this_1;
                }
                DuSpinButton.prototype.attached = function () {
                    this.renderReact(SpinButton_1.SpinButton, this.createState(reactprops));
                };
                DuSpinButton = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-spin-button')
                ], DuSpinButton);
                return DuSpinButton;
            }(au_react_wrapper_1.AuReactStateWrapper));
            exports_1("DuSpinButton", DuSpinButton);
            au_react_wrapper_1.addPropertiesState(DuSpinButton, reactprops);
        }
    };
});
