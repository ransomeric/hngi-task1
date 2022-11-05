import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { url, text, id, subtext } = this.props.data

        return <a href={url}  id={id} className="btn"> {text} </a>;
    }
}

export default Button;