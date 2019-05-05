import { ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { AuReactStateWrapperNoChildren } from '@dunite/au-react-wrapper';
export declare class DuCoachmark extends AuReactStateWrapperNoChildren {
    container: HTMLElement | null;
    constructor(element: any);
    teachingBubbleElement: any;
    teachingBubbleContent: ITeachingBubbleProps;
    hidden: boolean;
    attached(): void;
    renderReact2(reactprops: any): void;
}
