import { customElement, inject, noView } from 'aurelia-framework';
import { IPeoplePickerProps, NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';


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

@noView()
@inject(Element)
@customElement('du-normal-people-picker')
export class DuNormalPeoplePicker extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(NormalPeoplePicker, reactprops);
  }
}

addProperties(DuNormalPeoplePicker, reactprops)