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
var base_service_1 = require("./base-service");
var MySpecialService = /** @class */ (function (_super) {
    __extends(MySpecialService, _super);
    function MySpecialService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MySpecialService.prototype.doServiceThings = function () {
        console.log('services can also do special things');
    };
    return MySpecialService;
}(base_service_1.MyAbstractBaseService));
exports.MySpecialService = MySpecialService;
