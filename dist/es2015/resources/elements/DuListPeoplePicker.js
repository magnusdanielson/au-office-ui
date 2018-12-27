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
import { ListPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.className = {};
reactprops.forceResolveText = {};
reactprops.loadingText = {};
reactprops.mostRecentlyUsedHeaderText = {};
reactprops.noResultsFoundText = {};
//reactprops.onRenderNoResultFound = () => {};
reactprops.resultsMaximumNumber = {};
reactprops.searchForMoreText = {};
reactprops.searchingText = {};
reactprops.showRemoveButtons = {};
reactprops.suggestionsAvailableAlertText = {};
reactprops.suggestionsClassName = {};
reactprops.suggestionsHeaderText = {};
reactprops.suggestionsItemClassName = {};
var DuListPeoplePicker = /** @class */ (function (_super) {
    __extends(DuListPeoplePicker, _super);
    function DuListPeoplePicker(element) {
        return _super.call(this, element) || this;
    }
    DuListPeoplePicker.prototype.render = function () {
        renderReact.bind(this)(ListPeoplePicker, reactprops);
    };
    DuListPeoplePicker = __decorate([
        noView(),
        inject(Element),
        customElement('du-list-people-picker')
    ], DuListPeoplePicker);
    return DuListPeoplePicker;
}(ReactWrapper));
export { DuListPeoplePicker };
addProperties(DuListPeoplePicker, reactprops);
