import {  customElement, inject } from 'aurelia-framework';
import { DialogFooter, IDialogFooterProps } from 'office-ui-fabric-react/lib/Dialog';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDialogFooterProps = <IDialogFooterProps>{};
reactprops.className = <any>{};


@inject(Element)
@customElement('du-dialog-footer')
export class DuDialogFooter extends AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DialogFooter, this.createState(reactprops));
  }
}

addPropertiesState(DuDialogFooter, reactprops);