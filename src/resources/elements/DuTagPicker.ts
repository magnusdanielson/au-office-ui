import { customElement, inject, noView } from 'aurelia-framework';
import { TagPicker, IBasePickerProps, ITag } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IBasePickerProps<ITag> = <IBasePickerProps<ITag>>{};
reactprops.onResolveSuggestions = <any>(() => {});
reactprops.resolveDelay = <any>{};
reactprops.onEmptyInputFocus = <any>(() => {});
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = () => {};
reactprops.onFocus = () => {};
reactprops.onBlur = () => {};
reactprops.getTextFromItem = <any>(() => {});
reactprops.onGetMoreResults = <any>(() => {});
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = () => {};
reactprops.onValidateInput = <any>(() => {});
reactprops.searchingText = <any>{};
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>(() => {});
reactprops.onItemSelected = <any>(() => {});
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>(() => {});
reactprops.onDismiss = () => {};
reactprops.enableSelectedSuggestionAlert = <any>{};
//@ts-ignore
reactprops.items = <any>{};

@noView()
@inject(Element)
@customElement('du-tag-picker')
export class DuTagPicker extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(TagPicker, reactprops);
  }
}

addProperties(DuTagPicker, reactprops);