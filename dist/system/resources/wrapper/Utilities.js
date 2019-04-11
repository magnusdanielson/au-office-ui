System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    function camelToKebab(str) {
        // Matches all places where a two upper case chars followed by a lower case char are and split them with an hyphen
        //@ts-ignore
        return str.replace(/([a-zA-Z])([A-Z][a-z])/g, function (match, before, after) {
            return before.toLowerCase() + "-" + after.toLowerCase();
        }).toLowerCase();
    }
    exports_1("camelToKebab", camelToKebab);
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
    exports_1("addProperties", addProperties);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});
