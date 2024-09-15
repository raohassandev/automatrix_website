import React, { Component, Fragment } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import LayoutOne from '../layouts/LayoutOne';
import { useRouter } from 'next/router';

const EnergyMonitoring = () => {
  // const bgImg='../assets/images/header.jpg'
  const bgImg = 'assets/images/conservatories-tab.jpeg';
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={bgImg} title={'Energy Monitoring System'} />

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
                  <h4 className='title'>Energy Monitoring System</h4>
                  <p className='h5 indent4'>
                    We offer comprehensive energy monitoring and automation
                    solutions tailored to meet the diverse needs of various
                    industrial sectors. Our services are designed to enhance
                    operational efficiency, optimize energy consumption, and
                    ensure reliable power management across different
                    facilities.
                  </p>
                  <h6 className='title'>
                    Energy Data Extraction and Monitoring:{' '}
                  </h6>
                  <p className='indent4'>
                    <strong className='subTitle'>Versatile Sources: </strong>
                    We integrate data from multiple generator sources, grid
                    supplies, and energy analyzers.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Real-Time Monitoring: </strong>
                    Continuous monitoring of key parameters such as voltage,
                    current, power factor, frequency, and power.
                  </p>
                  <h6 className='title'>
                    Power Production and Consumption Analysis:
                  </h6>
                  <p className='indent4'>
                    <strong className='subTitle'>Trend Analysis: </strong>
                    Detailed analysis of power production and consumption trends
                    to identify patterns and opportunities for optimization.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Visualization: </strong>
                    Graphical representation of energy data for easy
                    understanding and decision-making.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'> Logging and Event Tracking:</h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Comprehensive Logs: </strong>
                    Detailed logging of all energy-related events and
                    activities.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Event Tracking: </strong>
                    Monitoring and tracking significant events to ensure smooth
                    operations.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'> Alarm and Notification System:</h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Real-Time Alerts: </strong>
                    Immediate alarms for any anomalies or issues detected in the
                    system.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Notifications: </strong>Timely
                    notifications sent to relevant personnel to address issues
                    promptly.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'>Automated Reporting:</h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Daily Reports: </strong>
                    Automated generation and distribution of daily reports via
                    email.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Customizable Content: </strong>
                    Reports include detailed data on energy production,
                    consumption, events, and alarms.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'>
                      Local and Remote Monitoring and Control:
                    </h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Accessibility: </strong>
                    Monitoring and control accessible on multiple devices, both
                    locally and remotely.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Secure Remote Access: </strong>
                    Ensuring secure access for monitoring and controlling the
                    system from anywhere.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'>Enhanced Operational Efficiency:</h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Optimization: </strong>
                    Continuous monitoring and analysis to optimize energy usage
                    and reduce waste.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Efficiency: </strong>Ensuring
                    efficient operation of all power houses to minimize energy
                    costs.
                  </p>
                  <p className='indent4'>
                    <h6 className='title'>Example Modules and Products:</h6>
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      SICES, Deep Sea, comAp etc or Energy Analyzers:{' '}
                    </strong>
                    Can be used for data extraction and monitoring in power
                    houses.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Energy Analyzers: </strong>
                    Various models for real-time energy data monitoring like
                    Fico, Circutor, Janitza, Lovato, Schnieder and many other
                    brands.
                  </p>
                  <strong className='subTitle'>Similar Products: </strong>Other
                  industry-standard modules and analyzers can be integrated
                  based on specific requirements.
                  <p className='indent4'></p>
                  <p className='indent4'>
                    Our services are adaptable to different operational
                    methodologies and philosophies, ensuring that each power
                    house, whether it be dyeing, weaving, or turbine, operates
                    at peak efficiency. We provide solutions that cater to the
                    unique needs of each facility, making our energy management
                    services essential for any industrial setup. Feel free to
                    reach out to us for more information on how we can help you
                    achieve your energy management goals! 😊
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
};
export default EnergyMonitoring;
