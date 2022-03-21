import React from "react";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import MobileMenu from "../components/mobile-menu/MobileMenu";
import MobileBtn from "../components/mobile-menu/MobileBtn";
import { getProduct } from "../helpers/getProduct";

const Menu = () => {
  // console.log('PRODUCTS', PRODUCTS)

  const triggerSearch = () => {
    const offcanvasMobileMenu = document.querySelector(".search_icon_inr");
    offcanvasMobileMenu.classList.toggle("active");
  };

  return (
    <div className="menu_area">
      {/* Start: header navigation */}
      <div className="navigation">
        <div className="container">
          {/* <div className="logo ">
            <Link href="/">
              <img src="assets/images/logo.jpeg" alt="" style={{ marginTop: 15}} />
            </Link>
          </div> */}

          <div className="meun_wrp">
            <Navbar expand="lg" sticky="top" id="navigation">
              <Nav className="mr-auto">
                <ul>
                  <li className="active">
                    <Link href="/">Home </Link>
                  </li>
                  <li className="has-sub">
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("window", "main"),
                      }}
                    >
                    {/* <Link href="/windows"> */}
                      Windows
                    </Link>
                    <ul>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("window", "upvc_window"),
                          }}>
                          uPVC Windows
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/single-services", query: getProduct("window", "casement_window") }}>
                          Casement Windows
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/single-services", query: getProduct("window", "aluminium_window") }}>
                          Aluminium Windows
                        </Link>
                      </li>
                      <li>
                        <Link href={{ pathname: "/single-services", query: getProduct("window", "sash_window") }}>
                          Sash Windows
                        </Link>
                      </li>
                      {/* <li> 
                          <Link href="/about">About Page</Link>
                        </li>
                        <li>
                          <Link href="/team">Team</Link>
                        </li> */}
                    </ul>
                  </li>
                  <li className="has-sub">
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("door", "main"),
                      }}>
                      Doors
                    </Link>
                    <ul>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("door", "upvc_door"),
                          }}>
                          uPVC Doors
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("door", "composite_door"),
                          }}>
                          Composite Doors
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("door", "patio_door"),
                          }}>
                          Patio Doors
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("door", "bi_folding_door"),
                          }}>
                          Bi-Folding Doors
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-sub">
                    <Link
                      href={{
                        pathname: "/single-services",
                        query: getProduct("conservatory", "main"),
                      }}>
                      Conservatories
                    </Link>
                    <ul>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("conservatory", "upvc_conservatory"),
                          }}>
                          uPVC Conservatories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("conservatory", "edwardian_conservatory"),
                          }}>
                          Edwardian Conservatories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("conservatory", "victorian_conservatory"),
                          }}>
                          Victorian Conservatories
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={{
                            pathname: "/single-services",
                            query: getProduct("conservatory", "p_shaped_conservatory"),
                          }}>
                          P-Shape Conservatories
                        </Link>
                      </li>
                    </ul>
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
                  {/* <li>
                    <Link href="/contact">Latest News</Link>
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
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                </ul>
              </Nav>
            </Navbar>
          </div>

          {/* Mobile Menu */}

          <MobileBtn />

          <MobileMenu />

          {/* End:  Mobile Menu */}

          {/* Start: Cart  */}
          {/* <div className="header_cart">
            <ul>
              <li className="header_search">
                <a href="#" onClick={() => triggerSearch()} className="cart-toggler search_icon">
                  <i className="icon-glyph-16"></i>
                </a>

                <div className="search_icon_inr">
                  <form action="#" method="POST">
                    <div>
                      <input placeholder="Search" type="text" />
                      <button className="btn-search" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </li>
              <li className="header_cart_icon">
                <a href="/cart">
                  <i className="icon-glyph-13"></i>
                  <span className="number_cart">0</span>
                </a>
              </li>
            </ul>
          </div> */}
          {/* End: Cart  */}
        </div>
        {/* container */}
      </div>
      {/* End: header navigation */}
    </div>
  );
};

export default Menu;
