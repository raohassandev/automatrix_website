import React, { Component, Fragment } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import LayoutOne from '../layouts/LayoutOne';
import { useRouter } from 'next/router';

const PvController = () => {
  // const bgImg='../assets/images/header.jpg'
  const bgImg = 'assets/images/conservatories-tab.jpeg';
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={bgImg} title={'PV DG Synch Controller'} />

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
                  <h4 className='title'>PV DG Synch Controller</h4>
                  <p className='h5 indent4'>
                    Our PV DG Controller is a state-of-the-art solution designed
                    to optimize the integration and management of power
                    generation from solar photovoltaic (PV) systems and diesel
                    generators (DG). It offers advanced real-time monitoring,
                    control, and customization features across grid supply,
                    generator supply, and solar inverters. Here’s an expanded
                    overview highlighting its optional features and benefits:
                  </p>

                  <h6 className='title'>Real-time Monitoring and Reporting:</h6>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Grid Supply Monitoring:{' '}
                    </strong>
                    Provides continuous monitoring of power and energy
                    parameters from the grid, ensuring real-time visibility into
                    grid availability and quality.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Generator Supply Monitoring:{' '}
                    </strong>
                    Tracks generator output to ensure reliable backup power and
                    efficient utilization.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Solar Inverter Monitoring:{' '}
                    </strong>
                    Monitors key performance metrics of solar PV systems,
                    including power generation, voltage, and current,
                    facilitating effective management of solar energy
                    production.
                  </p>
                  <h6 className='title'>Control and Optimization:</h6>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Power Production Control:{' '}
                    </strong>
                    Manages solar power production according to user-configured
                    parameters for grid and generator operations, optimizing
                    energy usage and cost savings.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Prevention of Reverse Power:{' '}
                    </strong>
                    Implements safeguards to prevent generators from
                    experiencing reverse power conditions, enhancing operational
                    safety and efficiency.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Zero Export Limitation:{' '}
                    </strong>
                    Controls solar PV systems to limit or prevent excess power
                    export to the grid, aligning with regulatory requirements
                    and maximizing self-consumption.
                  </p>
                  <h6 className='title'>Optional Features:</h6>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      LAN and Remote Monitoring:{' '}
                    </strong>
                    Offers LAN and remote monitoring capabilities, enabling
                    operators to monitor and manage system performance from
                    anywhere, ensuring proactive maintenance and
                    troubleshooting.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Custom Integration: </strong>
                    upports custom integration capabilities for specific user
                    requirements, such as overloading shunt management and
                    automatic operation of auxiliary systems based on predefined
                    conditions.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Auxiliary Operation Control:{' '}
                    </strong>
                    Automates auxiliary systems operation based on user-defined
                    criteria, optimizing overall system efficiency and reducing
                    operational complexity.
                  </p>
                  <h6 className='title'>Benefits:</h6>
                  <p className='indent4'>
                    <strong className='subTitle'>Enhanced Efficiency: </strong>
                    Integrates and optimizes multiple power sources to improve
                    overall operational efficiency and reliability of power
                    supply.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>Cost Savings: </strong>
                    Reduces fuel consumption by optimizing the use of solar
                    energy and diesel generators based on real-time demand and
                    grid conditions.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Compliance and Safety:{' '}
                    </strong>
                    Ensures compliance with regulatory requirements regarding
                    grid interaction and power export limitations, enhancing
                    system safety and reliability.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Remote Monitoring and Management:{' '}
                    </strong>
                    Enables remote monitoring and management capabilities,
                    facilitating proactive system maintenance and minimizing
                    downtime.
                  </p>
                  <h6 className='title'>Application:</h6>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Commercial and Industrial Facilities:
                    </strong>
                    Ideal for businesses seeking to reduce energy costs and
                    enhance energy resilience through optimized power
                    management.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Remote and Off-grid Installations:{' '}
                    </strong>
                    Suitable for off-grid or remote locations where reliable
                    power supply from solar and generator sources is critical.
                  </p>
                  <p className='indent4'>
                    <strong className='subTitle'>
                      Utility-Scale Solar Installations:{' '}
                    </strong>
                    Supports utility-scale solar PV installations by providing
                    robust monitoring and control capabilities for grid
                    interaction and power management.
                  </p>
                  <h6 className='title'>Conclusion:</h6>
                  <p className='indent4'>
                    Our PV DG Controller represents a significant advancement in
                    energy management technology, offering comprehensive
                    monitoring, control, and customization options to maximize
                    efficiency, reliability, and cost-effectiveness. Whether for
                    commercial, industrial, or utility-scale applications, it
                    ensures seamless solar and generator power integration,
                    enhancing overall system performance and resilience in
                    diverse operational environments. With optional LAN, remote
                    monitoring, and customizable integration features, it
                    empowers users to optimize energy usage and maintain
                    operational efficiency according to specific needs and
                    regulatory requirements.
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
export default PvController;
