import React, { Component, Fragment } from 'react';
import MyPlaceHolder from '../../img/22.jpg';
import { Link } from 'react-router-dom';

class SingleBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleBlog: {}
        };
    }

    componentWillMount() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then(data => data.json())
            .then(blog => {
                //fetch SINGLE blog w/ this.props.match.params.id
                this.setState({
                    singleBlog: blog
                });
            });
    }

    handleDeleteClick(e) {
        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'DELETE'
        })
            .catch(err => (console.log(`I'm not deleted: ${err}`)))
    }

    render() {
        // 8======3 ~~~~~ destructure

        const { id, title, content } = this.state.singleBlog;
        return (
            <Fragment>
                <article className="card mb-4">
                    <header className="card-header text-center">
                        <div className="card-meta">
                            {/* OPTIONAL _CREATED */}
                            <time className="timeago" datetime="2017-10-26 20:00">26 october 2017</time> in Journey
                        </div>
                        {/* BLOG TITLE */}
                        <h1 className="card-title">{title}</h1>
                    </header>
                    <img className="card-img" src={MyPlaceHolder} alt="" />
                    <div className="card-body">
                        {/* ALL THIS IS BLOG CONTENT */}
                        <p>{content}</p>
                    </div>
                </article>
                <Link className="btn btn-secondary" to={`/blog/${this.props.match.params.id}/edit`}>Edit Blog</Link>
                <button onClick={(e) => { this.handleDeleteClick(e); this.props.history.push('/') }} className="btn btn-danger pull-right" data-toggle="tooltip" data-placement="top" title="Delete Blog">Delete Blog</button>
            </Fragment>
        );
    }

};

export default SingleBlog;