import React, { Component, Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ServiceSidebar from "../components/ServiceSidebar";
import { useRouter } from "next/router";
import { getBottomArray } from "../helpers/getProduct";
import windowsBottomArray from "../components/windowsBottomArray";

const data = {
  name: "Windows",
  image: "windows.jpeg",
  bgImage: "windows-tab.jpeg",
  title: "Double Glazed Windows in Croydon & Surrey",
  miniDes: "",
  desPartOne:
    "If you are looking for double glazed windows, look no further than Windows Direct! As a comprehensive supplier of an extensive range of windows, our selection includes a host of different styles, designs and finishes. This means that whatever your requirements, we will have the ideal windows for you and can ensure a finished result which beautifully complements, and enhances, the visual appeal of your property.",
  desPartTwo:
    "All of our products are tailored to your specifications, however unique they may be, and because we manufacture all of our products ourselves, you can even see your new windows being made! Whether you require a full set of new windows or simply a couple of replacement windows, our team work closely with you to establish your needs, tastes and budget and then provide a solution which accurately reflects these criteria.\nOur dedicated team of fully trained and highly skilled technicians perform installations of the highest quality and, as all of our products carry a 10 year insurance-backed guarantee as standard, you can rest assured of double glazed windows that will last for years to come.\nSo have a look at our different styles of windows today and give us a call at Windows Direct to discuss your requirements with a member of our highly experienced team or visit our showroom in Croydon.",
};

const windows = () => {
  const router = useRouter();
  const { name, title, type, image, bgImg, desPartOne, desPartTwo } = router.query;

  const serviceBottomArray = getBottomArray(type, title);
  // const serviceBottomArray = bottomArray;

  const serviceToptMap = () => {
    return (
      <div className="single_service_left">
        <img src={`assets/images/${data.image}`} alt="" className="container-fluid" />
        <h4>{data.title}</h4>
        <p className="h5">{data.desPartOne}</p>
        <p>{data.desPartTwo}</p>
      </div>
    );
  };

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
          bgImg={`assets/images/${data.bgImage}`}
          title={name}
        />

        <div className="single-services-page">
          {/*====================  Single Services area ====================*/}
          <div className="single_service">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  {serviceToptMap()}
                  {/* <div className="row single_service_left_botom">{serviceBottomtMap}</div> */}
                  {/* <windowsBottomArray /> */}
                </div>

                <div className="col-md-4 col-sm-12">
                  <ServiceSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" container">{windowsBottomArray()}</div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default windows;
