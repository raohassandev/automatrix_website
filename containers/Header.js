import React from "react";
import Link from "next/link";
import { CONTACT } from "../helpers/products";

const Header = () => {
  return (
    <div className="header_topbar">
      {/* <Link href="/">
              <img src="assets/images/logo.jpeg" alt="" style={{ marginBottom: -50 }} />
      </Link> */}
      <div className="container">
        <div className="header_top_right list-unstyled">
          <ul>
            <li>
              <a href={`tel:${CONTACT.phone}`}>
                <i className="fa fa-phone"></i>
              </a>
              {CONTACT.phone}
            </li>
            <li>
              <i className="fa fa-globe"></i>
              {CONTACT.address}
            </li>
          </ul>
        </div>
        <div className="header_top_left">
          <ul className="header_socil list-inline pull-left">
            <li>
              <a href={`mailto:${CONTACT.email}`}>
                <i className="fa fa-envelope"></i>
              </a>
              {CONTACT.email}
            </li>
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
        <Link href="/contact">
          <a className="more-link">Get a quote</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
