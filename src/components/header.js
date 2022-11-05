import React, { Component } from 'react';
import "../assets/styles/layout.css"
import photo from "../assets/images/photo.jpg"
import share from "../assets/icons/share.png"
import menu_icon from "../assets/icons/menu.png"

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header'>
                <div className='profile'>
                    <div className='profile__inner'>
                    <img alt="profile-img" id="profile__img" src={photo}/>
                    <a href='https://twitter.com/RansomEric2' id="name">Victoria Kazeem</a>
                    <span id="slack">ransomplain</span>
                    </div>   
                    <div className='share-profile'>
                       <a href='/'> 
                            <div className='share-btn'>
                                <div id="share-circle">
                                    <img alt="share" src ={share} /> 
                                </div>
                               
                            </div>
                         
                         </a> 
                    </div>

                    <div className='mobile-menu'>
                       <a href='/'> 
                            <div className='menu-btn'>
                                <div id="menu-circle">
                                    <img alt="menu" src ={menu_icon} /> 
                                </div>
                               
                            </div>
                         
                         </a> 
                    </div>

                    {/* <div className='mobile-menu'>
                       <a href='#'> 
                          <img src ={menu_icon} /> 
                         </a> 
                    </div> */}
                </div>
                {/* <div className='share-profile'>
                       <a href='#'> 
                            <div className='share-btn'>
                                <div id="share-circle">
                                    <img src ={share} /> 
                                </div>
                               
                            </div>
                         
                         </a> 
                    </div> */}
               
            </div>
        );
    }
}
 
export default Header;