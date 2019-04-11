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
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
var reactprops = {};
reactprops.focus = onlyAureliaBound;
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
reactprops.onValidate = onlyAureliaBound;
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
reactprops.onBlur = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
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
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuSpinButton.prototype.attached = function () {
        this.renderReact(SpinButton, this.createState(reactprops));
    };
    DuSpinButton = __decorate([
        inject(Element),
        customElement('du-spin-button')
    ], DuSpinButton);
    return DuSpinButton;
}(DuReactWrapperBaseClass));
export { DuSpinButton };
addProperties(DuSpinButton, reactprops);
