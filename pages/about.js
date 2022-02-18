import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import AboutContent from '../components/AboutContent'; 
import Team from '../components/Team'; 
import WorkProcess from '../components/WorkProcess'; 
import Testimonial from '../components/Testimonial';  
import Breadcrumb from "../components/Breadcrumb";

const AboutPg = () => {
  return (
    <Fragment>
        
      <LayoutOne pageTitle="Supreme-Windows-London"> 

        <Breadcrumb 
          bgImg={('/assets/images/header.jpg')}
          title="About Us" 
        /> 
           <div className="about-page"> 

              <AboutContent />  
              <Team /> 
              <WorkProcess /> 
              <Testimonial />
  
            </div>
 
     </LayoutOne>

    </Fragment>
  );
};

export default AboutPg;