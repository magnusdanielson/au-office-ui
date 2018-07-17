import { Container } from 'aurelia-dependency-injection';
import { MyAbstractBaseService } from './resources/base-service';
export declare class MyTestPluginConfiguration {
    private serviceType;
    customService(type: {
        new (...args: any[]): MyAbstractBaseService;
    }): void;
    /**
     * Applies the configuration.
     */
    apply(container: Container): void;
}
