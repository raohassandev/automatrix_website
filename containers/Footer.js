import React, { useEffect, useState } from 'react';

import { CONTACT } from '../helpers/products';
import Creditors from '../components/Creditors';
import Link from 'next/link';
import { animateScroll } from 'react-scroll';
import { getProduct } from '../helpers/getProduct';

const Footer = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <div>
      {/* <Creditors /> */}

      <footer className='footer-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-sm-12'>
              <div className='widget quick_lnk'>
                <h5>Services</h5>
                <ul className='footer_recent_blog'>
                  <li>
                    <Link
                      href={{
                        pathname: '/PvController',
                      }}
                    >
                      PV DG Synch Controller
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/EnergyMonitoring',
                      }}
                    >
                      Energy Monitoring System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/ScadaSystem',
                      }}
                    >
                      SCADA System
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/GeneratorSync',
                      }}
                    >
                      Generator Synchronization & Automation
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  End:About  */}

            {/*  Start:Quick Link  */}
            <div className='col-lg-3 col-sm-12'>
              <div className='widget quick_lnk'>
                <h5>We Cover ...</h5>
                <ul>
                  <li>
                    <Link href='/contact'>Latest News</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
                  <li>
                    <Link href='/about'>About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  End:Quick Link  */}

            {/*  Start:Latest post   */}
            <div className='col-lg-3 col-sm-12'>
              <div className='widget'>
                <h5>Address</h5>
                <div className='footer_recent_blog'>
                  <div>Automatrix Engineering</div>
                  <div>{CONTACT.address}</div>
                </div>
              </div>
            </div>
            {/*  End:Latest post  */}

            {/*  Start:Newsletter  */}
            <div className='col-lg-3 col-sm-12'>
              <div className='widget'>
                <h5>Help & Advice</h5>
                {/*  Start:Subscribe  */}
                {/* <div className="news_letter_wrp"> */}
                <div className='widget quick_lnk'>
                  <ul>
                    <li>
                      <Link href='#'>Maintenance / Tips / FAQ's</Link>
                    </li>
                    <li>
                      <Link href='#t'>About Us</Link>
                    </li>
                    <li>
                      <Link href='#'>Cookies & Privacy Policy</Link>
                    </li>
                    {/* <li>
                      <Link href="/about">Valid HTML5</Link>
                    </li> */}
                    {/* <li>
                      <Link href='http://www.adtrak.co.uk/'>
                        Web Design by Adtrak
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            <button
              className={`scrollup ${scroll > top ? 'show' : ''}`}
              onClick={() => scrollToTop()}
            >
              <span className='icon-glyph-203'></span>
            </button>
          </div>
        </div>
        {/*  Start:Subfooter  */}
        <div
          className='subfooter'
          style={{ color: 'whitesmoke', fontSize: 18 }}
        >
          <div className=' justify-content-center h5 row'>
            <a
              href={`tel:${CONTACT.phone}`}
              style={{ color: 'whitesmoke', fontSize: 20 }}
            >
              <i className='fa fa-phone'></i> <i style={{}}>{CONTACT.phone}</i>
            </a>
          </div>
          <div className=' justify-content-center h4 row'>
            <a
              href={`mailto:${CONTACT.email}`}
              style={{ color: 'whitesmoke', fontSize: 18 }}
            >
              <i className='fa fa-envelope mr-2' />
              <i>{CONTACT.email}</i>
            </a>
          </div>
          <div>
            <a
              href={`https://wa.me/923111646640`}
              className='fa fa-whatsapp'
            ></a>
            <i className='fa fa-whatsapp mr-2' />
            <i>whatsapp</i>
          </div>
          {/* <div className='d-flex justify-content-center'>
            <div className='h5'>Supreme Windows London </div>
            <div
              style={{ marginLeft: 5 }}
            >{` is a registered company in England`}</div>
          </div>

           <p>© Supreme Windows London 2022 All Rights Reserved.</p> */}
        </div>
        {/* End:Subfooter  */}
      </footer>
    </div>
  );
};

export default Footer;
