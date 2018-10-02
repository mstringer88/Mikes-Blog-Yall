import React, { Component } from 'react';

class WriteBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
    }

    handleBlogSubmit(e) {
        //fetch post
        e.preventDefault();

        let newBlogPost = {
            title: this.state.title,
            content: this.state.content
        };

        fetch(`/api/blogs/`, {
            method: 'POST',
            body: JSON.stringify(newBlogPost),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => this.props.history.replace(`/`))
            .catch(err => console.log(`You fucked up: ${err}`))
        // console.log('We done?');
    }

    render() {
        return (
            <main className="main py-5 bg-light" role="main">

                <div className="container">

                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="text-center">
                                <h2>Tell your story..</h2>
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
                                    {/* FOR FUTURE ADVANCED USE */}
                                    {/* <div className="js-editable">
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque <a href="#">penatibus</a> et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, <strong>pretium quis, sem.</strong></p>

                                        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>

                                        <p><strong>Aliquam lorem ante</strong>, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. <strong>Etiam rhoncus</strong>. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante <a href="#">tincidunt tempus</a>.</p>

                                        <blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                        </blockquote>

                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, <a href="#">nascetur ridiculus</a> mus. Donec quam felis, ultricies nec, pellentesque eu, <strong>pretium quis, sem.</strong></p>
                                    </div> */}
                                {/* </div> */}
                            </div>

                            <button onClick={(e) => this.handleBlogSubmit(e)} className="btn btn-success">Publish</button>
                        </div>
                    </div>
                </div>

            </main>
        );
    }
};

export default WriteBlog;