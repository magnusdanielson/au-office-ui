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
import { ListPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
var reactprops = {};
//@ts-ignore
reactprops.items = {}; // items: T[] | undefined;
reactprops.onResolveSuggestions = (function () { });
reactprops.resolveDelay = {};
reactprops.onEmptyInputFocus = (function () { });
reactprops.defaultSelectedItems = {};
reactprops.onChange = (function () { });
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
reactprops.onInputChange = onlyAureliaBound;
reactprops.onDismiss = (function () { });
reactprops.enableSelectedSuggestionAlert = {};
var DuListPeoplePicker = /** @class */ (function (_super) {
    __extends(DuListPeoplePicker, _super);
    function DuListPeoplePicker(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuListPeoplePicker.prototype.attached = function () {
        this.renderReact(ListPeoplePicker, this.createState(reactprops));
    };
    DuListPeoplePicker = __decorate([
        inject(Element),
        customElement('du-list-people-picker')
    ], DuListPeoplePicker);
    return DuListPeoplePicker;
}(DuReactWrapperBaseClass));
export { DuListPeoplePicker };
addProperties(DuListPeoplePicker, reactprops);