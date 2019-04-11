System.register(["react", "react-dom", "./DuReactWrapperBaseClass", "./ReactStateWrapperNoChildren"], function (exports_1, context_1) {
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
    var React, ReactDom, DuReactWrapperBaseClass_1, ReactStateWrapperNoChildren_1, DuReactWrapperNoChildren;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (ReactDom_1) {
                ReactDom = ReactDom_1;
            },
            function (DuReactWrapperBaseClass_1_1) {
                DuReactWrapperBaseClass_1 = DuReactWrapperBaseClass_1_1;
            },
            function (ReactStateWrapperNoChildren_1_1) {
                ReactStateWrapperNoChildren_1 = ReactStateWrapperNoChildren_1_1;
            }
        ],
        execute: function () {
            // Den här filen har endast "ReactStateWrapper" som unik referens
            DuReactWrapperNoChildren = /** @class */ (function (_super) {
                __extends(DuReactWrapperNoChildren, _super);
                function DuReactWrapperNoChildren() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                DuReactWrapperNoChildren.prototype.renderReact = function (reactClass, a) {
                    ReactDom.unmountComponentAtNode(this.element);
                    this.container = this.element.querySelector('.au-react-root');
                    if (this.container != null) {
                        this.container.remove();
                    }
                    this.container = document.createElement('span');
                    this.container.setAttribute('class', 'au-react-root');
                    this.element.appendChild(this.container);
                    a.aureliaHost = this;
                    a.reactClass = reactClass;
                    // reactElement is the DOM element;
                    var reactElement = React.createElement(ReactStateWrapperNoChildren_1.ReactStateWrapperNoChildren, a);
                    // reactComponent is THE React Component
                    var reactComponent = ReactDom.render(reactElement, this.container
                    // , () =>
                    // {
                    //   this.log.debug('DuReactWrapperBaseClass React callback render complete');
                    // }
                    );
                    this.reactComponent = reactComponent;
                };
                return DuReactWrapperNoChildren;
            }(DuReactWrapperBaseClass_1.DuReactWrapperBaseClass));
            exports_1("DuReactWrapperNoChildren", DuReactWrapperNoChildren);
        }
    };
});
