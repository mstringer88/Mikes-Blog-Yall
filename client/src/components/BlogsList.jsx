import React, { Component, Fragment } from 'react';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';
import * as blogServices from '../services/blogs';

class BlogsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogsListFirst: [],
            blogsListSecond: []
        };
    }

    componentWillMount() {

        blogServices.all()
            .then(res => {
                let blogsListFirst = res.splice(0, (res.length / 2));
                let blogsListSecond = res.splice((res.length / 2) - 1);
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
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-6">
                                
                                    {this.renderFirstBlogs()}
                                </div>

                                <div class="col-md-6">
                                    {this.renderSecondBlogs()}
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-md-3 ml-auto">
                            <Sidebar />
                        </div> */}
                    </div>
                </div>
            </main>
        );
    }
};

export default BlogsList;