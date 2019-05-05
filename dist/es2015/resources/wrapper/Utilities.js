// import { bindable, bindingMode } from 'aurelia-framework';
// export function camelToKebab(str) {
//     // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
//     //@ts-ignore
//     return str.replace(/([a-zA-Z])([A-Z][a-z])/g, (match, before, after) => {
//         return `${before.toLowerCase()}-${after.toLowerCase()}`;
//     }).toLowerCase();
// }
// export function addProperties(aureliaClass: any, reactprops: any) {
//     var reactpropNames = Object.getOwnPropertyNames(reactprops);
//     for (let i = 0; i < reactpropNames.length; i++) {
//       let renderPropName = reactpropNames[i];
//       bindable({
//         name: renderPropName,
//         attribute: camelToKebab(renderPropName),
//         defaultBindingMode: bindingMode.twoWay
//       })(aureliaClass);
//     }
//   }
