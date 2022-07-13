import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ContactMap from '../components/ContactMap';
import WindowLinks from "../components/windows-links";
import DoorsLinks from "../components/doors-links";

const kingstonUponThames = () => {
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={`assets/images/about-us.jpeg`} title={'Kingston Upon Thames'} />

        <div className='single-services-page'>
          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='col-md-8 col-sm-12'></div>
              <div className='single_service_left'>
                {/* <img src={`assets/images/about-us.jpeg`} alt="" className="container-fluid" /> */}
                <h4>Windows, Doors & Conservatories in Kingston-upon-Thames</h4>
                <p className='h5'>
                  If you are looking for new windows, doors or a conservatory in Kingston-upon-Thames, look no further
                  than the expert team at Supreme Windows London. We specialise in the manufacture of high quality
                  products designed to meet your exact specifications, as well as the supply of window systems from some
                  of the leading manufacturers on the market.
                </p>
                <p>
                  And thanks to our dedicated and expert team, you can rely on us for professional installation and a
                  comprehensive 10 year insurance-backed guarantee that ensures that all of our products will provide
                  you with years and years of exceptional performance.
                </p>
                <h2>Other Products</h2>
                <WindowLinks />
                <p className='mt-3'>
                  No matter what the style of your house, your budget or your requirements – you can rely on the team at
                  Supreme Windows London to find the perfect solution for you. We work throughout Kingston-upon-Thames
                  and London to provide a complete glazing service, and would be happy to arrange a home visit and
                  quotation today. Simply give us a call today to find out more.
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
            <ContactMap latitude='51.417506' longitude='-0.283199' />
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default kingstonUponThames;

const ListItem = (text) => {
  return (
    <a className="h6" style={{ color: "#860bd7", textDecorationLine: "underline" }}>
      {text}
    </a>
  );
};
