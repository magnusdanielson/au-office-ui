import { customElement, inject } from 'aurelia-framework';
import { GroupedList, IGroupedListProps } from 'office-ui-fabric-react/lib/GroupedList';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IGroupedListProps = <IGroupedListProps>{};
reactprops.items = <any>{};
reactprops.onRenderCell = <any>onlyAureliaBound;
reactprops.className = <any>{};
reactprops.compact = <any>{};
reactprops.getGroupHeight = <any>{};
reactprops.groupProps = <any>{};
reactprops.groups = <any>{};
reactprops.listProps = <any>{};
reactprops.onGroupExpandStateChanged = <any>onlyAureliaBound;
reactprops.onShouldVirtualize = <any>onlyAureliaBound;
reactprops.selection = <any>{};
reactprops.selectionMode = <any>{};
reactprops.usePageCache = <any>{};
reactprops.key = <any>{};


@inject(Element)
@customElement('du-grouped-list')
//@ts-ignore Due to onRenderCell
export class DuGroupedList  extends AuReactStateWrapper implements IGroupedListProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;
  items: any[];

  toggleCollapseAll(allCollapsed: boolean)
  {
    return this.reactComponent.toggleCollapseAll(allCollapsed);
  }

  forceUpdate()
  {
    this.reactComponent.forceUpdate();
  }

  attached()
  {
    this.renderReact(GroupedList, this.createState(reactprops));
  }
}


addPropertiesState(DuGroupedList, reactprops);