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
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { renderReact, addProperties, ReactWrapper, defaultActionEvent } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.arrowDirection = {};
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
reactprops.onDismiss = defaultActionEvent;
reactprops.onItemClick = defaultActionEvent;
reactprops.onMenuDismissed = defaultActionEvent;
reactprops.onMenuOpened = defaultActionEvent;
var DuContextualMenu = /** @class */ (function (_super) {
    __extends(DuContextualMenu, _super);
    function DuContextualMenu(element) {
        return _super.call(this, element) || this;
    }
    DuContextualMenu.prototype.render = function () {
        renderReact.bind(this)(ContextualMenu, reactprops);
    };
    DuContextualMenu = __decorate([
        noView(),
        inject(Element),
        customElement('du-contextual-menu')
    ], DuContextualMenu);
    return DuContextualMenu;
}(ReactWrapper));
export { DuContextualMenu };
addProperties(DuContextualMenu, reactprops);
