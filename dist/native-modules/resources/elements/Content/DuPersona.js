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
import { Persona } from 'office-ui-fabric-react/lib/Persona';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
var reactprops = {};
reactprops.allowPhoneInitials = {};
reactprops.coinProps = {};
reactprops.coinSize = {};
reactprops.hidePersonaDetails = {};
reactprops.imageAlt = {};
reactprops.imageInitials = {};
reactprops.imageShouldFadeIn = {};
reactprops.imageShouldStartVisible = {};
reactprops.imageUrl = {};
reactprops.initialsColor = {};
reactprops.onPhotoLoadingStateChange = onlyAureliaBound;
reactprops.onRenderCoin = onlyAureliaBound;
reactprops.onRenderInitials = onlyAureliaBound;
reactprops.optionalText = {};
reactprops.presence = {};
reactprops.secondaryText = {};
reactprops.showInitialsUntilImageLoads = {};
reactprops.showSecondaryText = {};
reactprops.showUnknownPersonaCoin = {};
reactprops.size = {};
reactprops.tertiaryText = {};
reactprops.text = {};
reactprops.className = {};
reactprops.onRenderOptionalText = onlyAureliaBound;
reactprops.onRenderPrimaryText = onlyAureliaBound;
reactprops.onRenderSecondaryText = onlyAureliaBound;
reactprops.onRenderTertiaryText = onlyAureliaBound;
var DuPersona = /** @class */ (function (_super) {
    __extends(DuPersona, _super);
    function DuPersona(element) {
        var _this = _super.call(this, element) || this;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuPersona.prototype.attached = function () {
        this.renderReact(Persona, this.createState(reactprops));
    };
    DuPersona = __decorate([
        inject(Element),
        customElement('du-persona')
    ], DuPersona);
    return DuPersona;
}(DuReactWrapperBaseClass));
export { DuPersona };
addProperties(DuPersona, reactprops);
