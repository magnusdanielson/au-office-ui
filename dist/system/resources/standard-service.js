System.register(["./base-service"], function (exports_1, context_1) {
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
    var base_service_1, MyStandardService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (base_service_1_1) {
                base_service_1 = base_service_1_1;
            }
        ],
        execute: function () {
            MyStandardService = /** @class */ (function (_super) {
                __extends(MyStandardService, _super);
                function MyStandardService() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                MyStandardService.prototype.doServiceThings = function () {
                    console.log('this service does nothing special');
                };
                return MyStandardService;
            }(base_service_1.MyAbstractBaseService));
            exports_1("MyStandardService", MyStandardService);
        }
    };
});
