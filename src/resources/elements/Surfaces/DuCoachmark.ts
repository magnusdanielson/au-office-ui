import { customElement, inject } from 'aurelia-framework';
import { Coachmark, ICoachmarkProps } from 'office-ui-fabric-react/lib/Coachmark';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';

let reactprops: ICoachmarkProps = <ICoachmarkProps>{};

reactprops.beaconColorOne = <any>{};
reactprops.beaconColorTwo = <any>{};
reactprops.className = <any>{};
reactprops.color = <any>{};
reactprops.delayBeforeCoachmarkAnimation = <any>{};
reactprops.delayBeforeMouseOpen = <any>{};
reactprops.isCollapsed = <any>{};
reactprops.isPositionForced = <any>{};
reactprops.mouseProximityOffset = <any>{};
reactprops.target = <any>{};
reactprops.onAnimationOpenEnd = <any>onlyAureliaBound;
reactprops.onAnimationOpenStart = <any>onlyAureliaBound;
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onMouseMove = <any>onlyAureliaBound;
reactprops.positioningContainerProps = <any>{};
reactprops.preventDismissOnLostFocus = <any>{};
reactprops.preventFocusOnMount = <any>{};



@inject(Element)
@customElement('du-coachmark')
export class DuCoachmark  extends DuReactWrapperBaseClass implements ICoachmarkProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;
  target: string | HTMLElement | null;

  attached()
  {
    this.renderReact(Coachmark, this.createState(reactprops));
  }
}


addProperties(DuCoachmark, reactprops);