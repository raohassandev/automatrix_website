import React , {Component, Fragment } from 'react'; 
import Link from 'next/link'
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";

class Services extends Component{

    render(){

	    const serviceListArray = [
	        {
				id: 1,
	            image:'service_1.jpg',
	            title:'Fresh Fruits',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	         {
				id: 2,
	            image:'service_2.jpg',
	            title:'Fresh Vegetable',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	        {
				id: 3,
	            image:'service_3.jpg',
	            title:'Natural Wheats',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	        {
				id: 4,
	            image:'service_1.jpg',
	            title:'Fresh Fruits',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	         {
				id: 5,
	            image:'service_2.jpg',
	            title:'Fresh Vegetable',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	        {
				id: 6,
	            image:'service_3.jpg',
	            title:'Natural Wheats',
	            description:'Organically grown crops tend use natural fertilizers like manure to improve growth to plant . Animals raised organically are', 
	            link:'single-services',
	        },
	    ]

	    const serviceListtMap = serviceListArray.map((valu, i) => {
	        return(
	            <div className="col-md-4 col-sm-12" key={i}> 
	                <div className="service-item">
	                    <div className="img_serv"> 
						<Link href={`/service/${valu.id}`}> 
							<img src={`assets/images/${valu.image}`} alt="service" />
						</Link>
	                    </div>
	                    <div className="service_text">
							<Link href={`/service/${valu.id}`}>
								<h4>{valu.title}</h4>
							</Link>
	                        <p>{valu.description}</p>
	                    </div>  
	                    <a href={`/service/${valu.id}`} className="serv_link"><i className="icon-glyph-40"></i></a>
	                </div>
	            </div>                
	        )
	    });

    	return(

		<Fragment>
        <LayoutOne>

          <Breadcrumb 
            bgImg={('/assets/images/header.jpg')}
            title="Our Services" 
          /> 

          <div className="service-page">
		        <section className="service-section">
		            <div className="animate_icon">
		                <div className="animate_item animate_item1 bounce_animate">
		                    <img src="assets/images/animate_icon1.png" alt="" />
		                </div>
		                <div className="animate_item animate_item2 bounce_animate">
		                    <img src="assets/images/animate_icon2.png" alt="" />
		                </div>
		                <div className="animate_item animate_item3 bounce_animate">
		                    <img src="assets/images/animate_icon3.png" alt="" />
		                </div>
		                <div className="animate_item animate_item4 bounce_animate">
		                    <img src="assets/images/animate_icon4.png" alt="" />
		                </div>
		            </div>
		            <div className="container"> 
		                {/* Heading */}
		                 <div className="base-header">
		                    <small>What We Offer</small>
		                    <h3>Service we offer</h3>
		                 </div>  
		                {/* End: Heading */}

		                <div className="row">
		                    {serviceListtMap}
		                </div> 
		                
		            </div> 
		        </section> 
			    </div>
          {/*==================== End : Service Section ====================*/}  

        </LayoutOne>
      </Fragment>

        )
    }
}

export default Services;


