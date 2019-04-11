import { customElement, inject } from 'aurelia-framework';
import { DocumentCard, IDocumentCardProps } from 'office-ui-fabric-react/lib/DocumentCard';
import {  onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardProps = <IDocumentCardProps>{};
reactprops.className = <any>{};
reactprops.onClick = onlyAureliaBound;
reactprops.onClickHref = <any>{};
reactprops.type = <any>{};
reactprops.role = <any>{};


@inject(Element)
@customElement('du-document-card')
export class DuDocumentCard extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCard, this.createState(reactprops));
  }
}

addProperties(DuDocumentCard, reactprops);