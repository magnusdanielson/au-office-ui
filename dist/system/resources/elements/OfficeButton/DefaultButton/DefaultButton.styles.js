System.register(["@uifabric/styling", "@uifabric/utilities", "../office-basebutton.styles", "../SplitButton/splitbutton.styles", "../button.theme"], function (exports_1, context_1) {
    "use strict";
    var styling_1, utilities_1, office_basebutton_styles_1, splitbutton_styles_1, button_theme_1, DEFAULT_BUTTON_HEIGHT, DEFAULT_BUTTON_MINWIDTH, getStyles;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styling_1_1) {
                styling_1 = styling_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            },
            function (office_basebutton_styles_1_1) {
                office_basebutton_styles_1 = office_basebutton_styles_1_1;
            },
            function (splitbutton_styles_1_1) {
                splitbutton_styles_1 = splitbutton_styles_1_1;
            },
            function (button_theme_1_1) {
                button_theme_1 = button_theme_1_1;
            }
        ],
        execute: function () {
            DEFAULT_BUTTON_HEIGHT = '32px';
            DEFAULT_BUTTON_MINWIDTH = '80px';
            exports_1("getStyles", getStyles = utilities_1.memoizeFunction(function (theme, customStyles, primary) {
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
            }));
        }
    };
});
