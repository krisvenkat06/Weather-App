import React, { Component } from 'react';

class TitleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };



    static defaultProps = {
    }
    render() {
        return (
            <div>
                <h1 className="App-title">{this.props.name}</h1>
            </div>
        );
    }
}

export default TitleComponent;