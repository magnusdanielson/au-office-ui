import { IDocumentCardTitleProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
export declare class DuDocumentCardTitle extends DuReactWrapperBaseClass implements IDocumentCardTitleProps {
    constructor(element: any);
    hidden: boolean;
    title: string;
    attached(): void;
}
