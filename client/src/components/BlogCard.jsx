import React from 'react';
import { Link } from 'react-router-dom';
import MyPlaceHolder from '../../img/22.jpg';
import moment from 'moment';

const BlogCard = (props) => {
    //DESTRUCTURE
    const { id, title, content, _created } = props.blog;
    return (
        <article className="card mb-4">
            <header className="card-header">
                <div className="card-meta">
                    {/* _CREATED PROPS */}
                    <time className="timeago">{moment(_created).format("dddd, MMM Do YYYY, h:mm a")}</time>
                </div>
                {/* BLOG TITLE PROPS */}
                <Link to={`/blog/${id}`}>
                    <h4 className="card-title">{title}</h4>
                </Link>
            </header>
            {/* BLOG ID PROPS */}
            <Link to={`/blog/${id}`}>
                <img className="card-img" src={MyPlaceHolder} alt="" />
            </Link>
            {/* BLOG CONTENT PROPS */}
            <div className="card-body">
                <p className="card-text">{content.substring(0, 100)} ...</p>
            </div>
        </article>
    );
};

export default BlogCard;