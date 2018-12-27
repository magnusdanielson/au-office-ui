import { customElement, inject, noView } from 'aurelia-framework';
import { TagPicker, IBasePicker, ITag } from 'office-ui-fabric-react/lib/Pickers';
import { renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: IBasePicker<ITag> = <IBasePicker<ITag>>{};
reactprops.items = <any>{};
reactprops.focus = <any>( (_this) => { _this.reactComponent.focus()});
reactprops.focusInput =  <any>( (_this) => { _this.reactComponent.focusInput()});
//@ts-ignore
reactprops.getReactItems = (_this) => { return _this.reactComponent.items};

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