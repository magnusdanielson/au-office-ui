import * as React from 'react';

export class ReactStateWrapper extends React.Component {
    inneridReact: string;
    state: any;
    aureliaHost: any;
    reactClass: any;

    constructor(props: any) {
        super(props);
        this.state = props;
        this.inneridReact = 'du' + Math.round( Math.random() * 10000000000000000);
        this.aureliaHost = props.aureliaHost;
        this.reactClass = props.reactClass;
    }

    componentWillUnmount() {
        if (typeof this.aureliaHost.reactComponentWillUnmount === 'function') {
            this.aureliaHost.reactComponentWillUnmount();
        }
    }

    componentDidMount() {
        if (typeof this.aureliaHost.reactComponentDidMount === 'function') {
            this.aureliaHost.reactComponentDidMount();
        }
    }

    render() {
        if (this.aureliaHost.isHidden()) {
            return null;
        }

        let com = React.createElement(
            this.reactClass,
            this.state,
            React.createElement('span', {
                id: this.inneridReact,
                ref: (newParent: HTMLElement | null) => {
                    if (newParent == null) 
                    {
                      newParent = document.getElementById(this.inneridReact.toString());
                      if (newParent == null)
                      {
                        return;
                      }
                    }

                    if (this.aureliaHost.isHidden()) {
                        return;
                    }

                    let auelement = document.getElementById(
                        this.aureliaHost.inneridAurelia
                    );

                    if (auelement == null) {
                        return;
                    }

                    while (auelement.childNodes.length > 0) {
                        newParent.appendChild(auelement.childNodes[0]);
                    }
                }
            })
        );
        return com;
    }
}
