import React, { Component } from 'react';
import "../assets/styles/layout.css"
import zuriLogo from "../assets/logos/zuri.png";
import zuriDot from "../assets/logos/red.png"
import i4g from "../assets/logos/I4G.png"

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='footer'>
                <div className='left'>
                    <img alt="zuri-text" src={zuriLogo} id="zuri-text" />
                    <img alt="zuri-dot" src={zuriDot} id="zuri-dot" />
                </div>
                <div className='center'>
                    <span>HNG Internship 9 Frontend Task</span>
                </div>
                <div className='right'>
                    <img alt="i4G" src= {i4g} />
                </div>
            </div>
        );
    }
}
 
export default Footer;