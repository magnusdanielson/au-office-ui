// import { Container } from 'aurelia-dependency-injection';
// import { MyAbstractBaseService } from './resources/base-service';
// import { MyStandardService } from './resources/standard-service';

// export class MyTestPluginConfiguration {
//   private serviceType: { new (...args: any[]): MyAbstractBaseService } = MyStandardService;

//   public customService(type: { new (...args: any[]): MyAbstractBaseService }) {
//     this.serviceType = type;
//   }

//   /**
//    * Applies the configuration.
//    */
//   public apply(container: Container) {
//     const service = container.get(this.serviceType);
//     container.registerInstance(MyAbstractBaseService, service);
//   }
// }