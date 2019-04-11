import { customElement, inject } from 'aurelia-framework';
import { SearchBox, ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: ISearchBoxProps = <ISearchBoxProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.placeholder = <any>{};
reactprops.onSearch = () => {};
reactprops.onFocus = () => {};
reactprops.onBlur = () => {};
reactprops.onChange = () => {};
reactprops.disableAnimation = <any>{};
reactprops.onClear = () => {};
reactprops.onEscape =  () => {};
reactprops.value =  <any>{};
reactprops.defaultValue =  <any>{};
reactprops.clearButtonProps =  <any>{};
reactprops.underlined =  <any>{};
reactprops.iconProps =  <any>{};


@inject(Element)
@customElement('du-search-box')
export class DuSearchBox extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(SearchBox, this.createState(reactprops));
  }
}

addProperties(DuSearchBox, reactprops);