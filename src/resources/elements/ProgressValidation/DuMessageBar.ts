import {  customElement, inject } from 'aurelia-framework';
import { MessageBar, IMessageBarProps } from 'office-ui-fabric-react/lib/MessageBar';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

let reactprops: IMessageBarProps = <IMessageBarProps>{};
reactprops.className = <any>{};
reactprops.isMultiline = <any>{};
reactprops.messageBarType = <any>{};
reactprops.onDismiss = () => {};
reactprops.dismissButtonAriaLabel = <any>{};
reactprops.truncated = <any>{};
reactprops.overflowButtonAriaLabel = <any>{};
reactprops.actions = <any>{};

@inject(Element)
@customElement('du-message-bar')
export class DuMessageBar extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {

    this.renderReact(MessageBar, this.createState(reactprops));
  }
}

addProperties(DuMessageBar, reactprops);