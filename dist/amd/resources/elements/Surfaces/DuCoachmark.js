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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/Coachmark", "../../wrapper/DuReactWrapperBaseClass", "../../wrapper/Utilities", "../../wrapper/ReactWrapper"], function (require, exports, aurelia_framework_1, Coachmark_1, DuReactWrapperBaseClass_1, Utilities_1, ReactWrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var reactprops = {};
    reactprops.beaconColorOne = {};
    reactprops.beaconColorTwo = {};
    reactprops.className = {};
    reactprops.color = {};
    reactprops.delayBeforeCoachmarkAnimation = {};
    reactprops.delayBeforeMouseOpen = {};
    reactprops.isCollapsed = {};
    reactprops.isPositionForced = {};
    reactprops.mouseProximityOffset = {};
    reactprops.target = {};
    reactprops.onAnimationOpenEnd = ReactWrapper_1.onlyAureliaBound;
    reactprops.onAnimationOpenStart = ReactWrapper_1.onlyAureliaBound;
    reactprops.onDismiss = ReactWrapper_1.onlyAureliaBound;
    reactprops.onMouseMove = ReactWrapper_1.onlyAureliaBound;
    reactprops.positioningContainerProps = {};
    reactprops.preventDismissOnLostFocus = {};
    reactprops.preventFocusOnMount = {};
    var DuCoachmark = /** @class */ (function (_super) {
        __extends(DuCoachmark, _super);
        function DuCoachmark(element) {
            var _this = _super.call(this, element) || this;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuCoachmark.prototype.attached = function () {
            this.renderReact(Coachmark_1.Coachmark, this.createState(reactprops));
        };
        DuCoachmark = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-coachmark')
        ], DuCoachmark);
        return DuCoachmark;
    }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
    exports.DuCoachmark = DuCoachmark;
    Utilities_1.addProperties(DuCoachmark, reactprops);
});
