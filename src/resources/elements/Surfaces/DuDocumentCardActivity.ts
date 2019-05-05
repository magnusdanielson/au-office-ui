import {  customElement, inject } from 'aurelia-framework';
import { DocumentCardActivity, IDocumentCardActivityProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardActivityProps = <IDocumentCardActivityProps>{};
reactprops.activity = <any>{};
reactprops.people = <any>{};


@inject(Element)
@customElement('du-document-card-activity')
export class DuDocumentCardActivity extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardActivity, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCardActivity, reactprops);