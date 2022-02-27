import React, {useEffect, useState} from "react";

const Creditors = () => {

 const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

 {
   /* Performs similarly to componentDidMount in classes */
 }
 useEffect(() => {
   window.addEventListener(
     "resize",
     () => {
       const ismobile = window.innerWidth < 1200;
       if (ismobile !== isMobile) setIsMobile(ismobile);
     },
     false
   );
 }, [isMobile]);

  const className = isMobile ? "col" : "d-flex justify-content-center";

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
  
  console.log(className)
  return (
    <div className="center-block m-5">
      <div className={className}>
        <img className="img-responsive" src="assets/images/logo.jpeg" alt="" />
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
