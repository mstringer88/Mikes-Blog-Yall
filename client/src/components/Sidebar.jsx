import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MyPlaceHolder from '../../img/22.jpg';
import * as blogServices from '../services/blogs';
import moment from 'moment';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstBlog: [],
            secondBlog: []
        };
    }

    async componentWillMount() {

        blogServices.all()
        await (res => {
            let firstBlog = res.slice(firstBlog.length-1);
            let secondBlog = res.slice(secondBlog.length-2);
            this.setState({
                firstBlog,
                secondBlog
            });
        }) (err => {
            console.log(err);
        })
    }
    
    render() {
        return (
            <Fragment>

            <aside className="sidebar">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">About</h4>
                        <p className="card-text">My name is Michael and I am a recent graduate of a coding bootcamp through Covalence. I have been married to my wife Tamara for a year and half and we have a golden named Jax. I was born and raised in Birmingham but spent some time working in southern California and traveling the world.</p>
                 </div>
                </div>
            </aside>

            
        
            </Fragment>
        );
    }
};


export default Sidebar;