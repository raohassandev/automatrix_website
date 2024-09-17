import React, { Component, Fragment } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import { CONTACT } from '../helpers/products';
import { ContactDetailsBox } from '../components/ContactDetailsBox';
import ContactMap from '../components/ContactMap';
import ContactUsForm from '../components/ContactUsForm';
import LayoutOne from '../layouts/LayoutOne';
import emailjs from 'emailjs-com';
import validator from 'validator';

const EMAIL_USER_ID = 'user_QfNO2qhhjvW2AVguZK0mu';
const TEMPLATE_ID = 'template_n1v9nss';
const SERVICE_ID = 'service_lkdmglh';

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <LayoutOne pageTitle='Automatrix'>
          <Breadcrumb bgImg={'/assets/images/amx/6.png'} title='' />

          <div className='contact-page'>
            <ContactUsForm />
          </div>

          <div className='contact-page'>
            <div className='contact_wrp'>
              <div className='row'>
                <div className='col-sm-12 map-container'>
                  <ContactMap
                    latitude={CONTACT.location.latitude}
                    longitude={CONTACT.location.longitude}
                  />
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }

  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      phone: '',
      subject: '',
      message: '',
      email_err: '',
      phone_err: '',
      name_err: '',
      subject_err: '',
      message_err: '',
      return_msg: '',
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
    if (e.target.value === '') this.setState({ email_err: 'Required Field' });
    else this.setState({ email_err: '' });
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
    if (e.target.value === '') this.setState({ name_err: 'Required Field' });
    else this.setState({ name_err: '' });
  }
  handleChangePhone(e) {
    console.log('validator -> ', validator.isMobilePhone(e.target.value));
    this.setState({ phone: e.target.value });
    // if (e.target.value === "") this.setState({ phone_err: "Required Field" });
    // else this.setState({ phone_err: "" });
    if (e.target.value === '') {
      this.setState({ phone_err: 'Required Field' });
    } else if (validator.isMobilePhone(e.target.value)) {
      this.setState({ phone_err: '' });
    } else {
      this.setState({ phone_err: 'Not a valid phone number' });
      // console.log('not a valid phone')
    }
  }
  handleChangeSubject(e) {
    this.setState({ subject: e.target.value });
    if (e.target.value === '') this.setState({ subject_err: 'Required Field' });
    else this.setState({ subject_err: '' });

    console.log(e.target.value);
  }
  handleChangeMessage(e) {
    this.setState({ message: e.target.value });
    if (e.target.message === '')
      this.setState({ message_err: 'Required Field' });
    else this.setState({ message_err: '' });
  }

  handleSubmit1() {
    if (this.state.name === '') {
      this.setState({ name_err: 'Required Field' });
      return;
    }
    if (this.state.email === '') {
      this.setState({ email_err: 'Required Field' });
      return;
    }
    if (this.state.phone === '') {
      this.setState({ phone_err: 'Required Field' });
      return;
    }
    if (this.state.subject === '') {
      this.setState({ subject_err: 'Required Field' });
      return;
    }
    if (this.state.message === '') {
      this.setState({ message_err: 'Required Field' });
      return;
    }

    var EmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!EmailReg.test(this.state.email)) {
      this.setState({ email_err: 'Enter Valid Email' });
      return;
    }
    if (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.subject === '' ||
      this.state.message === ''
    ) {
      this.setState({ return_msg: 'Fill All First', flag: false });
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
            console.log('SUCCESS!', response.status, response.text);
          },
          (err) => {
            console.log('FAILED...', err);
          }
        )
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.setState({
            email: '',
            name: '',
            phone: '',
            subject: '',
            message: '',
            return_msg: 'Success.',
            flag: true,
          });
        });
    }
  }
}

export default Contact;
