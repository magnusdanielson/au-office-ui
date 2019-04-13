// import { customElement, inject } from 'aurelia-framework';
// import { NormalPeoplePicker, IBasePickerSuggestionsProps } from 'office-ui-fabric-react/lib/Pickers';
// import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
// import { addProperties } from '../../wrapper/Utilities';

// let reactprops: IBasePickerSuggestionsProps = <IBasePickerSuggestionsProps>{};
// reactprops.className = <any>{};
// reactprops.forceResolveText = <any>{};
// reactprops.loadingText = <any>{};
// reactprops.mostRecentlyUsedHeaderText = <any>{};
// reactprops.noResultsFoundText = <any>{};
// //reactprops.onRenderNoResultFound = () => {};
// reactprops.resultsMaximumNumber = <any>{};
// reactprops.searchForMoreText = <any>{};
// reactprops.searchingText = <any>{};
// reactprops.showRemoveButtons = <any>{};
// reactprops.suggestionsAvailableAlertText = <any>{};
// reactprops.suggestionsClassName = <any>{};
// reactprops.suggestionsHeaderText = <any>{};
// reactprops.suggestionsItemClassName = <any>{};



// @inject(Element)
// @customElement('du-people-picker')
// export class DuPeoplePicker extends  DuReactWrapperBaseClass implements IBasePickerSuggestionsProps {

//   constructor(element) {
//   super(element);
//     this.hiddenIsHidden = true;
//     this.hiddenName = 'hidden';
//   }

//   hidden: boolean = false;
//   className: string;

//   attached() {
//     this.renderReact(NormalPeoplePicker, this.createState(reactprops));
//   }
// }

// addProperties(DuPeoplePicker, reactprops);