import { customElement, inject } from 'aurelia-framework';
import { SearchBox, ISearchBox, ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
import { addProperties } from '../../wrapper/Utilities';
import { DuReactWrapperNoChildren } from '../../wrapper/DuReactWrapperNoChildren';

let reactprops: ISearchBoxProps = <ISearchBoxProps & ISearchBox>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.placeholder = <any>{};
reactprops.onSearch = () => {};
reactprops.onFocus = () => {};
reactprops.onBlur = () => {};
reactprops.onChange = <any>( (_this: any, onChangeTuple: any) => { _this['value'] = onChangeTuple[1]; });
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
export class DuSearchBox extends  DuReactWrapperNoChildren implements ISearchBoxProps {

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