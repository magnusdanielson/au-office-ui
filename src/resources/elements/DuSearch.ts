import { noView, customElement, inject } from 'aurelia-framework';
import { SearchBox, ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

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
//@ts-ignore
reactprops.iconProps =  <any>{};

@noView()
@inject(Element)
@customElement('du-search-box')
export class DuSearchBox extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(SearchBox, reactprops);
  }
}

addProperties(DuSearchBox, reactprops);