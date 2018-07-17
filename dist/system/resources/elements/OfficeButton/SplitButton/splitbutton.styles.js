System.register(["@uifabric/styling", "@uifabric/utilities"], function (exports_1, context_1) {
    "use strict";
    var styling_1, utilities_1, getStyles;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (styling_1_1) {
                styling_1 = styling_1_1;
            },
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }
        ],
        execute: function () {
            exports_1("getStyles", getStyles = utilities_1.memoizeFunction(function (theme, customStyles) {
                var buttonHighContrastFocus = {
                    left: -2,
                    top: -2,
                    bottom: -2,
                    right: -2,
                    border: 'none'
                };
                var splitButtonStyles = {
                    splitButtonContainer: [
                        styling_1.getFocusStyle(theme, 0, 'relative', buttonHighContrastFocus),
                        {
                            display: 'inline-flex'
                        }
                    ],
                    splitButtonContainerFocused: {
                        outline: 'none!important'
                    },
                    splitButtonMenuButton: {
                        padding: 6,
                        height: 'auto',
                        boxSizing: 'border-box',
                        border: 0,
                        borderRadius: 0,
                        outline: 'transparent',
                        userSelect: 'none',
                        display: 'inline-block',
                        textDecoration: 'none',
                        textAlign: 'center',
                        cursor: 'pointer',
                        verticalAlign: 'top',
                        width: 32,
                        marginLeft: -1
                    },
                    splitButtonDivider: {
                        position: 'absolute',
                        width: 1,
                        right: 31,
                        top: 8,
                        bottom: 8
                    },
                    splitButtonMenuButtonDisabled: {
                        pointerEvents: 'none',
                        selectors: {
                            ':hover': {
                                cursor: 'default'
                            }
                        }
                    },
                    splitButtonFlexContainer: {
                        display: 'flex',
                        height: '100%',
                        flexWrap: 'nowrap',
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    splitButtonContainerDisabled: {
                        outline: 'none',
                        border: 'none'
                    }
                };
                return styling_1.concatStyleSets(splitButtonStyles, customStyles);
            }));
        }
    };
});
