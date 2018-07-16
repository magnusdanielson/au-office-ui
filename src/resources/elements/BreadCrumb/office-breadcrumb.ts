import { BreadCrumb } from "./breadcrumb";

export class OfficeBreadcrumb
{
    //medium breakpoint
  MEDIUM = 639;

  //cached DOM elements
  breadcrumb;
  listItems;
  contextMenu;
  overflowButton;
  overflowMenu;
  breadcrumbList;

  hasOverflow:boolean = false;
  currentMaxItems = 0;
  itemCollection:BreadCrumb[]=[];

  /**
   * create internal model of list items from DOM
   */
  createItemCollection() {
    var length = this.listItems.length;
    var i = 0;
    var item;
    var text;
    var link;
    var tabIndex;

    for(i; i < length; i++) {
      item = this.listItems[i].querySelector('.ms-Breadcrumb-itemLink');
      text = item.textContent;
      link = item.getAttribute('href');
      tabIndex = parseInt(item.getAttribute('tabindex'), 10);
      var breadcrumb = new BreadCrumb();
      breadcrumb.text = text;
      breadcrumb.link =link;
      breadcrumb.tabIndex = tabIndex;
      this.itemCollection.push(breadcrumb);
    }
  };

  /**
   * Re-render lists on resize
   *
   */
  onResize() {
    this.closeOverflow(null);
    // TEMP this.renderList();
  };

  /**
   * render breadcrumbs and overflow menus
   */


  get overFlowItems()
  {
    return this.itemCollection; //TODO
  }

  get breadCrumbItems()
  {
    return this.itemCollection; //TODO
  }
  get isOverFlow()
  {
    return (this.currentMaxItems > this.itemCollection.length);
  }





  /**
   * opens the overflow menu
   */
  openOverflow(event) {
    if(this.overflowMenu.className.indexOf(' is-open') === -1) {
      this.overflowMenu.className += ' is-open';
      this.removeOutlinesOnClick(event);
      // force focus rect onto overflow button
      this.overflowButton.focus();
    }
  };

  overflowKeyPress(event) {
    if(event.keyCode === 13) {
      this.openOverflow(event);
    }
  };

  /**
   * closes the overflow menu
   */
  closeOverflow(event) {
    if(!event || event.target !== this.overflowButton) {
      this.removeClass(this.overflowMenu, ' is-open');
    }
  };

  /**
   * utility that removes a class from an element
   */
  removeClass (element, value) {
    var index = element.className.indexOf(value);
    if(index > -1) {
      element.className = element.className.substring(0, index);
    }
  };

  /**
   * caches elements and values of the component
   */
  cacheDOM(context) {
    this.breadcrumb = context.container;
    this.breadcrumbList = this.breadcrumb.querySelector('.ms-Breadcrumb-list');
    this.listItems = this.breadcrumb.querySelectorAll('.ms-Breadcrumb-listItem');
    this.contextMenu = this.breadcrumb.querySelector('.ms-ContextualMenu');
    this.overflowButton = this.breadcrumb.querySelector('.ms-Breadcrumb-overflowButton');
    this.overflowMenu = this.breadcrumb.querySelector('.ms-Breadcrumb-overflowMenu');
  };

  /**
   * sets handlers for resize and button click events
   */
  setListeners() {
    window.addEventListener('resize', this.onResize);
    this.overflowButton.addEventListener('click', this.openOverflow, false);
    this.overflowButton.addEventListener('keypress', this.overflowKeyPress, false);
    document.addEventListener('click', this.closeOverflow, false);
    this.breadcrumbList.addEventListener('click', this.removeOutlinesOnClick, false);
  };

  /**
   * removes focus outlines so they don't linger after click
   */
  removeOutlinesOnClick(event) {
    event.target.blur();
  };

  /**
   * initializes component
   */
  init() {
    this.cacheDOM(this);
    this.setListeners();
    this.createItemCollection();
    this.onResize();
  };


}
