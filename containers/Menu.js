import { Nav, Navbar } from 'react-bootstrap';

import Link from 'next/link';
import MobileBtn from '../components/mobile-menu/MobileBtn';
import MobileMenu from '../components/mobile-menu/MobileMenu';
import React from 'react';
import { getProduct } from '../helpers/getProduct';

const Menu = () => {
  // console.log('PRODUCTS', PRODUCTS)

  const triggerSearch = () => {
    const offcanvasMobileMenu = document.querySelector('.search_icon_inr');
    offcanvasMobileMenu.classList.toggle('active');
  };
  const logo = 'assets/images/Automatrix_Logo_2.jpeg';
  return (
    <div className='menu_area'>
      {/* Start: header navigation */}
      <div className='navigation'>
        <div className='container'>
          <div className='logo '>
            <Link href='/'>
              <img src={logo} alt='' style={{ marginTop: 15 }} />
            </Link>
          </div>

          <div className='meun_wrp'>
            <Navbar expand='lg' sticky='top' id='navigation'>
              <Nav className='mr-auto'>
                <ul>
                  <li className='active'>
                    <Link href='/'>Home </Link>
                  </li>
                  <li className='has-sub'>
                    <Link
                      href={{
                        pathname: '/automatrix_Pages/Services/Services',
                      }}
                    >
                      Services
                    </Link>

                    <ul>
                      <li>
                        <Link
                          href={{
                            pathname: '/automatrix_Pages/Services/PvController',
                          }}
                        >
                          PV DG Synch Controller
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname:
                              '/automatrix_Pages/Services/EnergyMonitoring',
                          }}
                        >
                          Energy Monitoring System
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: '/automatrix_Pages/Services/ScadaSystem',
                          }}
                        >
                          SCADA System
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname:
                              '/automatrix_Pages/Services/GeneratorSync',
                          }}
                        >
                          Generator Synchronization & Automation
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link
                      href={{
                        pathname: '/automatrix_Pages/Services/PvController',
                      }}
                    >
                      Solar EPC
                    </Link>
                  </li>*/}
                  <li>
                    <Link href='https://www.refrens.com/automatrix-engineering'>
                      Profile
                    </Link>
                  </li>
                  {/* <li>
                    <Link href='/automatrix_Pages/Services/LatestNews'>
                      Latest News
                    </Link>
                  </li> */}
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/ContactUsForm'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                </ul>
              </Nav>
            </Navbar>
          </div>

          {/* Mobile Menu */}

          <MobileBtn />

          <MobileMenu />
        </div>
        {/* container */}
      </div>
      {/* End: header navigation */}
    </div>
  );
};

export default Menu;
