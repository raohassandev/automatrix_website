import React, { Fragment, useRef, useState } from 'react';

import { ContactDetailsBox } from './ContactDetailsBox';
import emailjs from '@emailjs/browser';
import validator from 'validator';

const SERVICE_ID = 'service_lbsghu8';
const TEMPLATE_ID = 'template_tab0cbu';
const PUBLIC_KEY = 'TMRvf3Ap2vNY_wzZb';

const ContactFormCopy = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false); // State to track submission status
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    const formData = form.current;

    if (!formData.name.value) {
      errors.name = 'Name is required';
    }

    if (
      !formData.email.value ||
      !validator.isEmail(formData.email.value)
    ) {
      errors.email = 'Valid email is required';
    }

    if (
      !formData.phone.value ||
      !validator.isMobilePhone(formData.phone.value)
    ) {
      errors.phone = 'Valid phone number is required';
    }

    if (!formData.subject.value) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.value) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    setFormErrors({});
    setSuccessMessage('');

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setLoading(true); // Disable the send button
    const formData = {
      name: form.current.elements.name.value,
      email: form.current.elements.email.value,
      phone: form.current.elements.phone.value,
      subject: form.current.elements.subject.value,
      message: form.current.elements.message.value,
    };

    // Log form data to the console
    console.log('Form Data:', formData);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setLoading(false); // Enable the send button again
      });;
  };;

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
                  <div className='contact-form  '>
                    <div id='message'>
                      {/* {this.state.flag ? ( */}
                      {true ? (
                        <div className='alert alert-success'>
                          <strong>{'this.state.return_msg'}</strong>
                        </div>
                      ) : null}
                    </div>
                    <form ref={form} onSubmit={sendEmail}>
                      <div className='row'>
                        <div className='col-lg-12 col-sm-12'>
                          <label>Name</label>
                          <input
                            type='text'
                            name='name'
                            placeholder='Enter your full name'
                            // className='con-field form-control'
                            className={`con-field form-control ${
                              formErrors.name ? 'is-invalid' : ''
                            }`}
                          />
                          <p>
                            {formErrors.name && (
                              <span className='text-danger'>
                                {formErrors.name}
                              </span>
                            )}
                          </p>
                          <label>Email</label>
                          <input
                            type='email'
                            name='email'
                            placeholder='Enter your email address'
                            // className='con-field form-control'
                            className={`con-field form-control ${
                              formErrors.phone ? 'is-invalid' : ''
                            }`}
                          />
                          <p>
                            {formErrors.phone && (
                              <span className='text-danger'>
                                {formErrors.phone}
                              </span>
                            )}
                          </p>
                          <label>Phone Number</label>
                          <input
                            // type='number'
                            // name='phone'
                            // className='con-field form-control'
                            type='tel'
                            name='phone'
                            className='con-field form-control'
                            placeholder='Enter phone number'
                            pattern='^(\+?\d{1,4}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\-.\s]{7,15}$'
                            title='Please enter a valid phone number with country code (optional)'
                          />
                          <p>
                            {formErrors.phone && (
                              <span className='text-danger'>
                                {formErrors.phone}
                              </span>
                            )}
                          </p>
                          <label>Subject</label>
                          <input
                            type='text'
                            name='subject'
                            placeholder='Enter Subject of the e-mail '
                            className={`con-field form-control ${
                              formErrors.subject ? 'is-invalid' : ''
                            }`}
                          />
                          <p>
                            {formErrors.subject && (
                              <span className='text-danger'>
                                {formErrors.subject}
                              </span>
                            )}
                          </p>
                          <label>Message</label>
                          <textarea
                            name='message'
                            placeholder='write the details of your query. '
                            className={`form-control con-field ${
                              formErrors.message ? 'is-invalid' : ''
                            }`}
                          />
                          <p>
                            {formErrors.message && (
                              <span className='text-danger'>
                                {formErrors.message}
                              </span>
                            )}
                          </p>
                          <input
                            type='submit'
                            value='Send'
                            className='submit-contact submitBnt mt-2 w-100'
                            disabled={loading} // Disable button while loading
                          />
                        </div>
                      </div>
                    </form>{' '}
                    {successMessage && (
                      <div className='alert alert-success mt-3'>
                        {successMessage}
                      </div>
                    )}
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
};

export default ContactFormCopy;
