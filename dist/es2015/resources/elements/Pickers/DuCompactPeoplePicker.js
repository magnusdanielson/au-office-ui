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
import { CompactPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
var reactprops = {};
//@ts-ignore
reactprops.items = {}; // items: T[] | undefined;
reactprops.onResolveSuggestions = (function () { });
reactprops.resolveDelay = {};
reactprops.onEmptyInputFocus = (function () { });
reactprops.defaultSelectedItems = {};
reactprops.onChange = (function (_this, items) { _this['selectedItems'] = items; });
reactprops.onFocus = (function () { });
reactprops.onBlur = (function () { });
reactprops.getTextFromItem = (function () { });
reactprops.onGetMoreResults = (function () { });
reactprops.className = {};
reactprops.pickerSuggestionsProps = {};
reactprops.pickerCalloutProps = {};
reactprops.inputProps = {};
reactprops.onRemoveSuggestion = (function () { });
reactprops.onValidateInput = (function () { });
reactprops.searchingText = (function () { });
reactprops.disabled = {};
reactprops.itemLimit = {};
reactprops.createGenericItem = (function () { });
reactprops.removeButtonAriaLabel = {};
reactprops.onItemSelected = (function () { });
reactprops.selectedItems = {};
//reactprops.onInputChange = <any>(() => {});
reactprops.onDismiss = (function () { });
reactprops.enableSelectedSuggestionAlert = {};
var DuCompactPeoplePicker = /** @class */ (function (_super) {
    __extends(DuCompactPeoplePicker, _super);
    function DuCompactPeoplePicker(element) {
        var _this_1 = _super.call(this, element) || this;
        _this_1.hidden = false;
        _this_1.hiddenIsHidden = true;
        _this_1.hiddenName = 'hidden';
        return _this_1;
    }
    DuCompactPeoplePicker.prototype.attached = function () {
        this.renderReact(CompactPeoplePicker, this.createState(reactprops));
    };
    DuCompactPeoplePicker = __decorate([
        inject(Element),
        customElement('du-compact-people-picker')
    ], DuCompactPeoplePicker);
    return DuCompactPeoplePicker;
}(DuReactWrapperBaseClass));
export { DuCompactPeoplePicker };
addProperties(DuCompactPeoplePicker, reactprops);
