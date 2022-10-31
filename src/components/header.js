import React, { Component } from 'react';
import photo from "../assets/photo.jpg"
import share from "../assets/share.png"
import menu from "../assets/menu.png"

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header'>
                <div className='profile'>
                    <div className='profile__inner'>
                    <img id="profile__img" src={photo}/>
                    <a href='https://twitter.com/RansomEric2' id="name">Ifeanyi Okpara</a>
                    <span id="slack">ransomplain</span>
                    </div>   
                    <div className='share-profile'>
                       <a href='#'> 
                            <div className='share-btn'>
                                <div id="share-circle">
                                    <img src ={share} /> 
                                </div>
                               
                            </div>
                         
                         </a> 
                    </div>

                    <div className='mobile-menu'>
                       <a href='#'> 
                            <div className='menu-btn'>
                                <div id="menu-circle">
                                    <img src ={menu} /> 
                                </div>
                               
                            </div>
                         
                         </a> 
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;