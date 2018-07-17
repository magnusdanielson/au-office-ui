System.register([], function (exports_1, context_1) {
    "use strict";
    var ButtonEnabled, ButtonChecked, ButtonType;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (ButtonEnabled) {
                ButtonEnabled[ButtonEnabled["enabled"] = 0] = "enabled";
                ButtonEnabled[ButtonEnabled["disabled"] = 1] = "disabled";
            })(ButtonEnabled || (ButtonEnabled = {}));
            exports_1("ButtonEnabled", ButtonEnabled);
            (function (ButtonChecked) {
                ButtonChecked[ButtonChecked["unchecked"] = 0] = "unchecked";
                ButtonChecked[ButtonChecked["checked"] = 1] = "checked";
            })(ButtonChecked || (ButtonChecked = {}));
            exports_1("ButtonChecked", ButtonChecked);
            (function (ButtonType) {
                ButtonType[ButtonType["default"] = 1] = "default";
                ButtonType[ButtonType["primary"] = 2] = "primary";
                ButtonType[ButtonType["command"] = 3] = "command";
                ButtonType[ButtonType["compound"] = 4] = "compound";
                ButtonType[ButtonType["hero"] = 5] = "hero";
                ButtonType[ButtonType["icon"] = 6] = "icon";
            })(ButtonType || (ButtonType = {}));
            exports_1("ButtonType", ButtonType);
        }
    };
});
