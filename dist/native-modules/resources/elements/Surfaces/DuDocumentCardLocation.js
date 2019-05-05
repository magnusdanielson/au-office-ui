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
import { DocumentCardLocation } from 'office-ui-fabric-react/lib/DocumentCard';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';
// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
var reactprops = {};
reactprops.ariaLabel = {};
reactprops.location = {};
reactprops.locationHref = {};
reactprops.onClick = onlyAureliaBound;
var DuDocumentCardLocation = /** @class */ (function (_super) {
    __extends(DuDocumentCardLocation, _super);
    function DuDocumentCardLocation(element) {
        var _this = _super.call(this, element) || this;
        _this.hidden = false;
        _this.hiddenIsHidden = true;
        _this.hiddenName = 'hidden';
        return _this;
    }
    DuDocumentCardLocation.prototype.attached = function () {
        this.renderReact(DocumentCardLocation, this.createState(reactprops));
    };
    DuDocumentCardLocation = __decorate([
        inject(Element),
        customElement('du-document-card-location')
    ], DuDocumentCardLocation);
    return DuDocumentCardLocation;
}(AuReactStateWrapper));
export { DuDocumentCardLocation };
addPropertiesState(DocumentCardLocation, reactprops);
