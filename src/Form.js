import React from 'react'
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name:"",
            email: "",
            message: ""
        };
    }

    SubmitForm = async (message, email, name) => {
        try {
            message = this.state.message;
            name = this.state.name;
            email = this.state.email;

            var dataJSON = {
                "operation": "create",
                "tableName": "MK-Decision-Challenge-Messages",
                "payload": {
                    "Item": {
                        "id": (1 + Math.floor((Math.random() * 100))),
                        "name": name,
                        "email": email,
                        "message": message
                    }
                }
            };

            dataJSON = JSON.stringify(dataJSON);
            console.log("sending info to database:");
            console.log(dataJSON);
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
            console.log("sending email with info:");
            console.log(emailJSON);
            await axios.post('https://7ly0o5hj1l.execute-api.us-east-2.amazonaws.com/stage001/MKDecision-Challenge-Email-Function', emailJSON);

        } catch (err) {
            alert(err)
        }
    }


    render() {

        return (
            <div>
                <form className="form">
                    <TextField
                        fullWidth
                        id="Name"
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        value={this.state.name}
                        onChange={event => this.setState({ name: event.target.value })}
                    />
                    <TextField
                        fullWidth
                        id="Email"
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        value={this.state.email}
                        onChange={event => this.setState({ email: event.target.value })}
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
                        value={this.state.message}
                        onChange={event => this.setState({ message: event.target.value })}
                    />
                    <Button variant="outlined" onClick={this.SubmitForm} >Submit</Button>
                </form>
            </div>
        )
    }
} 