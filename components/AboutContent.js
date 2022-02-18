import React from "react"; 

const AboutContent = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about_img">
              <img  src="assets/images/conservatories.jpeg" alt="about" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about_item_tb">
              <div className="about_item_tbcell">
                <div className="base-header base_header_left">
                  <small>Welcome To Supreme Windows London</small>
                  <h3>Windows, Doors and Conservatories</h3>
                </div>
                <div className="about_item">
                  <h4>Natural Products</h4>
                  <p>
                    If you are looking for a professional, reliable double glazing company, then look no further than
                    the experts at Windows Direct. We're specialists in the manufacture, supply and installation of
                    beautifully designed windows, doors and conservatories, and our comprehensive 10 year
                    insurance-backed guarantee grants you complete confidence that our products will provide years of
                    trouble-free use.
                  </p>
                  <p>
                    Our windows, doors and conservatories are offered in an extensive range of styles, designs, colours
                    and finishes, meaning that we have something perfect for every application. Whatever your
                    requirements, tastes and budget, you can be sure of a result which accurately meets your
                    specifications when you call upon our assistance, and we work closely with you from your initial
                    enquiry through to completion to ensure this. Simply call the highly skilled and experienced team at
                    Windows Direct today for more information!
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*about_wrp*/}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default AboutContent;
