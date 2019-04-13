import {  customElement, inject } from 'aurelia-framework';
import { DocumentCardTitle, IDocumentCardTitleProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardTitleProps = <IDocumentCardTitleProps>{};
reactprops.shouldTruncate = <any>{};
reactprops.showAsSecondaryTitle = <any>{};
reactprops.title = <any>{};


@inject(Element)
@customElement('du-document-card-title')
export class DuDocumentCardTitle extends  DuReactWrapperBaseClass implements IDocumentCardTitleProps {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;
  title: string;

  attached() {
    this.renderReact(DocumentCardTitle, this.createState(reactprops));
  }
}

addProperties(DuDocumentCardTitle, reactprops);