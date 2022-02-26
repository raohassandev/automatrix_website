import React from "react";

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
      <div className="d-flex justify-content-center col-md-12 col-sm-6">
        <img className="img-responsive" src="assets/images/logo.jpeg" alt="" style={{ width: 250 }} />
        <h1 className="text-muted">are accredited by...</h1>
      </div>
      <div className="col-xs-1" align="center">
        {accreditBy.map((c) => (
          <img src={`assets/images/${c}`} alt="image" style={{ width: 150 }} className="col" />
        ))}
      </div>
    </div>
  );
};

export default Creditors;
