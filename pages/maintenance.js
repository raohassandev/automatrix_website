import React, { Fragment } from "react";
import LayoutOne from "../layouts/LayoutOne";
import Breadcrumb from "../components/Breadcrumb";
import ServiceSidebar from "../components/ServiceSidebar";

const Maintenance = () => {
  return (
    <Fragment>
      <LayoutOne>
        {/* <Breadcrumb
          // bgImg={('/assets/images/header.jpg')}
          bgImg={`assets/images/maintenance.png`}
          title="temp"
        /> */}

        <div className="container-fluid display-1 justify-content-center d-flex">Maintenance, Tips & FAQ's</div>

        <div className="single-services-page">
          {/*====================  Single Services area ====================*/}
          <div className="single_service">
            <div className="container">
              <h2>Security</h2>
              <p>Prevention is better than cure</p>
              <p>
                Your double glazed windows and doors have been specifically designed to include a variety of security
                features to protect your home and family against intrusion.
              </p>
              <p>However, we recommend taking sensible precautions at all times.</p>

              <div className="h3">
                <li>Never leave a window open when your home is unattended.</li>
              </div>
              <div className="h3">
                <li>
                  Lock all windows in the closed position and remove the keys, keeping them out of external view, but
                  readily accessible for emergencies.
                </li>
              </div>
              <div className="h3">
                <li>
                  When leaving the house unattended, or at night, ensure door handles are fully lifted and that the keys
                  are turned, to throw and lock all deadbolts for security.
                </li>
              </div>
              <h2>Maintenance</h2>
              <h4 className="text-muted">Glass Cleaning</h4>
              <p>
                Float glass, used in most double glazed units, is easily scratched and it is therefore recommended that
                hand jewellery is removed prior to cleaning.
              </p>
              <p>
                Any proprietary household glass cleaner may be used with a soft cloth and it is recommended that heavy
                external grime be initially removed with a solution of soap and water.
              </p>
              <h4 className="text-muted">Leaded Glass Cleaning</h4>
              <p>
                In this type of double-glazing, lead strips are bonded to the inside and/or outside of the outer pane of
                the unit in a variety of patterns.
              </p>
              <p>Note: external lead will oxidise. This is a natural phenomenon and cannot be avoided.</p>
              <p>
                Take care when cleaning leaded lights as excessive pressure might dislodge the lead from the glass
                surface.
              </p>
              <p>
                The use of warm soapy water and a soft cloth, moderately applied, will prove an adequate cleaning
                method.
              </p>
              <h4 className="text-muted">Scratched Glass</h4>
              <p>If scratches occur, most can be removed with jewellers rouge, or an equivalent rubbing compound.</p>
              <h4 className="text-muted">PVC-U Frame Cleaning</h4>
              <h4>Note: Avoid all solvent based or abrasive cleaners</h4>

              <p>
                Wash frames with a soap and water solution, periodically as required, to remove any grime and
                atmospheric deposits.
              </p>
              <p>
                If required clean with a non-abrasive proprietary cleaner, suitable for plastics, using a soft cloth.
              </p>
              <h4>Take care not to disturb sealant.</h4>
              <h4 className="text-muted">Conservatory & Porch Roof Cleaning</h4>
              <p>
                Polycarbonate roofing panels fitted to these structures must be cleaned in a similar manner to PVC-U
                frames. Clean gutters of leaves and debris as required, to avoid overflow of rainwater and ensure
                unobstructed drainage.
              </p>
              <h4>Note: Avoid all solvent based or abrasive cleaners</h4>
              <p>
                Wash roof panels with a soap and water solution, every four months, to remove grime and atmospheric
                deposits.
              </p>
              <h4>Do not walk on conservatory roofs.</h4>
              <h4 className="text-muted">Drainage</h4>
              <p>
                Your double glazed products are designed with an in-built drainage system, comprising slots within the
                thresholds that allow any water ingress to flow to the outside. To ensure an efficient system these
                slots must remain unblocked.
              </p>
              <p>
                Periodically, remove dirt, clear drain holds and check drainage operation by flushing through with
                water.
              </p>
              <h4 className="text-muted">Silicone</h4>
              <p>Please note that some discoloration of the silicone is a natural occurrence and cannot be avoided.</p>
              <h4 className="text-muted">Lubrication</h4>
              <p>
                For lubrication of hardware etc., use light machine oil (e.g. 3 in 1 or WD40) lubricant for moving parts
                and petroleum jelly where indicated in the specific product lubrication instruction.
              </p>
              <h4>Condensation</h4>
              <p>
                In general climatic conditions water vapour is continually present in the atmosphere. In the home this
                natural water content is increased by normal living activities that create steam, such as cooking,
                breathing, washing, boiling a kettle etc., plus the basic activity of breathing. The water vapour
                remains undetectable while floating in warm air; but upon contact with cold surfaces, windows, mirrors,
                tiles etc., condensation occurs and the vapour turns to water droplets.
              </p>
              <p>Fitting double glazing does not necessarily solve underlying condensation problems.</p>
              <p>
                Traditional house construction allowed the escape of this water vapour through natural ventilation -
                open flues of coal fires, air bricks and ill-fitting windows and doors. The drive to conserve energy and
                reduce heating costs has led to the sealing of homes, resulting in trapped water vapour and the
                increased problems of condensation.
              </p>
              <h4 className="text-muted">Ventilation</h4>
              <p>Provide natural ventilation whenever possible by:</p>
              <div>
                <li>Opening a window</li>
              </div>
              <div>
                <li>Fitting a ventilator/extraction unit in the kitchen and bathroom.</li>
              </div>
              <div>
                <li>Fitting wall vents to provide air flow.</li>
              </div>
              <h4>NB: Security should be borne in mind when leaving open an easily accessible window.</h4>
              <h4 className="text-muted">Heating</h4>
              <p>
                Maintain some permanent heat in the house during cold weather. Marginally increase the temperature in
                areas where condensation is a particular problem.
              </p>
              <h4 className="text-muted">Circulation</h4>
              <p>
                Keep internal doors to kitchen and bathroom closed and draught sealed, where possible, to prevent the
                excessively most air in these rooms being transferred to other areas of the house.
              </p>
              <p>
                Bedroom windows should have a night ventilation facility, to provide air movement, and ideally, if
                bedroom doors are closed, a ventilation grille should be installed in or above the door.
              </p>
              <p>
                To ensure airflow in the vicinity of windows, curtains should be a minimum of 150mm (6") away from the
                window, with suitable gaps top and bottom to allow circulation
              </p>
            </div>
          </div>
        </div>
        {/*====================  End Single Services area ====================*/}
      </LayoutOne>
    </Fragment>
  );
};

export default Maintenance;
