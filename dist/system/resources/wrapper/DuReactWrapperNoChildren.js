// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import { DuReactWrapperBaseClass } from './DuReactWrapperBaseClass';
// import { ReactStateWrapperNoChildren } from './ReactStateWrapperNoChildren';
// // Den här filen har endast "ReactStateWrapper" som unik referens
// export class DuReactWrapperNoChildren extends DuReactWrapperBaseClass
// {
//   renderReact(reactClass: any, a: any) 
//   {
//     ReactDom.unmountComponentAtNode(this.element);
//     this.container = this.element.querySelector('.au-react-root');
//     if (this.container != null)
//     {
//       this.container.remove();
//     }
//     this.container = document.createElement('span');
//     this.container.setAttribute('class', 'au-react-root');
//     this.element.appendChild(this.container);
//     a.aureliaHost = this;
//     a.reactClass = reactClass;
//     // reactElement is the DOM element;
//     let reactElement = React.createElement(ReactStateWrapperNoChildren, a);
//     // reactComponent is THE React Component
//     var reactComponent = ReactDom.render(reactElement, this.container
//       // , () =>
//       // {
//       //   this.log.debug('DuReactWrapperBaseClass React callback render complete');
//       // }
//       )
//     ;
//     this.reactComponent = reactComponent;
//   }
// }
