import React from "react";
import Link from 'next/link'

const PageHeader = ({ title,bgImg }) => {
  return ( 
 
    <header id="page-top" className="blog-banner" style={{backgroundImage: `url(${bgImg})`}}> 
        <div className="container" id="blog">
            <div className="row blog-header text-center">
                <div className="col-sm-12">  
                    <h3>{title}</h3>
                    <h4><Link href={"/"}> Home </Link> &gt;  {title} </h4>
                </div>
            </div>
        </div>  
    </header> 
    
  );
};
 
export default PageHeader;

 