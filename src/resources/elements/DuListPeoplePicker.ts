import { customElement, inject, noView } from 'aurelia-framework';
import { IPeoplePickerProps  , ListPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper, onlyAureliaBound } from '../wrapper/ReactWrapper';

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
reactprops.onInputChange = <any>onlyAureliaBound;
reactprops.onDismiss = <any>(() => {});
reactprops.enableSelectedSuggestionAlert = <any>{};

@noView()
@inject(Element)
@customElement('du-list-people-picker')
export class DuListPeoplePicker extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(ListPeoplePicker, reactprops);
  }
}

addProperties(DuListPeoplePicker, reactprops)