System.register(["./breadcrumb"], function (exports_1, context_1) {
    "use strict";
    var breadcrumb_1, OfficeBreadcrumb;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (breadcrumb_1_1) {
                breadcrumb_1 = breadcrumb_1_1;
            }
        ],
        execute: function () {
            OfficeBreadcrumb = /** @class */ (function () {
                function OfficeBreadcrumb() {
                    //medium breakpoint
                    this.MEDIUM = 639;
                    this.hasOverflow = false;
                    this.currentMaxItems = 0;
                    this.itemCollection = [];
                }
                /**
                 * create internal model of list items from DOM
                 */
                OfficeBreadcrumb.prototype.createItemCollection = function () {
                    var length = this.listItems.length;
                    var i = 0;
                    var item;
                    var text;
                    var link;
                    var tabIndex;
                    for (i; i < length; i++) {
                        item = this.listItems[i].querySelector('.ms-Breadcrumb-itemLink');
                        text = item.textContent;
                        link = item.getAttribute('href');
                        tabIndex = parseInt(item.getAttribute('tabindex'), 10);
                        var breadcrumb = new breadcrumb_1.BreadCrumb();
                        breadcrumb.text = text;
                        breadcrumb.link = link;
                        breadcrumb.tabIndex = tabIndex;
                        this.itemCollection.push(breadcrumb);
                    }
                };
                ;
                /**
                 * Re-render lists on resize
                 *
                 */
                OfficeBreadcrumb.prototype.onResize = function () {
                    this.closeOverflow(null);
                    // TEMP this.renderList();
                };
                ;
                Object.defineProperty(OfficeBreadcrumb.prototype, "overFlowItems", {
                    /**
                     * render breadcrumbs and overflow menus
                     */
                    get: function () {
                        return this.itemCollection; //TODO
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OfficeBreadcrumb.prototype, "breadCrumbItems", {
                    get: function () {
                        return this.itemCollection; //TODO
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(OfficeBreadcrumb.prototype, "isOverFlow", {
                    get: function () {
                        return (this.currentMaxItems > this.itemCollection.length);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * opens the overflow menu
                 */
                OfficeBreadcrumb.prototype.openOverflow = function (event) {
                    if (this.overflowMenu.className.indexOf(' is-open') === -1) {
                        this.overflowMenu.className += ' is-open';
                        this.removeOutlinesOnClick(event);
                        // force focus rect onto overflow button
                        this.overflowButton.focus();
                    }
                };
                ;
                OfficeBreadcrumb.prototype.overflowKeyPress = function (event) {
                    if (event.keyCode === 13) {
                        this.openOverflow(event);
                    }
                };
                ;
                /**
                 * closes the overflow menu
                 */
                OfficeBreadcrumb.prototype.closeOverflow = function (event) {
                    if (!event || event.target !== this.overflowButton) {
                        this.removeClass(this.overflowMenu, ' is-open');
                    }
                };
                ;
                /**
                 * utility that removes a class from an element
                 */
                OfficeBreadcrumb.prototype.removeClass = function (element, value) {
                    var index = element.className.indexOf(value);
                    if (index > -1) {
                        element.className = element.className.substring(0, index);
                    }
                };
                ;
                /**
                 * caches elements and values of the component
                 */
                OfficeBreadcrumb.prototype.cacheDOM = function (context) {
                    this.breadcrumb = context.container;
                    this.breadcrumbList = this.breadcrumb.querySelector('.ms-Breadcrumb-list');
                    this.listItems = this.breadcrumb.querySelectorAll('.ms-Breadcrumb-listItem');
                    this.contextMenu = this.breadcrumb.querySelector('.ms-ContextualMenu');
                    this.overflowButton = this.breadcrumb.querySelector('.ms-Breadcrumb-overflowButton');
                    this.overflowMenu = this.breadcrumb.querySelector('.ms-Breadcrumb-overflowMenu');
                };
                ;
                /**
                 * sets handlers for resize and button click events
                 */
                OfficeBreadcrumb.prototype.setListeners = function () {
                    window.addEventListener('resize', this.onResize);
                    this.overflowButton.addEventListener('click', this.openOverflow, false);
                    this.overflowButton.addEventListener('keypress', this.overflowKeyPress, false);
                    document.addEventListener('click', this.closeOverflow, false);
                    this.breadcrumbList.addEventListener('click', this.removeOutlinesOnClick, false);
                };
                ;
                /**
                 * removes focus outlines so they don't linger after click
                 */
                OfficeBreadcrumb.prototype.removeOutlinesOnClick = function (event) {
                    event.target.blur();
                };
                ;
                /**
                 * initializes component
                 */
                OfficeBreadcrumb.prototype.init = function () {
                    this.cacheDOM(this);
                    this.setListeners();
                    this.createItemCollection();
                    this.onResize();
                };
                ;
                return OfficeBreadcrumb;
            }());
            exports_1("OfficeBreadcrumb", OfficeBreadcrumb);
        }
    };
});
