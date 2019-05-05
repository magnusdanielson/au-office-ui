import { customElement, inject, bindable } from 'aurelia-framework';
import { TeachingBubble, ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ITeachingBubbleProps = <ITeachingBubbleProps>{};

reactprops.calloutProps = <any>{};
reactprops.hasCloseIcon = <any>{};
reactprops.hasCondensedHeadline = <any>{};
reactprops.hasSmallHeadline = <any>{};
reactprops.headline = <any>{};
reactprops.isWide = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.primaryButtonProps = <any>{};
reactprops.secondaryButtonProps = <any>{};
reactprops.targetElement = <any>{};
reactprops.illustrationImage = <any>{};


@inject(Element)
@customElement('du-teaching-bubble')
export class DuTeachingBubble  extends AuReactStateWrapper implements ITeachingBubbleProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  @bindable()
  hidden: boolean;
  
  isWide: boolean;

  attached()
  {
    this.renderReact(TeachingBubble, this.createState(reactprops));
  }
}


addPropertiesState(DuTeachingBubble, reactprops);