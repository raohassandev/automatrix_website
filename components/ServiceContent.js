import React, { Component } from 'react';

import Link from 'next/link';
import { getProduct } from '../helpers/getProduct';

class ServiceContent extends Component {
  render() {
    const serviceListArray = [
      {
        image: 'windows-tab.jpeg',
        title: 'Windows',
        description:
          'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are',
        link: { type: 'window', key: 'main' },
      },
      {
        image: 'doors-tab.jpeg',
        title: 'Doors',
        description:
          'Our range of doors are available in a variety of styles, colours and finishes, ensuring a door that will perfectly complement your home whilst also completely increasing your security…',
        link: { type: 'door', key: 'main' },
      },
      {
        image: 'conservatories-tab.jpeg',
        title: 'Conservatories',
        description:
          'Our beautifully designed conservatories will completely enhance your property, both practically and visually, instantly adding value and providing extra living space…',
        link: { type: 'conservatory', key: 'main' },
      },
    ];

    const serviceListtMap = serviceListArray.map((valu, i) => {
      const link = {
        pathname: '/single-services',
        query: getProduct(valu.link.type, valu.link.key),
      };
      return (
        <div className='col-md-4 col-sm-12' key={i}>
          <div className='service-item'>
            <div className='img_serv'>
              <Link href={link}>
                <img src={`assets/images/${valu.image}`} alt='service' />
              </Link>
            </div>
            <div className='service_text' style={{ height: 250 }}>
              <Link href={link}>
                <h4>{valu.title}</h4>
              </Link>
              <p>{valu.description}</p>
            </div>
            {/* <Link href={`${valu.link}`}> */}
            <Link href={link}>
              <a className='serv_link'>
                <i className='icon-glyph-40'></i>
              </a>
            </Link>
          </div>
        </div>
      );
    });

    return (
      <section className='service-section'>
        {/* <div className="animate_icon">
                <div className="animate_item animate_item1 bounce_animate">
                    <img src="assets/images/animate_icon1.png" alt="" />
                </div>
                <div className="animate_item animate_item2 bounce_animate">
                    <img src="assets/images/animate_icon2.png" alt="" />
                </div>
                <div className="animate_item animate_item3 bounce_animate">
                    <img src="assets/images/animate_icon3.png" alt="" />
                </div>
                <div className="animate_item animate_item4 bounce_animate">
                    <img src="assets/images/animate_icon4.png" alt="" />
                </div>
            </div> */}
        <div className='container'>
          {/* Heading */}
          <div className='base-header'>
            <small>What We Offer</small>
            <h3>Service we offer</h3>
          </div>
          {/* End: Heading */}

          <div className='row'>{serviceListtMap}</div>
        </div>
      </section>
    );
  }
}

export default ServiceContent;
