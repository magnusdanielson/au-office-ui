import {  customElement, inject } from 'aurelia-framework';
import { DocumentCardLocation, IDocumentCardLocationProps } from 'office-ui-fabric-react/lib/DocumentCard';
import { onlyAureliaBound } from '../../wrapper/ReactWrapper';
import { DuReactWrapperBaseClass } from '../../wrapper/DuReactWrapperBaseClass';
import { addProperties } from '../../wrapper/Utilities';

// IMPORTANT
// any function defined here will be called with _this as first parameter
// following parameters are from the event
// _this refers to the Aurelia class with all properties added
let reactprops: IDocumentCardLocationProps = <IDocumentCardLocationProps>{};
reactprops.ariaLabel = <any>{};
reactprops.location = <any>{};
reactprops.locationHref = <any>{};
reactprops.onClick = onlyAureliaBound;


@inject(Element)
@customElement('du-document-card-location')
export class DuDocumentCardLocation extends  DuReactWrapperBaseClass {

  constructor(element) {
  super(element);
    this.hiddenIsHidden = true;
    this.hiddenName = 'hidden';
  }

  hidden: boolean = false;

  attached() {
    this.renderReact(DocumentCardLocation, this.createState(reactprops));
  }
}

addProperties(DocumentCardLocation, reactprops);