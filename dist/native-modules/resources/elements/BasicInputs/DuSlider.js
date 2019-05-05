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
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.value = {};
reactprops.ariaLabel = {};
reactprops.ariaValueText = onlyAureliaBound;
reactprops.className = {};
reactprops.defaultValue = {};
reactprops.disabled = {};
reactprops.label = {};
reactprops.max = {};
reactprops.min = {};
reactprops.onChange = onlyAureliaBound;
reactprops.onChanged = onlyAureliaBound;
reactprops.showValue = {};
reactprops.step = {};
reactprops.value = {};
reactprops.vertical = {};
reactprops.valueFormat = onlyAureliaBound;
reactprops.vertical = {};
var DuSlider = /** @class */ (function (_super) {
    __extends(DuSlider, _super);
    function DuSlider(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuSlider.prototype.attached = function () {
        this.renderReact(Slider, this.createState(reactprops));
    };
    DuSlider = __decorate([
        inject(Element),
        customElement('du-slider')
    ], DuSlider);
    return DuSlider;
}(AuReactStateWrapper));
export { DuSlider };
addPropertiesState(DuSlider, reactprops);
