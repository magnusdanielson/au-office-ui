import {  customElement, inject } from 'aurelia-framework';
import { DocumentCardActions, IDocumentCardActionsProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardActionsProps = <IDocumentCardActionsProps>{};
reactprops.actions = <any>{};
reactprops.views = <any>{};


@inject(Element)
@customElement('du-document-card-actions')
export class DuDocumentCardActions extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardActions, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCardActions, reactprops);