import { ITooltipProps } from 'office-ui-fabric-react/lib/Tooltip';
import { AuReactStateWrapper } from '@dunite/au-react-wrapper';
export declare class DuToolTip extends AuReactStateWrapper implements ITooltipProps {
    constructor(element: any);
    hidden: boolean;
    attached(): void;
}
