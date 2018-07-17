define(["require", "exports", "@uifabric/styling", "@uifabric/utilities", "../office-basebutton.styles", "../SplitButton/splitbutton.styles", "../button.theme"], function (require, exports, styling_1, utilities_1, office_basebutton_styles_1, splitbutton_styles_1, button_theme_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
