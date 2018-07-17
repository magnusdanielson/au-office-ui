"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_service_1 = require("./resources/base-service");
var standard_service_1 = require("./resources/standard-service");
var MyTestPluginConfiguration = /** @class */ (function () {
    function MyTestPluginConfiguration() {
        this.serviceType = standard_service_1.MyStandardService;
    }
    MyTestPluginConfiguration.prototype.customService = function (type) {
        this.serviceType = type;
    };
    /**
     * Applies the configuration.
     */
    MyTestPluginConfiguration.prototype.apply = function (container) {
        var service = container.get(this.serviceType);
        container.registerInstance(base_service_1.MyAbstractBaseService, service);
    };
    return MyTestPluginConfiguration;
}());
exports.MyTestPluginConfiguration = MyTestPluginConfiguration;
