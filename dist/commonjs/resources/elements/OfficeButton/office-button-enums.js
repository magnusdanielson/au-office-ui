"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonEnabled;
(function (ButtonEnabled) {
    ButtonEnabled[ButtonEnabled["enabled"] = 0] = "enabled";
    ButtonEnabled[ButtonEnabled["disabled"] = 1] = "disabled";
})(ButtonEnabled = exports.ButtonEnabled || (exports.ButtonEnabled = {}));
var ButtonChecked;
(function (ButtonChecked) {
    ButtonChecked[ButtonChecked["unchecked"] = 0] = "unchecked";
    ButtonChecked[ButtonChecked["checked"] = 1] = "checked";
})(ButtonChecked = exports.ButtonChecked || (exports.ButtonChecked = {}));
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["default"] = 1] = "default";
    ButtonType[ButtonType["primary"] = 2] = "primary";
    ButtonType[ButtonType["command"] = 3] = "command";
    ButtonType[ButtonType["compound"] = 4] = "compound";
    ButtonType[ButtonType["hero"] = 5] = "hero";
    ButtonType[ButtonType["icon"] = 6] = "icon";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
