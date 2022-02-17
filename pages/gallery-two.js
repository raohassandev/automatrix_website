import React , {Component, Fragment } from 'react';  
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import Link from 'next/link'

class GalleryTwo extends Component{

    render(){

	    const galleryListArray = [
	        {
	            id: 1,
	            image:'work-1.jpg',
	            title:'Native Orange',
	            category:'vegetable',  
	        },
 	        {
              id: 2,
	            image:'work-2.jpg',
	            title:'Juicy Grapes',
	            category:'vegetable',  
	        },
	        {
              id: 3,
	            image:'work-4.jpg',
	            title:'Fresh Banana',
	            category:'vegetable',  
	        },
 	        {
              id: 4,
	            image:'work-3.jpg',
	            title:'Red Watermelon',
	            category:'vegetable',  
	        },
	        {
              id: 5,
	            image:'work-4.jpg',
	            title:'Juicy Grapes',
	            category:'vegetable',  
	        },
 	        {
              id: 6,
	            image:'work-5.jpg',
	            title:'Fresh Banana',
	            category:'vegetable',  
	        },
	    ]

	    const galleryListtMap = galleryListArray.map((valu, i) => {
	        return(
 
          <div className="col-md-4 col-sm-12 web graphics" key={i}>
              <div className="single-project-item" style={{ backgroundImage: `url(assets/images/${valu.image})` }}>
                  <div className="project-hover">
                      <div className="project_cnt"> 
                          <h6>
                            <Link href="/single-shop">
                            {valu.title}
                            </Link>
                          </h6>
                          <Link href="/single-shop"> 
                            <span> category : {valu.category} </span> 
                          </Link>
                      </div>
                  </div>
              </div>
          </div>  
  
	        )
	    });

    	return( 
		      <Fragment> 
            <LayoutOne> 

              <Breadcrumb 
              bgImg={('/assets/images/header.jpg')}
              title="Our Gallery" 
              /> 
                <div className="work-page-two">  
                  <section className="work-section">
                      <div className="container">
                          {/* Heading */}
                          <div className="base-header">
                              <small>Our Latest Work</small>
                              <h3> Special Gallery </h3>
                          </div>
                          {/* End: Heading */}

                          <div className="row projects-list">  

                              {galleryListtMap}

                          </div> 
                      </div> 
                  </section> 
                </div>
              {/*==================== End : Work Section ====================*/}  

            </LayoutOne>
          </Fragment>
        )
    }
}

export default GalleryTwo;


