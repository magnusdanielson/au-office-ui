// import * as ReactDom from 'react-dom';
// import { LogManager, bindable, bindingMode } from 'aurelia-framework';
// import { Logger } from 'aurelia-logging';
// import { camelToKebab } from './Utilities';
// import { IDuReactWrapper } from './IDuReactWrapper';
// export abstract class ReactWrapper  implements IDuReactWrapper
// {
//     public element: HTMLElement;
//     public reactComponent;
//     public parent: any;
//     public log: Logger;
//     constructor(element) {
//         this.element = element;
//         this.log = LogManager.getLogger('reacthost');
//     }
//     public abstract render();
//     public bind(bindingContext) {
//         if (bindingContext !== null) {
//             this.parent = bindingContext;
//         }
//         this.render();
//     }
//     public unbind() {
//         ReactDom.unmountComponentAtNode(this.element);
//     }
//     public createState(reactprops: any): any {
//         var reactpropNames = Object.getOwnPropertyNames(reactprops);
//         var a = {};
//         for (let i = 0; i < reactpropNames.length; i++) {
//             let renderPropName = reactpropNames[i];
//             if (typeof reactprops[renderPropName] === 'function') {
//                 //this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
//                 // function is aurelia bound, make sure to call it
//                 //this.log.debug('typeof this[renderPropName] = ' + typeof this[renderPropName] );
//                 if (typeof this[renderPropName] === 'function') {
//                     a[renderPropName] = (...newValue: any[]) => {
//                         //this.log.debug('bound function, go aurelia');
//                         return this[renderPropName](newValue);
//                     };
//                 } else {
//                     let funcNames = [
//                         'defaultOnChangeEvent',
//                         'defaultActionEvent',
//                         'onlyAureliaBound'
//                     ];
//                     if (!funcNames.includes(reactprops[renderPropName].name)) {
//                         a[renderPropName] = (...newValue: any[]) => {
//                             //this.log.debug('run func from reactprops');
//                             return reactprops[renderPropName](this, newValue);
//                         };
//                     }
//                 }
//             } else {
//                 if (typeof this[renderPropName] !== 'undefined') {
//                     //this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
//                     a[renderPropName] = this[renderPropName];
//                 }
//             }
//         }
//         return a;
//     }
// }
// export function defaultActionEvent() {}
// export function defaultOnChangeEvent() {}
// export function onlyAureliaBound() {}
// export function addProperties(aureliaClass: any, reactprops: any) {
//     var reactpropNames = Object.getOwnPropertyNames(reactprops);
//     for (let i = 0; i < reactpropNames.length; i++) {
//         let renderPropName = reactpropNames[i];
//         bindable({
//             name: renderPropName,
//             attribute: camelToKebab(renderPropName),
//             changeHandler: 'render',
//             defaultBindingMode: bindingMode.twoWay
//         })(aureliaClass);
//     }
// }
// // export function renderReact(reactClass: any, reactprops: any) {
// //     // this is bound to Aurelia class
// //     this.container = this.element.querySelector('.au-react-root');
// //     if (this.container == null) {
// //         this.container = document.createElement('span');
// //         this.container.setAttribute('class', 'au-react-root');
// //         this.element.appendChild(this.container);
// //     }
// //     var reactpropNames = Object.getOwnPropertyNames(reactprops);
// //     var a = {};
// //     for (let i = 0; i < reactpropNames.length; i++) {
// //         let renderPropName = reactpropNames[i];
// //         if (typeof reactprops[renderPropName] === 'function') {
// //             //this.log.debug('typeof reactprops[renderPropName] ' + renderPropName + ' is function');
// //             // function is aurelia bound, make sure to call it
// //             //this.log.debug('typeof this[renderPropName] = ' + typeof this[renderPropName] );
// //             if (typeof this[renderPropName] === 'function') {
// //                 a[renderPropName] = (...newValue: any[]) => {
// //                     //this.log.debug('bound function, go aurelia');
// //                     return this[renderPropName](newValue);
// //                 };
// //             } else {
// //                 let funcNames = [
// //                     'defaultOnChangeEvent',
// //                     'defaultActionEvent',
// //                     'onlyAureliaBound'
// //                 ];
// //                 if (!funcNames.includes(reactprops[renderPropName].name)) {
// //                     a[renderPropName] = (...newValue: any[]) => {
// //                         //this.log.debug('run func from reactprops');
// //                         return reactprops[renderPropName](this, newValue);
// //                     };
// //                 }
// //             }
// //         } else {
// //             if (typeof this[renderPropName] !== 'undefined') {
// //                 //this.log.debug('adding ' + renderPropName + ' with value ' +  this[renderPropName]);
// //                 a[renderPropName] = this[renderPropName];
// //             }
// //         }
// //     }
// //     const reactElement = React.createElement(reactClass, a);
// //     this.reactComponent = ReactDom.render(reactElement, this.container);
// // }
