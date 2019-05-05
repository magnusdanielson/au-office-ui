import { customElement, inject } from 'aurelia-framework';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops = <any>{};
reactprops.hidden = <any>{};



@inject(Element)
@customElement('du-marquee-selection')
export class DuMarqueeSelection  extends DuReactWrapperBaseClass
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(MarqueeSelection, this.createState(reactprops));
  }
}


addProperties(DuMarqueeSelection, reactprops);