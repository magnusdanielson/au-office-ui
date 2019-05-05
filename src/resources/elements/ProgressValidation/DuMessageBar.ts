import {  customElement, inject } from 'aurelia-framework';
import { MessageBar, IMessageBarProps } from 'office-ui-fabric-react/lib/MessageBar';
import { AuReactStateWrapper, addPropertiesState, onlyAureliaBound } from '@dunite/au-react-wrapper';

let reactprops: IMessageBarProps = <IMessageBarProps>{};
reactprops.className = <any>{};
reactprops.isMultiline = <any>{};
reactprops.messageBarType = <any>{};
reactprops.onDismiss = onlyAureliaBound;
reactprops.dismissButtonAriaLabel = <any>{};
reactprops.truncated = <any>{};
reactprops.overflowButtonAriaLabel = <any>{};
reactprops.actions = <any>{};

@inject(Element)
@customElement('du-message-bar')
export class DuMessageBar extends  AuReactStateWrapper {

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

addPropertiesState(DuMessageBar, reactprops);