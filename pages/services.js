import React, { Component, Fragment } from 'react';

import Breadcrumb from '../components/Breadcrumb';
import LayoutOne from '../layouts/LayoutOne';
import { useRouter } from 'next/router';

export const Services = () => {
  // const bgImg='../assets/images/header.jpg'
  const bgImg = 'assets/images/amx/2.png';
  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb bgImg={bgImg} title={''} />

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
                  <h3 className='title'>
                    Automatrix: Advanced Industrial Power Automation & Control
                    Solutions
                  </h3>
                  <p>
                    At Automatrix, we specialize in delivering cutting-edge
                    automation and control systems tailored for industrial power
                    management. Our innovative solutions are designed to
                    optimize energy efficiency, enhance operational performance,
                    and ensure seamless integration of renewable and traditional
                    power sources. From synchronization of complex energy
                    systems to real-time monitoring and automation, our
                    expertise enables businesses to achieve higher efficiency,
                    reduced costs, and improved reliability. Explore our key
                    services below:
                  </p>
                  <a href='/Services/PvController'>
                    <h4 className='title'>
                      <a href='/Services/PvController'>
                        1. PV-DG Synchronization Controller
                      </a>
                    </h4>
                    <div className='ml-4'>
                      <p>
                        Automatrix’s PV-DG (Photovoltaic-Diesel Generator)
                        Synchronization Controller provides an intelligent
                        solution for managing hybrid energy systems. This
                        controller seamlessly integrates solar photovoltaic
                        power with diesel generators, ensuring a smooth
                        transition between energy sources. By optimizing the
                        synchronization between renewable and conventional
                        power, it reduces fuel consumption, enhances the
                        lifespan of generators, and lowers operational costs.
                        The PV-DG Synch Controller is ideal for remote areas or
                        industries with high energy demands, providing a
                        sustainable, reliable, and cost-effective energy
                        solution.
                      </p>
                      <h5 className='subTitle'>Key Features:</h5>

                      <ol>
                        <li>
                          Real-time power balancing between solar and diesel
                          systems.
                        </li>
                        <li>
                          Automatic synchronization and load-sharing to maximize
                          efficiency.
                        </li>
                        <li>Reduction of carbon emissions and fuel costs.</li>
                        <li>
                          Customizable settings for varying industrial needs.
                        </li>
                      </ol>
                    </div>
                  </a>
                  <a href='/Services/EnergyMonitoring'>
                    <h4 className='title'>2. Energy Monitoring System</h4>
                    <div className='ml-4'>
                      <p>
                        Our Energy Monitoring System empowers businesses to
                        monitor, manage, and optimize their energy consumption
                        in real time. The system provides detailed insights into
                        energy usage, helping identify inefficiencies and
                        enabling data-driven decisions to reduce operational
                        costs. By tracking consumption patterns, the system
                        allows businesses to implement energy-saving strategies
                        and comply with sustainability goals. Whether it's for a
                        single facility or across multiple locations, our energy
                        monitoring solution is scalable and integrates with
                        existing infrastructure.
                      </p>
                      <h5 className='subTitle'>Key Features:</h5>
                      <ol>
                        <li>
                          Comprehensive real-time data tracking and analytics.
                        </li>
                        <li>Customizable reports and energy usage alerts.</li>
                        <li>
                          Integration with automation tools for enhanced power
                          management.
                        </li>
                        <li>Remote access through user-friendly interfaces.</li>
                      </ol>
                    </div>
                  </a>
                  <a href='/Services/ScadaSystem'>
                    <h4 className='title'>
                      3. SCADA System (Supervisory Control and Data Acquisition)
                    </h4>
                    <div className='ml-4'>
                      <p>
                        Automatrix’s SCADA system is a robust, centralized
                        platform designed to monitor and control industrial
                        processes across a wide range of industries. Our SCADA
                        system collects data in real time, providing operators
                        with actionable insights and full control over systems
                        like power plants, manufacturing lines, and utility
                        networks. With advanced features like data logging,
                        trend analysis, and alarm management, this system
                        ensures operational efficiency, safety, and reliability
                        while minimizing downtime.
                      </p>
                      <h5 className='subTitle'>Key Features:</h5>
                      <ol>
                        <li>Real-time monitoring of industrial processes.</li>
                        <li>
                          Remote control of critical systems and machinery.
                        </li>
                        <li>
                          Data logging for performance analysis and regulatory
                          compliance.
                        </li>
                        <li>
                          Alarm and event management to quickly respond to
                          issues.
                        </li>
                      </ol>
                    </div>
                  </a>
                  <a href='/Services/GeneratorSync'>
                    <h4 className='title'>
                      4. Generator Synchronization & Automation
                    </h4>
                    <div className='ml-4'>
                      <p>
                        Automatrix offers sophisticated solutions for generator
                        synchronization and automation, ensuring a reliable and
                        uninterrupted power supply for industries requiring
                        continuous energy flow. Our system enables the automatic
                        synchronization of multiple generators, ensuring
                        load-sharing and balancing, which enhances the
                        efficiency and reliability of power generation. This
                        automation reduces manual intervention, prevents power
                        interruptions, and is highly scalable to suit a wide
                        range of industrial applications, from factories to
                        power plants.
                      </p>
                      <h5 className='subTitle'>Key Features:</h5>
                      <ol>
                        <li>
                          Automatic synchronization of multiple generators.
                        </li>
                        <li>
                          Load-sharing to ensure even distribution of power.
                        </li>
                        <li>
                          Automated start-up, shutdown, and fault management.
                        </li>
                        <li>
                          Improved system resilience and reduced downtime.
                        </li>
                      </ol>
                    </div>
                  </a>
                  <div>
                    <h4 className='title'>Why Choose Automatrix?</h4>
                    <p>
                      With a strong focus on innovation, reliability, and
                      sustainability, Automatrix is dedicated to providing
                      industrial power automation solutions that help businesses
                      stay ahead. Our team of experts works closely with clients
                      to deliver tailored systems that not only meet current
                      energy demands but also scale for future growth.
                    </p>
                    <p>
                      For more information or to discuss how we can support your
                      industrial power needs, contact us today.
                    </p>
                  </div>
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

export default Services;
