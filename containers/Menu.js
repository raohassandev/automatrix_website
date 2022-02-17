import React from "react";
import Link from 'next/link'
import {Navbar, Nav} from 'react-bootstrap'; 
import MobileMenu from "../components/mobile-menu/MobileMenu";
import MobileBtn from "../components/mobile-menu/MobileBtn";


const Menu = () => {

      const triggerSearch = () => {
        const offcanvasMobileMenu = document.querySelector(".search_icon_inr");
        offcanvasMobileMenu.classList.toggle("active");
      };

    return (

<div className="menu_area">	
    {/* Start: header navigation */}
    <div className="navigation">
        <div className="container"> 
                <div className="logo">
                    <Link href="/"> 
                    	<img src="assets/images/logo.png" alt="" />
                    </Link>
                </div>

                <div className="meun_wrp">
                    <Navbar expand="lg" sticky="top" id="navigation">  
                        <Nav className="mr-auto">
                            <ul>
                                <li className="active">
                                <Link href="/">Home </Link></li>
                                <li className="has-sub"><Link href="#/">Pages</Link>
                                    <ul>
                                        <li><Link href="/gallery">Gallery Page</Link>
                                        </li>
                                        <li><Link href="/gallery-two">Gallery Two</Link>
                                        </li>
                                        <li><Link href="/services">Services Page</Link>
                                        </li>
                                        <li><Link href="/single-services">Services Details</Link>
                                        </li>
                                        <li><Link href="/about">About Page</Link>
                                        </li>
                                        <li><Link href="/team">Team</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub"><Link href="/blog">Blog</Link>
                                    <ul>
                                        <li><Link href="/blog-one">Blog One</Link>
                                        </li>
                                        <li><Link href="/blog-two">Blog Two</Link>
                                        </li> 
                                        <li><Link href="/single-blog">Blog Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub"><Link href="/shop">Shop</Link>
                                    <ul>
                                        <li><Link href="/shop">Shop</Link>
                                        </li>
                                        <li><Link href="/single-shop">Shop Details</Link></li>                                    
                                        <li><Link href="/cart">Shop Cart</Link></li>                                    
                                        <li><Link href="/checkout">Checkout</Link></li>                                    
                                    </ul>
                                </li>
                                <li><Link href="/contact">Contact</Link>
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
                <div className="header_cart">
                    <ul>
                        <li className="header_search">
                            <a href="#" onClick={() => triggerSearch()} className="cart-toggler search_icon"><i className="icon-glyph-16"></i></a>
 
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
                            <a href="/cart"><i className="icon-glyph-13"></i><span className="number_cart">0</span></a>
                        </li>
                    </ul>
                </div>
                 {/* End: Cart  */}
 
        </div>
        {/* container */} 
    </div>
    {/* End: header navigation */}

 
</div>
 
    );
  } 
  
 
export default Menu;