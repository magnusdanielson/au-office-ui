import { concatStyleSets, FontWeights } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getStyles as getBaseButtonStyles } from '../office-basebutton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/splitbutton.styles';
import { primaryStyles, standardStyles } from '../button.theme';
var DEFAULT_BUTTON_HEIGHT = '32px';
var DEFAULT_BUTTON_MINWIDTH = '80px';
export var getStyles = memoizeFunction(function (theme, customStyles, primary) {
    var baseButtonStyles = getBaseButtonStyles(theme);
    var splitButtonStyles = getSplitButtonStyles(theme);
    var defaultButtonStyles = {
        root: {
            minWidth: DEFAULT_BUTTON_MINWIDTH,
            height: DEFAULT_BUTTON_HEIGHT
        },
        label: {
            fontWeight: FontWeights.semibold
        }
    };
    return concatStyleSets(baseButtonStyles, defaultButtonStyles, primary ? primaryStyles(theme) : standardStyles(theme), splitButtonStyles, customStyles);
});
