System.register(["aurelia-framework", "office-ui-fabric-react/lib/TeachingBubble", "../../wrapper/DuReactWrapperBaseClass", "../../wrapper/Utilities", "../../wrapper/ReactWrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, TeachingBubble_1, DuReactWrapperBaseClass_1, Utilities_1, ReactWrapper_1, reactprops, DuTeachingBubbleContent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (TeachingBubble_1_1) {
                TeachingBubble_1 = TeachingBubble_1_1;
            },
            function (DuReactWrapperBaseClass_1_1) {
                DuReactWrapperBaseClass_1 = DuReactWrapperBaseClass_1_1;
            },
            function (Utilities_1_1) {
                Utilities_1 = Utilities_1_1;
            },
            function (ReactWrapper_1_1) {
                ReactWrapper_1 = ReactWrapper_1_1;
            }
        ],
        execute: function () {
            reactprops = {};
            reactprops.calloutProps = {};
            reactprops.hasCloseIcon = {};
            reactprops.hasCondensedHeadline = {};
            reactprops.hasSmallHeadline = {};
            reactprops.headline = {};
            reactprops.isWide = {};
            reactprops.onDismiss = ReactWrapper_1.onlyAureliaBound;
            reactprops.primaryButtonProps = {};
            reactprops.secondaryButtonProps = {};
            reactprops.targetElement = {};
            reactprops.illustrationImage = {};
            DuTeachingBubbleContent = /** @class */ (function (_super) {
                __extends(DuTeachingBubbleContent, _super);
                function DuTeachingBubbleContent(element) {
                    var _this = _super.call(this, element) || this;
                    _this.hiddenIsHidden = true;
                    _this.hiddenName = 'hidden';
                    return _this;
                }
                DuTeachingBubbleContent.prototype.attached = function () {
                    this.renderReact(TeachingBubble_1.TeachingBubbleContent, this.createState(reactprops));
                };
                DuTeachingBubbleContent = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-teaching-bubble-content')
                ], DuTeachingBubbleContent);
                return DuTeachingBubbleContent;
            }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
            exports_1("DuTeachingBubbleContent", DuTeachingBubbleContent);
            Utilities_1.addProperties(DuTeachingBubbleContent, reactprops);
        }
    };
});
