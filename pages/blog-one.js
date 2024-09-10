import React,{Component, Fragment} from 'react';
import Link from 'next/link';
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";


class BlogPageOne extends Component{

    state = {
        heading: 'Latest news',
        subHeading: 'articles & tips',
    } 

    render(){

    const blogListArray = [
        {
            id: 1,
            image:'blog1.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            id: 2,
            image:'blog2.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            id: 3,
            image:'blog3.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            id: 4,
            image:'blog2.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            id: 5,
            image:'blog3.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
        {
            id: 6,
            image:'blog1.jpg',
            title:'How to Find and Afford Organic Food in Your Area',
            date:'6 Nov 2019', 
            link: 'single-blog',
        },
    ]

 

    const blogListtMap = blogListArray.map((valu, i) => {
        return(
            <div className="col-md-4 col-sm-12" key={i}> 
                <div className="blog_wrp">
                    <Link href={`/blog/${valu.id}`}>
                      <a className="blog_img"> 
                          <img src={`assets/images/${valu.image}`} alt="" />
                      </a>
                    </Link>
                    <div className="blog_info">
                        <Link href={`/blog/${valu.id}`}>
                            <h4>{valu.title}</h4> 
                        </Link> 
                        <div className="blog_date"> 
                            <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                        </div>
                        <span className="blog_read">
                            <Link href={`/blog/${valu.id}`}>Read more </Link><i className="icon-right-open"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    });


    return(
    <Fragment>
        <LayoutOne pageTitle="Aidiex - Business React Next Template"> 

        <Breadcrumb 
          bgImg={('/assets/images/header.jpg')}
          title="Our Blog" 
        /> 

	      <div className="blog-page-one">
  
	        <section className="blog-section">
	            <div className="container">
	                <div className="base-header">
	                    <small>{this.state.subHeading} </small>  
	                    <h3>{this.state.heading}</h3> 
	                </div>
	                <div className="row">     

	                  {blogListtMap} 

						        <div className="prodt_pagination">
		                    <ul>
		                        <li><a href="/blog" className="page_number current">1</a></li>
		                        <li><a href="/blog" className="page_number">2</a></li>
		                        <li><a href="/blog" className="page_number">→</a></li>
		                    </ul>
		                </div>
	                </div> 
	            </div> 
	        </section>

		    </div> 

        </LayoutOne>
      </Fragment>
        
        )

    }
}

 
export default BlogPageOne;