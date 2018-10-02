import React, { Component, Fragment } from 'react';
import MyPlaceHolder from '../../img/22.jpg';
import { Link } from 'react-router-dom';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Fragment>
                <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src={MyPlaceHolder} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Card Title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <div className="card-body">
                        <Link to="/" className="card-link">Edit/Delete Blog</Link>
                        <Link to="/write" className="card-link">Write Blog</Link>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default Admin;
