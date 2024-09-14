import React, { Component, Fragment } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import LayoutOne from '../layouts/LayoutOne';
import ServiceSidebar from '../components/ServiceSidebar';
import { getBottomArray } from '../helpers/getProduct';
import { useRouter } from 'next/router';

const SingleService_OLD = () => {
  const router = useRouter();
  const { name, title, type, image, bgImg, desPartOne, desPartTwo } =
    router.query;

  const serviceTopArray = [
    {
      image,
      title,
      desPartOne,
      desPartTwo,
    },
  ];

  //   const serviceBottomArray = [
  //     {
  //       image: "process_3.png",
  //       title: "Fresh Vegetable",
  //       des: "Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",
  //     },
  //     {
  //       image: "process_4.png",
  //       title: "Fresh Fruits",
  //       des: "Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",
  //     },
  //   ];

  const serviceBottomArray = getBottomArray(type, title);
  // const serviceBottomArray = bottomArray;

  const serviceToptMap = serviceTopArray.map((val, i) => {
    return (
      <div className='single_service_left' key={i}>
        <img
          src={`assets/images/${val.image}`}
          alt=''
          className='container-fluid'
        />
        <h4>{val.title}</h4>
        <p className='h5'>{val.desPartOne}</p>
        <p>{val.desPartTwo}</p>
      </div>
    );
  });

  const serviceBottomtMap = serviceBottomArray.map((val, i) => {
    return (
      <div className='col-md-6 col-sm-12' key={i}>
        <div className='sing_service_item'>
          <div className='icon-serv'>
            {/* <img src={`assets/images/${val.image}`} alt='' /> */}
            <img src={`assets/images/${val.image}`} alt='' />
          </div>
          <h4>{val.name}</h4>
          <p>{val.miniDes}</p>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb
          // bgImg={('/assets/images/header.jpg')}
          bgImg={`assets/images/${bgImg}`}
          title={name}
        />

        <div className='single-services-page'>
          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-sm-12'>
                  {serviceToptMap}

                  <div className='row single_service_left_botom'>
                    {serviceBottomtMap}
                  </div>
                </div>

                <div className='col-md-4 col-sm-12'>
                  <ServiceSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

const SingleService = () => {
  // const bgImg='../assets/images/header.jpg'
  const bgImg = 'assets/images/conservatories-tab.jpeg'
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={bgImg} title={'Service Title'} />

        <div className='single-services-page'>
          {/*====================  Single Services area ====================*/}
          <div className='single_service'>
            <div className='container'>
              <div className='row'>
                {/* <div className='col-md-8 col-sm-12'> */}
                <div className='col-12'>
                  {/* {serviceToptMap} */}

                  <div className='row single_service_left_botom'>
                    {/* {serviceBottomtMap} */}
                  </div>
                  <h4>PV DG Synch Controller</h4>
                  <p className='h5'>
                    Our PV DG Controller is a state-of-the-art solution designed
                    to optimize the integration and management of power
                    generation from solar photovoltaic (PV) systems and diesel
                    generators (DG). It offers advanced real-time monitoring,
                    control, and customization features across grid supply,
                    generator supply, and solar inverters. Here’s an expanded
                    overview highlighting its optional features and benefits:
                  </p>
                  <h4>Real-time Monitoring and Reporting:</h4>

                  <p>
                    <strong>Grid Supply Monitoring: </strong>
                    Provides continuous monitoring of power and energy
                    parameters from the grid, ensuring real-time visibility into
                    grid availability and quality.
                  </p>
                  <p>
                    <strong>Generator Supply Monitoring:  </strong>
                    Tracks generator
                    output to ensure reliable backup power and efficient
                    utilization.
                  </p>
                </div>

                {/* <div className='col-md-4 col-sm-12'>
                  <ServiceSidebar />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
}
 export default SingleService;
