import { customElement, inject } from 'aurelia-framework';
import { TeachingBubbleContent, ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';

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
@customElement('du-teaching-bubble-content')
export class DuTeachingBubbleContent  extends DuReactWrapperBaseClass implements ITeachingBubbleProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;
  isWide: boolean;

  attached()
  {
    this.renderReact(TeachingBubbleContent, this.createState(reactprops));
  }
}


addProperties(DuTeachingBubbleContent, reactprops);