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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Checkbox", "../../wrapper/ReactWrapper", "../../wrapper/DuReactWrapperBaseClass", "../../wrapper/Utilities"], function (require, exports, aurelia_framework_1, Checkbox_1, ReactWrapper_1, DuReactWrapperBaseClass_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // IMPORTANT
    // any function defined here will be called with _this as first parameter
    // following parameters are from the event
    // _this refers to the Aurelia class with all properties added
    var reactprops = {};
    reactprops.disabled = {};
    reactprops.ariaLabel = {};
    reactprops.ariaLabelledBy = {};
    reactprops.ariaPositionInSet = {};
    reactprops.ariaSetSize = {};
    reactprops.checkmarkIconProps = {};
    reactprops.defaultChecked = {};
    reactprops.keytipProps = {};
    reactprops.disabled = {};
    reactprops.checked = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.onChange = ReactWrapper_1.onlyAureliaBound;
    reactprops.boxSide = {};
    reactprops.onClick = ReactWrapper_1.onlyAureliaBound;
    reactprops.checked = {};
    var DuCheckbox = /** @class */ (function (_super) {
        __extends(DuCheckbox, _super);
        function DuCheckbox(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCheckbox.prototype.attached = function () {
            this.renderReact(Checkbox_1.Checkbox, this.createState(reactprops));
        };
        DuCheckbox = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-checkbox')
        ], DuCheckbox);
        return DuCheckbox;
    }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
    exports.DuCheckbox = DuCheckbox;
    Utilities_1.addProperties(DuCheckbox, reactprops);
});
