import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactMap from "../components/ContactMap";
import WindowLinks from "../components/windows-links";
import DoorsLinks from "../components/doors-links";

const purley = () => {
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={`assets/images/about-us.jpeg`} title={'Purley'} />
        <div className='single-services-page'>
          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='col-md-8 col-sm-12'></div>
              <div className='single_service_left'>
                {/* <img src={`assets/images/about-us.jpeg`} alt="" className="container-fluid" /> */}
                <h4>Windows, Doors & Conservatories in Purley</h4>
                <p className='h5'>
                  Supreme Windows London operate throughout Purley and surrounding areas, supplying and installing
                  windows, doors and conservatories. We specialise in the manufacture of high quality units and window
                  systems that keep the heat in and the noise out – making your home more energy and efficient, secure
                  and comfortable.
                </p>
                <p>
                  We have a highly experienced team who provide a comprehensive, professional and fully guaranteed
                  installation service for all of our products – so you can rest assured of high quality products
                  installed to the highest standards for a long lasting finish and years of superior performance.
                </p>
                <h2>Other Products</h2>
                <WindowLinks />
                <p className='mt-3'>
                  We have a huge selection of styles and designs for all of our products, so no matter whether you’re
                  looking for a traditional style conservatory to complement your home, or some modern uPVC windows to
                  lower your carbon footprint, we have a solution for every requirement and budget. Simply give us a
                  call to find out more about our windows and doors in Purley, and we’ll arrange a home visit and
                  quotation.
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
            <ContactMap latitude='51.330372' longitude='-0.114322' />
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default purley;

const ListItem = (text) => {
  return (
    <a className="h6" style={{ color: "#860bd7", textDecorationLine: "underline" }}>
      {text}
    </a>
  );
};
