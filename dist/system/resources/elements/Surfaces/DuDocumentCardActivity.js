System.register(["aurelia-framework", "office-ui-fabric-react/lib/DocumentCard", "../../wrapper/DuReactWrapperBaseClass", "../../wrapper/Utilities"], function (exports_1, context_1) {
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
    var aurelia_framework_1, DocumentCard_1, DuReactWrapperBaseClass_1, Utilities_1, reactprops, DuDocumentCardActivity;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (DocumentCard_1_1) {
                DocumentCard_1 = DocumentCard_1_1;
            },
            function (DuReactWrapperBaseClass_1_1) {
                DuReactWrapperBaseClass_1 = DuReactWrapperBaseClass_1_1;
            },
            function (Utilities_1_1) {
                Utilities_1 = Utilities_1_1;
            }
        ],
        execute: function () {
            // IMPORTANT
            // any function defined here will be called with _this as first parameter
            // following parameters are from the event
            // _this refers to the Aurelia class with all properties added
            reactprops = {};
            reactprops.activity = {};
            reactprops.people = {};
            DuDocumentCardActivity = /** @class */ (function (_super) {
                __extends(DuDocumentCardActivity, _super);
                function DuDocumentCardActivity(element) {
                    var _this = _super.call(this, element) || this;
                    _this.hidden = false;
                    _this.hiddenIsHidden = true;
                    _this.hiddenName = 'hidden';
                    return _this;
                }
                DuDocumentCardActivity.prototype.attached = function () {
                    this.renderReact(DocumentCard_1.DocumentCardActivity, this.createState(reactprops));
                };
                DuDocumentCardActivity = __decorate([
                    aurelia_framework_1.inject(Element),
                    aurelia_framework_1.customElement('du-document-card-activity')
                ], DuDocumentCardActivity);
                return DuDocumentCardActivity;
            }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
            exports_1("DuDocumentCardActivity", DuDocumentCardActivity);
            Utilities_1.addProperties(DuDocumentCardActivity, reactprops);
        }
    };
});
