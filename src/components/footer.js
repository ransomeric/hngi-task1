import React, { Component } from 'react';
import zuriLogo from "../assets/zuri.png";
import zuriDot from "../assets/red.png"
import i4g from "../assets/I4G.png"

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='footer'>
                <div className='left'>
                    <img src={zuriLogo} id="zuri-text" />
                    <img src={zuriDot} id="zuri-dot" />
                </div>
                <div className='center'>
                    <span>HNG Internship 9 Frontend Task</span>
                </div>
                <div className='right'>
                    <img src= {i4g} />
                </div>
            </div>
        );
    }
}
 
export default Footer;