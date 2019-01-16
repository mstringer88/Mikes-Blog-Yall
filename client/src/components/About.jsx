import React, { Fragment, Component } from 'react';



class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <div className="container text-center mt-5 jumbotron">
                    <h1>About Me</h1>
                </div>
                <div className="container text-center">
                    <div className="card mb-4">
                        <div className="card-body">
                            <p className="card-text">My name is Michael and I am a recent graduate of a coding bootcamp through Covalence. I have been married to my wife Tamara for a year and half and we have a golden named Jax. I was born and raised in Birmingham but spent some time working in southern California and traveling the world while I was in the military. After I discharged from the military I decided that I wanted to take advantage of the education opportunities that were offered and go to college. I started off at Jeff State where I earned my Associated degree in Business then transfered to UAB where I earned my Bachelors degree in Industrial Distribution concentrating in medical equipment and supplies distribution.</p>
                            <p>I enjoy spending time with my family and hanging out with my friends when I have the opportunity. Most of the time my wife and I stay pretty low key and enjoy sitting back and watching Netflix with a bottle of wine.</p>
                            <p>As I mentioned, we have a golden retriever named Jax and most of our time is pretty much spent with him since we don't have any kids yet. Alot of days spent at the park or getting him around other dogs to hang out with.</p>
                            <p>I'm an all around average guy who just enjoys spending time with those closest to me and working in the new the field that I have found to enjoy. Anything else you would like to know just hit me up in the contact section and I'll get back to you.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About;