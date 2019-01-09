import {  ViewCompiler, ViewResources, BehaviorInstruction, processContent, customElement, inject, noView } from 'aurelia-framework';
import { Callout, ICalloutProps } from 'office-ui-fabric-react/lib/Callout';
import { renderReact, addProperties, ReactWrapper, onlyAureliaBound, elementWrapper } from '../wrapper/ReactWrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following paramters are from the event
// _this refers to the DuCheckbox class with all properties added
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

//@ts-ignore
@processContent((compiler: ViewCompiler, resources: ViewResources, node: Element, instruction: BehaviorInstruction
  ): boolean => {
    return elementWrapper(node, '.ms-Callout-main');
  }
  )
@noView()
@inject(Element)
@customElement('du-callout')
export class DuCallout extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  public render() {
    renderReact.bind(this)(Callout, reactprops);
  }
}

addProperties(DuCallout, reactprops);