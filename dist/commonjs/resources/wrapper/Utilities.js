"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function camelToKebab(str) {
    // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
    //@ts-ignore
    return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
        return before.toLowerCase() + "-" + after.toLowerCase();
    }).toLowerCase();
}
exports.camelToKebab = camelToKebab;
function addProperties(aureliaClass, reactprops) {
    var reactpropNames = Object.getOwnPropertyNames(reactprops);
    for (var i = 0; i < reactpropNames.length; i++) {
        var renderPropName = reactpropNames[i];
        aurelia_framework_1.bindable({
            name: renderPropName,
            attribute: camelToKebab(renderPropName),
            defaultBindingMode: aurelia_framework_1.bindingMode.twoWay
        })(aureliaClass);
    }
}
exports.addProperties = addProperties;
