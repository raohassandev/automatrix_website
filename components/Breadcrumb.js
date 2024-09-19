import Link from 'next/link';
import React from 'react';

// import React from "react";

// const PageHeader = ({ title,bgImg }) => {
//   return (

//     <header id="page-top" className="blog-banner" style={{backgroundImage: `url(${bgImg})`, maxWidth: '100%', height: 850, objectFit:'cover'}}>
//         <div className="container" id="blog">
//             <div className="row blog-header text-center">
//                 <div className="col-sm-12">
//                     <h3>{title}</h3>
//                     {/* <h4><Link href={"/"}> Home </Link> &gt;  {title} </h4> */}
//                 </div>
//             </div>
//         </div>
//     </header>

//   );
// };

// export default PageHeader;
// Breadcrumb.js

// const Breadcrumb = ({ bgImg, title }) => {
//   return (
//     <div className='breadcrumb-area'>
//       {/* ///style={{ backgroundImage: `url(${bgImg})` }} */}
//       <div className='container p-0'>
//         <div className='row '>
//           <div className='col-lg-12 col-md-12'>
//             <img
//               src={bgImg}
//               alt='Breadcrumb Image'
//               style={{ maxWidth: '100%', height: 'auto' }}
//             />
//             <h3 className='breadcrumb-title'>{title}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Breadcrumb;

const Breadcrumb = ({ bgImg, title }) => {
  return (
    <img
      src={bgImg}
      alt='Breadcrumb Image'
      // style={{ maxWidth: '100%', height: 'auto' }}
      className='img-fluid'
    />
  );
};

export default Breadcrumb;
