import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import MyPlaceHolder from '../../img/22.jpg';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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

            <aside className="sidebar sidebar-sticky">
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Tags</h4>
                        <Link className="btn btn-light btn-sm mb-1" to="/life">Life</Link>
                    </div>
                </div>

                {/* POPULAR STORIES HARD CODED !!!!!!!!!!!! */}
                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Popular stories</h4>

                        <Link to="/blog/1" className="d-inline-block">
                            <h4 className="h6">The blind man</h4>
                            <img className="card-img" src={MyPlaceHolder} alt="" />
                        </Link>
                        <time className="timeago" datetime="2017-10-03 20:00">3 october 2017</time> in Lifestyle
        
                        <Link to="/blog/2" className="d-inline-block mt-3">
                            <h4 className="h6">Crying on the news</h4>
                            <img className="card-img" src={MyPlaceHolder} alt="" />
                        </Link>
                        <time className="timeago" datetime="2017-07-16 20:00">16 july 2017</time> in Work
                    </div>
                </div>
            </aside>
        
            </Fragment>
        );
    }
};


export default Sidebar;