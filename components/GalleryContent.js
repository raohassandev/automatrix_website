import React, { Component } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { getServiceList, getProduct } from "../helpers/getProduct";

const data = () => {
  const productsArray = getServiceList();
  const products = productsArray.map((p, index) => {
    const prod = getProduct(p.type, p.key);
    return { img: prod.image, title: prod.title, key: p.key, type: p.type };
  });
  return products;
};
class GalleryContent extends Component {
  render() {
    var settings = {
      autoplay: true,
      autoplaySpeed: 4000,
      dots: false,
      arrows: false,
      infinite: true,
      centerMode: true,
      centerPadding: "200px",
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "80px",
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerPadding: "40px",
            centerMode: false,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            dots: false,
          },
        },
      ],
    };

    let imageGalleryData = data();

    let ImageGalleryDataList = imageGalleryData.map((val, i) => {
      return (
        <div className="col-md-12 swiper-slide service-gallery__single-slide" key={i}>
          <div className="project-item item">
            <div className="project_slide_img item">
              <img src={`assets/images/${val.img}`} alt="product" style={{ height: 250, widows: 300 }} />
            </div>
            <div className="project_text">
              <Link
                href={{
                  pathname: "/single-services",
                  query: getProduct(val.type, val.key),
                }}>
                <h4> {val.title} </h4>
              </Link>
              <Link
                href={{
                  pathname: "/single-services",
                  query: getProduct(val.type, val.key),
                }}>
                <a className="project_link">View details</a>
              </Link>
            </div>
            {/* <div className="project_view">
              <a className="project-link" href="images/work-1.jpg">
                <i className="icon-glyph-26"></i>
              </a>
              <a className="project-link" href="/">
                <i className="icon-glyph-52"></i>
              </a>
            </div> */}
          </div>
        </div>
      );
    });

    return (
      <section className="project-section">
        <div className="container-fluid">
          <div className="project_list_one">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="base-header base_header_left">
                    <small>Our Latest Product</small>
                    <h3> Special Gallery </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_slider_one">
              <Slider {...settings}>{ImageGalleryDataList}</Slider>
            </div>
            <div className="project_btn text-center">
              <Link href="/gallery">
                <a className="more-link"> View More </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GalleryContent;
