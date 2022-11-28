import React, {Component} from "react";

export class SubscriptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            isAgreeWithTerms: '',
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckboxChange = (event) => {
        this.setState({[event.target.name]: event.target.checked});
    }

    handleSubmit = () => {
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)) {
            alert('Invalid email!');
            return;
        }

        if (!this.state.isAgreeWithTerms) {
            alert('Not accepted!');
            return;
        }

        alert('Thank you!');
        this.setState({
            email: '', 
            isAgreeWithTerms: ''
        });
    }

    render() {
        const {email, isAgreeWithTerms} = this.state;

        return <div>
            <input 
                type="text" 
                name="email" 
                placeholder="email"
                value={email}
                onChange={this.handleChange}
            />
            <br />
            <label>
                <input 
                    type="checkbox" 
                    name="isAgreeWithTerms" 
                    checked={isAgreeWithTerms}
                    onChange={this.handleCheckboxChange}
                />
                I agree with terms and conditions
            </label>
            <br />
            <button onClick={this.handleSubmit}>Send</button>
        </div>
    }
}