import {  customElement, inject } from 'aurelia-framework';
import { DocumentCardPreview, IDocumentCardPreviewProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { AuReactStateWrapper, addPropertiesState } from '@dunite/au-react-wrapper';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardPreviewProps = <IDocumentCardPreviewProps>{};
reactprops.getOverflowDocumentCountText = <any>{};
reactprops.previewImages = <any>{};



@inject(Element)
@customElement('du-document-card-preview')
export class DuDocumentCardPreview extends  AuReactStateWrapper {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardPreview, this.createState(reactprops));
  }
}

addPropertiesState(DuDocumentCardPreview, reactprops);