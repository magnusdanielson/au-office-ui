import { IButtonStyles } from '../button.types';
import { ITheme, concatStyleSets, FontWeights } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getStyles as getBaseButtonStyles } from '../office-basebutton.styles';
import { getStyles as getSplitButtonStyles } from '../SplitButton/splitbutton.styles';

import { primaryStyles, standardStyles } from '../button.theme';

const DEFAULT_BUTTON_HEIGHT = '32px';
const DEFAULT_BUTTON_MINWIDTH = '80px';

export const getStyles = memoizeFunction(
  (theme: ITheme, customStyles?: IButtonStyles, primary?: boolean): IButtonStyles => {
    const baseButtonStyles: IButtonStyles = getBaseButtonStyles(theme);
    const splitButtonStyles: IButtonStyles = getSplitButtonStyles(theme);
    const defaultButtonStyles: IButtonStyles = {
      root: {
        minWidth: DEFAULT_BUTTON_MINWIDTH,
        height: DEFAULT_BUTTON_HEIGHT
      },
      label: {
        fontWeight: FontWeights.semibold
      }
    };

    return concatStyleSets(
      baseButtonStyles,
      defaultButtonStyles,
      primary ? primaryStyles(theme) : standardStyles(theme),
      splitButtonStyles,
      customStyles
    )!;
  }
);
