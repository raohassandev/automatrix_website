import React, { Component } from 'react';
import { amxImages, images } from '../public/assets/images';

import Link from 'next/link';
import Swiper from 'react-id-swiper';

// import '../node_modules/swiper/css/swiper.css';

class Slides extends Component {
  render() {
    // let slideImages = [
    //   {
    //     // img: "windows-tab.jpeg",
    //     img: images.windows.aluminium.withBlind,
    //     // smallTitle: "Professional Cleaning Services",
    //     title: 'Windows',
    //     description:
    //       'If you are looking for high quality windows that not only enhance the visual appeal of your home but also provide comprehensive protection, look no further than our extensive selection…',
    //   },
    //   {
    //     // img: 'doors-tab.jpeg',
    //     img: images.doors.bifold.outer,
    //     // smallTitle: "Professional Cleaning Services",
    //     title: 'Doors',
    //     description:
    //       'Our range of doors are available in a variety of styles, colours and finishes, ensuring a door that will perfectly complement your home whilst also completely increasing your security…',
    //   },
    //   {
    //     img: 'conservatories-tab.jpeg',
    //     // smallTitle: "Professional Cleaning Services",
    //     title: 'Conservatories',
    //     description:
    //       'Our beautifully designed conservatories will completely enhance your property, both practically and visually, instantly adding value and providing extra living space…',
    //   },
    // ];
    let amxImageSlide = [
      {
        img: amxImages.services,
        title: '',
        description: '',
      },
      {
        img: amxImages.pv_dg,
        title: '',
        description: '',
      },
      {
        img: amxImages.scada,
        title: '',
        description: '',
      },
      {
        img: amxImages.ems,
        title: '',
        description: '',
      },
      {
        img: amxImages.synch,
        title: '',
        description: '',
      },
    ];

    const properties = {
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      watchSlidesVisibility: true,
      effect: 'slide',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.st-swiper-button-next',
        prevEl: '.st-swiper-button-prev',
      },
      renderPrevButton: () => (
        <div className='st-swiper-button-prev st-swiper-button-nav d-none d-xl-block'>
          <i className='icon-glyph-205' />
        </div>
      ),
      renderNextButton: () => (
        <div className='st-swiper-button-next st-swiper-button-nav d-none d-xl-block'>
          <i className='icon-glyph-204' />
        </div>
      ),
      autoplay: {
        delay: 1000,
      },
    };

    // let ImageGalleryDataList = slideImages.map((val, i) => {
    //   return (
    //     <div
    //       className='single_slider slide_bg_1'
    //       style={{ backgroundImage: `url(assets/images/${val.img})` }}
    //       key={i}
    //     >
    //       <div className='slider_item_tb'>
    //         <div className='slider_item_tbcell'>
    //           <div className='container'>
    //             <div className='row'>
    //               <div className='col-lg-6 col-sm-12'>
    //                 <h5>{val.smallTitle}</h5>
    //                 <h2>{val.title}</h2>
    //                 <p>{val.description}</p>
    //                 <div className='slider_btn animated fadeInDown'>
    //                   <Link href='/contact'>
    //                     <a className='slider_btn_one more-link '>Contact Us</a>
    //                   </Link>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // });

    let amxImageGalleryDataList = amxImageSlide.map((val, i) => {
      return (
        <div
          className='single_slider slide_bg_1'
          style={{ backgroundImage: `url(assets/images/amx/${val.img})` }}
          key={i}
        >
          <div className='slider_item_tb'>
            <div className='slider_item_tbcell'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-6 col-sm-12'>
                    <h5>{val.smallTitle}</h5>
                    <h2>{val.title}</h2>
                    <p>{val.description}</p>
                    <div className='slider_btn animated fadeInDown'>
                      {/* <Link href='/contact'>
                        <a className='slider_btn_one more-link '>Contact Us</a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='slides_wrapper'>
        <div className='slider_home'>
          <Swiper {...properties}>{amxImageGalleryDataList}</Swiper>
        </div>
      </div>
    );
  }
}

export default Slides;
