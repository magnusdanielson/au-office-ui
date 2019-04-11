import {   customElement, inject } from 'aurelia-framework';
import { Callout, ICalloutProps } from 'office-ui-fabric-react/lib/Callout';
import {  onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: ICalloutProps = <ICalloutProps>{};
reactprops.backgroundColor = <any>{};
reactprops.beakWidth = <any>{};
reactprops.className = <any>{};
reactprops.bounds = <any>{};
reactprops.calloutMaxHeight = <any>{};
reactprops.calloutMaxWidth = <any>{};
reactprops.calloutWidth = <any>{};
reactprops.coverTarget = <any>{};
reactprops.directionalHint = <any>{};
reactprops.directionalHintFixed = <any>{};
reactprops.doNotLayer = <any>{};
reactprops.finalHeight  = <any>{};
reactprops.gapSpace = <any>{};
reactprops.hideOverflow = <any>{};
reactprops.hidden = <any>{};
reactprops.isBeakVisible = <any>{};
reactprops.layerProps = <any>{};
reactprops.minPagePadding = <any>{};
reactprops.onDismiss = <any>onlyAureliaBound;
reactprops.onLayerMounted = <any>onlyAureliaBound;
reactprops.onPositioned = <any>onlyAureliaBound;
reactprops.onScroll = <any>onlyAureliaBound;
reactprops.preventDismissOnLostFocus = <any>{};
reactprops.preventDismissOnScroll = <any>{};
reactprops.setInitialFocus = <any>{};
reactprops.target = <any>{};

@inject(Element)
@customElement('du-callout')
export class DuCallout extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(Callout, this.createState(reactprops));
  }
}

addProperties(DuCallout, reactprops);