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
import { MessageBar } from 'office-ui-fabric-react/lib/MessageBar';
import { renderReact, addProperties, ReactWrapper, elementWrapper } from '../wrapper/ReactWrapper';
var reactprops = {};
reactprops.className = {};
reactprops.isMultiline = {};
reactprops.messageBarType = {};
reactprops.onDismiss = function () { };
reactprops.dismissButtonAriaLabel = {};
reactprops.truncated = {};
reactprops.overflowButtonAriaLabel = {};
reactprops.actions = {};
//@ts-ignore
var DuMessageBar = /** @class */ (function (_super) {
    __extends(DuMessageBar, _super);
    function DuMessageBar(element) {
        return _super.call(this, element) || this;
    }
    DuMessageBar.prototype.render = function () {
        renderReact.bind(this)(MessageBar, reactprops);
    };
    DuMessageBar = __decorate([
        processContent(function (compiler, resources, node, instruction) {
            console.log('MessageBar wrapper');
            return elementWrapper(node, '.ms-MessageBar-innerText');
        }),
        noView(),
        inject(Element),
        customElement('du-message-bar')
    ], DuMessageBar);
    return DuMessageBar;
}(ReactWrapper));
export { DuMessageBar };
addProperties(DuMessageBar, reactprops);
