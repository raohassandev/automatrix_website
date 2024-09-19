import { CONTACT } from '../helpers/products';

const bcPrimary = { color: '#FF5001' }; //brand color primary
const bcSecondary = { color: '#6882f2' };
const label = { ...bcSecondary };
const content = { ...bcPrimary, marginLeft: 0, fontWeight: '300' };

export const ContactDetailsBox = (
  <div className='col-md-12 col-sm-12 col-lg-4 '>
    <div className='contact_pg_address mt-4 '>
      <h3 className='subTitle'>
        Hello there <br />
        got a project?
      </h3>
      <div className='single_con_add'>
        <a href='#/'>
          <i className='icon-glyph-226' style={bcPrimary}></i>
        </a>
        <p>
          <span style={label}>Company Address :</span>
        </p>
        <p>
          <span style={content}>{CONTACT.address}</span>
        </p>
      </div>
      <div className='single_con_add'>
        <a href={`mailto:${CONTACT.email}`}>
          <i className='icon-glyph-334' style={bcPrimary}></i>

          <p style={{ marginTop: '-40px', paddingLeft: '10px' }}>
            <span style={label}>Email Address :</span>
          </p>
          <p
            style={{
              paddingLeft: '10px',
              paddingRight: '-50px',
              overflow: 'wrap',
            }}
          >
            <span style={content}>{CONTACT.email}</span>
          </p>
        </a>
      </div>
      <div className='single_con_add'>
        <a href={`tel:${CONTACT.phone}`}>
          <i className='icon-glyph-33' style={bcPrimary}></i>
          <p style={{ marginTop: '-40px', paddingLeft: '10px' }}>
            <span style={label}>Call Us :</span>
          </p>
          <p style={{ paddingLeft: '10px' }}>
            <span style={content}>{CONTACT.phone}</span>
          </p>
        </a>
      </div>
      <div className='single_con_add'>
        <a href={`https://wa.me/923111646640`}>
          <i className='fa fa-whatsapp' style={bcPrimary}></i>
          <p style={{ marginTop: '-50px', paddingLeft: '10px' }}>
            <span style={label}>Whatsapp :</span>
          </p>
          <p style={{ paddingLeft: '10px' }}>
            <strong style={{ ...content, marginLeft: 45 }}>
              {CONTACT.phone}
            </strong>
          </p>
        </a>
      </div>
    </div>
  </div>
);
