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
import { ComboBox } from 'office-ui-fabric-react/lib/ComboBox';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.buttonIconProps = {};
reactprops.caretDownButtonStyles = {};
reactprops.comboBoxOptionStyles = {};
reactprops.dropdownMaxWidth = {};
reactprops.keytipProps = {};
reactprops.onItemClick = onlyAureliaBound;
reactprops.isButtonAriaHidden = {};
reactprops.onPendingValueChanged = onlyAureliaBound;
reactprops.onScrollToItem = onlyAureliaBound;
reactprops.disabled = {};
reactprops.className = {};
reactprops.label = {};
reactprops.options = {};
reactprops.onChange = onlyAureliaBound;
reactprops.defaultSelectedKey = {};
reactprops.selectedKey = {};
reactprops.onMenuOpen = onlyAureliaBound;
reactprops.onMenuDismissed = onlyAureliaBound;
reactprops.onResolveOptions = onlyAureliaBound;
reactprops.allowFreeform = {};
reactprops.autoComplete = {};
reactprops.text = {};
reactprops.scrollSelectedToTop = {};
reactprops.dropdownWidth = {};
reactprops.useComboBoxAsMenuWidth = {};
reactprops.multiSelect = {};
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
var DuComboBox = /** @class */ (function (_super) {
    __extends(DuComboBox, _super);
    function DuComboBox(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuComboBox.prototype.attached = function () {
        this.renderReact(ComboBox, this.createState(reactprops));
    };
    DuComboBox = __decorate([
        inject(Element),
        customElement('du-combo-box')
    ], DuComboBox);
    return DuComboBox;
}(AuReactStateWrapper));
export { DuComboBox };
addPropertiesState(DuComboBox, reactprops);
