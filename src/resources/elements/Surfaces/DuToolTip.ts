import { customElement, inject } from 'aurelia-framework';
import { Tooltip, ITooltipProps } from 'office-ui-fabric-react/lib/Tooltip';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: ITooltipProps = <ITooltipProps>{};

reactprops.calloutProps = <any>{};
reactprops.content = <any>{};
reactprops.delay = <any>{};
reactprops.directionalHint = <any>{};
reactprops.maxWidth = <any>{};
reactprops.onRenderContent = <any>onlyAureliaBound;
reactprops.targetElement = <any>{};
reactprops.hidden = <any>{};


@inject(Element)
@customElement('du-tool-tip')
export class DuToolTip  extends AuReactStateWrapper implements ITooltipProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(Tooltip, this.createState(reactprops));
  }
}


addPropertiesState(DuToolTip, reactprops);