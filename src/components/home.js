import React, { Component } from 'react';
import Button from "../components/button"
import github_icon from "../assets/github.png"
import slack_icon from "../assets/slack.png"

const buttons = [
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
        url: "https://books.zuri.team/python-for-beginners?ref_id=ransomplain",
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
]

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div className="home">
                <div className='links-container'>
                 {buttons.map(button => <Button key ={button.id} url = {button.url} text = {button.text} id = {button.id} />)}
                </div>

                <div className='social-links'>
                    <a href='#'>
                        <img src={slack_icon} />
                    </a>
                    <a href='https://github.com/ransomeric'>
                       <img src={github_icon} />
                    </a>
                </div>
            
          </div>
        );
    }
}
 
export default Home;