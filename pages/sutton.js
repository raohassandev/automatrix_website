import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactMap from '../components/ContactMap'
import WindowLinks from "../components/windows-links";
import DoorsLinks from "../components/doors-links";

const sutton = () => {
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={`assets/images/about-us.jpeg`} title={'Sutton'} />
        <div className='single-services-page'>
          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='col-md-8 col-sm-12'></div>
              <div className='single_service_left'>
                {/* <img src={`assets/images/about-us.jpeg`} alt="" className="container-fluid" /> */}
                <h4>Windows, Doors & Conservatories in Sutton</h4>
                <p className='h5'>
                  Whether you are looking for a reliable company to supply and install new windows, doors or even a
                  conservatory in Sutton, make sure you give Supreme Windows London a call. Our professional team have
                  years of experience and can manufacture tailor made window systems, as well supply units from some of
                  the leading manufacturers on the market.
                </p>
                <p>
                  All of our team are fully trained and have the skills to provide a completely professional
                  installation with all of our products, and this, combined with our comprehensive 10 year
                  insurance-backed guarantee, ensures that when you buy from us, you can be sure of high quality and
                  great value.
                </p>
                <h2>Other Products</h2>
                <WindowLinks />
                <p className='mt-3'>
                  We have a huge selection of windows and doors, and an array of conservatory styles to ensure that we
                  have something to suit every home – whether you’re looking for a traditional or modern finish. Simply
                  give us a call today to find out more and we’ll arrange a home visit from one of our experienced team
                  to provide you with a comprehensive quotation – no matter where you are in or around Sutton.
                </p>
                <h2>uPVC Windows - Doors - Conservatories</h2>
                <DoorsLinks />
                <p className='mt-3'>
                  More and more homeowners are choosing uPVC windows and doors to complete the finish of their home due
                  to uPVC products being very good insulating materials with multi-chambered frames making for a highly
                  energy efficient home. Not only are they a more economical option than most but they're also
                  incredibly easy to maintain leaving you with less hours cleaning and more time relaxing.
                </p>
              </div>
            </div>
          </div>
          <div className='col-sm-12 map-container'>
            <ContactMap latitude='51.3783447' longitude='-0.1726751' />
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default sutton;

const ListItem = (text) => {
  return (
    <a className="h6" style={{ color: "#860bd7", textDecorationLine: "underline" }}>
      {text}
    </a>
  );
};
