import React from 'react';
import { Link } from 'react-router-dom';
import AuthButton from './auth/authButton';



const Header = () => {
    return (
        <header role="banner">
            <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
                <div className="container">

                    <button className="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse order-3 order-md-2" id="navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/write" className="nav-link">Write A Blog</Link>
                            </li>
                        </ul>
                    </div>

                    <h1 className="font-weight-bold mx-auto order-1 order-md-3">Michael's Blog</h1>

                    <div className="collapse navbar-collapse order-4 order-md-4" id="navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li>
                                <AuthButton />
                            </li>
                        </ul>
                    </div>

                    {/* <form className="form-inline" role="search"> */}
                    {/* <input className="search js-search form-control form-control-rounded mr-sm-2" type="text" title="Enter search query here.." placeholder="Search.." aria-label="Search" /> */}
                    {/* </form> */}
                </div>
            </nav>
        </header>
    );
}

export default Header;