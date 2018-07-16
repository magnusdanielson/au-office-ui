import {computedFrom, bindable} from 'aurelia-framework';
import {ButtonType,ButtonChecked,ButtonEnabled} from '../office-button-enums';
//import { IButtonProps } from '../Button.types';
import { getStyles } from './DefaultButton.styles';


//@customElement('office-button')
export class OfficeButton {
    @bindable type: ButtonType = ButtonType.default;
    @bindable icon:string = "plus";
    @bindable label:string;
    @bindable description:string;
    @bindable enabledState:ButtonEnabled; //When using an <a> element, apply this class to disable the button. 
    @bindable checkedState:ButtonChecked; 
    @bindable onclick:Function;

    @computedFrom('type')
    get css():string
    {
        var disabledCss = this.enabledState == ButtonEnabled.disabled ? 'is-disabled' : '';
        var checkedCss = this.checkedState == ButtonChecked.checked ? 'is-checked' : '';

        var primary = false;
        var theme = null;
        var styles = undefined;
        var mystyles = getStyles(theme!, styles, primary);
        console.log(mystyles);

        return "ms-Button ms-Button--"  + ButtonType[this.type]  + "  " + disabledCss + " " + checkedCss;
    }

    buttonclick()
    {
        if(this.onclick)
        {
            this.onclick();
        }
    }
    constructor()
    {
    }


    // Removes event handlers on the button
    disposeEvents()
    {

    }
}


