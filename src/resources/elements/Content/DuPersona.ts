import { customElement, inject } from 'aurelia-framework';
import { Persona, IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IPersonaProps = <IPersonaProps>{};

reactprops.allowPhoneInitials = <any>{};
reactprops.coinProps = <any>{};
reactprops.coinSize = <any>{};
reactprops.hidePersonaDetails = <any>{};
reactprops.imageAlt = <any>{};
reactprops.imageInitials = <any>{};
reactprops.imageShouldFadeIn = <any>{};
reactprops.imageShouldStartVisible = <any>{};
reactprops.imageUrl = <any>{};
reactprops.initialsColor = <any>{};
reactprops.onPhotoLoadingStateChange = <any>onlyAureliaBound;
reactprops.onRenderCoin = <any>onlyAureliaBound;
reactprops.onRenderInitials = <any>onlyAureliaBound;
reactprops.optionalText = <any>{};
reactprops.presence = <any>{};
reactprops.secondaryText = <any>{};
reactprops.showInitialsUntilImageLoads = <any>{};
reactprops.showSecondaryText = <any>{};
reactprops.showUnknownPersonaCoin = <any>{};
reactprops.size = <any>{};
reactprops.tertiaryText = <any>{};
reactprops.text = <any>{};
reactprops.className = <any>{};
reactprops.onRenderOptionalText = <any>onlyAureliaBound;
reactprops.onRenderPrimaryText = <any>onlyAureliaBound;
reactprops.onRenderSecondaryText = <any>onlyAureliaBound;
reactprops.onRenderTertiaryText = <any>onlyAureliaBound;

@inject(Element)
@customElement('du-persona')
export class DuPersona  extends AuReactStateWrapper implements IPersonaProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;

  attached()
  {
    this.renderReact(Persona, this.createState(reactprops));
  }
}


addPropertiesState(DuPersona, reactprops);