import React, {Component} from "react";

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            email: '',
            select: '',
            subscription: false,
            gender: '',
        }

        this.firstNameRef = React.createRef();
        this.emailRef = React.createRef();
        
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.validateName = this.validateName.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckboxChange(event) {
        this.setState(() => ({[event.target.name]: event.target.checked}), () => {
            this.emailRef.current.focus();
        });
    }

    validateName() {
        if (this.state.firstName.length < 5) {
            console.log('Error!');
        }
    }

    componentDidMount() {
        console.log(this.firstNameRef);
        this.firstNameRef.current.focus();
    }
    
    render() {
        const {firstName, email, select, subscription, gender} = this.state;

        return <div>
            <input 
                type="text" 
                name="firstName" 
                placeholder="firstName"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
                ref={this.firstNameRef}
            />
            <input 
                type="text" 
                name="email" 
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                ref={this.emailRef}
            />
            <br />
            <select 
                name="select" 
                value={select} 
                onChange={this.handleChange}>
                <option value=""></option>
                <option value="1">Val 1</option>
                <option value="2">Val 2</option>
                <option value="3">Val 3</option>
            </select>
            <br />
            <input 
                type="checkbox" 
                name="subscription" 
                checked={subscription}
                onChange={this.handleCheckboxChange}
            />
            <br />
            <input 
                type="radio" 
                name="gender" 
                value="male" 
                onChange={this.handleChange} 
                checked={gender === 'male'}
            /> Male
            <input 
                type="radio" 
                name="gender" 
                value="female" 
                onChange={this.handleChange} 
                checked={gender === 'female'}
            /> Female
        </div>
    }
} 