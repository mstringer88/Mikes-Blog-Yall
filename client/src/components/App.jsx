import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import BlogsList from './BlogsList';
import SingleBlog from './SingleBlog';
import WriteBlog from './WriteBlog';
import EditBlog from './EditBlog';
import Admin from './Admin';
import Login from './auth/login';
import Logout from './auth/logout';
import PrivateRoute from './auth/privateRoute';



class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" component={BlogsList} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/logout" component={Logout} />
                        <Route path="/admin" component={Admin} />
                        <Route exact path="/blog/:id" component={SingleBlog} />
                        <Route path="/write" component={WriteBlog} />
                        <Route exact path="/blog/:id/edit" component={EditBlog} />
                    </Switch>
                </Fragment>
            </Router>
        );
    }
}

export default Navigation;