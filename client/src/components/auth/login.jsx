import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect, Link } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
            .then((loggedIn) => {
                if (loggedIn) {
                    this.setState({ redirectToReferrer: true, checkingLogin: false });
                } else {
                    this.setState({ checkingLogin: false });
                }
            });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
            .then(() => {
                this.setState({ redirectToReferrer: true });
            }).catch((err) => {
                if (err.message) {
                    this.setState({ feedbackMessage: err.message });
                }
            });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { redirectToReferrer, checkingLogin } = this.state;

        if (checkingLogin) {
            return <IndeterminateProgress message="Checking Login Status..." />;
        }
        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }

        return (
            <Fragment>
                <main className="py-5">
                    <div className="container">

                        <form className="col-md-4 offset-md-4" onSubmit={(e) => this.login(e)}>
                            <p>You must be logged in to view this page.</p>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input id="email" className="form-control" type="email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input id="password" className="form-control" type="password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                            </div>
                            {this.state.feedbackMessage ? (
                                <p>{this.state.feedbackMessage}</p>
                            ) : null}
                            <input type="submit" value="Login" className="btn btn-primary" />
                            <div className="form-row">
                                    <div className="col">
                                        <Link to="/register">Create Account</Link>
                                    </div>
                                </div>
                            

                        </form>
                    </div>
                </main>

                {/* <main className="py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-4 offset-md-4">
                                {alert}
                            </div>
                        </div>
                        <div className="row">
                            <form className="col-md-4 offset-md-4" onSubmit={(e) => this.login(e)}>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <input className="form-control" type="text" placeholder="Email" onChange={(e) => this.handleEmailChange(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col form-group">
                                        <input className="form-control" type="password" placeholder="Password" onChange={(e) => this.handlePasswordChange(e.target.value)} required />
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col">
                                        <button className="btn btn-primary btn-lg w-100">Login</button>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <Link to="/register">Create Account</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main> */}
            </Fragment>
        );
    }
}

export default Login;