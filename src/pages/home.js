import React, { Component } from 'react';
import Button from "../components/button"
import github_icon from "../assets/icons/github.png"
import slack_icon from "../assets/icons/slack.png"
import Header from '../components/header';
import "../assets/styles/home.css"

const links = [
    {
        text: "Twitter Link",
        url: "https://twitter.com/RansomEric2",
        id: "twitter"
    },
    {
        text: "Zuri Team",
        url: "https://training.zuri.team/",
        id: "btn__zuri"
    },
    {
        text: "Zuri Books",
        url: "http://books.zuri.team/",
        id: "books",
    },
    {
        text: "Python Books",
        url: "https://books.zuri.team/python-for-beginners?ref_id=kelzvictoria",
        id: "book__python",
    },
    {
        text: "Background check for Coders",
        url: "",
        id: "pitch",
    },
    {
        text: "Design Books",
        url: "https://books.zuri.team/design-rules",
        id: "book__design",
    },

    {
        text: "Contact Me",
        url: "/contact",
        id: "contact"
    }
]

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                <Header />
                <div className='links-container'>
                 {links.map(link => <Button key ={link.id} data = {link} />)}
                </div>

                <div className='social-links'>
                    <a href='/'>
                        <img alt="slack" src={slack_icon} />
                    </a>
                    <a href='https://github.com/ransomeric'>
                       <img alt="github" src={github_icon} />
                    </a>
                </div>
            
          </div>
        );
    }
}
 
export default Home;