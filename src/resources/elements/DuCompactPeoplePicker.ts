import { customElement, inject, noView } from 'aurelia-framework';
import { IBasePickerSuggestionsProps, CompactPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IBasePickerSuggestionsProps = <IBasePickerSuggestionsProps>{};
reactprops.className = <any>{};
reactprops.forceResolveText = <any>{};
reactprops.loadingText = <any>{};
reactprops.mostRecentlyUsedHeaderText = <any>{};
reactprops.noResultsFoundText = <any>{};
//reactprops.onRenderNoResultFound = () => {};
reactprops.resultsMaximumNumber = <any>{};
reactprops.searchForMoreText = <any>{};
reactprops.searchingText = <any>{};
reactprops.showRemoveButtons = <any>{};
reactprops.suggestionsAvailableAlertText = <any>{};
reactprops.suggestionsClassName = <any>{};
reactprops.suggestionsHeaderText = <any>{};
reactprops.suggestionsItemClassName = <any>{};

@noView()
@inject(Element)
@customElement('du-compact-people-picker')
export class DuCompactPeoplePicker extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(CompactPeoplePicker, reactprops);
  }
}

addProperties(DuCompactPeoplePicker, reactprops);