import React, { Fragment } from 'react';

import AboutContent from '../components/AboutContent';
import BlogList from '../components/BlogList';
import ChooseUs from '../components/ChooseUs';
import ClinetCarousel from '../components/ClinetCarousel';
import Contact from './contact';
import ContactForm2 from '../components/ContactForm';
import Funfact from '../components/Funfact';
import GalleryContent from '../components/GalleryContent';
import LayoutOne from '../layouts/LayoutOne';
import PricingList from '../components/PricingList';
import ProductsList from '../components/ProductsList';
import PvController from './automatrix_Pages/Services/PvController';
import ServiceContent from '../components/ServiceContent';
import Slides from '../components/Slides';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';
import WorkProcess from '../components/WorkProcess';

// import ContactForm from '../components/ContactForm';

const Home = () => {
  return (
    <Fragment>
      <LayoutOne pageTitle='Automatrix'>
        <Slides />
        <AboutContent />
        <ServiceContent />
        /** */
        {/* <PV_Controller /> */}
        /** */
        {/* <Funfact /> */}
        {/* <WorkProcess /> */}
        {/* <ChooseUs />  */}
        {/* <ProductsList /> */}
        {/* <PricingList />  */}
        <GalleryContent />
        {/* <Team />  */}
        {/* <Testimonial /> */}
        {/* <BlogList />  */}
        {/* <ClinetCarousel /> */}
        {/* <ContactForm /> */}
        <ContactForm2 />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
