import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      message: ""
    }
  }

  onSubmit = async (e) => {

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      this.setState({ email: '', subject: '', message: '' })
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    return (
      <section id="py-5">
        <div className="container text-center">
          <div>
            <h1><span>Get In Touch.</span></h1>
          </div>
        </div>
        <div>
          <div className="row">
            <form className="col-md-4 offset-md-4" action="" method="post" id="contactForm" name="contactForm" onSubmit={this.onSubmit}>

              <div className='form-row'>
                <div className="col form-group">
                  <label htmlFor="Email">Email <span className="required">*</span></label><br />
                  <input type="email" size="35" id="contactEmail" name="contactEmail" onChange={(e) => this.setState({ email: e.target.value })} /><br />
                </div>
              </div>


              <div className='form-row'>
                <div className="col form-group">
                  <label htmlFor="Subject">Subject <span className="required">*</span></label><br />
                  <input type="text" size="35" id="contactSubject" name="contactSubject" onChange={(e) => this.setState({ subject: e.target.value })} /><br />
                </div>
              </div>

              <div className='form-row'>
                <div className="col form-group">
                  <label htmlFor="Message">Message <span className="required">*</span></label><br />
                  <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={(e) => this.setState({ message: e.target.value })}></textarea><br />
                </div>
              </div>

              <div>
                <button className="submit btn btn-primary"> Submit </button>
              </div>

            </form>
          </div>
        </div>
      </section >
    );
  }
}

export default Contact;
