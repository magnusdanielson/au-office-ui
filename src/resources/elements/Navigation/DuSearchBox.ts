import { customElement, inject } from 'aurelia-framework';
import { SearchBox, ISearchBox, ISearchBoxProps } from 'office-ui-fabric-react/lib/SearchBox';
import { AuReactStateWrapperNoChildren, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ISearchBoxProps = <ISearchBoxProps & ISearchBox>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.placeholder = <any>{};
reactprops.onSearch = onlyAureliaBound;
reactprops.onFocus = onlyAureliaBound;
reactprops.onBlur = onlyAureliaBound;
reactprops.onChange = <any>
function (that: any, _event: any, newValue?: string)
{
  that['value'] = newValue; 
};
reactprops.disableAnimation = <any>{};
reactprops.onClear = onlyAureliaBound;
reactprops.onEscape =  onlyAureliaBound;
reactprops.value =  <any>{};
reactprops.defaultValue =  <any>{};
reactprops.clearButtonProps =  <any>{};
reactprops.underlined =  <any>{};
reactprops.iconProps =  <any>{};


@inject(Element)
@customElement('du-search-box')
export class DuSearchBox extends  AuReactStateWrapperNoChildren implements ISearchBoxProps {

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

addPropertiesState(DuSearchBox, reactprops);