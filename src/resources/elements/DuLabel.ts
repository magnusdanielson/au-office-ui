import { ViewCompiler, ViewResources, BehaviorInstruction, processContent , noView, customElement, inject } from 'aurelia-framework';
import { Label, ILabelProps } from 'office-ui-fabric-react/lib/Label';
import { elementWrapper, renderReact, addProperties, ReactWrapper } from '../wrapper/ReactWrapper';

let reactprops: ILabelProps = <ILabelProps>{};
reactprops.disabled = <any>{};
reactprops.className = <any>{};
reactprops.required = <any>{};
reactprops.htmlFor = <any>{};



//@ts-ignore
@processContent((compiler: ViewCompiler, resources: ViewResources, node: Element, instruction: BehaviorInstruction
): boolean => {
  return elementWrapper(node, '.ms-Label');
}
)
@noView()
@inject(Element)
@customElement('du-label')
export class DuLabel extends ReactWrapper {

  constructor(element) {
    super(element);
  }

  //public id = Date.now();

  public render() {
    renderReact.bind(this)(Label, reactprops);
  }
}

addProperties(DuLabel, reactprops);