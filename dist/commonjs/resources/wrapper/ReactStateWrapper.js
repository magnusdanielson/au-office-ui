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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactStateWrapper = /** @class */ (function (_super) {
    __extends(ReactStateWrapper, _super);
    function ReactStateWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.state = props;
        _this.inneridReact = Date.now();
        _this.aureliaHost = props.aureliaHost;
        _this.reactClass = props.reactClass;
        return _this;
    }
    ReactStateWrapper.prototype.componentWillUnmount = function () {
        if (typeof this.aureliaHost.reactComponentWillUnmount === 'function') {
            this.aureliaHost.reactComponentWillUnmount();
        }
    };
    ReactStateWrapper.prototype.componentDidMount = function () {
        if (typeof this.aureliaHost.reactComponentDidMount === 'function') {
            this.aureliaHost.reactComponentDidMount();
        }
    };
    ReactStateWrapper.prototype.render = function () {
        var _this = this;
        if (this.aureliaHost.isHidden()) {
            return null;
        }
        var com = React.createElement(this.reactClass, this.state, React.createElement('span', {
            id: this.inneridReact,
            ref: function (newParent) {
                if (newParent == null) {
                    newParent = document.getElementById(_this.inneridReact.toString());
                    if (newParent == null) {
                        return;
                    }
                }
                if (_this.aureliaHost.isHidden()) {
                    return;
                }
                var auelement = document.getElementById(_this.aureliaHost.inneridAurelia);
                if (auelement == null) {
                    return;
                }
                while (auelement.childNodes.length > 0) {
                    newParent.appendChild(auelement.childNodes[0]);
                }
            }
        }));
        return com;
    };
    return ReactStateWrapper;
}(React.Component));
exports.ReactStateWrapper = ReactStateWrapper;
