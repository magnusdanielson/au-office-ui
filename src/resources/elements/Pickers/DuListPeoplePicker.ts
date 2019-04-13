import { customElement, inject } from 'aurelia-framework';
import { IPeoplePickerProps  , ListPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IPeoplePickerProps   = <IPeoplePickerProps>{};

//@ts-ignore
reactprops.items = <any>{}; // items: T[] | undefined;
reactprops.onResolveSuggestions = <any>(() => {});
reactprops.resolveDelay = <any>{}; 
reactprops.onEmptyInputFocus = <any>(() => {});
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = <any>((_this: any, items: any) => { _this['selectedItems'] = items; });
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
reactprops.onInputChange = <any>onlyAureliaBound;
reactprops.onDismiss = <any>(() => {});
reactprops.enableSelectedSuggestionAlert = <any>{};
reactprops.selectedItems = <any>{};


@inject(Element)
@customElement('du-list-people-picker')
export class DuListPeoplePicker extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(ListPeoplePicker, this.createState(reactprops));
  }
}

addProperties(DuListPeoplePicker, reactprops)