import { customElement, inject } from 'aurelia-framework';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops = <any>{};
reactprops.hidden = <any>{};



@inject(Element)
@customElement('du-marquee-selection')
export class DuMarqueeSelection  extends AuReactStateWrapper
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


addPropertiesState(DuMarqueeSelection, reactprops);