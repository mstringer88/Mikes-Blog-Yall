import React, { Component } from 'react';

class EditBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPostObject: {},
            title: '',
            content: ''
        };
    }

    componentDidMount() {
        fetch(`/api/blogs/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({
                blogPostObject: data,
                title: data.title,
                content: data.content
            }))
    }

    handleEditBlogButton(e) {
        //fetch put
        let editBlogPost = {
            title: this.state.title,
            content: this.state.content
        };

        fetch(`/api/blogs/${this.props.match.params.id}`, {
            method: 'PUT',
            body: JSON.stringify(editBlogPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => this.setState({
                blogPostObject: data
            }))
            .catch(err => console.log(`Didn't update it: ${err}`))
    };


    render() {
        return (
            <main className="main py-5 bg-light" role="main">

                <div className="container">

                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="text-center">
                                <h2>Modify Your Blog..</h2>
                                <hr />
                            </div>

                            <div className="form-group">
                                <label for="title">Title</label>
                                <input value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} type="text" className="form-control form-control-lg" id="title" placeholder="Enter a title" />
                            </div>

                            <div className="form-group">
                                <label for="tags">Tags Fam</label>
                                {/* checkboxes here when you get to advanced stuff ;)~ */}
                            </div>

                            <div className="form-group">
                                <label for="title">Your story</label>
                                {/* <div className="editor"> */}
                                <textarea className="editor" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} style={{ height: '20em' }} />                               
                            </div>

                            <button onClick={(e) => this.handleEditBlogButton(e)} className="btn btn-success">Publish</button>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
};

export default EditBlog;