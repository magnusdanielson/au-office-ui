import { BreadCrumb } from "./breadcrumb";
export declare class OfficeBreadcrumb {
    MEDIUM: number;
    breadcrumb: any;
    listItems: any;
    contextMenu: any;
    overflowButton: any;
    overflowMenu: any;
    breadcrumbList: any;
    hasOverflow: boolean;
    currentMaxItems: number;
    itemCollection: BreadCrumb[];
    /**
     * create internal model of list items from DOM
     */
    createItemCollection(): void;
    /**
     * Re-render lists on resize
     *
     */
    onResize(): void;
    /**
     * render breadcrumbs and overflow menus
     */
    readonly overFlowItems: BreadCrumb[];
    readonly breadCrumbItems: BreadCrumb[];
    readonly isOverFlow: boolean;
    /**
     * opens the overflow menu
     */
    openOverflow(event: any): void;
    overflowKeyPress(event: any): void;
    /**
     * closes the overflow menu
     */
    closeOverflow(event: any): void;
    /**
     * utility that removes a class from an element
     */
    removeClass(element: any, value: any): void;
    /**
     * caches elements and values of the component
     */
    cacheDOM(context: any): void;
    /**
     * sets handlers for resize and button click events
     */
    setListeners(): void;
    /**
     * removes focus outlines so they don't linger after click
     */
    removeOutlinesOnClick(event: any): void;
    /**
     * initializes component
     */
    init(): void;
}
