import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (<a href={this.props.url} id={this.props.id} className="btn"> {this.props.text}</a>);
    }
}

export default Button;