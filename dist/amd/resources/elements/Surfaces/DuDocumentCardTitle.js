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
define(["require", "exports", "aurelia-framework", "office-ui-fabric-react/lib/DocumentCard", "@dunite/au-react-wrapper"], function (require, exports, aurelia_framework_1, DocumentCard_1, au_react_wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // IMPORTANT
    // any function defined here will be called with _this as first parameter
    // following parameters are from the event
    // _this refers to the Aurelia class with all properties added
    var reactprops = {};
    reactprops.shouldTruncate = {};
    reactprops.showAsSecondaryTitle = {};
    reactprops.title = {};
    var DuDocumentCardTitle = /** @class */ (function (_super) {
        __extends(DuDocumentCardTitle, _super);
        function DuDocumentCardTitle(element) {
            var _this = _super.call(this, element) || this;
            _this.hidden = false;
            _this.hiddenIsHidden = true;
            _this.hiddenName = 'hidden';
            return _this;
        }
        DuDocumentCardTitle.prototype.attached = function () {
            this.renderReact(DocumentCard_1.DocumentCardTitle, this.createState(reactprops));
        };
        DuDocumentCardTitle = __decorate([
            aurelia_framework_1.inject(Element),
            aurelia_framework_1.customElement('du-document-card-title')
        ], DuDocumentCardTitle);
        return DuDocumentCardTitle;
    }(au_react_wrapper_1.AuReactStateWrapper));
    exports.DuDocumentCardTitle = DuDocumentCardTitle;
    au_react_wrapper_1.addPropertiesState(DuDocumentCardTitle, reactprops);
});
