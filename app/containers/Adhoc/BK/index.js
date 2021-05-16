import React from 'react';
import './style.scss';
import Gallery from '../../../components/Adhoc/Gallery';
import titleImg from '../../../images/Adhoc/BKheader.jpg';
import logo from '../../../images/Adhoc/bk.png';

export default function BK() {
  return (
    <div className="bk">
      <div
        className="header"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)) ,url(${titleImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          width: 'auto',
          height: '65vh',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '100%/25%',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      >
        <img
          style={{
            width: '300px',
          }}
          className="header-logo"
          alt="logo"
          src={logo}
        />
      </div>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
          margin: '25px',
        }}
      >
        <strong
          style={{
            color: '#620512',

            fontSize: '36px',
            display: 'flex',
            textAlign: 'center',
            margin: '50px auto 20px auto',
            fontWeight: '900',
          }}
        >
          Balik Kampoeng (BK)
        </strong>
        <p
          style={{
            textAlign: 'center',
            padding: '20px 20px 0 20px',
            fontSize: '18px',
            width: '75%',
          }}
          className="description-text"
        >
          Balik Kampoeng (BK) is a student-led humanitarian arm of the
          Indonesian Students​ Association in NTU, Singapore. BK’s vision is to
          raise social awareness and empathy among students while helping
          underprivileged Indonesians. BK aims to contribute back to Indonesia
          with skills and knowledge acquired through studies in NTU. There are
          three main topics of focus: Education, Healthcare, and Technology.
          Since 2011, BK has continued to bring dedicated and passionate
          students to help various communities in Indonesia.
        </p>

        <p
          style={{
            textAlign: 'center',
            padding: '30px 20px 10px 20px',
            fontSize: '18px',
          }}
        >
          Visit us here!
        </p>

        <div className="social-media">
          <a href="https://www.instagram.com/balik.kampoeng/" target="_blank">
            <i className="fab fa-instagram" />
          </a>
          <a href=" https://www.facebook.com/blk.kampoeng/" target="_blank">
            <i className="fab fa-facebook-square" />
          </a>
          {/* BK gapunya website :( */}
          {/* <a href="https://www.instagram.com/pintugram/">
            <i className="fas fa-globe-americas" />
          </a> */}
        </div>
        <div>
          <Gallery type="bk" />
        </div>
      </div>
    </div>
  );
}
