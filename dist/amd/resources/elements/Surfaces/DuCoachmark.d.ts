import { ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuCoachmark extends DuReactWrapperBaseClass {
    container: HTMLElement | null;
    constructor(element: any);
    teachingBubbleElement: any;
    teachingBubbleContent: ITeachingBubbleProps;
    hidden: boolean;
    attached(): void;
    renderReact2(reactprops: any): void;
}
