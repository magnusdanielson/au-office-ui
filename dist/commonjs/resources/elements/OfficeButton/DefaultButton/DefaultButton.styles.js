"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styling_1 = require("@uifabric/styling");
var utilities_1 = require("@uifabric/utilities");
var office_basebutton_styles_1 = require("../office-basebutton.styles");
var splitbutton_styles_1 = require("../SplitButton/splitbutton.styles");
var button_theme_1 = require("../button.theme");
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
exports.getStyles = utilities_1.memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = office_basebutton_styles_1.getStyles(theme);
    var splitButtonStyles = splitbutton_styles_1.getStyles(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT
        },
        label: {
            fontWeight: styling_1.FontWeights.semibold
        }
    };
    return styling_1.concatStyleSets(baseButtonStyles, defaultButtonStyles, primary ? button_theme_1.primaryStyles(theme) : button_theme_1.standardStyles(theme), splitButtonStyles, customStyles);
});
