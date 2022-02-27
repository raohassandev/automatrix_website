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
      <Creditors />

      <footer className="footer-section">
        <div className="container">
          <div className="row">
            {/*  Start:About  */}
            {/* <div className="col-lg-3 col-sm-12">
              <div className="widget">
                <div className="footer_logo">
                  <img className="img-responsive" src="assets/images/logo.jpeg" alt="" />
                </div>
                <div className="footer_p">
                  <p className="footer_para">
                    Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab
                    a et dolore magna aliqua{" "}
                  </p>
                </div>
                <div className="footer_socil">
                  <ul className="list-icons link-list footer_soc">
                    <li>
                      <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="//twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="//facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                    <li>
                      <a href="//instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="//pinterest.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-sm-12">
              <div className="widget quick_lnk">
                <h5>Explore</h5>
                <ul className="footer_recent_blog">
                  <li>
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("window", "main"),
                      }}>
                      Windows
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("door", "main"),
                      }}>
                      Doors
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("conservatory", "main"),
                      }}>
                      Conservatories
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("glazing", "triple_glazing"),
                      }}>
                      Triple Glazing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("schuco", "schuco"),
                      }}>
                      Schüco
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">Latest News</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*  End:About  */}

            {/*  Start:Quick Link  */}
            <div className="col-lg-3 col-sm-12">
              <div className="widget quick_lnk">
                <h5>We Cover ...</h5>
                <ul>
                  <li>
                    <Link href="/kingstonUponThames">Kingston-upon-Thames</Link>
                  </li>
                  <li>
                    <Link href="/sutton">Sutton</Link>
                  </li>
                  <li>
                    <Link href="/purley">Purley</Link>
                  </li>
                </ul>
              </div>
              <div className="widget">
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
            <div className="col-lg-3 col-sm-12">
              <div className="widget">
                <h5>Address</h5>
                <div className="footer_recent_blog">
                  <div>Direct Windows London</div>
                  <div>113 Stafford Road</div>
                  <div>Croydon</div>
                  <div>Surrey</div>
                  <div>CR0 4NN</div>
                </div>
              </div>
            </div>
            {/*  End:Latest post  */}

            {/*  Start:Newsletter  */}
            <div className="col-lg-3 col-sm-12">
              <div className="widget">
                <h5>Help & Advice</h5>
                {/*  Start:Subscribe  */}
                {/* <div className="news_letter_wrp"> */}
                <div className="widget quick_lnk">
                  <ul>
                    <li>
                      <Link href="/maintenance">Maintenance / Tips / FAQ's</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    {/* <li>
                      <Link href="/contact">Latest News</Link>
                    </li> */}
                    {/* <li>
                      <Link href="/about">Links</Link>
                    </li> */}
                    <li>
                      <Link href="/cookies">Cookies & Privacy Policy</Link>
                    </li>
                    {/* <li>
                      <Link href="/about">Valid HTML5</Link>
                    </li> */}
                    <li>
                      <Link href="http://www.adtrak.co.uk/">Web Design by Adtrak</Link>
                    </li>
                  </ul>
                  {/* <p>Subscribe our newsletter to get more update & join to fuodborne</p>
                  <form className="mailchimp">
                    <input
                      className="email_field"
                      type="text"
                      name="email"
                      id="subscriber-email"
                      placeholder="Email Address"
                    />
                    <button className="submit-contact" type="submit" id="subscribe-button">
                      Subscribe
                    </button>
                    <span className="subscription-success"> </span>
                    <span className="subscription-error"> </span>
                    <label className="subscription-label" htmlFor="subscriber-email"></label>
                  </form> */}
                  {/*  END MAILCHIMP FORM  */}
                </div>
              </div>
            </div>
            {/*  End:Start Subscribe  */}

            <button className={`scrollup ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()}>
              <span className="icon-glyph-203"></span>
            </button>
          </div>
        </div>
        {/*  Start:Subfooter  */}
        <div className="subfooter">
          <div className="d-flex justify-content-center h4">
            <div>Telephone 020 8667 0777 • </div>
            <a href={`mailto:${CONTACT.email}`}>
              {/* <i className="fa fa-envelope"></i> */}
              <div style={{ marginLeft: 5, color: "whitesmoke" }}>Email info@windowsdirectlondon.co.uk</div>
            </a>
          </div>
          <div className="d-flex justify-content-center">
            <div className="h5">Windows Direct London </div>
            <div style={{ marginLeft: 5 }}>{` is a registered company in England`}</div>
          </div>

          <p>© Windows Direct London 2022 All Rights Reserved.</p>
        </div>
        {/* End:Subfooter  */}
      </footer>
    </div>
  );
};

export default Footer;
