import React, { Fragment } from "react";

import AboutContent from '../components/AboutContent';
import Breadcrumb from "../components/Breadcrumb";
import LayoutOne from "../layouts/LayoutOne";
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import WorkProcess from '../components/WorkProcess';

const AboutPg = () => {
  return (
    <Fragment>
      <LayoutOne pageTitle='Automatrix'>
        {/* <Breadcrumb bgImg={"/assets/images/about-us-sidebar.jpeg"} title="About Us" /> */}
        <Breadcrumb bgImg={'/assets/images/amx/2.png'} title='' />
        <div className='about-page'>
          <AboutContent />
          {/* <Team />
          <WorkProcess />
          <Testimonial /> */}
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default AboutPg;