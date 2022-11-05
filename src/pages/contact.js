import React, { Component } from 'react';
import CheckBox from '../components/checkbox';
import "../assets/styles/contact.css"


class Contact extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: "",
        consent: false,
        message: ""
    }

    toggleConsentCheck = () => {
        this.setState({
            consent: !this.state.consent
        })
    }

    handleInputChange = ({id, value}) => {
        this.setState({
            [id]: value
        })
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    preventDefault (event) {
        event.preventDefault();
    }

    render() { 
        return (
            <div className="contact">
                <h1> Contact Me </h1>
                <h3>Hi there, contact me to ask me about anything you have in mind.</h3>

                <form onSubmit = {this.preventDefault}>
                    <div className="full-col flex__row justify__space-between">
                        <div className="form-control half-col">
                            <label>First name</label>
                            <input type="text" placeholder="Enter your first name" id="first_name" onChange = {(e) => this.handleInputChange(e.target)} />
                        </div>

                        <div className="form-control half-col">
                            <label>Last name</label>
                            <input type="text" placeholder="Enter your last name" id="last_name" onChange = {(e) => this.handleInputChange(e.target)} />
                        </div>
                    </div>


                    <div className="form-control full-col">
                        <label>Email</label>
                        <input type="email" placeholder="yourname@email.com" id="email"  onChange = {(e) => this.handleInputChange(e.target)} />
                    </div>

                    <div className="form-control full-col">
                        <label>Message</label>
                        <textarea placeholder="Send me a message and I'll reply you as soon as possible..." id="message"  onChange = {(e) => this.handleInputChange(e.target)} />
                    </div>

                    <div className="form-control">
                        <CheckBox label="You agree to providing your data to Ifeanyi Okpara who may contact you." id="consent" checked={this.state.consent}  onChange = {() => this.toggleConsentCheck()} />

                    </div>

                    <div className="form-control full-col">
                        <button className="btn" id="btn__submit" onClick = {() => this.handleSubmit()}>Send message</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;