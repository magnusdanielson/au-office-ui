import { ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuTeachingBubble extends DuReactWrapperBaseClass implements ITeachingBubbleProps {
    constructor(element: any);
    hidden: boolean;
    isWide: boolean;
    attached(): void;
}
