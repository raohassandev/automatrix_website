import { CONTACT } from "../helpers/products";

export const ContactDetailsBox = (
  <div className='col-md-12 col-sm-12 col-lg-4'>
    <div className='contact_pg_address'>
      <h3>
        Hello there <br />
        got a project?
      </h3>
      <div className='single_con_add'>
        <a href='#/'>
          <i className='icon-glyph-226'></i>
        </a>
        <p>
          <span>Company Address :</span>
        </p>
        <p>
          <span>{CONTACT.address}</span>
        </p>
      </div>
      <div className='single_con_add'>
        <a href={`mailto:${CONTACT.email}`}>
          <i className='icon-glyph-334'></i>

          <p style={{ marginTop: '-40px', paddingLeft: '10px' }}>
            <span>Email Address :</span>
          </p>
          <p style={{ paddingLeft: '10px', paddingRight: '-50px', overflow: 'wrap' }}>
            <span>{CONTACT.email}</span>
          </p>
        </a>
      </div>
      <div className='single_con_add'>
        <a href={`tel:${CONTACT.phone}`}>
          <i className='icon-glyph-33'></i>
          <p style={{ marginTop: '-40px', paddingLeft: '10px' }}>
            <span>Contact Us :</span>
          </p>
          <p style={{ paddingLeft: '10px' }}>
            <span>{CONTACT.phone}</span>
          </p>
        </a>
      </div>
    </div>
  </div>
);
