import { IContextualMenuProps, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuContextualMenu extends DuReactWrapperBaseClass implements IContextualMenuProps {
    constructor(element: any);
    hidden: boolean;
    items: IContextualMenuItem[];
    attached(): void;
}
