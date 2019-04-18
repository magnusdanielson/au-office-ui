import { ICoachmarkProps } from 'office-ui-fabric-react/lib/Coachmark';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuCoachmark extends DuReactWrapperBaseClass implements ICoachmarkProps {
    constructor(element: any);
    hidden: boolean;
    target: string | HTMLElement | null;
    attached(): void;
}
