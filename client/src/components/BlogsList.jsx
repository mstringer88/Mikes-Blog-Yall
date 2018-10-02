import React, { Component, Fragment } from 'react';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';

// import { FAKE_API_CALL } from '../../../TestData';

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogsListFirst: [],
            blogsListSecond: []
        };
    }

    componentWillMount() {
        // let blogsList = FAKE_API_CALL();
        fetch('/api/blogs')
            .then(data => data.json()) //res is an array of blogs   
            .then(res => {
                let blogsListFirst = res.splice(0, (res.length / 2));
                let blogsListSecond = res.splice((res.length / 2) - 2, res.length);
                this.setState({
                    blogsListFirst,
                    blogsListSecond
                });
            }).catch(derp => {
                console.log(derp);
            })
    }

    renderFirstBlogs() {
        return this.state.blogsListFirst.map(blog => {
            return <BlogCard key={blog.id} blog={blog} />
        });
    }

    renderSecondBlogs() {
        return this.state.blogsListSecond.map(blog => {
            return <BlogCard key={blog.id} blog={blog} />
        });
    }

    render() {
        return (
            <main className="main pt-4" role="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-6">
                                    {/* <BlogCard /> */}
                                    {this.renderFirstBlogs()}
                                </div>

                                <div class="col-md-6">
                                    {this.renderSecondBlogs()}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 ml-auto">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </main>
        );
    }
};

export default BlogsList;