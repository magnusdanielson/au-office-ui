import { IFacepileProps, IFacepilePersona } from 'office-ui-fabric-react/lib/Facepile';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuFacepile extends DuReactWrapperBaseClass implements IFacepileProps {
    constructor(element: any);
    hidden: boolean;
    personas: IFacepilePersona[];
    getPersonaProps(persona: IFacepilePersona): any;
    attached(): void;
}
