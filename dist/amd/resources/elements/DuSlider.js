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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Slider", "../wrapper/ReactWrapper"], function (require, exports, aurelia_framework_1, Slider_1, ReactWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactprops = {};
    reactprops.disabled = {};
    reactprops.className = {};
    reactprops.label = {};
    reactprops.value = {};
    reactprops.defaultValue = {};
    reactprops.min = {};
    reactprops.max = {};
    reactprops.showValue = {};
    reactprops.step = {};
    reactprops.onChange = function () { };
    reactprops.vertical = {};
    var DuSlider = /** @class */ (function (_super) {
        __extends(DuSlider, _super);
        function DuSlider(element) {
            return _super.call(this, element) || this;
        }
        DuSlider.prototype.render = function () {
            ReactWrapper_1.renderReact.bind(this)(Slider_1.Slider, reactprops);
        };
        DuSlider = __decorate([
            aurelia_framework_1.noView(),
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-slider')
        ], DuSlider);
        return DuSlider;
    }(ReactWrapper_1.ReactWrapper));
    exports.DuSlider = DuSlider;
    ReactWrapper_1.addProperties(DuSlider, reactprops);
});
