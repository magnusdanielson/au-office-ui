import { customElement, inject } from 'aurelia-framework';
import { IPeoplePickerProps, NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IPeoplePickerProps   = <IPeoplePickerProps>{};

//@ts-ignore
reactprops.items = <any>{}; // items: T[] | undefined;
reactprops.onResolveSuggestions = <any>onlyAureliaBound;
reactprops.resolveDelay = <any>{}; 
reactprops.onEmptyInputFocus = <any>onlyAureliaBound;
reactprops.defaultSelectedItems = <any>{};
reactprops.onChange = <any> function(_this: any, items: any) { _this['selectedItems'] = items; };
reactprops.onFocus = <any>onlyAureliaBound;
reactprops.onBlur = <any>onlyAureliaBound;
reactprops.getTextFromItem = <any>onlyAureliaBound;
reactprops.onGetMoreResults = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.pickerSuggestionsProps = <any>{};
reactprops.pickerCalloutProps = <any>{};
reactprops.inputProps = <any>{};
reactprops.onRemoveSuggestion = <any>onlyAureliaBound;
reactprops.onValidateInput = <any>onlyAureliaBound;
reactprops.searchingText = <any>onlyAureliaBound;
reactprops.disabled = <any>{};
reactprops.itemLimit = <any>{};
reactprops.createGenericItem = <any>onlyAureliaBound;
reactprops.removeButtonAriaLabel = <any>{};
reactprops.onItemSelected = <any>onlyAureliaBound;
reactprops.selectedItems = <any>{};
//reactprops.onInputChange = <any>onlyAureliaBound;
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.enableSelectedSuggestionAlert = <any>{};
reactprops.selectedItems = <any>{};

@inject(Element)
@customElement('du-normal-people-picker')
export class DuNormalPeoplePicker extends  AuReactStateWrapper {

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

addPropertiesState(DuNormalPeoplePicker, reactprops)