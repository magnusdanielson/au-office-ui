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
import { processContent, customElement, inject, noView } from 'aurelia-framework';
import { Callout } from 'office-ui-fabric-react/lib/Callout';
import { renderReact, addProperties, ReactWrapper, onlyAureliaBound, elementWrapper } from '../wrapper/ReactWrapper';
// IMPORTANT
// any function defined here will be called with _this as first parameter
// following paramters are from the event
// _this refers to the DuCheckbox class with all properties added
var reactprops = {};
reactprops.backgroundColor = {};
reactprops.beakWidth = {};
reactprops.className = {};
reactprops.bounds = {};
reactprops.calloutMaxHeight = {};
reactprops.calloutMaxWidth = {};
reactprops.calloutWidth = {};
reactprops.coverTarget = {};
reactprops.directionalHint = {};
reactprops.directionalHintFixed = {};
reactprops.doNotLayer = {};
reactprops.finalHeight = {};
reactprops.gapSpace = {};
reactprops.hidden = {};
reactprops.hideOverflow = {};
reactprops.isBeakVisible = {};
reactprops.layerProps = {};
reactprops.minPagePadding = {};
reactprops.onDismiss = onlyAureliaBound;
reactprops.onLayerMounted = onlyAureliaBound;
reactprops.onPositioned = onlyAureliaBound;
reactprops.onScroll = onlyAureliaBound;
reactprops.preventDismissOnLostFocus = {};
reactprops.preventDismissOnScroll = {};
reactprops.setInitialFocus = {};
reactprops.target = {};
//@ts-ignore
var DuCallout = /** @class */ (function (_super) {
    __extends(DuCallout, _super);
    function DuCallout(element) {
        return _super.call(this, element) || this;
    }
    DuCallout.prototype.render = function () {
        renderReact.bind(this)(Callout, reactprops);
    };
    DuCallout = __decorate([
        processContent(function (compiler, resources, node, instruction) {
            return elementWrapper(node, '.ms-Callout-main');
        }),
        noView(),
        inject(Element),
        customElement('du-callout')
    ], DuCallout);
    return DuCallout;
}(ReactWrapper));
export { DuCallout };
addProperties(DuCallout, reactprops);
