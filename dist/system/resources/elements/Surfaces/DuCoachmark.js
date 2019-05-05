System.register(["office-ui-fabric-react/lib/Coachmark", "aurelia-framework", "../../wrapper/ReactWrapper", "office-ui-fabric-react/lib/TeachingBubble", "react", "react-dom", "../../wrapper/DuReactWrapperBaseClass", "../../wrapper/Utilities", "../../wrapper/ReactStateWrapper", "../../wrapper/ReactStateWrapperNoChildren"], function (exports_1, context_1) {
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
    var Coachmark_1, aurelia_framework_1, ReactWrapper_1, TeachingBubble_1, React, ReactDom, DuReactWrapperBaseClass_1, Utilities_1, ReactStateWrapper_1, ReactStateWrapperNoChildren_1, reactprops, DuCoachmark;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Coachmark_1_1) {
                Coachmark_1 = Coachmark_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (ReactWrapper_1_1) {
                ReactWrapper_1 = ReactWrapper_1_1;
            },
            function (TeachingBubble_1_1) {
                TeachingBubble_1 = TeachingBubble_1_1;
            },
            function (React_1) {
                React = React_1;
            },
            function (ReactDom_1) {
                ReactDom = ReactDom_1;
            },
            function (DuReactWrapperBaseClass_1_1) {
                DuReactWrapperBaseClass_1 = DuReactWrapperBaseClass_1_1;
            },
            function (Utilities_1_1) {
                Utilities_1 = Utilities_1_1;
            },
            function (ReactStateWrapper_1_1) {
                ReactStateWrapper_1 = ReactStateWrapper_1_1;
            },
            function (ReactStateWrapperNoChildren_1_1) {
                ReactStateWrapperNoChildren_1 = ReactStateWrapperNoChildren_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
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
            DuCoachmark = /** @class */ (function (_super) {
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
                    var reactTeachingBubbleElement = React.createElement(ReactStateWrapper_1.ReactStateWrapper, this.teachingBubbleContent);
                    var a = this.createState(reactprops);
                    a.aureliaHost = this;
                    a.reactClass = Coachmark_1.Coachmark;
                    var reactElement = React.createElement(ReactStateWrapperNoChildren_1.ReactStateWrapperNoChildren, a, reactTeachingBubbleElement);
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
            }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
            exports_1("DuCoachmark", DuCoachmark);
            Utilities_1.addProperties(DuCoachmark, reactprops);
        }
    };
});
