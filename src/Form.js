import React from 'react'
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './FormStyle.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            email: "",
            message: "",
            nameValid: false,
            emailValid: false,
            messageValid: false,
            formValid: false
        };
    }

    validateForm = () => {
        const {nameValid, emailValid, messageValid} = this.state;
        this.setState({
            formValid: nameValid && emailValid && messageValid
        })
    }

    updateName = (name) => {
        this.setState({name}, this.validateName)
    }

    validateName = () => {
        const {name} = this.state;
        let nameValid = true;

        if (name.length < 1) {
            nameValid = false;
        }

        this.setState({nameValid}, this.validateForm)
    }

    updateEmail = (email) => {
        this.setState({email}, this.validateEmail)
    }

    validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            emailValid = false;
        }

        this.setState({emailValid}, this.validateForm)
    }

    updateMessage = (message) => {
        this.setState({message}, this.validateMessage)
    }

    validateMessage = () => {
        const {message} = this.state;
        let messageValid = true;

        if (message.length < 1) {
            messageValid = false;
        }

        this.setState({messageValid}, this.validateForm)
    }

    SubmitForm = async (message, email, name) => {
        try {
            message = this.state.message;
            name = this.state.name;
            email = this.state.email;

            var dataJSON = {
                "Item": {
                    "id": (1 + Math.floor((Math.random() * 100))),
                    "name": name,
                    "email": email,
                    "message": message
                }
            };

            dataJSON = JSON.stringify(dataJSON);
            // console.log("sending info to database:");
            // console.log(dataJSON);
            await axios.post('https://7ly0o5hj1l.execute-api.us-east-2.amazonaws.com/stage001/MKD-Request-Test', dataJSON);

            this.SendSES(email, message, name);

        } catch (err) {
            alert(err)
        }
    }

    SendSES = async (email, message, name) => {
        try {
            var emailJSON = {
                "email": email,
                "name": name,
                "message": message
            };

            emailJSON = JSON.stringify(emailJSON);
            // console.log("sending email with info:");
            // console.log(emailJSON);
            await axios.post('https://7ly0o5hj1l.execute-api.us-east-2.amazonaws.com/stage001/MKDecision-Challenge-Email-Function', emailJSON);

        } catch (err) {
            alert(err)
        }
    }


    render() {

        return (
            <div>
                <h2> MK Decision Challenge </h2>
                <form className="Form">
                    <TextField
                        fullWidth
                        id="Name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        required
                        value={this.state.name}
                        onChange={event => this.updateName(event.target.value)}
                    />
                    <TextField
                        fullWidth
                        id="Email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        required
                        value={this.state.email}
                        onChange={event => this.updateEmail(event.target.value)}
                    />
                    <TextField
                        fullWidth
                        multiline
                        rows="4"
                        id="Message"
                        label="Message"
                        defaultValue=""
                        margin="normal"
                        variant="outlined"
                        required
                        value={this.state.message}
                        onChange={event => this.updateMessage(event.target.value)}
                    />
                    <Button variant="outlined" onClick={this.SubmitForm} disabled={!this.state.formValid} >Submit</Button>
                </form>
                <h6> Carl Amacker</h6>
            </div>
        )
    }
} 