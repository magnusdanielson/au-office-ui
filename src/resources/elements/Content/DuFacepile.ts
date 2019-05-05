import { customElement, inject } from 'aurelia-framework';
import { Facepile, IFacepileProps, IFacepilePersona } from 'office-ui-fabric-react/lib/Facepile';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

let reactprops: IFacepileProps = <IFacepileProps>{};

reactprops.personas = <any>{};
reactprops.addButtonProps = <any>{};
reactprops.className = <any>{};
reactprops.maxDisplayablePersonas = <any>{};
reactprops.overflowButtonProps = <any>{};
reactprops.overflowButtonType = <any>{};
reactprops.overflowPersonas = <any>{};
reactprops.personaSize = <any>{};
reactprops.showAddButton = <any>{};

@inject(Element)
@customElement('du-facepile')
export class DuFacepile  extends AuReactStateWrapper implements IFacepileProps
{
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean;
  personas: IFacepilePersona[];

  
  getPersonaProps(persona: IFacepilePersona)
  {
    return this.reactComponent.getPersonaProps(persona);
  }
  attached()
  {
    this.renderReact(Facepile, this.createState(reactprops));
  }
}


addPropertiesState(DuFacepile, reactprops);