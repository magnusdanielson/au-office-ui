System.register(["react", "./ReactStateWrapper"], function (exports_1, context_1) {
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
    var React, ReactStateWrapper_1, ReactStateWrapperNoChildren;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactStateWrapper_1_1) {
                ReactStateWrapper_1 = ReactStateWrapper_1_1;
            }
        ],
        execute: function () {
            ReactStateWrapperNoChildren = /** @class */ (function (_super) {
                __extends(ReactStateWrapperNoChildren, _super);
                function ReactStateWrapperNoChildren() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                ReactStateWrapperNoChildren.prototype.render = function () {
                    if (this.aureliaHost.isHidden()) {
                        return null;
                    }
                    var com = React.createElement(this.reactClass, this.state);
                    return com;
                };
                return ReactStateWrapperNoChildren;
            }(ReactStateWrapper_1.ReactStateWrapper));
            exports_1("ReactStateWrapperNoChildren", ReactStateWrapperNoChildren);
        }
    };
});
