import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import Link from "next/link";
import Creditors from "../components/Creditors";
import { CONTACT } from "../helpers/products";
import { getProduct } from "../helpers/getProduct";

const Footer = () => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
                <h5>Explore</h5>
                <ul className='footer_recent_blog'>
                  <li>
                    <Link
                      href={{
                        pathname: '/single-services',
                        query: getProduct('window', 'main'),
                      }}>
                      Windows
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/single-services',
                        query: getProduct('door', 'main'),
                      }}>
                      Doors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/single-services',
                        query: getProduct('conservatory', 'main'),
                      }}>
                      Conservatories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/single-services',
                        query: getProduct('glazing', 'triple_glazing'),
                      }}>
                      Triple Glazing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: '/single-services',
                        query: getProduct('schuco', 'schuco'),
                      }}>
                      Schüco
                    </Link>
                  </li>
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
            {/*  End:About  */}

            {/*  Start:Quick Link  */}
            <div className='col-lg-3 col-sm-12'>
              <div className='widget quick_lnk'>
                <h5>We Cover ...</h5>
                <ul>
                  <li>
                    <Link href='/kingstonUponThames'>Kingston-upon-Thames</Link>
                  </li>
                  <li>
                    <Link href='/sutton'>Sutton</Link>
                  </li>
                  <li>
                    <Link href='/purley'>Purley</Link>
                  </li>
                </ul>
              </div>
              <div className='widget'>
                <ul>
                  <li>Croydon</li>
                </ul>
                <ul>
                  <li>Surrey</li>
                </ul>
                <ul>
                  <li>London</li>
                </ul>
                <ul>
                  <li>South London</li>
                </ul>
                <ul>
                  <li>M25 Area</li>
                </ul>
              </div>
            </div>
            {/*  End:Quick Link  */}

            {/*  Start:Latest post   */}
            <div className='col-lg-3 col-sm-12'>
              <div className='widget'>
                <h5>Address</h5>
                <div className='footer_recent_blog'>
                  <div>Supreme Windows London</div>
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
                      <Link href='/maintenance'>Maintenance / Tips / FAQ's</Link>
                    </li>
                    <li>
                      <Link href='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link href='/cookies'>Cookies & Privacy Policy</Link>
                    </li>
                    {/* <li>
                      <Link href="/about">Valid HTML5</Link>
                    </li> */}
                    <li>
                      <Link href='http://www.adtrak.co.uk/'>Web Design by Adtrak</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button className={`scrollup ${scroll > top ? 'show' : ''}`} onClick={() => scrollToTop()}>
              <span className='icon-glyph-203'></span>
            </button>
          </div>
        </div>
        {/*  Start:Subfooter  */}
        <div className='subfooter'>
          <div className=' justify-content-center h5 row'>
            <a href={`tel:${CONTACT.phone}`} style={{ color: 'whitesmoke', fontSize: 20 }}>
              <i className='fa fa-phone'></i> <i style={{}}>{CONTACT.phone}</i>
            </a>
          </div>
          <div className=' justify-content-center h4 row'>
            <a href={`mailto:${CONTACT.email}`} style={{ color: 'whitesmoke', fontSize: 18 }}>
              <i className='fa fa-envelope mr-2' />
              <i>{CONTACT.email}</i>
            </a>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='h5'>Supreme Windows London </div>
            <div style={{ marginLeft: 5 }}>{` is a registered company in England`}</div>
          </div>

          <p>© Supreme Windows London 2022 All Rights Reserved.</p>
        </div>
        {/* End:Subfooter  */}
      </footer>
    </div>
  );
};

export default Footer;
