"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Coachmark_1 = require("office-ui-fabric-react/lib/Coachmark");
var aurelia_framework_1 = require("aurelia-framework");
var TeachingBubble_1 = require("office-ui-fabric-react/lib/TeachingBubble");
var React = require("react");
var ReactDom = require("react-dom");
var au_react_wrapper_1 = require("@dunite/au-react-wrapper");
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
reactprops.onAnimationOpenEnd = au_react_wrapper_1.onlyAureliaBound;
reactprops.onAnimationOpenStart = au_react_wrapper_1.onlyAureliaBound;
reactprops.onDismiss = au_react_wrapper_1.onlyAureliaBound;
reactprops.onMouseMove = au_react_wrapper_1.onlyAureliaBound;
reactprops.positioningContainerProps = {};
reactprops.preventDismissOnLostFocus = {};
reactprops.preventFocusOnMount = {};
var DuCoachmark = /** @class */ (function (_super) {
    __extends(DuCoachmark, _super);
    function DuCoachmark(element) {
        var _this = _super.call(this, element) || this;
        _this.teachingBubbleElement = {};
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuCoachmark.prototype.attached = function () {
        this.renderReact2(reactprops);
    };
    DuCoachmark.prototype.renderReact2 = function (reactprops) {
        ReactDom.unmountComponentAtNode(this.element);
        // this is bound to Aurelia class
        this.container = this.element.querySelector('.au-react-root');
        if (this.container != null) {
            this.container.remove();
        }
        this.container = document.createElement('span');
        this.container.setAttribute('class', 'au-react-root');
        this.element.appendChild(this.container);
        //@ts-ignore
        this.teachingBubbleContent.aureliaHost = this;
        //@ts-ignore
        this.teachingBubbleContent.reactClass = TeachingBubble_1.TeachingBubbleContent;
        //let reactTeachingBubbleElement = React.createElement(TeachingBubbleContent, this.teachingBubbleContent);
        var reactTeachingBubbleElement = React.createElement(au_react_wrapper_1.ReactStateWrapper, this.teachingBubbleContent);
        var a = this.createState(reactprops);
        a.aureliaHost = this;
        a.reactClass = Coachmark_1.Coachmark;
        var reactElement = React.createElement(au_react_wrapper_1.ReactStateWrapperNoChildren, a, reactTeachingBubbleElement);
        this.reactComponent = ReactDom.render(reactElement, this.container);
    };
    __decorate([
        aurelia_framework_1.bindable()
    ], DuCoachmark.prototype, "teachingBubbleContent", void 0);
    __decorate([
        aurelia_framework_1.bindable()
    ], DuCoachmark.prototype, "hidden", void 0);
    DuCoachmark = __decorate([
        aurelia_framework_1.inject(Element),
        aurelia_framework_1.customElement('du-coachmark')
    ], DuCoachmark);
    return DuCoachmark;
}(au_react_wrapper_1.AuReactStateWrapperNoChildren));
exports.DuCoachmark = DuCoachmark;
au_react_wrapper_1.addPropertiesState(DuCoachmark, reactprops);
