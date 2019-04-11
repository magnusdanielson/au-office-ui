import { customElement, inject } from 'aurelia-framework';
import { IPeoplePickerProps, NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IPeoplePickerProps   = <IPeoplePickerProps>{};

//@ts-ignore
reactprops.items = <any>{}; // items: T[] | undefined;
reactprops.onResolveSuggestions = <any>(() => {});
reactprops.resolveDelay = <any>{}; 
reactprops.onEmptyInputFocus = <any>(() => {});
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = <any>(() => {});
reactprops.onFocus = <any>(() => {});
reactprops.onBlur = <any>(() => {});
reactprops.getTextFromItem = <any>(() => {});
reactprops.onGetMoreResults = <any>(() => {});
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = <any>(() => {});
reactprops.onValidateInput = <any>(() => {});
reactprops.searchingText = <any>(() => {});
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>(() => {});
reactprops.removeButtonAriaLabel = <any>{};
reactprops.onItemSelected = <any>(() => {});
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>(() => {});
reactprops.onDismiss = <any>(() => {});
reactprops.enableSelectedSuggestionAlert = <any>{};


@inject(Element)
@customElement('du-normal-people-picker')
export class DuNormalPeoplePicker extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(NormalPeoplePicker, this.createState(reactprops));
  }
}

addProperties(DuNormalPeoplePicker, reactprops)