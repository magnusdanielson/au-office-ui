var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { computedFrom, bindable } from 'aurelia-framework';
import { ButtonType, ButtonChecked, ButtonEnabled } from '../office-button-enums';
//import { IButtonProps } from '../Button.types';
import { getStyles } from './DefaultButton.styles';
//@customElement('office-button')
var OfficeButton = /** @class */ (function () {
    function OfficeButton() {
        this.type = ButtonType.default;
        this.icon = "plus";
    }
    Object.defineProperty(OfficeButton.prototype, "css", {
        get: function () {
            var disabledCss = this.enabledState == ButtonEnabled.disabled ? 'is-disabled' : '';
            var checkedCss = this.checkedState == ButtonChecked.checked ? 'is-checked' : '';
            var primary = false;
            var theme = null;
            var styles = undefined;
            var mystyles = getStyles(theme, styles, primary);
            console.log(mystyles);
            return "ms-Button ms-Button--" + ButtonType[this.type] + "  " + disabledCss + " " + checkedCss;
        },
        enumerable: true,
        configurable: true
    });
    OfficeButton.prototype.buttonclick = function () {
        if (this.onclick) {
            this.onclick();
        }
    };
    // Removes event handlers on the button
    OfficeButton.prototype.disposeEvents = function () {
    };
    __decorate([
        bindable
    ], OfficeButton.prototype, "type", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "icon", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "label", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "description", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "enabledState", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "checkedState", void 0);
    __decorate([
        bindable
    ], OfficeButton.prototype, "onclick", void 0);
    __decorate([
        computedFrom('type')
    ], OfficeButton.prototype, "css", null);
    return OfficeButton;
}());
export { OfficeButton };
