System.register([], function (exports_1, context_1) {
    "use strict";
    var ElementType, ButtonType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (ElementType) {
                /** <button> element. */
                ElementType[ElementType["button"] = 0] = "button";
                /** <a> element. */
                ElementType[ElementType["anchor"] = 1] = "anchor";
            })(ElementType || (ElementType = {}));
            exports_1("ElementType", ElementType);
            (function (ButtonType) {
                ButtonType[ButtonType["normal"] = 0] = "normal";
                ButtonType[ButtonType["primary"] = 1] = "primary";
                ButtonType[ButtonType["hero"] = 2] = "hero";
                ButtonType[ButtonType["compound"] = 3] = "compound";
                ButtonType[ButtonType["command"] = 4] = "command";
                ButtonType[ButtonType["icon"] = 5] = "icon";
                ButtonType[ButtonType["default"] = 6] = "default";
            })(ButtonType || (ButtonType = {}));
            exports_1("ButtonType", ButtonType);
        }
    };
});
