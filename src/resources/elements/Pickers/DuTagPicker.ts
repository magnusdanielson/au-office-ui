import { customElement, inject } from 'aurelia-framework';
import { TagPicker, IBasePickerProps, ITag } from 'office-ui-fabric-react/lib/Pickers';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IBasePickerProps<ITag> = <IBasePickerProps<ITag>>{};
reactprops.onResolveSuggestions = <any>(() => {});
reactprops.resolveDelay = <any>{};
reactprops.onEmptyInputFocus = <any>(() => {});
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.getTextFromItem = <any>(() => {});
reactprops.onGetMoreResults = <any>(() => {});
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = onlyAureliaBound;
reactprops.onValidateInput = <any>(() => {});
reactprops.searchingText = <any>{};
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>(() => {});
reactprops.onItemSelected = <any>(() => {});
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>(() => {});
reactprops.onDismiss = onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = <any>{};
//@ts-ignore
reactprops.items = <any>{};
reactprops.selectedItems = <any>{};

@inject(Element)
@customElement('du-tag-picker')
export class DuTagPicker extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(TagPicker, this.createState(reactprops));
  }
}

addPropertiesState(DuTagPicker, reactprops);