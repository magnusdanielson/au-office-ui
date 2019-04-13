import * as React from 'react';
export declare class ReactStateWrapper extends React.Component {
    inneridReact: string;
    state: any;
    aureliaHost: any;
    reactClass: any;
    constructor(props: any);
    componentWillUnmount(): void;
    componentDidMount(): void;
    render(): React.ComponentElement<any, React.Component<any, any, any>> | null;
}
