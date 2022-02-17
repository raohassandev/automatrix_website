import React, {Component} from 'react';
import Link from 'next/link'
import Swiper from 'react-id-swiper';
// import '../node_modules/swiper/css/swiper.css';

class Slides extends Component{

    render(){

        let slideImages = [
            {
                img:'slider1.jpg',
                smallTitle: 'Professional Cleaning Services',
                title:"A huge variety fruits & vegetables.",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
            {
                img:'slider2.jpg',
                smallTitle:"Professional Cleaning Services",
                title:"A huge variety fruits & vegetables.",
				description:"As quas equidem noluisse et, ex pro semper fierent oporteat. Te epic urei ullam corper usu, eos et voluptaria rationibus. Usu cu eligendi ad ipisci sed  altera dae reformidans ea, inermis ration ibus necessitatibus eu eum.",
            },
        ];

		const properties = {
			slidesPerView : 1,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
			effect: 'slide',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true
			},
            navigation: {
                nextEl: '.st-swiper-button-next',
                prevEl: '.st-swiper-button-prev'
            },
            renderPrevButton: () => (
                <div className="st-swiper-button-prev st-swiper-button-nav d-none d-xl-block"><i className="icon-glyph-205" /></div>
              ),
              renderNextButton: () => (
                <div className="st-swiper-button-next st-swiper-button-nav d-none d-xl-block"><i className="icon-glyph-204" /></div>
              ),
            autoplay: {
                delay: 5000,
            }
		}
	 
        let ImageGalleryDataList = slideImages.map((val, i) => {
            return(
	            <div className="single_slider slide_bg_1" style={{'backgroundImage': `url(assets/images/${val.img})`}} key={i}> 
		            <div className="slider_item_tb">
			            <div className="slider_item_tbcell">
				            <div className="container">
					            <div className="row">
						            <div className="col-lg-6 col-sm-12">
									  <h5>{val.smallTitle}</h5> 
						              <h2>{val.title}</h2>
						              <p>{val.description}</p>
						              <div className="slider_btn animated fadeInDown">
                                        <Link href="/contact">
											<a className="slider_btn_one more-link ">
												Contact Us
											</a>
										</Link>
                                      </div>
						            </div>
					            </div>
				            </div>
			            </div>
		            </div>
		        </div>
            )
        });

	    return ( 
	    <div className="slides_wrapper">
			<div className="slider_home">
		        <Swiper {...properties}>

		            {ImageGalleryDataList}

		        </Swiper>
			</div>
	    </div> 
	    );
	    
	}
}

export default Slides;


