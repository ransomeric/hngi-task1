import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Button extends Component {
    render() {
        const { url, text, id, subtext } = this.props.data

        return id === "contact" ? <NavLink className="btn" to={url}>{text}</NavLink> : <a href={url}  id={id} className="btn"> {text} </a>
    }
}

export default Button;
