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
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';
var reactprops = {};
reactprops.items = {};
reactprops.overflowItems = {};
reactprops.farItems = {};
reactprops.overflowButtonProps = {};
reactprops.className = {};
var DuCommandBar = /** @class */ (function (_super) {
    __extends(DuCommandBar, _super);
    function DuCommandBar(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuCommandBar.prototype.attached = function () {
        this.renderReact(CommandBar, this.createState(reactprops));
    };
    DuCommandBar = __decorate([
        inject(Element),
        customElement('du-command-bar')
    ], DuCommandBar);
    return DuCommandBar;
}(AuReactStateWrapper));
export { DuCommandBar };
addPropertiesState(DuCommandBar, reactprops);
