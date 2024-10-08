import React, { Component } from "react";
import Link from "next/link";
import { getProduct, getServiceList } from "../helpers/getProduct";
import { CONTACT } from "../helpers/products";

const ServiceSidebar = () => {
  const serviceListArray = getServiceList();
  const serviceListMap = serviceListArray.map((item, i) => {
    return (
      <li key={i}>
        <Link
          href={{
            pathname: '/single-services',
            query: getProduct(item.type, item.key),
          }}>
          {item.serviceTitle}
        </Link>
      </li>
    );
  });

  return (
    <div className='single_service_right'>
      <div className='single_service_cat'>
        <ul>{serviceListMap}</ul>
      </div>
      <div className='service_contact'>
        <h4>Contact </h4>
        <div className='serv_contact_wrp'>
          <div className='single-contact-info'>
            <a className='fa ' href={`tel:${CONTACT.phone}`}>
              <i className='fa fa-phone'></i>

              <p>{CONTACT.phone}</p>
            </a>
          </div>
          <div className='single-contact-info'>
            <i className='fa fa-envelope'></i>
            {/* <p>
              #27, East Madison Ave, <br /> Melbourne, Australia
            </p> */}
            <p style={{ width: '80%' }}>{CONTACT.email}</p>
          </div>
          <div className='single-contact-info'>
            <i className='fa fa-globe'></i>
            {/* <p>
              #27, East Madison Ave, <br /> Melbourne, Australia
            </p> */}
            <p style={{ width: '90%' }}>{CONTACT.address}</p>
          </div>
        </div>
      </div>
      {/* <div className="download_brochur">
        <h4>Downloads </h4>
        <p>Loren ipsum dolor cons ectetur adip iscing elit sed do eiu smod tempor </p>
        <ul className="files">
          <li>
            <a href="/single-services">
              <span className="fa fa-file-pdf-o"></span> Download as pdf
            </a>
          </li>
          <li>
            <a href="/single-services">
              <span className="fa fa-file-word-o"></span> Download as doc
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ServiceSidebar;
