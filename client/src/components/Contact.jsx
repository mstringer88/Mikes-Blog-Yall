import React, { Component } from 'react';
import { sendContactEmail } from '../services/contacts'
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleName(name) {
        this.setState({name});
    }

    handleEmail(email) {
        this.setState({email});
    }

    handleMessage(message) {
        this.setState({message});
    }

    handleSubmit(e) {
        e.preventdfault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
        .then(() => {
            this.props.history.push('/');
        }).catch( (err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={ (e) => this.handleSubmit(e)}>
                    <div class="form-group">
                        <label htmlFor="name">Name</label>
                        <input onChange={(e) => this.handleName(e.target.value)} type="text" className="form-control" id="name" placeholder="John Doe" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input onchange={(e) => this.handleEmail(e.target.value)} type="email" id="email" className="form-control" placeholder="example@example.com" required />
                    </div>
                    <div class="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea onChange={(e) => this.handleMessage(e.target.value)} className="form-control" id="message" rows="3" ></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" />
                </form>
            </div>
        )
    }
}

export default Contact;