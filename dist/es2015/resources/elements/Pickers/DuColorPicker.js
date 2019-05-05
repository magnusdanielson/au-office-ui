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
import { ColorPicker } from 'office-ui-fabric-react/lib/ColorPicker';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.alphaLabel = {};
reactprops.alphaSliderHidden = {};
reactprops.blueLabel = {};
reactprops.color = {};
reactprops.greenLabel = {};
reactprops.hexLabel = {};
reactprops.onChange = function (_this, onChangeTuple) { _this['color'] = onChangeTuple[1].str; };
reactprops.redLabel = {};
var DuColorPicker = /** @class */ (function (_super) {
    __extends(DuColorPicker, _super);
    function DuColorPicker(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuColorPicker.prototype.attached = function () {
        this.renderReact(ColorPicker, this.createState(reactprops));
    };
    DuColorPicker = __decorate([
        inject(Element),
        customElement('du-color-picker')
    ], DuColorPicker);
    return DuColorPicker;
}(AuReactStateWrapper));
export { DuColorPicker };
addPropertiesState(DuColorPicker, reactprops);
