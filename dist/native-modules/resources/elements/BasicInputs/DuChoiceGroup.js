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
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.ariaLabelledBy = {};
reactprops.disabled = {};
reactprops.checked = {};
reactprops.className = {};
reactprops.label = {};
reactprops.onChange = function (_this, onChangeTuple) { _this['value'] = onChangeTuple[1]; };
reactprops.options = {};
reactprops.onClick = onlyAureliaBound;
reactprops.defaultSelectedKey = {};
reactprops.selectedKey = {};
reactprops.value = {};
var DuChoiceGroup = /** @class */ (function (_super) {
    __extends(DuChoiceGroup, _super);
    function DuChoiceGroup(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuChoiceGroup.prototype.attached = function () {
        this.renderReact(ChoiceGroup, this.createState(reactprops));
    };
    DuChoiceGroup = __decorate([
        inject(Element),
        customElement('du-choice-group')
    ], DuChoiceGroup);
    return DuChoiceGroup;
}(AuReactStateWrapper));
export { DuChoiceGroup };
addPropertiesState(DuChoiceGroup, reactprops);
