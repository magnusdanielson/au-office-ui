import { MyAbstractBaseService } from './resources/base-service';
import { MyStandardService } from './resources/standard-service';
var MyTestPluginConfiguration = /** @class */ (function () {
    function MyTestPluginConfiguration() {
        this.serviceType = MyStandardService;
    }
    MyTestPluginConfiguration.prototype.customService = function (type) {
        this.serviceType = type;
    };
    /**
     * Applies the configuration.
     */
    MyTestPluginConfiguration.prototype.apply = function (container) {
        var service = container.get(this.serviceType);
        container.registerInstance(MyAbstractBaseService, service);
    };
    return MyTestPluginConfiguration;
}());
export { MyTestPluginConfiguration };
