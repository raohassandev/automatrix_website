import React, { useEffect } from "react"; 
import Link from 'next/link'

const MobileMenu = () => {
  useEffect(() => {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(`.subMenu`);
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        `<span class="menuExpand"><i></i></span>`
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menuExpand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", e => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }
  });

  const sideMenuExpand = e => {
    e.currentTarget.parentElement.classList.toggle("active");
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="offcanvasMobileMenu" id="offcanvas-mobile-menu">
      <button
        className="offcanvasMenuClose"
        id="mobile-menu-close-trigger"
        onClick={() => closeMobileMenu()}
      >
      <i className="icon-glyph-146"></i>
      </button>

      <div className="offcanvasWrapper">
        <div className="offcanvasInnerContent">

          <nav className="offcanvasNavigation" id="offcanvas-navigation">
            <ul>
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

            </ul>
          </nav>

          {/* Search Form */}
          <div className="offcanvasMobileSearchArea">
            <form action="#">
              <input type="search" placeholder="Search ..." />
              <button type="submit"> 
              </button>
            </form>
          </div>

          {/* Contact Info  */} 

          <div className="header_top_right list-unstyled">
            <ul>
              <li>
              <i className="fa fa-phone"></i> +234 567 234 875
              </li>
              <li>
              <i className="fa fa-envelope"></i> info@yourdomain.com
              </li>
              <li>
              <i className="fa fa-globe"></i> 1st Avenue, Boston
              </li>
            </ul>
          </div>

          {/* Social Icon*/}
          <div className="header_top_left">
            <ul className="header_socil list-inline">   
                <li>
                    <a href="#/" className="fa fa-facebook"></a>
                </li>
                <li>
                    <a href="#/" className="fa fa-twitter"></a>
                </li>
                <li>
                    <a href="#/" className="fa fa-linkedin"></a>
                </li>
                <li>
                    <a href="#/" className="fa fa-google-plus"></a>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
