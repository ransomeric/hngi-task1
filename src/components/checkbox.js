import React, { Component } from 'react';
import "../assets/styles/checkbox.css"

class CheckBox extends Component {
    render() {
        return (
            <label className="container"> {this.props.label}
                <input type="checkbox" onChange = {() =>this.props.onChange()} checked={this.props.checked} />
                <span className="checkmark">   
                </span>
            </label>
        );
    }
}

export default CheckBox;