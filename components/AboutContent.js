import React from "react";

const AboutContent = () => {
  return (
    <section className='about-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <div className='about_img'>
              <img src='assets/images/about-us-sidebar.jpeg' alt='about' />
            </div>
          </div>
          <div className='col-md-6 col-sm-12'>
            <div className='about_item_tb'>
              <div className='about_item_tbcell'>
                <div className='base-header base_header_left'>
                  <small>Welcome To Supreme Windows London</small>
                  <h3>About Us</h3>
                </div>
                <div className='about_item'>
                  {/* <h4>About Us</h4> */}
                  <p>
                    The team here at Supreme Windows London are immensely proud of the high quality products we supply
                    and the comprehensive services we offer to our clients throughout London. With years of experience,
                    we are dedicated to staying a step ahead with all the latest training and techniques – which is why
                    we have so many accreditations to our name, including:
                  </p>
                  {/* <ul className='m-0'>
                    <div className='row h5'>
                      <img src='assets/images/check-approve.png' alt='approved' style={{ width: 50 }} />
                      <li>Schüco approved</li>
                    </div>
                    <div className='row h5'>
                      <img src='assets/images/check-approve.png' alt='approved' style={{ width: 50 }} />
                      <li>FENSA registered</li>
                    </div>
                    <div className='row h5'>
                      <img src='assets/images/check-approve.png' alt='approved' style={{ width: 50 }} />
                      <li>Pilkington EnergiKare</li>
                    </div>
                    <div className='row h5'>
                      <img src='assets/images/check-approve.png' alt='approved' style={{ width: 50 }} />
                      <li>BS7413 & BS6206 certifications</li>
                    </div>
                  </ul> */}
                  <p>
                    So you can rest assured that our team have the resources and skills to provide a truly professional
                    and reliable service. In fact, we are so sure that our products and workmanship will stand the test
                    of time that we offer a comprehensive, insurance-backed, 10 year guarantee!
                  </p>
                  <p>
                    Our team understand that buying new windows and doors, or having a conservatory installed, is a huge
                    investment, and we won’t leave you to make the choice by yourself. Simply give us a call and a
                    member of our friendly team will arrange a home visit to discuss your requirements; we’ll go through
                    all your options and help you find the right solution for your home, budget and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*about_wrp*/}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default AboutContent;
