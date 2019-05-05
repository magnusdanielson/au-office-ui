import { ITeachingBubbleProps } from 'office-ui-fabric-react/lib/TeachingBubble';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuTeachingBubbleContent extends AuReactStateWrapper implements ITeachingBubbleProps {
    constructor(element: any);
    hidden: boolean;
    isWide: boolean;
    attached(): void;
}
