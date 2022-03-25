import React, { Fragment } from "react"; 
import LayoutOne from "../layouts/LayoutOne";
import Slides from '../components/Slides';
import AboutContent from '../components/AboutContent';
import ServiceContent from '../components/ServiceContent';
import Funfact from '../components/Funfact';
import WorkProcess from '../components/WorkProcess';
import ChooseUs from '../components/ChooseUs'; 
import ProductsList from '../components/ProductsList'; 
import PricingList from '../components/PricingList';  
import GalleryContent from '../components/GalleryContent';  
import Team from '../components/Team';  
import Testimonial from '../components/Testimonial';  
import BlogList from '../components/BlogList'; 
import ClinetCarousel from '../components/ClinetCarousel';
import ContactForm from '../components/ContactForm';
import Contact from "./contact";

const Home = () => {
  return (
    <Fragment>
      <LayoutOne pageTitle="Windows Direct">
        <Slides />
        <AboutContent />
        <ServiceContent />
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
        <ContactForm />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;