import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MyPlaceHolder from '../../img/22.jpg';

const Sidebar = () => {
    return (
        <Fragment>

        <aside className="sidebar">
            <div className="card mb-4">
                <div className="card-body">
                    <h4 className="card-title">About</h4>
                    <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                </div>
            </div>
        </aside>

        <aside className="sidebar sidebar-sticky">
            <div className="card mb-4">
                <div className="card-body">
                    <h4 className="card-title">Tags</h4>
                    <Link className="btn btn-light btn-sm mb-1" to="/">Journey</Link>
                    <Link className="btn btn-light btn-sm mb-1" to="/">Work</Link>
                    <Link className="btn btn-light btn-sm mb-1" to="/">Lifestype</Link>
                    <Link className="btn btn-light btn-sm mb-1" to="/">Photography</Link>
                    <Link className="btn btn-light btn-sm mb-1" to="/">Food & Drinks</Link>
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
};

export default Sidebar;