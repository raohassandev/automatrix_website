import React, { useEffect } from 'react';

import { CONTACT } from '../../helpers/products';
import Link from 'next/link';

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector('#offcanvas-navigation');
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll('a');

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        'beforebegin',
        `<span class="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll('.menuExpand');
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener('click', (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener('click', () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle('active');
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      '#offcanvas-mobile-menu'
    );
    offcanvasMobileMenu.classList.remove('active');
  };

  return (
    <div className='offcanvasMobileMenu' id='offcanvas-mobile-menu'>
      <button
        className='offcanvasMenuClose'
        id='mobile-menu-close-trigger'
        onClick={() => closeMobileMenu()}
      >
        <i className='icon-glyph-146'></i>
      </button>

      <div className='offcanvasWrapper'>
        <div className='offcanvasInnerContent'>
          <nav className='offcanvasNavigation' id='offcanvas-navigation'>
            {/* <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="menuItemHasChildren">
                <Link href="#/">Pages</Link>
                <ul className="subMenu">
                  <li> <Link href="/gallery">Gallery Page</Link> </li>
                  <li> <Link href="/gallery-two"> Gallery Two</Link></li>
                  <li><Link href="/services">Services Page </Link></li>
                  <li><Link href="/single-services">Services Details</Link></li>
                  <li><Link href="/about">About Page</Link></li>
                  <li><Link href="/team">Team</Link></li>
                </ul>
              </li>
              <li className="menuItemHasChildren">
                <Link href="/blog">Blog</Link>
                <ul className="subMenu">
                    <li><Link href="/blog">Blog One</Link></li>
                    <li><Link href="/blog-two">Blog Two</Link></li> 
                    <li><Link href="/single-blog">Blog Details</Link></li>
                </ul>
              </li>

              <li className="menuItemHasChildren">
                <Link href="/shop">Shop</Link>
                <ul className="subMenu">
                    <li><Link href="/shop">Shop</Link></li>
                    <li><Link href="/single-shop">Shop Details</Link></li>  
                </ul>
              </li>

              <li>
                <Link href="/contact">Contact</Link>
              </li>

            </ul> */}
            <ul>
              <li className='active'>
                <Link href='/home'>
                  <h5 className='title'>Home</h5>
                </Link>
              </li>
              <li className='has-sub'>
                <Link
                  href={{
                    pathname: '/Services',
                  }}
                >
                  <h5 className='title'>Services</h5>
                </Link>
                <ul className='ml-3 h6'>
                  <li>
                    <Link
                      href={{
                        pathname: '/PvController',
                      }}
                    >
                      PV DG Synch Controller
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      href={{
                        pathname: '/EnergyMonitoring',
                      }}
                    >
                      Energy Monitoring System
                    </Link>
                  </li>
                  <hr/>
                  <li>
                    <Link
                      href={{
                        pathname: '/ScadaSystem',
                      }}
                    >
                      SCADA System
                    </Link>
                  </li>
                  <hr/>
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
              </li>

              {/* <hr />
             <li>
                <Link href='/Services/LatestNews'>
                  Latest News
                </Link>
              </li> */}
              {/* <li className="has-sub">
                    <Link href="/shop">Shop</Link>
                    <ul>
                      <li>
                        <Link href="/shop">Shop</Link>
                      </li>
                      <li>
                        <Link href="/single-shop">Shop Details</Link>
                      </li>
                      <li>
                        <Link href="/cart">Shop Cart</Link>
                      </li>
                      <li>
                        <Link href="/checkout">Checkout</Link>
                      </li>
                    </ul>
                  </li> */}

              <hr />
              <li>
                <Link href='/contact'>
                  <h5 className='title'>Contact</h5>
                </Link>
              </li>
              <hr />
              <li>
                <Link href='/about'>
                  <h5 className='title'>About Us</h5>
                </Link>
              </li>
              <hr />
            </ul>
          </nav>

          {/* Search Form */}
          <div className='offcanvasMobileSearchArea'>
            <form action='#'>
              <input type='search' placeholder='Search ...' />
              <button type='submit'></button>
            </form>
          </div>

          {/* Contact Info  */}

          <div className='header_top_right list-unstyled'>
            <ul>
              <li>
                <a className='fa ' href={`tel:${CONTACT.phone}`}>
                  <i className='fa fa-phone'>{'  ' + CONTACT.phone}</i>
                </a>
              </li>
              <li>
                <a className='fa ' href={`mailto:${CONTACT.email}`}>
                  <i className='fa fa-envelope'> {'  ' + CONTACT.email}</i>
                </a>
              </li>
              <li>
                <i className='fa fa-globe'>{'  ' + CONTACT.address}</i>
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className='header_top_left'>
            <ul className='header_socil list-inline'>
              <li>
                <a href='#/' className='fa fa-facebook'></a>
              </li>
              <li>{/* <a href='#/' className='fa fa-twitter'></a> */}</li>
              <li>
                <a href='#/' className='fa fa-linkedin'></a>
              </li>
              <li>{/* <a href='#/' className='fa fa-google-plus'></a> */}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
