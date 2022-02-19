import React, { Component, Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ServiceSidebar from "../components/ServiceSidebar";
import { useRouter } from "next/router";
import { getBottomArray } from "../helpers/getProduct";

const SingleService = () => {
  const router = useRouter();
  const { name, title,type, image, bgImg, desPartOne, desPartTwo} = router.query;


  const serviceTopArray = [
    {
      image,
      title,
      desPartOne,
      desPartTwo,
    },
  ];

//   const serviceBottomArray = [
//     {
//       image: "process_3.png",
//       title: "Fresh Vegetable",
//       des: "Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",
//     },
//     {
//       image: "process_4.png",
//       title: "Fresh Fruits",
//       des: "Experienced staff read nal Experienced sto help you full Prond Experienced eaelp you help anytime you",
//     },
//   ];
    
    const serviceBottomArray = getBottomArray(type, title)
    // const serviceBottomArray = bottomArray;

  const serviceToptMap = serviceTopArray.map((val, i) => {
    return (
      <div className="single_service_left" key={i}>
        <img src={`assets/images/${val.image}`} alt="" className="container-fluid" />
        <h4>{val.title}</h4>
        <p className="h5">{val.desPartOne}</p>
        <p>{val.desPartTwo}</p>
      </div>
    );
  });

  const serviceBottomtMap = serviceBottomArray.map((val, i) => {
    return (
      <div className="col-md-6 col-sm-12" key={i}>
        <div className="sing_service_item">
          <div className="icon-serv">
            <img src={`assets/images/${val.image}`} alt="" />
          </div>
          <h4>{val.name}</h4>
          <p>{val.miniDes}</p>
        </div>
      </div>
    );
  });

  return (
    <Fragment>
      <LayoutOne>
        <Breadcrumb
          // bgImg={('/assets/images/header.jpg')}
          bgImg={`assets/images/${bgImg}`}
          title={name}
        />

        <div className="single-services-page">
          {/*====================  Single Services area ====================*/}
          <div className="single_service">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  {serviceToptMap}

                  <div className="row single_service_left_botom">{serviceBottomtMap}</div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <ServiceSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default SingleService;
