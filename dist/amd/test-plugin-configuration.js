define(["require", "exports", "./resources/base-service", "./resources/standard-service"], function (require, exports, base_service_1, standard_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
