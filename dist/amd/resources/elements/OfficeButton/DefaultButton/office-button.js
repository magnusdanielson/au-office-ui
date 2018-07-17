var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "../office-button-enums", "./DefaultButton.styles"], function (require, exports, aurelia_framework_1, office_button_enums_1, DefaultButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //@customElement('office-button')
    var OfficeButton = /** @class */ (function () {
        function OfficeButton() {
            this.type = office_button_enums_1.ButtonType.default;
            this.icon = "plus";
        }
        Object.defineProperty(OfficeButton.prototype, "css", {
            get: function () {
                var disabledCss = this.enabledState == office_button_enums_1.ButtonEnabled.disabled ? 'is-disabled' : '';
                var checkedCss = this.checkedState == office_button_enums_1.ButtonChecked.checked ? 'is-checked' : '';
                var primary = false;
                var theme = null;
                var styles = undefined;
                var mystyles = DefaultButton_styles_1.getStyles(theme, styles, primary);
                console.log(mystyles);
                return "ms-Button ms-Button--" + office_button_enums_1.ButtonType[this.type] + "  " + disabledCss + " " + checkedCss;
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
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "type", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "icon", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "label", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "description", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "enabledState", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "checkedState", void 0);
        __decorate([
            aurelia_framework_1.bindable
        ], OfficeButton.prototype, "onclick", void 0);
        __decorate([
            aurelia_framework_1.computedFrom('type')
        ], OfficeButton.prototype, "css", null);
        return OfficeButton;
    }());
    exports.OfficeButton = OfficeButton;
});
