System.register(["./resources/base-service", "./resources/standard-service"], function (exports_1, context_1) {
    "use strict";
    var base_service_1, standard_service_1, MyTestPluginConfiguration;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (base_service_1_1) {
                base_service_1 = base_service_1_1;
            },
            function (standard_service_1_1) {
                standard_service_1 = standard_service_1_1;
            }
        ],
        execute: function () {
            MyTestPluginConfiguration = /** @class */ (function () {
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
            exports_1("MyTestPluginConfiguration", MyTestPluginConfiguration);
        }
    };
});
