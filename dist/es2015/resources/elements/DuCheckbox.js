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
import { customElement, inject, noView } from 'aurelia-framework';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';
// IMPORTANT
// any function defined here will be called with _this as first parameter
// following paramters are from the event
// _this refers to the DuCheckbox class with all properties added
var reactprops = {};
reactprops.disabled = {};
reactprops.checked = {};
reactprops.className = {};
reactprops.label = {};
reactprops.onChange = function (_this, checked) { _this['checked'] = checked; };
reactprops.boxSide = {};
reactprops.onClick = function () { };
var DuCheckbox = /** @class */ (function (_super) {
    __extends(DuCheckbox, _super);
    function DuCheckbox(element) {
        return _super.call(this, element) || this;
    }
    DuCheckbox.prototype.render = function () {
        renderReact.bind(this)(Checkbox, reactprops);
    };
    DuCheckbox = __decorate([
        noView(),
        inject(Element),
        customElement('du-checkbox')
    ], DuCheckbox);
    return DuCheckbox;
}(ReactWrapper));
export { DuCheckbox };
addProperties(DuCheckbox, reactprops);
