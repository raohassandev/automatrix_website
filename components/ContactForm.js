import React, { Component, Fragment } from "react";
import emailjs from "emailjs-com";
import validator from "validator";
import { ContactDetailsBox } from "./ContactDetailsBox";

const EMAIL_USER_ID = "user_QfNO2qhhjvW2AVguZK0mu";
const TEMPLATE_ID = "template_n1v9nss";
const SERVICE_ID = "service_lkdmglh";

class ContactForm2 extends Component {
  render() {
    return (
      <Fragment>
        <div className='contact-page'>
          {/*====================  Contact Form  area  ====================*/}
          <section className='contact-section'>
            <div className='container'>
              <div className='base-header'>
                <small>Get in touch</small>
                <h3>Send Us Message</h3>
              </div>
              <div className='contact_wrp'>
                <div className='row'>
                  <div className='col-md-12 col-sm-12  col-lg-8 inner-contact'>
                    <div className='contact-form'>
                      <div id='message'>
                        {this.state.flag ? (
                          <div className='alert alert-success'>
                            <strong>{this.state.return_msg}</strong>
                          </div>
                        ) : null}
                      </div>
                      <form method='post' name='contact-form' id='contact-form'>
                        <div className='row'>
                          <div className='col-lg-6 col-sm-12'>
                            <input
                              type='text'
                              id='name'
                              value={this.state.name}
                              onChange={this.handleChangeName}
                              className='con-field form-control'
                              placeholder='Name'
                            />
                            <span id='err' className='text-danger'>
                              {this.state.name_err}
                            </span>
                          </div>
                          <div className='col-lg-6 col-sm-12'>
                            <input
                              type='text'
                              className='con-field form-control'
                              value={this.state.phone}
                              onChange={this.handleChangePhone}
                              id='phone'
                              placeholder='Phone'
                            />
                            <span id='err' className='text-danger'>
                              {this.state.phone_err}
                            </span>
                          </div>
                          <div className='col-lg-12 col-sm-12'>
                            <input
                              type='text'
                              className='con-field form-control'
                              value={this.state.email}
                              onChange={this.handleChangeEmail}
                              id='exampleInputEmail1'
                              placeholder='Email'
                            />
                            <span id='err' className='text-danger'>
                              {this.state.email_err}
                            </span>

                            <input
                              type='text'
                              id='subject'
                              value={this.state.subject}
                              onChange={this.handleChangeSubject}
                              className='form-control con-field'
                              placeholder='Subject'
                            />
                            <span id='err' className='text-danger'>
                              {this.state.subject_err}
                            </span>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-lg-12 col-sm-12'>
                            <textarea
                              name='comments'
                              id='comments'
                              value={this.state.message}
                              onChange={this.handleChangeMessage}
                              rows='6'
                              className='form-control con-field'
                              placeholder='Your Message'></textarea>
                            <span id='err' className='text-danger'>
                              {this.state.message_err}
                            </span>
                            <div className='submit-area'>
                              <input
                                type='button'
                                id='submit'
                                name='send'
                                onClick={this.handleSubmit1}
                                // onClick={()=> console.log('text')}
                                className='submit-contact submitBnt'
                                value='Send Message'
                              />
                              <div id='simple-msg'></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/*===  Contact Details  ===*/}
                  {ContactDetailsBox}

                  {/*===  end: Contact Details  ===*/}
                </div>
              </div>
            </div>
          </section>
          {/*====================  End: Contact Form area  ====================*/}
        </div>
      </Fragment>
    );
  }

  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      phone: "",
      subject: "",
      message: "",
      email_err: "",
      phone_err: "",
      name_err: "",
      subject_err: "",
      message_err: "",
      return_msg: "",
      flag: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
    if (e.target.value === "") this.setState({ email_err: "Required Field" });
    else this.setState({ email_err: "" });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
    if (e.target.value === "") this.setState({ name_err: "Required Field" });
    else this.setState({ name_err: "" });
  }
  handleChangePhone(e) {
    console.log("validator -> ", validator.isMobilePhone(e.target.value));
    this.setState({ phone: e.target.value });
    // if (e.target.value === "") this.setState({ phone_err: "Required Field" });
    // else this.setState({ phone_err: "" });
    if (e.target.value === "") {
      this.setState({ phone_err: "Required Field" });
    } else if (validator.isMobilePhone(e.target.value)) {
      this.setState({ phone_err: "" });
    } else {
      this.setState({ phone_err: "Not a valid phone number" });
      // console.log('not a valid phone')
    }
  }
  handleChangeSubject(e) {
    this.setState({ subject: e.target.value });
    if (e.target.value === "") this.setState({ subject_err: "Required Field" });
    else this.setState({ subject_err: "" });

    console.log(e.target.value);
  }
  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
    if (e.target.message === "") this.setState({ message_err: "Required Field" });
    else this.setState({ message_err: "" });
  }

  handleSubmit1() {
    if (this.state.name === "") {
      this.setState({ name_err: "Required Field" });
      return;
    }
    if (this.state.email === "") {
      this.setState({ email_err: "Required Field" });
      return;
    }
    if (this.state.phone === "") {
      this.setState({ phone_err: "Required Field" });
      return;
    }
    if (this.state.subject === "") {
      this.setState({ subject_err: "Required Field" });
      return;
    }
    if (this.state.message === "") {
      this.setState({ message_err: "Required Field" });
      return;
    }

    var EmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!EmailReg.test(this.state.email)) {
      this.setState({ email_err: "Enter Valid Email" });
      return;
    }
    if (this.state.name === "" || this.state.email === "" || this.state.subject === "" || this.state.message === "") {
      this.setState({ return_msg: "Fill All First", flag: false });
    } else {
      const templateParams = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        subject: this.state.subject,
        message: this.state.message,
      };

      emailjs
        .send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAIL_USER_ID)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        )
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.setState({
            email: "",
            name: "",
            phone: "",
            subject: "",
            message: "",
            return_msg: "Success.",
            flag: true,
          });
        });
    }
  }
}

export default ContactForm2;
