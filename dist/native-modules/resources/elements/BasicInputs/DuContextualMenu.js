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
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.beakWidth = {};
reactprops.bounds = {};
reactprops.calloutProps = {};
reactprops.className = {};
reactprops.coverTarget = {};
reactprops.gapSpace = {};
reactprops.hidden = {};
reactprops.isBeakVisible = {};
reactprops.isSubMenu = {};
reactprops.items = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.onItemClick = onlyAureliaBound;
reactprops.onMenuDismissed = onlyAureliaBound;
reactprops.onMenuOpened = onlyAureliaBound;
reactprops.alignTargetEdge = {};
reactprops.ariaLabel = {};
reactprops.delayUpdateFocusOnHover = {};
reactprops.directionalHint = {};
reactprops.directionalHintFixed = {};
reactprops.directionalHintForRTL = {};
reactprops.doNotLayer = {};
reactprops.focusZoneProps = {};
reactprops.gapSpace = {};
reactprops.labelElementId = {};
reactprops.shouldFocusOnContainer = {};
reactprops.shouldFocusOnMount = {};
reactprops.subMenuHoverDelay = {};
reactprops.target = {};
reactprops.useTargetAsMinWidth = {};
reactprops.useTargetWidth = {};
var DuContextualMenu = /** @class */ (function (_super) {
    __extends(DuContextualMenu, _super);
    function DuContextualMenu(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuContextualMenu.prototype.attached = function () {
        this.renderReact(ContextualMenu, this.createState(reactprops));
    };
    DuContextualMenu = __decorate([
        inject(Element),
        customElement('du-contextual-menu')
    ], DuContextualMenu);
    return DuContextualMenu;
}(AuReactStateWrapper));
export { DuContextualMenu };
addPropertiesState(DuContextualMenu, reactprops);
