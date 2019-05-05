import { Coachmark, ICoachmarkProps } from 'office-ui-fabric-react/lib/Coachmark';
import {  customElement, inject, bindable } from 'aurelia-framework';
import { ITeachingBubbleProps, TeachingBubbleContent } from 'office-ui-fabric-react/lib/TeachingBubble';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { AuReactStateWrapperNoChildren, addPropertiesState, onlyAureliaBound, ReactStateWrapper, ReactStateWrapperNoChildren } from '@dunite/au-react-wrapper';

let reactprops: ICoachmarkProps = <ICoachmarkProps>{};
reactprops.beaconColorOne = <any>{};
reactprops.beaconColorTwo = <any>{};
reactprops.className = <any>{};
reactprops.color = <any>{};
reactprops.delayBeforeCoachmarkAnimation = <any>{};
reactprops.delayBeforeMouseOpen = <any>{};
reactprops.isCollapsed = <any>{};
reactprops.isPositionForced = <any>{};
reactprops.mouseProximityOffset = <any>{};
reactprops.target = <any>{};
reactprops.onAnimationOpenEnd = <any>onlyAureliaBound;
reactprops.onAnimationOpenStart = <any>onlyAureliaBound;
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onMouseMove = <any>onlyAureliaBound;
reactprops.positioningContainerProps = <any>{};
reactprops.preventDismissOnLostFocus = <any>{};
reactprops.preventFocusOnMount = <any>{};

@inject(Element)
@customElement('du-coachmark')
export class DuCoachmark extends AuReactStateWrapperNoChildren {

  container: HTMLElement | null;
  
  constructor(element) {
    super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  public teachingBubbleElement: any = {};

  @bindable()
  public teachingBubbleContent: ITeachingBubbleProps;

  @bindable()
  hidden: boolean = false;

  attached() {

    
    this.renderReact2(reactprops);
  }

  public renderReact2( reactprops: any) {
    ReactDom.unmountComponentAtNode(this.element);

    // this is bound to Aurelia class
    this.container = this.element.querySelector('.au-react-root');

    if (this.container != null)
    {
      this.container.remove();
    }

    this.container = document.createElement('span');
    this.container.setAttribute('class', 'au-react-root');
    this.element.appendChild(this.container);


    //@ts-ignore
    this.teachingBubbleContent.aureliaHost = this;
    //@ts-ignore
    this.teachingBubbleContent.reactClass = TeachingBubbleContent

    //let reactTeachingBubbleElement = React.createElement(TeachingBubbleContent, this.teachingBubbleContent);
    let reactTeachingBubbleElement = React.createElement(ReactStateWrapper , this.teachingBubbleContent);
    
    var a = this.createState(reactprops);
    a.aureliaHost = this;
    a.reactClass = Coachmark



    const reactElement = React.createElement(ReactStateWrapperNoChildren, a, reactTeachingBubbleElement);
    this.reactComponent = ReactDom.render(reactElement, this.container);
  }
}

addPropertiesState(DuCoachmark, reactprops);