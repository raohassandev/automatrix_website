import React,{Component, Fragment} from 'react';
import Link from 'next/link';
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import BlogSidebar from '../components/BlogSidebar'; 

class BlogPageOne extends Component{

    state = {
        heading: 'Latest news',
        subHeading: 'articles & tips',
    } 

    render(){

        const blogListArray = [
            {
                id:1,
                image:'blog4.jpg',
                commentCount:'0 comments',
                date:'6 Nov 2019', 
                title:'How to Find and Afford Organic Food in Your Area', 
                postExcerpt:'Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.', 
                link: 'single-blog',
            },
             {
                id:2,
                image:'blog5.jpg',
                commentCount:'0 comments',
                date:'6 Nov 2019', 
                title:'How to Find and Afford Organic Food in Your Area', 
                postExcerpt:'Conventional farming methods expose produce to chemicals in the form of pesticides, fertilisers, and preser vatives. While these greatly improve productivity, they can be very harmful to human beings, and in large amou nts even cause irreversible damage. Organic food on the other hand, is produced through traditional farming methods, without the use of any artificial compounds or preservatives, making it far safer for human consump tion human beings, and in large amou nts even cause irreversible.', 
                link: 'single-blog',
            },
        ]
    

        const blogListtMap = blogListArray.map((valu, i) => {
            return(
                <div className="col-sm-12" key={i}> 
                    <div className="blog_wrp">
                        <Link href={`/${valu.link}`}>
                            <a className="blog_img">
                                <img src={`assets/images/${valu.image}`} alt="" />
                            </a>
                        </Link>
                        <div className="blog_info">
                            <div className="blog_date"> 
                                <span><i className="fa fa-comment-o"></i>{valu.commentCount} </span>
                                <span> <i className="fa fa-calendar"></i>{valu.date}</span>
                            </div>
                            <Link href={`/${valu.link}`}>
                                <h4>{valu.title}</h4> 
                            </Link> 
                            <p>{valu.postExcerpt}</p> 
                            <Link href={`/${valu.link}`}>
                                <a className="more-link">
                                    Read more 
                                </a> 
                            </Link> 
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
        <div className="blog-page-two">
            <div className="blog_container">
	            <div className="container"> 
	                <div className="row">     

                        <div className="col-md-9 col-sm-12 blog-area">
                            <div className="row">

                                {/* Blog Item */}
                                {blogListtMap} 
         

                                {/* Blog Pagination */}
                                <div className="prodt_pagination">
                                    <ul>
                                        <li><a href="/blog" className="page_number current">1</a></li>
                                        <li><a href="/blog" className="page_number">2</a></li>
                                        <li><a href="/blog" className="page_number">→</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Blog Area */}


                        {/*  Widget Area */} 
                        
                        <BlogSidebar />
 
                        {/* End: Widget Area */} 

	                </div> 
	            </div> 
	        </div>
        </div>
        </LayoutOne>
      </Fragment>
        
        )

    }
}

 
export default BlogPageOne;