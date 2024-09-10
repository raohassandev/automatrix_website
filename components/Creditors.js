import React, {useEffect, useState} from "react";

const Creditors = () => {


  const accreditBy = [
    "schuco.png",
    "rehau.png",
    "censolutions.jpeg",
    "fensa.png",
    "pilkington.png",
    "censolutions2.png",
    "british-enestraltion.jpeg",
    "aluplast.png",
  ];
  
  return (
    <div className="center-block m-5">
      {/* <div className={`${isMobile ? "col" : "d-flex justify-content-center"}`}> */}
      <div className= "d-flex justify-content-center">
        <img className="img-responsive" src="assets/images/logo.jpeg" alt="" />
        <h1 className="text-muted">are accredited by...</h1>
      </div>
      <div className="col-xs-1" align="center">
        {accreditBy.map((c, index) => (
          <img src={`assets/images/${c}`} alt="image" style={{ width: 150 }} className="col" key={index} />
        ))}
      </div>
    </div>
  );
};

export default Creditors;
