import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll"; 
import Link from 'next/link';

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

    return(
    <footer className="footer-section">
        <div className="container">
            <div className="row"> 
                {/*  Start:About  */}
                <div className="col-lg-3 col-sm-12">
                    <div className="widget">
                        <div className="footer_logo">
                            <img className="img-responsive" src="assets/images/logo.jpeg" alt="" />
                        </div>
                        <div className="footer_p">
                            <p className="footer_para">Loren ipsum dolor conse ctetur at adipis cing elit sed do eiu smod of tempor inci didunt know youlab a et dolore magna aliqua </p>
                        </div>
                        <div className="footer_socil">
                            <ul className="list-icons link-list footer_soc">
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="//twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="//facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-behance"></i></a>
                                </li>
                                <li>
                                    <a href="//instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="//pinterest.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
                {/*  End:About  */}

                {/*  Start:Quick Link  */} 
                <div className="col-lg-3 col-sm-12">
                    <div className="widget quick_lnk">
                        <h5>Quick Link</h5>
                        <ul>
                            <li>
                                <Link href="/about">Help and Ordering</Link>
                            </li>
                            <li>
                                <Link href="/services">Return & Cancellation</Link>
                            </li>
                            <li>
                                <Link href="/single-services">Online Organic Service</Link>
                            </li>
                            <li>
                                <Link href="/team">Delevery Schedule</Link>
                            </li>
                            <li>
                              <Link href="/team">Online Organic Service</Link>
                            </li> 
                        </ul>
                    </div>
                </div> 
                {/*  End:Quick Link  */}
 
                {/*  Start:Latest post   */}
                <div className="col-lg-3 col-sm-12">
                    <div className="widget">
                        <h5>Latest Articles</h5>
                        <ul className="footer_recent_blog">
                            <li> 
                                <img className="img-responsive" src="assets/images/blog1.jpg" alt="" />  
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <Link href="/single-blog">
                                        <a>
                                            <span>How to Eat Organic Foods</span>
                                        </a>
                                    </Link>
                                </span>
                            </li>
                             <li> 
                                <img className="img-responsive" src="assets/images/blog2.jpg" alt="" />  
                                <span className="post_cont">
                                    <span className="post-date">
                                        <i className="fa fa-calendar"></i>March 14, 2019
                                    </span>
                                    <Link href="/single-blog">
                                        <a>
                                            <span>How to Eat Organic Foods</span>
                                        </a>
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div> 
                {/*  End:Latest post  */}


                {/*  Start:Newsletter  */} 
                <div className="col-lg-3 col-sm-12">
                    <div className="widget">
                        <h5>Newsletter</h5> 
                        {/*  Start:Subscribe  */}
                        <div className="news_letter_wrp">
                            <p>Subscribe our newsletter to get more update &  join to fuodborne</p>
                            <form className="mailchimp"> 
                                <input className="email_field" type="text" name="email" id="subscriber-email" placeholder="Email Address" />
                                <button className="submit-contact" type="submit" id="subscribe-button">Subscribe</button>
                                <span className="subscription-success"> </span>
                                <span className="subscription-error"> </span>
                                <label className="subscription-label" htmlFor="subscriber-email"></label>
                            </form> 
                            {/*  END MAILCHIMP FORM  */}                         
                        </div> 
                    </div>
                </div> 
                {/*  End:Start Subscribe  */} 

                <button className={`scrollup ${scroll > top ? "show" : ""}`} onClick={() => scrollToTop()} >
                    <span className="icon-glyph-203"></span>
                </button>
            </div>
        </div> 
        {/*  Start:Subfooter  */}
        <div className="subfooter">
            <p>2020 © Copyright <Link href="/">Fuodborne.</Link> All rights Reserved.</p>
        </div> 
        {/* End:Subfooter  */}
    </footer> 

        )
 
}

 
export default Footer;